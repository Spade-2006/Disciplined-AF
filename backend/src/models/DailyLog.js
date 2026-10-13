const mongoose = require("mongoose");

const dailyLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    // Calendar date formatted as YYYY-MM-DD
    date: {
      type: String,
      required: true,
      match: [/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"],
    },
    nutrition: {
      calories: { type: Number, min: 0, default: null },
      protein: { type: Number, min: 0, default: null },
    },
    body: {
      weight: { type: Number, min: 0, default: null },
    },
    hydration: {
      water: { type: Number, min: 0, default: null }, // e.g. liters or ml
    },
    recovery: {
      sleep: { type: Number, min: 0, max: 24, default: null },
      sleepQuality: {
        type: String,
        enum: ["poor", "fair", "good", "excellent", null],
        default: null,
      },
    },
    activity: {
      steps: { type: Number, min: 0, default: null },
    },
    mind: {
      mood: {
        type: String,
        enum: ["terrible", "low", "neutral", "good", "great", null],
        default: null,
      },
      notes: { type: String, trim: true, default: "" },
    },
    workout: {
      completed: { type: Boolean, default: false },
      workoutProgramId: {
        type: String, // String to handle custom Mongo ID or static prebuilt string ID
        default: null,
      },
      workoutName: { type: String, default: null },
      durationMinutes: { type: Number, min: 0, default: null },
      completedAt: { type: Date, default: null },
    },
  },
  {
    timestamps: true,
  }
);

// Enforce unique record per user per calendar day
dailyLogSchema.index({ userId: 1, date: 1 }, { unique: true });

module.exports = mongoose.model("DailyLog", dailyLogSchema);
