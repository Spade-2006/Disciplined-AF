const DailyLog = require("../models/DailyLog");

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

// Helper to validate metric inputs
const validateLogMetrics = (body) => {
  const errors = [];
  if (body.nutrition) {
    if (body.nutrition.calories != null && body.nutrition.calories < 0) {
      errors.push("Calories must be >= 0");
    }
    if (body.nutrition.protein != null && body.nutrition.protein < 0) {
      errors.push("Protein must be >= 0");
    }
  }
  if (body.body?.weight != null && body.body.weight <= 0) {
    errors.push("Weight must be > 0");
  }
  if (body.hydration?.water != null && body.hydration.water < 0) {
    errors.push("Water must be >= 0");
  }
  if (body.recovery?.sleep != null && (body.recovery.sleep < 0 || body.recovery.sleep > 24)) {
    errors.push("Sleep must be between 0 and 24 hours");
  }
  if (body.activity?.steps != null && body.activity.steps < 0) {
    errors.push("Steps must be >= 0");
  }
  if (body.workout?.durationMinutes != null && body.workout.durationMinutes < 0) {
    errors.push("Workout duration must be >= 0");
  }
  return errors;
};

// GET /api/daily-logs?date=YYYY-MM-DD
// Or GET /api/daily-logs (returns recent logs if date not specified)
exports.getDailyLog = async (req, res) => {
  try {
    const { date } = req.query;

    if (date) {
      if (!DATE_REGEX.test(date)) {
        return res.status(400).json({ message: "Invalid date format. Use YYYY-MM-DD." });
      }
      const log = await DailyLog.findOne({ userId: req.userId, date });
      if (!log) {
        return res.status(404).json({ message: "No daily log found for this date", date, log: null });
      }
      return res.json(log);
    }

    // Default: fetch the last 14 logs for the user ordered by date descending
    const logs = await DailyLog.find({ userId: req.userId }).sort({ date: -1 }).limit(14);
    return res.json(logs);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// POST /api/daily-logs
exports.createDailyLog = async (req, res) => {
  try {
    const { date } = req.body;
    if (!date || !DATE_REGEX.test(date)) {
      return res.status(400).json({ message: "A valid date in YYYY-MM-DD format is required." });
    }

    const validationErrors = validateLogMetrics(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({ message: "Validation failed", errors: validationErrors });
    }

    const existingLog = await DailyLog.findOne({ userId: req.userId, date });
    if (existingLog) {
      return res.status(409).json({
        message: "Daily log for this date already exists. Use PUT to update.",
        date,
      });
    }

    const newLog = new DailyLog({
      ...req.body,
      userId: req.userId,
      date,
    });

    const savedLog = await newLog.save();
    return res.status(201).json(savedLog);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "Daily log for this date already exists." });
    }
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// PUT /api/daily-logs/:date (Upsert)
exports.upsertDailyLog = async (req, res) => {
  try {
    const { date } = req.params;
    if (!date || !DATE_REGEX.test(date)) {
      return res.status(400).json({ message: "A valid date in YYYY-MM-DD format is required in the URL." });
    }

    const validationErrors = validateLogMetrics(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({ message: "Validation failed", errors: validationErrors });
    }

    // Helper to flatten nested object updates into MongoDB dot-notation ($set: { "nutrition.calories": 2400 })
    // This strictly prevents partial updates from overwriting sibling fields (e.g. nutrition.protein)
    const flattenToDotNotation = (obj, prefix = "") => {
      const result = {};
      for (const [key, value] of Object.entries(obj)) {
        if (key === "userId") continue;
        const fullKey = prefix ? `${prefix}.${key}` : key;
        if (value && typeof value === "object" && !Array.isArray(value) && !(value instanceof Date)) {
          Object.assign(result, flattenToDotNotation(value, fullKey));
        } else {
          result[fullKey] = value;
        }
      }
      return result;
    };

    const dotUpdates = flattenToDotNotation(req.body);
    dotUpdates.date = date;

    const updatedLog = await DailyLog.findOneAndUpdate(
      { userId: req.userId, date },
      { $set: dotUpdates },
      { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }
    );

    return res.json(updatedLog);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// DELETE /api/daily-logs/:date
exports.deleteDailyLog = async (req, res) => {
  try {
    const { date } = req.params;
    if (!date || !DATE_REGEX.test(date)) {
      return res.status(400).json({ message: "A valid date in YYYY-MM-DD format is required in the URL." });
    }

    const deleted = await DailyLog.findOneAndDelete({ userId: req.userId, date });
    if (!deleted) {
      return res.status(404).json({ message: "No daily log found for this date to delete." });
    }

    return res.json({ message: "Daily log deleted successfully", date });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// GET /api/daily-logs/streaks?today=YYYY-MM-DD
exports.getStreaks = async (req, res) => {
  try {
    const { calculateUserStreaks } = require("../services/streakService");
    const today = req.query.today || new Date().toISOString().slice(0, 10);
    if (!DATE_REGEX.test(today)) {
      return res.status(400).json({ message: "Invalid today date format. Use YYYY-MM-DD." });
    }
    const streakData = await calculateUserStreaks(req.userId, today);
    return res.json(streakData);
  } catch (error) {
    return res.status(500).json({ message: "Server error calculating streaks", error: error.message });
  }
};
