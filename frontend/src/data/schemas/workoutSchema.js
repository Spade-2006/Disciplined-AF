/**
 * WORKOUT SYSTEM DATA ARCHITECTURE
 * 
 * This file defines the canonical data structures for the workout system.
 * It is used for reference, validation, and generating empty templates.
 */

// ==========================================
// 1. PLANNED WORKOUT PROGRAMS (Prebuilt & Custom)
// ==========================================
/**
 * @typedef {Object} PlannedExercise
 * @property {string} exerciseId - MUST match an ID in exercises.js
 * @property {number} sets - Target number of sets
 * @property {string|number} reps - Target reps (e.g., "8-12", "Till Failure", 10)
 * @property {number} restSeconds - Rest between sets
 * @property {string} [notes] - Optional coaching cues or instructions
 */

/**
 * @typedef {Object} WorkoutDay
 * @property {string} id - Unique ID for the day (e.g., "ppl_hyper_push_1")
 * @property {string} name - Display name (e.g., "Push A")
 * @property {string[]} focus - Target muscle groups (e.g., ["chest", "shoulders", "triceps"])
 * @property {PlannedExercise[]} exercises - Ordered list of exercises for the day
 */

/**
 * @typedef {Object} WorkoutProgram
 * @property {string} id - Unique ID for the program
 * @property {string} name - Program Name
 * @property {string} category - e.g., "ppl", "upper_lower", "bro_split", "full_body", "conditioning"
 * @property {string} environment - "gym", "home", or "both"
 * @property {string} target - e.g., "muscle_gain", "fat_loss", "strength", "endurance", "mobility"
 * @property {string} experience - "beginner", "intermediate", "advanced"
 * @property {number} daysPerWeek - 1 to 7
 * @property {string} gender - "male", "female", "unisex"
 * @property {string} description - High-level overview of the program
 * @property {WorkoutDay[]} days - The days making up the program
 * @property {boolean} isCustom - True if user-created, false if prebuilt
 * @property {string} [authorId] - If custom, the ID of the user who created it
 */

// ==========================================
// 2. LOGGED WORKOUTS (Actual Execution)
// ==========================================
/**
 * @typedef {Object} LoggedSet
 * @property {number} setNumber - 1, 2, 3...
 * @property {number} reps - Actual reps completed
 * @property {number} weight - Actual weight used
 * @property {number} [rpe] - Rate of Perceived Exertion (optional)
 * @property {boolean} completed - Whether the set was finished
 */

/**
 * @typedef {Object} LoggedExercise
 * @property {string} exerciseId - MUST match an ID in exercises.js
 * @property {boolean} skipped - If the user skipped this exercise entirely
 * @property {LoggedSet[]} sets - The actual sets performed
 * @property {string} [notes] - User notes for this specific exercise
 */

/**
 * @typedef {Object} LoggedWorkout
 * @property {string} id - Unique execution instance ID
 * @property {string} userId - User performing the workout
 * @property {string} [programId] - ID of the WorkoutProgram (if following a plan)
 * @property {string} [workoutDayId] - ID of the WorkoutDay (if following a plan)
 * @property {string} date - ISO Date string
 * @property {number} durationSeconds - Total time taken
 * @property {number} totalVolume - Calculated total weight lifted
 * @property {LoggedExercise[]} exercises - Exercises actually performed
 * @property {string} [notes] - Overall workout notes
 */

export const createEmptyProgram = () => ({
  id: "", name: "", category: "", environment: "gym", target: "", experience: "beginner",
  daysPerWeek: 0, gender: "unisex", description: "", days: [], isCustom: false
});
