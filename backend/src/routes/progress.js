// src/routes/progress.js
const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middleware/auth');

/**
 * GET /exercise/:exerciseName/trends?from=YYYY-MM-DD&to=YYYY-MM-DD
 *
 * Returns daily volume + basic stats for a specific exercise.
 * Intended to be mounted like: app.use('/api/metrics', router)
 * so the full path becomes:
 *   /api/metrics/exercise/:exerciseName/trends
 */
router.get('/exercise/:exerciseName/trends', auth, async (req, res) => {
  const { exerciseName } = req.params;
  const { from, to } = req.query;

  // Default range: last 30 days if not provided
  const defaultTo = new Date();
  const defaultFrom = new Date();
  defaultFrom.setDate(defaultFrom.getDate() - 30);

  const fromDate = from || defaultFrom.toISOString().slice(0, 10);
  const toDate = to || defaultTo.toISOString().slice(0, 10);

  try {
    const q = `
      SELECT
        DATE(w.date) AS date,
        SUM(e.reps * e.weight) AS total_volume,
        AVG(e.rpe) AS avg_rpe,
        COUNT(*) AS sets_count
      FROM exercise_entries e
      JOIN workouts w ON e.workout_id = w.id
      WHERE w.user_id = $1
        AND e.exercise_name ILIKE $2
        AND w.date >= $3
        AND w.date <= $4
      GROUP BY DATE(w.date)
      ORDER BY DATE(w.date)
    `;

    const params = [req.user.id, exerciseName, fromDate, toDate];
    const r = await db.query(q, params);

    res.json({
      exercise: exerciseName,
      from: fromDate,
      to: toDate,
      points: r.rows,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'server error' });
  }
});

/**
 * GET /exercise/:exerciseName/prs
 *
 * Very simple PR endpoint:
 * - heaviest set by absolute weight
 * - highest volume set (reps * weight)
 */
router.get('/exercise/:exerciseName/prs', auth, async (req, res) => {
  const { exerciseName } = req.params;

  try {
    const bestWeightQ = `
      SELECT
        e.id,
        e.workout_id,
        e.exercise_name,
        e.reps,
        e.weight,
        e.rpe,
        w.date
      FROM exercise_entries e
      JOIN workouts w ON e.workout_id = w.id
      WHERE w.user_id = $1
        AND e.exercise_name ILIKE $2
      ORDER BY e.weight DESC, e.reps DESC
      LIMIT 1
    `;

    const bestVolumeQ = `
      SELECT
        e.id,
        e.workout_id,
        e.exercise_name,
        e.reps,
        e.weight,
        (e.reps * e.weight) AS volume,
        e.rpe,
        w.date
      FROM exercise_entries e
      JOIN workouts w ON e.workout_id = w.id
      WHERE w.user_id = $1
        AND e.exercise_name ILIKE $2
      ORDER BY volume DESC
      LIMIT 1
    `;

    const params = [req.user.id, exerciseName];

    const [bestWeightRes, bestVolumeRes] = await Promise.all([
      db.query(bestWeightQ, params),
      db.query(bestVolumeQ, params),
    ]);

    res.json({
      exercise: exerciseName,
      best_weight_set: bestWeightRes.rows[0] || null,
      best_volume_set: bestVolumeRes.rows[0] || null,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'server error' });
  }
});

/**
 * GET /summary?from=YYYY-MM-DD&to=YYYY-MM-DD
 *
 * High-level progress summary over a date range:
 * - total workouts
 * - total sets (exercise_entries rows)
 * - total volume (sum reps*weight)
 */
router.get('/summary', auth, async (req, res) => {
  const { from, to } = req.query;

  const defaultTo = new Date();
  const defaultFrom = new Date();
  defaultFrom.setDate(defaultFrom.getDate() - 30);

  const fromDate = from || defaultFrom.toISOString().slice(0, 10);
  const toDate = to || defaultTo.toISOString().slice(0, 10);

  try {
    const workoutCountQ = `
      SELECT COUNT(*) AS workout_count
      FROM workouts
      WHERE user_id = $1
        AND date >= $2
        AND date <= $3
    `;

    const setStatsQ = `
      SELECT
        COUNT(*) AS sets_count,
        COALESCE(SUM(reps * weight), 0) AS total_volume
      FROM exercise_entries e
      JOIN workouts w ON e.workout_id = w.id
      WHERE w.user_id = $1
        AND w.date >= $2
        AND w.date <= $3
    `;

    const params = [req.user.id, fromDate, toDate];

    const [workoutRes, setRes] = await Promise.all([
      db.query(workoutCountQ, params),
      db.query(setStatsQ, params),
    ]);

    res.json({
      from: fromDate,
      to: toDate,
      workout_count: Number(workoutRes.rows[0]?.workout_count || 0),
      sets_count: Number(setRes.rows[0]?.sets_count || 0),
      total_volume: Number(setRes.rows[0]?.total_volume || 0),
    });
  } catch (e) {
    console.error('Get progress summary error:', e);
    res.status(500).json({ 
      error: 'Server error',
      message: 'Failed to fetch progress summary. Please try again.' 
    });
  }
});

// Export a plain middleware function so Express 5's router accepts it
module.exports = function progressRouter(req, res, next) {
  router.handle(req, res, next);
};