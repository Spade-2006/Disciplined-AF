// src/routes/workouts.js
const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middleware/auth');

// CREATE a workout
router.post('/create', auth, async (req, res) => {
  const { name, date, notes, duration_minutes } = req.body;
  
  if (!name || !date) {
    return res.status(400).json({ 
      error: 'Validation error',
      message: 'Workout name and date are required' 
    });
  }

  try {
    const r = await db.query(
      'INSERT INTO workouts (user_id, name, date, notes, duration_minutes) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [req.user.id, name.trim(), date, notes?.trim() || null, duration_minutes || null]
    );
    res.status(201).json({ 
      workout: r.rows[0],
      message: 'Workout created successfully' 
    });
  } catch (e) {
    console.error('Create workout error:', e);
    res.status(500).json({ 
      error: 'Server error',
      message: 'Failed to create workout. Please try again.' 
    });
  }
});

// ADD an exercise entry
router.post('/add-entry', auth, async (req, res) => {
  const { workout_id, exercise_name, set_index, reps, weight, rpe, tempo } = req.body;
  try {
    const r = await db.query(
      `INSERT INTO exercise_entries 
       (workout_id, exercise_name, set_index, reps, weight, rpe, tempo)
       VALUES ($1,$2,$3,$4,$5,$6,$7)
       RETURNING *`,
      [workout_id, exercise_name, set_index, reps, weight, rpe, tempo]
    );
    res.json(r.rows[0]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'server error' });
  }
});

// GET all workouts for logged-in user
router.get('/all', auth, async (req, res) => {
  try {
    const r = await db.query(
      'SELECT * FROM workouts WHERE user_id=$1 ORDER BY date DESC',
      [req.user.id]
    );
    res.json({ 
      workouts: r.rows,
      count: r.rows.length 
    });
  } catch (e) {
    console.error('Get workouts error:', e);
    res.status(500).json({ 
      error: 'Server error',
      message: 'Failed to fetch workouts. Please try again.' 
    });
  }
});

// Export a plain middleware function so Express 5's router accepts it
module.exports = function workoutsRouter(req, res, next) {
  router.handle(req, res, next);
};
