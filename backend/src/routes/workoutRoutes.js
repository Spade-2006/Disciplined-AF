const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  setActiveWorkout,
  getActiveWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

router.get("/active", authMiddleware, getActiveWorkout);
router.put("/active", authMiddleware, setActiveWorkout);
router.get("/", authMiddleware, getWorkouts);
router.post("/", authMiddleware, createWorkout);
router.get("/:id", authMiddleware, getWorkout);
router.put("/:id", authMiddleware, updateWorkout);
router.delete("/:id", authMiddleware, deleteWorkout);

module.exports = router;
