const express = require("express");
const router = express.Router();
const db = require("../db");
const auth = require("../middleware/auth");

function writeCsvRow(res, arr) {
  const line = arr.map(v => {
    if (v === null || v === undefined) return "";
    const s = typeof v === "object" ? JSON.stringify(v) : String(v);
    return `"${s.replace(/"/g, '""')}"`;
  }).join(",");
  res.write(line + "\n");
}

router.get("/download", auth, async (req, res) => {
  const { type = "all", from, to } = req.query;
  const userId = req.user.id;
  const filename = `diciplinedaf_export_${type}_${Date.now()}.csv`;

  res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
  res.setHeader("Content-Type", "text/csv; charset=utf-8");

  try {
    if (type === "workouts" || type === "all") {
      writeCsvRow(res, ["WORKOUTS"]);
      writeCsvRow(res, ["date","workout_id","name","notes","duration_minutes"]);
      const params = [userId];
      let q = 'SELECT id AS workout_id, date, name, notes, duration_minutes FROM workouts WHERE user_id=$1';
      if (from) { params.push(from); q += ` AND date >= $${params.length}`; }
      if (to)   { params.push(to);   q += ` AND date <= $${params.length}`; }
      q += ' ORDER BY date DESC';
      const r = await db.query(q, params);
      r.rows.forEach(row => writeCsvRow(res, [row.date, row.workout_id, row.name, row.notes, row.duration_minutes]));
      res.write("\n");
    }

    if (type === "nutrition" || type === "all") {
      writeCsvRow(res, ["NUTRITION"]);
      writeCsvRow(res, ["date","log_id","calories","protein","carbs","fats","micros"]);
      const params = [userId];
      let q = 'SELECT id AS log_id, date, calories, protein, carbs, fats, micros FROM nutrition_logs WHERE user_id=$1';
      if (from) { params.push(from); q += ` AND date >= $${params.length}`; }
      if (to)   { params.push(to);   q += ` AND date <= $${params.length}`; }
      q += ' ORDER BY date DESC';
      const r = await db.query(q, params);
      r.rows.forEach(row => writeCsvRow(res, [row.date, row.log_id, row.calories, row.protein, row.carbs, row.fats, row.micros]));
      res.write("\n");
    }

    if (type === "progress" || type === "all") {
      writeCsvRow(res, ["PROGRESS"]);
      writeCsvRow(res, ["date","progress_id","weight","bodyfat","measurements","photo_url","notes"]);
      const params = [userId];
      let q = 'SELECT id AS progress_id, date, weight, bodyfat, measurements, photo_url, notes FROM progress WHERE user_id=$1';
      if (from) { params.push(from); q += ` AND date >= $${params.length}`; }
      if (to)   { params.push(to);   q += ` AND date <= $${params.length}`; }
      q += ' ORDER BY date DESC';
      const r = await db.query(q, params);
      r.rows.forEach(row => writeCsvRow(res, [row.date, row.progress_id, row.weight, row.bodyfat, row.measurements, row.photo_url, row.notes]));
      res.write("\n");
    }

    res.end();
  } catch (e) {
    console.error("Export error:", e);
    if (!res.headersSent) {
      res.status(500).json({ 
        error: "Server error",
        message: "Failed to export data. Please try again." 
      });
    }
  }
});

// Export a plain middleware function so Express 5's router accepts it
module.exports = function exportRouter(req, res, next) {
  router.handle(req, res, next);
};
