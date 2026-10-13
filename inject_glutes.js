const fs = require('fs');
const path = require('path');

const newExercises = [
  // Hinge / Hip Extension (Barbell)
  {
    id: "barbell_hip_thrust",
    name: "Barbell Hip Thrust",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["barbell", "bench"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "hip_extension"
  },
  {
    id: "barbell_kas_glute_bridge",
    name: "Barbell KAS Glute Bridge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["barbell", "bench"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "bridge"
  },
  {
    id: "barbell_glute_bridge",
    name: "Barbell Glute Bridge (Floor)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["barbell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "bridge"
  },
  {
    id: "barbell_b_stance_hip_thrust",
    name: "Barbell B-Stance Hip Thrust",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["barbell", "bench"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "hip_extension"
  },
  {
    id: "barbell_single_leg_hip_thrust",
    name: "Barbell Single-Leg Hip Thrust",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["barbell", "bench"],
    environment: ["gym"],
    difficulty: "advanced",
    movement: "hip_extension"
  },
  {
    id: "barbell_good_morning",
    name: "Barbell Good Morning",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings", "lower_back"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "hinge"
  },
  {
    id: "barbell_rdl",
    name: "Barbell Romanian Deadlift (RDL)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings", "lower_back"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "hinge"
  },
  {
    id: "barbell_b_stance_rdl",
    name: "Barbell B-Stance RDL",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "advanced",
    movement: "hinge"
  },
  {
    id: "barbell_single_leg_rdl",
    name: "Barbell Single-Leg RDL",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "advanced",
    movement: "hinge"
  },
  {
    id: "barbell_sumo_deadlift",
    name: "Barbell Sumo Deadlift",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "hamstrings", "adductors"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "hinge"
  },
  {
    id: "barbell_deficit_sumo_deadlift",
    name: "Barbell Deficit Sumo Deadlift",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "hamstrings", "adductors"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "advanced",
    movement: "hinge"
  },
  {
    id: "barbell_conventional_deadlift",
    name: "Barbell Conventional Deadlift",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings", "lower_back", "quads"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "hinge"
  },

  // Hinge / Hip Extension (Dumbbell)
  {
    id: "dumbbell_rdl",
    name: "Dumbbell RDL",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "hinge"
  },
  {
    id: "dumbbell_b_stance_rdl",
    name: "Dumbbell B-Stance RDL",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "intermediate",
    movement: "hinge"
  },
  {
    id: "dumbbell_single_leg_rdl",
    name: "Dumbbell Single-Leg RDL",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "advanced",
    movement: "hinge"
  },
  {
    id: "dumbbell_hip_thrust",
    name: "Dumbbell Hip Thrust",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["dumbbell", "bench"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "hip_extension"
  },
  {
    id: "dumbbell_kas_glute_bridge",
    name: "Dumbbell KAS Glute Bridge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["dumbbell", "bench"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "bridge"
  },
  {
    id: "dumbbell_glute_bridge",
    name: "Dumbbell Glute Bridge (Floor)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "bridge"
  },
  {
    id: "dumbbell_single_leg_hip_thrust",
    name: "Dumbbell Single-Leg Hip Thrust",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["dumbbell", "bench"],
    environment: ["gym", "home"],
    difficulty: "intermediate",
    movement: "hip_extension"
  },
  {
    id: "dumbbell_single_leg_glute_bridge",
    name: "Dumbbell Single-Leg Glute Bridge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "intermediate",
    movement: "bridge"
  },
  {
    id: "dumbbell_frog_pump",
    name: "Dumbbell Frog Pump",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "intermediate",
    movement: "bridge"
  },
  {
    id: "dumbbell_sumo_deadlift",
    name: "Dumbbell Sumo Deadlift",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "adductors"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "hinge"
  },
  {
    id: "dumbbell_good_morning",
    name: "Dumbbell Good Morning",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings", "lower_back"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "hinge"
  },

  // Hinge / Hip Extension (Kettlebell)
  {
    id: "kettlebell_swing",
    name: "Kettlebell Swing",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings", "lower_back"],
    equipment: ["kettlebell"],
    environment: ["gym", "home"],
    difficulty: "intermediate",
    movement: "hinge"
  },
  {
    id: "kettlebell_single_arm_swing",
    name: "Kettlebell Single-Arm Swing",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings", "lower_back", "core"],
    equipment: ["kettlebell"],
    environment: ["gym", "home"],
    difficulty: "advanced",
    movement: "hinge"
  },
  {
    id: "kettlebell_rdl",
    name: "Kettlebell RDL",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["kettlebell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "hinge"
  },
  {
    id: "kettlebell_b_stance_rdl",
    name: "Kettlebell B-Stance RDL",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["kettlebell"],
    environment: ["gym", "home"],
    difficulty: "intermediate",
    movement: "hinge"
  },
  {
    id: "kettlebell_single_leg_rdl",
    name: "Kettlebell Single-Leg RDL",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["kettlebell"],
    environment: ["gym", "home"],
    difficulty: "advanced",
    movement: "hinge"
  },
  {
    id: "kettlebell_sumo_deadlift",
    name: "Kettlebell Sumo Deadlift",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "adductors"],
    equipment: ["kettlebell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "hinge"
  },

  // Hinge / Hip Extension (Cable)
  {
    id: "cable_pull_through",
    name: "Cable Pull-Through",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["cable"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "hinge"
  },
  {
    id: "cable_rdl",
    name: "Cable RDL",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["cable"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "hinge"
  },
  {
    id: "cable_glute_kickback",
    name: "Cable Glute Kickback",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["cable"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "kickback"
  },
  {
    id: "cable_glute_kickback_standing",
    name: "Cable Standing Glute Kickback",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["cable"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "kickback"
  },
  {
    id: "cable_glute_kickback_kneeling",
    name: "Cable Kneeling Glute Kickback",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["cable", "bench"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "kickback"
  },
  {
    id: "cable_hip_abduction",
    name: "Cable Hip Abduction",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["cable"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "cable_standing_hip_abduction",
    name: "Cable Standing Hip Abduction",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["cable"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },

  // Hinge / Hip Extension (Machine / Smith)
  {
    id: "smith_machine_hip_thrust",
    name: "Smith Machine Hip Thrust",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["smith_machine", "bench"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "hip_extension"
  },
  {
    id: "smith_machine_kas_glute_bridge",
    name: "Smith Machine KAS Glute Bridge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["smith_machine", "bench"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "bridge"
  },
  {
    id: "smith_machine_single_leg_hip_thrust",
    name: "Smith Machine Single-Leg Hip Thrust",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["smith_machine", "bench"],
    environment: ["gym"],
    difficulty: "advanced",
    movement: "hip_extension"
  },
  {
    id: "smith_machine_rdl",
    name: "Smith Machine RDL",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["smith_machine"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "hinge"
  },
  {
    id: "smith_machine_b_stance_rdl",
    name: "Smith Machine B-Stance RDL",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["smith_machine"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "hinge"
  },
  {
    id: "smith_machine_good_morning",
    name: "Smith Machine Good Morning",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings", "lower_back"],
    equipment: ["smith_machine"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "hinge"
  },
  {
    id: "machine_glute_bridge",
    name: "Machine Glute Bridge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "bridge"
  },
  {
    id: "machine_glute_drive",
    name: "Glute Drive Machine",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "hip_extension"
  },
  {
    id: "machine_glute_kickback",
    name: "Machine Glute Kickback",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "kickback"
  },
  {
    id: "machine_seated_hip_abduction",
    name: "Seated Hip Abductor Machine",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "machine_standing_hip_abduction",
    name: "Standing Hip Abductor Machine",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "reverse_hyperextension",
    name: "Reverse Hyperextension",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["lower_back", "hamstrings"],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "hip_extension"
  },
  {
    id: "glute_ham_raise_glute_emphasis",
    name: "Glute-Ham Raise (Glute Emphasis)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings", "lower_back"],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "advanced",
    movement: "hip_extension"
  },
  {
    id: "45_degree_back_extension_glute_focus",
    name: "45-Degree Back Extension (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["bench"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "hip_extension"
  },
  {
    id: "90_degree_back_extension_glute_focus",
    name: "90-Degree Back Extension (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["bench"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "hip_extension"
  },
  {
    id: "single_leg_back_extension_glute_focus",
    name: "Single-Leg Back Extension (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["bench"],
    environment: ["gym"],
    difficulty: "advanced",
    movement: "hip_extension"
  },

  // Squat / Lunge Patterns (Barbell)
  {
    id: "barbell_back_squat_wide_stance",
    name: "Barbell Back Squat (Wide Stance)",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: ["adductors"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "squat"
  },
  {
    id: "barbell_box_squat",
    name: "Barbell Box Squat",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["barbell", "bench"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "squat"
  },
  {
    id: "barbell_split_squat_glute_focus",
    name: "Barbell Split Squat (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "hamstrings"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "split_squat"
  },
  {
    id: "barbell_bulgarian_split_squat_glute_focus",
    name: "Barbell Bulgarian Split Squat (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "hamstrings"],
    equipment: ["barbell", "bench"],
    environment: ["gym"],
    difficulty: "advanced",
    movement: "split_squat"
  },
  {
    id: "barbell_reverse_lunge_glute_focus",
    name: "Barbell Reverse Lunge (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "hamstrings"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "lunge"
  },
  {
    id: "barbell_walking_lunge_glute_focus",
    name: "Barbell Walking Lunge (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "hamstrings"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "lunge"
  },
  {
    id: "barbell_step_up_glute_focus",
    name: "Barbell Step-Up (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "hamstrings"],
    equipment: ["barbell", "bench"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "step_up"
  },
  {
    id: "barbell_curtsy_lunge",
    name: "Barbell Curtsy Lunge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "hamstrings"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "lunge"
  },
  {
    id: "barbell_lateral_lunge",
    name: "Barbell Lateral Lunge",
    primaryMuscles: ["glutes", "adductors"],
    secondaryMuscles: ["quads"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "lunge"
  },

  // Squat / Lunge Patterns (Dumbbell)
  {
    id: "dumbbell_goblet_squat_glute_focus",
    name: "Dumbbell Goblet Squat (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "core"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "squat"
  },
  {
    id: "dumbbell_sumo_squat",
    name: "Dumbbell Sumo Squat",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: ["adductors"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "squat"
  },
  {
    id: "dumbbell_split_squat_glute_focus",
    name: "Dumbbell Split Squat (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "split_squat"
  },
  {
    id: "dumbbell_bulgarian_split_squat_glute_focus",
    name: "Dumbbell Bulgarian Split Squat (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["dumbbell", "bench"],
    environment: ["gym", "home"],
    difficulty: "intermediate",
    movement: "split_squat"
  },
  {
    id: "dumbbell_reverse_lunge_glute_focus",
    name: "Dumbbell Reverse Lunge (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "lunge"
  },
  {
    id: "dumbbell_walking_lunge_glute_focus",
    name: "Dumbbell Walking Lunge (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "intermediate",
    movement: "lunge"
  },
  {
    id: "dumbbell_step_up_glute_focus",
    name: "Dumbbell Step-Up (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["dumbbell", "bench"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "step_up"
  },
  {
    id: "dumbbell_curtsy_lunge",
    name: "Dumbbell Curtsy Lunge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "lunge"
  },
  {
    id: "dumbbell_deficit_reverse_lunge",
    name: "Dumbbell Deficit Reverse Lunge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["dumbbell", "bench"],
    environment: ["gym", "home"],
    difficulty: "intermediate",
    movement: "lunge"
  },

  // Squat / Lunge Patterns (Kettlebell)
  {
    id: "kettlebell_goblet_squat_glute_focus",
    name: "Kettlebell Goblet Squat (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "core"],
    equipment: ["kettlebell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "squat"
  },
  {
    id: "kettlebell_sumo_squat",
    name: "Kettlebell Sumo Squat",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: ["adductors"],
    equipment: ["kettlebell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "squat"
  },
  {
    id: "kettlebell_split_squat",
    name: "Kettlebell Split Squat",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: [],
    equipment: ["kettlebell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "split_squat"
  },
  {
    id: "kettlebell_reverse_lunge",
    name: "Kettlebell Reverse Lunge",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: [],
    equipment: ["kettlebell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "lunge"
  },

  // Squat / Lunge Patterns (Smith Machine / Machines)
  {
    id: "smith_machine_squat_glute_focus",
    name: "Smith Machine Squat (Glute Focus / Wide Stance)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "adductors"],
    equipment: ["smith_machine"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "squat"
  },
  {
    id: "smith_machine_split_squat_glute_focus",
    name: "Smith Machine Split Squat (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["smith_machine"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "split_squat"
  },
  {
    id: "smith_machine_bulgarian_split_squat_glute_focus",
    name: "Smith Machine Bulgarian Split Squat (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["smith_machine", "bench"],
    environment: ["gym"],
    difficulty: "advanced",
    movement: "split_squat"
  },
  {
    id: "smith_machine_reverse_lunge_glute_focus",
    name: "Smith Machine Reverse Lunge (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["smith_machine"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "lunge"
  },
  {
    id: "smith_machine_curtsy_lunge",
    name: "Smith Machine Curtsy Lunge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["smith_machine"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "lunge"
  },
  {
    id: "smith_machine_donkey_kick",
    name: "Smith Machine Donkey Kick",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["smith_machine", "bench"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "kickback"
  },
  {
    id: "leg_press_glute_focus",
    name: "Leg Press (Glute Focus / High-Wide Feet)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "squat"
  },
  {
    id: "single_leg_press_glute_focus",
    name: "Single-Leg Press (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "squat"
  },
  {
    id: "hack_squat_glute_focus",
    name: "Hack Squat (Glute Focus / High Feet)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "squat"
  },
  {
    id: "reverse_hack_squat",
    name: "Reverse Hack Squat",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "hamstrings"],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "squat"
  },
  {
    id: "pendulum_squat_glute_focus",
    name: "Pendulum Squat (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "squat"
  },

  // Resistance Band
  {
    id: "band_glute_bridge",
    name: "Resistance Band Glute Bridge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["band"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "bridge"
  },
  {
    id: "band_hip_thrust",
    name: "Resistance Band Hip Thrust",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["band", "bench"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "hip_extension"
  },
  {
    id: "band_clam_shell",
    name: "Resistance Band Clam Shell",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["band"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "band_lateral_walk",
    name: "Resistance Band Lateral Walk",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["band"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "band_monster_walk",
    name: "Resistance Band Monster Walk",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["band"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "band_fire_hydrant",
    name: "Resistance Band Fire Hydrant",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["band"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "band_donkey_kick",
    name: "Resistance Band Donkey Kick",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["band"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "kickback"
  },
  {
    id: "band_standing_glute_kickback",
    name: "Resistance Band Standing Glute Kickback",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["band"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "kickback"
  },
  {
    id: "band_standing_hip_abduction",
    name: "Resistance Band Standing Hip Abduction",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["band"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "band_squat",
    name: "Resistance Band Squat",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: [],
    equipment: ["band"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "squat"
  },

  // Bodyweight / Floor (Gym & Home)
  {
    id: "bodyweight_glute_bridge",
    name: "Bodyweight Glute Bridge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "bridge"
  },
  {
    id: "bodyweight_single_leg_glute_bridge",
    name: "Single-Leg Glute Bridge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "bridge"
  },
  {
    id: "bodyweight_frog_pump",
    name: "Frog Pump",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "bridge"
  },
  {
    id: "bodyweight_hip_thrust",
    name: "Bodyweight Hip Thrust",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["bench"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "hip_extension"
  },
  {
    id: "bodyweight_single_leg_hip_thrust",
    name: "Single-Leg Bodyweight Hip Thrust",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["bench"],
    environment: ["both"],
    difficulty: "intermediate",
    movement: "hip_extension"
  },
  {
    id: "bodyweight_clam_shell",
    name: "Clam Shell",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "bodyweight_fire_hydrant",
    name: "Fire Hydrant",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "bodyweight_donkey_kick",
    name: "Donkey Kick",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "kickback"
  },
  {
    id: "bodyweight_straight_leg_kickback",
    name: "Straight-Leg Kickback",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "kickback"
  },
  {
    id: "bodyweight_lateral_leg_raise",
    name: "Lying Lateral Leg Raise",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "bodyweight_standing_hip_abduction",
    name: "Standing Hip Abduction",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "bodyweight_reverse_hyper",
    name: "Bodyweight Reverse Hyperextension",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["lower_back"],
    equipment: ["bench"],
    environment: ["both"],
    difficulty: "intermediate",
    movement: "hip_extension"
  },
  {
    id: "bodyweight_bulgarian_split_squat",
    name: "Bodyweight Bulgarian Split Squat (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["bench"],
    environment: ["both"],
    difficulty: "intermediate",
    movement: "split_squat"
  },
  {
    id: "bodyweight_reverse_lunge",
    name: "Bodyweight Reverse Lunge (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "lunge"
  },
  {
    id: "bodyweight_curtsy_lunge",
    name: "Bodyweight Curtsy Lunge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "lunge"
  },
  {
    id: "bodyweight_squat",
    name: "Bodyweight Squat",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: [],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "squat"
  },
  {
    id: "bodyweight_jump_squat",
    name: "Jump Squat",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: ["calves"],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "intermediate",
    movement: "squat"
  },
  {
    id: "bodyweight_step_up",
    name: "Bodyweight Step-Up",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["bench"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "step_up"
  },
  {
    id: "bodyweight_lateral_step_up",
    name: "Lateral Step-Up",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["bench"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "step_up"
  },
  {
    id: "bodyweight_glute_march",
    name: "Glute March",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["core"],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "bridge"
  },
  {
    id: "swiss_ball_leg_curl",
    name: "Swiss Ball Leg Curl (Glute Focus)",
    primaryMuscles: ["glutes", "hamstrings"],
    secondaryMuscles: ["core"],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "intermediate",
    movement: "hip_extension"
  },

  // Additional Cable Variations
  {
    id: "cable_curtsy_lunge",
    name: "Cable Curtsy Lunge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["cable"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "lunge"
  },
  {
    id: "cable_squat_walk",
    name: "Cable Squat Walk",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: [],
    equipment: ["cable"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "squat"
  },
  {
    id: "cable_reverse_lunge",
    name: "Cable Reverse Lunge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["cable"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "lunge"
  },
  {
    id: "cable_donkey_kick",
    name: "Cable Donkey Kick",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["cable"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "kickback"
  },
  {
    id: "cable_step_up",
    name: "Cable Step-Up",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["cable", "bench"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "step_up"
  },

  // Additional Band Variations
  {
    id: "band_seated_hip_abduction",
    name: "Resistance Band Seated Hip Abduction",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["band", "bench"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "band_standing_kickback",
    name: "Resistance Band Standing Kickback",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["band"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "kickback"
  },
  {
    id: "band_split_squat",
    name: "Resistance Band Split Squat",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: [],
    equipment: ["band"],
    environment: ["both"],
    difficulty: "intermediate",
    movement: "split_squat"
  },

  // Specialized / Novel Variations
  {
    id: "deficit_curtsy_lunge",
    name: "Deficit Curtsy Lunge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["dumbbell", "bench"],
    environment: ["gym", "home"],
    difficulty: "advanced",
    movement: "lunge"
  },
  {
    id: "copenhagen_hip_thrust",
    name: "Copenhagen Hip Thrust",
    primaryMuscles: ["glutes", "adductors"],
    secondaryMuscles: [],
    equipment: ["bench"],
    environment: ["both"],
    difficulty: "advanced",
    movement: "hip_extension"
  },
  {
    id: "sissy_squat_glute_focus",
    name: "Sissy Squat (Glute Focus Modification)",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: [],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "advanced",
    movement: "squat"
  },
  {
    id: "landmine_squat",
    name: "Landmine Squat (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "core"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "squat"
  },
  {
    id: "landmine_rdl",
    name: "Landmine RDL",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "hinge"
  },
  {
    id: "landmine_single_leg_rdl",
    name: "Landmine Single-Leg RDL",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "advanced",
    movement: "hinge"
  },
  {
    id: "landmine_reverse_lunge",
    name: "Landmine Reverse Lunge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "lunge"
  },
  {
    id: "landmine_curtsy_lunge",
    name: "Landmine Curtsy Lunge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "lunge"
  },

  // Second batch
  {
    id: "barbell_zercher_squat_glute_focus",
    name: "Barbell Zercher Squat (Wide Stance)",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: ["core", "upper_back"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "advanced",
    movement: "squat"
  },
  {
    id: "barbell_front_squat_glute_focus",
    name: "Barbell Front Squat (Glute Focus/Deep)",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: ["core"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "advanced",
    movement: "squat"
  },
  {
    id: "kettlebell_lateral_lunge",
    name: "Kettlebell Lateral Lunge",
    primaryMuscles: ["glutes", "adductors"],
    secondaryMuscles: ["quads"],
    equipment: ["kettlebell"],
    environment: ["gym", "home"],
    difficulty: "intermediate",
    movement: "lunge"
  },
  {
    id: "kettlebell_curtsy_lunge",
    name: "Kettlebell Curtsy Lunge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["kettlebell"],
    environment: ["gym", "home"],
    difficulty: "intermediate",
    movement: "lunge"
  },
  {
    id: "dumbbell_walking_lunge_deficit",
    name: "Dumbbell Deficit Walking Lunge",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "advanced",
    movement: "lunge"
  },
  {
    id: "dumbbell_suitcase_deadlift",
    name: "Dumbbell Suitcase Deadlift",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: ["core"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "intermediate",
    movement: "hinge"
  },
  {
    id: "kettlebell_suitcase_deadlift",
    name: "Kettlebell Suitcase Deadlift",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: ["core"],
    equipment: ["kettlebell"],
    environment: ["gym", "home"],
    difficulty: "intermediate",
    movement: "hinge"
  },
  {
    id: "dumbbell_static_lunge_glute_focus",
    name: "Dumbbell Static Lunge (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "lunge"
  },
  {
    id: "barbell_static_lunge_glute_focus",
    name: "Barbell Static Lunge (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "lunge"
  },
  {
    id: "smith_machine_step_up",
    name: "Smith Machine Step-Up (Glute Focus)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads"],
    equipment: ["smith_machine", "bench"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "step_up"
  },
  {
    id: "cable_pull_through_kneeling",
    name: "Kneeling Cable Pull-Through",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["cable"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "hinge"
  },
  {
    id: "smith_machine_kneeling_squat",
    name: "Smith Machine Kneeling Squat",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["smith_machine"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "squat"
  },
  {
    id: "barbell_kneeling_squat",
    name: "Barbell Kneeling Squat",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["barbell"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "squat"
  },
  {
    id: "dumbbell_kneeling_squat",
    name: "Dumbbell Kneeling Squat",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "beginner",
    movement: "squat"
  },
  {
    id: "band_kneeling_squat",
    name: "Resistance Band Kneeling Squat",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["band"],
    environment: ["both"],
    difficulty: "beginner",
    movement: "squat"
  },
  {
    id: "machine_kickback_standing",
    name: "Standing Machine Glute Kickback",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "kickback"
  },
  {
    id: "machine_kickback_kneeling",
    name: "Kneeling Machine Glute Kickback",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "kickback"
  },
  {
    id: "machine_hip_abduction_leaning_forward",
    name: "Seated Hip Abductor (Leaning Forward)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "machine_hip_abduction_leaning_back",
    name: "Seated Hip Abductor (Leaning Back)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "machine_hip_adduction_glute_focus",
    name: "Hip Adductor Machine (Glute Integration)",
    primaryMuscles: ["glutes", "adductors"],
    secondaryMuscles: [],
    equipment: ["machine"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "cable_side_step",
    name: "Cable Side Step",
    primaryMuscles: ["glutes"],
    secondaryMuscles: [],
    equipment: ["cable"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "hip_abduction"
  },
  {
    id: "cable_lateral_lunge",
    name: "Cable Lateral Lunge",
    primaryMuscles: ["glutes", "adductors"],
    secondaryMuscles: ["quads"],
    equipment: ["cable"],
    environment: ["gym"],
    difficulty: "intermediate",
    movement: "lunge"
  },
  {
    id: "cable_romanian_deadlift",
    name: "Cable Romanian Deadlift (RDL)",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["hamstrings"],
    equipment: ["cable"],
    environment: ["gym"],
    difficulty: "beginner",
    movement: "hinge"
  },
  {
    id: "trx_jump_squat",
    name: "Suspension Trainer Jump Squat",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: ["calves"],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "intermediate",
    movement: "squat"
  },
  {
    id: "trx_pistol_squat",
    name: "Suspension Trainer Pistol Squat (Glute Focus)",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: [],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "advanced",
    movement: "squat"
  },
  {
    id: "bodyweight_pistol_squat_glute_focus",
    name: "Bodyweight Pistol Squat (Glute Focus)",
    primaryMuscles: ["glutes", "quads"],
    secondaryMuscles: [],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "advanced",
    movement: "squat"
  },
  {
    id: "bodyweight_skater_jumps",
    name: "Skater Jumps",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "calves"],
    equipment: ["none"],
    environment: ["both"],
    difficulty: "intermediate",
    movement: "lunge"
  },
  {
    id: "dumbbell_skater_jumps",
    name: "Dumbbell Skater Jumps",
    primaryMuscles: ["glutes"],
    secondaryMuscles: ["quads", "calves"],
    equipment: ["dumbbell"],
    environment: ["gym", "home"],
    difficulty: "advanced",
    movement: "lunge"
  }
];

const targetFile = path.join(__dirname, 'frontend', 'src', 'data', 'exercises.js');
let content = fs.readFileSync(targetFile, 'utf8');

// The array ends with "];"
// Let's replace the last "];" safely
const insertStr = '];';
const insertPos = content.lastIndexOf(insertStr);

if (insertPos !== -1) {
  const jsonStr = newExercises.map(ex => '  ' + JSON.stringify(ex, null, 2).replace(/\n/g, '\n  ')).join(',\n') + '\n';
  const finalContent = content.substring(0, insertPos) + ',\n' + jsonStr + '];\n';
  fs.writeFileSync(targetFile, finalContent, 'utf8');
  console.log('Added ' + newExercises.length + ' glute exercises');
} else {
  console.error("Could not find array end.");
}
