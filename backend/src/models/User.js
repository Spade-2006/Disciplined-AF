const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email address"],
    },
    password: {
      type: String,
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    authProvider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },
    age: {
      type: Number,
      min: 13,
      max: 120,
    },
    gender: {
      type: String,
      trim: true,
    },
    height: {
      type: Number,
      min: 0,
    },
    weight: {
      type: Number,
      min: 0,
    },
    targetWeight: {
      type: Number,
      min: 0,
    },
    bodyFatPercentage: {
      type: Number,
      min: 0,
      max: 100,
    },
    modelType: {
      type: String,
      enum: ["male", "female"],
    },
    skinTone: {
      type: String,
      enum: ["porcelain", "fair", "light", "medium", "olive", "tan", "brown", "deep"],
    },
    hairStyle: {
      type: String,
      enum: ["bald", "buzz", "short", "medium", "long", "curly", "wavy", "braids", "tied-back"],
    },
    hairColor: {
      type: String,
      enum: ["black", "brown", "blonde", "red", "gray", "white", "other"],
    },
    waist: {
      type: Number,
      min: 0,
    },
    chest: {
      type: Number,
      min: 0,
    },
    arms: {
      type: Number,
      min: 0,
    },
    thighs: {
      type: Number,
      min: 0,
    },
    primaryGoal: {
      type: String,
      enum: ["fat loss", "muscle gain", "recomposition", "maintenance"],
    },
    secondaryGoal: {
      type: String,
      enum: ["fat loss", "muscle gain", "recomposition", "maintenance"],
    },
    targetTimeline: {
      type: String,
      trim: true,
    },
    trainingExperience: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
    },
    trainingDaysPerWeek: {
      type: Number,
      min: 1,
      max: 7,
    },
    preferredTrainingTime: {
      type: String,
      trim: true,
    },
    equipmentAccess: {
      type: String,
      enum: ["home", "gym", "both"],
      trim: true,
    },
    preferredWorkoutType: {
      type: String,
      trim: true,
    },
    activityLevel: {
      type: String,
      enum: ["sedentary", "lightly active", "moderately active", "very active"],
      trim: true,
    },
    averageDailySteps: {
      type: Number,
      min: 0,
    },
    dietaryPreference: {
      type: String,
      enum: ["no preference", "vegetarian", "vegan", "eggetarian", "other"],
      trim: true,
    },
    mealsPerDay: {
      type: Number,
      min: 1,
    },
    proteinTarget: {
      type: Number,
      min: 0,
    },
    calorieTarget: {
      type: Number,
      min: 0,
    },
    averageSleepHours: {
      type: Number,
      min: 0,
      max: 24,
    },
    sleepGoal: {
      type: Number,
      min: 0,
      max: 24,
    },
    recoveryLevel: {
      type: String,
      trim: true,
    },
    injuries: {
      type: [String],
      default: [],
    },
    physicalLimitations: {
      type: [String],
      default: [],
    },
    medicalNotes: {
      type: String,
      trim: true,
    },
    units: {
      type: String,
      enum: ["metric", "imperial"],
      default: "metric",
    },
    notificationsEnabled: {
      type: Boolean,
      default: true,
    },
    activeWorkoutId: {
      type: String,
      default: null,
    },
    onboardingCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
