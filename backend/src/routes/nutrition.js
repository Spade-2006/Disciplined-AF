// src/routes/nutrition.js
const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middleware/auth');

// Add a nutrition log (calories + macros + optional micros JSON)
router.post('/add', auth, async (req, res) => {
  const { date, calories, protein, carbs, fats, micros } = req.body;
  
  if (calories === undefined || calories === null) {
    return res.status(400).json({ 
      error: 'Validation error',
      message: 'Calories are required' 
    });
  }

  try {
    const r = await db.query(
      `INSERT INTO nutrition_logs
       (user_id, date, calories, protein, carbs, fats, micros)
       VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
      [req.user.id, date || new Date(), calories || 0, protein || 0, carbs || 0, fats || 0, micros || {}]
    );
    res.status(201).json({ 
      nutrition: r.rows[0],
      message: 'Nutrition log added successfully' 
    });
  } catch (e) {
    console.error('Add nutrition error:', e);
    res.status(500).json({ 
      error: 'Server error',
      message: 'Failed to add nutrition log. Please try again.' 
    });
  }
});

// Get nutrition logs for a user (optional ?from=YYYY-MM-DD&to=YYYY-MM-DD)
router.get('/list', auth, async (req, res) => {
  const { from, to } = req.query;
  try {
    let q = 'SELECT * FROM nutrition_logs WHERE user_id=$1';
    const params = [req.user.id];
    if (from) {
      params.push(from);
      q += ` AND date >= $${params.length}`;
    }
    if (to) {
      params.push(to);
      q += ` AND date <= $${params.length}`;
    }
    q += ' ORDER BY date DESC';
    const r = await db.query(q, params);
    res.json({ 
      logs: r.rows,
      count: r.rows.length 
    });
  } catch (e) {
    console.error('Get nutrition logs error:', e);
    res.status(500).json({ 
      error: 'Server error',
      message: 'Failed to fetch nutrition logs. Please try again.' 
    });
  }
});

// Get single day summary (date param required)
router.get('/day', auth, async (req, res) => {
  const { date } = req.query;
  if (!date) return res.status(400).json({ error: 'date required (YYYY-MM-DD)' });
  try {
    const r = await db.query(
      'SELECT * FROM nutrition_logs WHERE user_id=$1 AND date=$2 ORDER BY id DESC LIMIT 1',
      [req.user.id, date]
    );
    res.json(r.rows[0] || null);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'server error' });
  }
});

// Export a plain middleware function so Express 5's router accepts it
module.exports = function nutritionRouter(req, res, next) {
  router.handle(req, res, next);
};

module.exports = router;
