const WorkoutProgram = require("../models/WorkoutProgram");
const User = require("../models/User");

// Get all workouts for the current user
exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await WorkoutProgram.find({ userId: req.userId }).sort({ updatedAt: -1 });
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get a single workout
exports.getWorkout = async (req, res) => {
  try {
    const workout = await WorkoutProgram.findOne({ _id: req.params.id, userId: req.userId });
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.json(workout);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID or server error", error: error.message });
  }
};

// Create a new workout
exports.createWorkout = async (req, res) => {
  try {
    const { name, days } = req.body;
    if (!name || !days || !Array.isArray(days)) {
      return res.status(400).json({ message: "Name and days array are required" });
    }

    const newWorkout = new WorkoutProgram({
      ...req.body,
      userId: req.userId
    });

    const savedWorkout = await newWorkout.save();
    res.status(201).json(savedWorkout);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update an existing workout
exports.updateWorkout = async (req, res) => {
  try {
    const workout = await WorkoutProgram.findOne({ _id: req.params.id, userId: req.userId });
    if (!workout) {
      return res.status(404).json({ message: "Workout not found or unauthorized" });
    }

    Object.assign(workout, req.body);
    const updatedWorkout = await workout.save();
    res.json(updatedWorkout);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID or server error", error: error.message });
  }
};

// Delete a workout
exports.deleteWorkout = async (req, res) => {
  try {
    const workout = await WorkoutProgram.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!workout) {
      return res.status(404).json({ message: "Workout not found or unauthorized" });
    }
    
    // Check if it's the active workout and clear it if so
    const user = await User.findById(req.userId);
    if (user && user.activeWorkoutId === req.params.id) {
      user.activeWorkoutId = null;
      await user.save();
    }

    res.json({ message: "Workout deleted successfully", id: req.params.id });
  } catch (error) {
    res.status(400).json({ message: "Invalid ID or server error", error: error.message });
  }
};

// Set or clear active workout
exports.setActiveWorkout = async (req, res) => {
  try {
    const { activeWorkoutId } = req.body;
    // activeWorkoutId can be a MongoDB ObjectId or a prebuilt string ID, or null to clear
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.activeWorkoutId = activeWorkoutId || null;
    await user.save();

    res.json({ message: "Active workout updated", activeWorkoutId: user.activeWorkoutId });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get active workout ID
exports.getActiveWorkout = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ activeWorkoutId: user.activeWorkoutId });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
