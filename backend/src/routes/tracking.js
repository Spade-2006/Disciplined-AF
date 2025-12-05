// src/routes/tracking.js
const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middleware/auth');

// GET daily tracking data
router.get('/daily', auth, async (req, res) => {
  const { date } = req.query;
  const userId = req.user.id;

  if (!date) {
    return res.status(400).json({
      error: 'Validation error',
      message: 'Date is required'
    });
  }

  try {
    const r = await db.query(
      'SELECT * FROM daily_tracking WHERE user_id=$1 AND date=$2 ORDER BY id DESC LIMIT 1',
      [userId, date]
    );
    
    if (r.rows.length === 0) {
      return res.status(404).json({ message: 'No tracking data found for this date' });
    }

    res.json(r.rows[0]);
  } catch (e) {
    console.error('Get daily tracking error:', e);
    res.status(500).json({
      error: 'Server error',
      message: 'Failed to fetch tracking data'
    });
  }
});

// POST create daily tracking
router.post('/daily', auth, async (req, res) => {
  const { date, calories, protein, carbs, fats, sleep_hours, steps, notes } = req.body;
  const userId = req.user.id;

  if (!date) {
    return res.status(400).json({
      error: 'Validation error',
      message: 'Date is required'
    });
  }

  try {
    const r = await db.query(
      `INSERT INTO daily_tracking 
       (user_id, date, calories, protein, carbs, fats, sleep_hours, steps, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [userId, date, calories || null, protein || null, carbs || null, fats || null, sleep_hours || null, steps || null, notes || null]
    );

    res.status(201).json({
      tracking: r.rows[0],
      message: 'Tracking data saved successfully'
    });
  } catch (e) {
    console.error('Create daily tracking error:', e);
    res.status(500).json({
      error: 'Server error',
      message: 'Failed to save tracking data'
    });
  }
});

// PUT update daily tracking
router.put('/daily/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { date, calories, protein, carbs, fats, sleep_hours, steps, notes } = req.body;
  const userId = req.user.id;

  try {
    // Verify ownership
    const check = await db.query('SELECT user_id FROM daily_tracking WHERE id=$1', [id]);
    if (check.rows.length === 0) {
      return res.status(404).json({ error: 'Tracking data not found' });
    }
    if (check.rows[0].user_id !== userId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const r = await db.query(
      `UPDATE daily_tracking 
       SET date=$1, calories=$2, protein=$3, carbs=$4, fats=$5, sleep_hours=$6, steps=$7, notes=$8
       WHERE id=$9 AND user_id=$10
       RETURNING *`,
      [date, calories || null, protein || null, carbs || null, fats || null, sleep_hours || null, steps || null, notes || null, id, userId]
    );

    res.json({
      tracking: r.rows[0],
      message: 'Tracking data updated successfully'
    });
  } catch (e) {
    console.error('Update daily tracking error:', e);
    res.status(500).json({
      error: 'Server error',
      message: 'Failed to update tracking data'
    });
  }
});

// GET tracking history
router.get('/history', auth, async (req, res) => {
  const { from, to } = req.query;
  const userId = req.user.id;

  try {
    let q = 'SELECT * FROM daily_tracking WHERE user_id=$1';
    const params = [userId];
    
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
    res.json({ tracking: r.rows, count: r.rows.length });
  } catch (e) {
    console.error('Get tracking history error:', e);
    res.status(500).json({
      error: 'Server error',
      message: 'Failed to fetch tracking history'
    });
  }
});

// Export a plain middleware function so Express 5's router accepts it
module.exports = function trackingRouter(req, res, next) {
  router.handle(req, res, next);
};

