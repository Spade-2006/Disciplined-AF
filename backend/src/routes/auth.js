// src/routes/auth.js
const express = require('express');
const router = express.Router();
const db = require('../db');
const { hash, compare } = require('../utils/hash');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

const signToken = (user) =>
  jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });

router.post('/signup', async (req, res) => {
  const { email, password, name, age, weight, height, body_fat_percentage, body_goal } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ 
      error: 'Validation error',
      message: 'Email and password are required' 
    });
  }

  if (password.length < 6) {
    return res.status(400).json({ 
      error: 'Validation error',
      message: 'Password must be at least 6 characters' 
    });
  }

  try {
    const password_hash = await hash(password);
    
    // Insert user with optional body metrics
    const r = await db.query(
      `INSERT INTO users (email, password_hash, name, age, weight, height, body_fat_percentage, body_goal) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
       RETURNING id, email, name, age, weight, height, body_fat_percentage, body_goal, created_at`,
      [
        email.toLowerCase().trim(), 
        password_hash, 
        name?.trim() || null,
        age || null,
        weight || null,
        height || null,
        body_fat_percentage || null,
        body_goal || null
      ]
    );
    
    const user = r.rows[0];
    const token = signToken(user);
    
    res.status(201).json({ 
      user, 
      token,
      message: 'Account created successfully' 
    });
  } catch (e) {
    if (e.code === '23505') {
      return res.status(409).json({ 
        error: 'Email already exists',
        message: 'An account with this email already exists' 
      });
    }
    console.error('Signup error:', e);
    res.status(500).json({ 
      error: 'Server error',
      message: 'Failed to create account. Please try again.' 
    });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ 
      error: 'Validation error',
      message: 'Email and password are required' 
    });
  }

  try {
    const r = await db.query(
      'SELECT id,email,password_hash,name FROM users WHERE email=$1', 
      [email.toLowerCase().trim()]
    );
    
    if (!r.rows.length) {
      return res.status(401).json({ 
        error: 'Invalid credentials',
        message: 'Invalid email or password' 
      });
    }
    
    const u = r.rows[0];
    const ok = await compare(password, u.password_hash);
    
    if (!ok) {
      return res.status(401).json({ 
        error: 'Invalid credentials',
        message: 'Invalid email or password' 
      });
    }
    
    const token = signToken(u);
    delete u.password_hash;
    
    res.json({ 
      user: u, 
      token,
      message: 'Login successful' 
    });
  } catch (e) {
    console.error('Login error:', e);
    res.status(500).json({ 
      error: 'Server error',
      message: 'Failed to login. Please try again.' 
    });
  }
});

// GET user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const r = await db.query(
      'SELECT id, email, name, age, weight, height, body_fat_percentage, body_goal, created_at FROM users WHERE id=$1',
      [req.user.id]
    );
    
    if (!r.rows.length) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user: r.rows[0] });
  } catch (e) {
    console.error('Get profile error:', e);
    res.status(500).json({
      error: 'Server error',
      message: 'Failed to fetch profile'
    });
  }
});

// PUT update user profile
router.put('/profile', auth, async (req, res) => {
  const { name, age, weight, height, body_fat_percentage, body_goal } = req.body;

  try {
    const r = await db.query(
      `UPDATE users 
       SET name=$1, age=$2, weight=$3, height=$4, body_fat_percentage=$5, body_goal=$6
       WHERE id=$7
       RETURNING id, email, name, age, weight, height, body_fat_percentage, body_goal, created_at`,
      [name || null, age || null, weight || null, height || null, body_fat_percentage || null, body_goal || null, req.user.id]
    );

    res.json({
      user: r.rows[0],
      message: 'Profile updated successfully'
    });
  } catch (e) {
    console.error('Update profile error:', e);
    res.status(500).json({
      error: 'Server error',
      message: 'Failed to update profile'
    });
  }
});

// Export a plain middleware function so Express 5's router accepts it
module.exports = function authRouter(req, res, next) {
  router.handle(req, res, next);
};


