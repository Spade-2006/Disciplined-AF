const mongoose = require("mongoose");

const plannedExerciseSchema = new mongoose.Schema({
  exerciseId: { type: String, required: true },
  order: { type: Number, default: 0 },
  sets: { type: Number },
  reps: { type: String },
  weight: { type: Number },
  restSeconds: { type: Number },
  notes: { type: String }
}, { _id: false });

const workoutDaySchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  focus: { type: [String], default: [] },
  order: { type: Number, default: 0 },
  exercises: [plannedExerciseSchema]
}, { _id: false });

const workoutProgramSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  description: { type: String },
  target: { type: String },
  experience: { type: String },
  daysPerWeek: { type: Number },
  environment: { type: String },
  category: { type: String },
  equipment: { type: [String], default: [] },
  days: [workoutDaySchema],
  isCustom: { type: Boolean, default: true },
  sourceProgramId: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("WorkoutProgram", workoutProgramSchema);
