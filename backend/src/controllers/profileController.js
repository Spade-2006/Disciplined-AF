const User = require("../models/User");

const profileFields = [
  "name",
  "age",
  "gender",
  "height",
  "weight",
  "targetWeight",
  "bodyFatPercentage",
  "modelType",
  "skinTone",
  "hairStyle",
  "hairColor",
  "waist",
  "chest",
  "arms",
  "thighs",
  "primaryGoal",
  "secondaryGoal",
  "targetTimeline",
  "trainingExperience",
  "trainingDaysPerWeek",
  "preferredTrainingTime",
  "equipmentAccess",
  "preferredWorkoutType",
  "activityLevel",
  "averageDailySteps",
  "dietaryPreference",
  "mealsPerDay",
  "proteinTarget",
  "calorieTarget",
  "averageSleepHours",
  "sleepGoal",
  "recoveryLevel",
  "injuries",
  "physicalLimitations",
  "medicalNotes",
  "units",
  "notificationsEnabled",
];

const requiredOnboardingFields = [
  "name",
  "age",
  "gender",
  "height",
  "weight",
  "primaryGoal",
  "trainingExperience",
  "trainingDaysPerWeek",
  "equipmentAccess",
  "activityLevel",
  "dietaryPreference",
  "units",
];

const hasCompletedOnboarding = (user) =>
  requiredOnboardingFields.every((field) => {
    const value = user.get(field);
    if (typeof value === "number") return Number.isFinite(value);
    if (typeof value === "boolean") return true;
    if (Array.isArray(value)) return true;
    return typeof value === "string" && value.trim().length > 0;
  });

const publicProfile = (user) => {
  const {
    _id,
    __v,
    password,
    googleId,
    authProvider,
    ...profile
  } = user.toObject();

  return { id: _id, ...profile };
};

const updateUserProfile = async (req, res) => {
  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    return res.status(400).json({ message: "Profile data must be an object" });
  }

  const fieldsToUpdate = profileFields.filter((field) =>
    Object.prototype.hasOwnProperty.call(req.body, field)
  );
  if (fieldsToUpdate.length === 0) {
    return res.status(400).json({ message: "No profile fields to update" });
  }

  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    for (const field of fieldsToUpdate) {
      user.set(field, req.body[field]);
    }

    user.onboardingCompleted = hasCompletedOnboarding(user);
    await user.save();

    return res.status(200).json({ user: publicProfile(user) });
  } catch (error) {
    if (error.name === "ValidationError" || error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid profile data",
        errors: Object.values(error.errors || {}).map(({ path, message }) => ({ path, message })),
      });
    }

    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { updateUserProfile };