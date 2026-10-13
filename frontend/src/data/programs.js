import { createEmptyProgram } from './schemas/workoutSchema.js';

export const prebuiltPrograms = [
  {
    "id": "beg_fb_3d",
    "name": "3-Day Full Body Muscle Gain",
    "category": "full_body",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "male",
    "description": "A fundamental 3-day full body routine designed to build a strong base of muscle mass and perfect primary movement patterns.",
    "isCustom": false,
    "days": [
      {
        "id": "beg_fb_3d_d1",
        "name": "Full Body A",
        "focus": [
          "chest",
          "quads",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "beg_fb_3d_d2",
        "name": "Full Body B",
        "focus": [
          "hamstrings",
          "shoulders",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_deadlift",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_clean_and_press",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_cable_kickback",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "beg_fb_3d_d3",
        "name": "Full Body C",
        "focus": [
          "quads",
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "leg_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_crossover",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "beg_fb_fatloss_3d",
    "name": "3-Day Full Body Fat Loss",
    "category": "full_body",
    "environment": "gym",
    "target": "fat_loss",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "male",
    "description": "Full body circuit-style training with slightly higher reps to maximize caloric expenditure while retaining muscle.",
    "isCustom": false,
    "days": [
      {
        "id": "beg_fb_fatloss_3d_d1",
        "name": "Full Body Burn A",
        "focus": [
          "chest",
          "quads",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "beg_fb_fatloss_3d_d2",
        "name": "Cardio & Core",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "treadmill_steady_state_running",
            "sets": 3,
            "reps": "30 sec",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "stationary_upright_bike_liss",
            "sets": 3,
            "reps": "30 sec",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 3,
            "reps": "30 sec",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 3,
            "reps": "30 sec",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "q_l_stretch_seated",
            "sets": 3,
            "reps": "30 sec",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "beg_fb_fatloss_3d_d3",
        "name": "Full Body Burn B",
        "focus": [
          "hamstrings",
          "shoulders",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_deadlift",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_clean_and_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_cable_kickback",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "beg_genfit_2d",
    "name": "2-Day General Fitness Weekend Warrior",
    "category": "full_body",
    "environment": "gym",
    "target": "endurance",
    "experience": "beginner",
    "daysPerWeek": 2,
    "gender": "male",
    "description": "Perfect for busy individuals who can only make it to the gym twice a week.",
    "isCustom": false,
    "days": [
      {
        "id": "beg_genfit_2d_d1",
        "name": "Full Body Workout 1",
        "focus": [
          "chest",
          "quads",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "beg_genfit_2d_d2",
        "name": "Full Body Workout 2",
        "focus": [
          "hamstrings",
          "shoulders",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_deadlift",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_clean_and_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_cable_kickback",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "beg_ul_4d",
    "name": "4-Day Upper/Lower Strength Intro",
    "category": "upper_lower",
    "environment": "gym",
    "target": "strength",
    "experience": "beginner",
    "daysPerWeek": 4,
    "gender": "male",
    "description": "A classic 4-day split dividing the body into upper and lower days to build foundational strength.",
    "isCustom": false,
    "days": [
      {
        "id": "beg_ul_4d_d1",
        "name": "Upper Body A",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "5-8",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "5-8",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "barbell_clean_and_press",
            "sets": 3,
            "reps": "5-8",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "5-8",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "triceps_skull_crusher_dumbbell",
            "sets": 3,
            "reps": "5-8",
            "restSeconds": 180,
            "notes": ""
          }
        ]
      },
      {
        "id": "beg_ul_4d_d2",
        "name": "Lower Body A",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 3,
            "reps": "5-8",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 3,
            "reps": "5-8",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "leg_press",
            "sets": 3,
            "reps": "5-8",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 3,
            "reps": "5-8",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 3,
            "reps": "5-8",
            "restSeconds": 180,
            "notes": ""
          }
        ]
      },
      {
        "id": "beg_ul_4d_d3",
        "name": "Upper Body B",
        "focus": [
          "chest",
          "back",
          "arms"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "cable_flat_bench_fly",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "beg_ul_4d_d4",
        "name": "Lower Body B",
        "focus": [
          "quads",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "beg_ppl_3d",
    "name": "3-Day Push/Pull/Legs Intro",
    "category": "ppl",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "male",
    "description": "An introduction to the highly effective Push/Pull/Legs methodology, trained once per week.",
    "isCustom": false,
    "days": [
      {
        "id": "beg_ppl_3d_d1",
        "name": "Push Day",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_pec_deck_fly",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "cable_lateral_raise_behind_back",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "beg_ppl_3d_d2",
        "name": "Pull Day",
        "focus": [
          "lats",
          "biceps",
          "rear_delts"
        ],
        "exercises": [
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_t_bar_row_machine",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_pullover_back",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "beg_ppl_3d_d3",
        "name": "Leg Day",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "int_ul_hyper_4d",
    "name": "4-Day Upper/Lower Hypertrophy",
    "category": "upper_lower",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "male",
    "description": "Focused on muscle growth with moderate weight and higher volume across an upper/lower split.",
    "isCustom": false,
    "days": [
      {
        "id": "int_ul_hyper_4d_d1",
        "name": "Upper Hypertrophy 1",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_flat_bench_fly",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_ul_hyper_4d_d2",
        "name": "Lower Hypertrophy 1",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_ul_hyper_4d_d3",
        "name": "Upper Hypertrophy 2",
        "focus": [
          "chest",
          "back",
          "arms"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_flat_bench_fly",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_ul_hyper_4d_d4",
        "name": "Lower Hypertrophy 2",
        "focus": [
          "quads",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "int_ul_fatloss_4d",
    "name": "4-Day Upper/Lower Fat Loss",
    "category": "upper_lower",
    "environment": "gym",
    "target": "fat_loss",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "male",
    "description": "Designed to retain muscle mass while cutting body fat, utilizing higher reps and shorter rests.",
    "isCustom": false,
    "days": [
      {
        "id": "int_ul_fatloss_4d_d1",
        "name": "Upper Burn",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_flat_bench_fly",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_ul_fatloss_4d_d2",
        "name": "Lower Burn",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_ul_fatloss_4d_d3",
        "name": "Cardio & Core",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "treadmill_steady_state_running",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "stationary_upright_bike_liss",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "q_l_stretch_seated",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_ul_fatloss_4d_d4",
        "name": "Upper Burn 2",
        "focus": [
          "chest",
          "back",
          "arms"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_flat_bench_fly",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "int_bro_5d",
    "name": "5-Day Classic Bro Split",
    "category": "bro_split",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 5,
    "gender": "male",
    "description": "The classic golden-era bodybuilding split. One major muscle group per day for maximum pump and recovery.",
    "isCustom": false,
    "days": [
      {
        "id": "int_bro_5d_d1",
        "name": "Chest Day",
        "focus": [
          "chest"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_pullover",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_bro_5d_d2",
        "name": "Back Day",
        "focus": [
          "lats",
          "mid_back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_deadlift",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_bro_5d_d3",
        "name": "Leg Day",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "leg_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_reverse_lunge_glute_focus",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_bro_5d_d4",
        "name": "Shoulder Day",
        "focus": [
          "shoulders",
          "traps"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_front_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_shrug",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_bro_5d_d5",
        "name": "Arm Day",
        "focus": [
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press_close_grip",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_preacher_curl",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "int_ppl_6d",
    "name": "6-Day PPL Hypertrophy",
    "category": "ppl",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 6,
    "gender": "male",
    "description": "A high-frequency Push/Pull/Legs routine hitting every muscle group twice a week for optimal growth.",
    "isCustom": false,
    "days": [
      {
        "id": "int_ppl_6d_d1",
        "name": "Push 1",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press_close_grip",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_ppl_6d_d2",
        "name": "Pull 1",
        "focus": [
          "lats",
          "mid_back",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_ppl_6d_d3",
        "name": "Legs 1",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "leg_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_ppl_6d_d4",
        "name": "Push 2",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_pec_deck_fly",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_lateral_raise_behind_back",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_ppl_6d_d5",
        "name": "Pull 2",
        "focus": [
          "lats",
          "mid_back",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_t_bar_row_machine",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_pullover_back",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_ppl_6d_d6",
        "name": "Legs 2",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "int_ppl_fatloss_6d",
    "name": "6-Day PPL Fat Loss",
    "category": "ppl",
    "environment": "gym",
    "target": "fat_loss",
    "experience": "intermediate",
    "daysPerWeek": 6,
    "gender": "male",
    "description": "A fast-paced 6-day split designed to maximize calorie burn while maintaining lean muscle tissue.",
    "isCustom": false,
    "days": [
      {
        "id": "int_ppl_fatloss_6d_d1",
        "name": "Push Hypertrophy",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_pec_deck_fly",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_lateral_raise_behind_back",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_ppl_fatloss_6d_d2",
        "name": "Pull Hypertrophy",
        "focus": [
          "lats",
          "mid_back",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_t_bar_row_machine",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_pullover_back",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_ppl_fatloss_6d_d3",
        "name": "Legs Hypertrophy",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_ppl_fatloss_6d_d4",
        "name": "Push Conditioning",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "machine_pec_deck_fly",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "cable_lateral_raise_behind_back",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_ppl_fatloss_6d_d5",
        "name": "Pull Conditioning",
        "focus": [
          "lats",
          "mid_back",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "barbell_t_bar_row_machine",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_pullover_back",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_ppl_fatloss_6d_d6",
        "name": "Cardio & Core",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "treadmill_steady_state_running",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "stationary_upright_bike_liss",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "q_l_stretch_seated",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "int_hybrid_5d",
    "name": "5-Day PPL + Upper/Lower Hybrid",
    "category": "hybrid",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 5,
    "gender": "male",
    "description": "Combines the best of PPL and Upper/Lower for a flexible 5-day week.",
    "isCustom": false,
    "days": [
      {
        "id": "int_hybrid_5d_d1",
        "name": "Push",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_pec_deck_fly",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_lateral_raise_behind_back",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_hybrid_5d_d2",
        "name": "Pull",
        "focus": [
          "lats",
          "mid_back",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_t_bar_row_machine",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_pullover_back",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_hybrid_5d_d3",
        "name": "Legs",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "leg_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_hybrid_5d_d4",
        "name": "Upper",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_flat_bench_fly",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_hybrid_5d_d5",
        "name": "Lower",
        "focus": [
          "quads",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "int_fb_strength_3d",
    "name": "3-Day Full Body Strength",
    "category": "full_body",
    "environment": "gym",
    "target": "strength",
    "experience": "intermediate",
    "daysPerWeek": 3,
    "gender": "male",
    "description": "A powerlifting-inspired routine focusing on the big three lifts to build maximum strength.",
    "isCustom": false,
    "days": [
      {
        "id": "int_fb_strength_3d_d1",
        "name": "Heavy Squat Day",
        "focus": [
          "quads",
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_fb_strength_3d_d2",
        "name": "Heavy Bench Day",
        "focus": [
          "chest",
          "shoulders",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "leg_press",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "cable_crossover",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_fb_strength_3d_d3",
        "name": "Heavy Deadlift Day",
        "focus": [
          "hamstrings",
          "shoulders",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_deadlift",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "barbell_clean_and_press",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "triceps_cable_kickback",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "int_push_pull_4d",
    "name": "4-Day Push/Pull Recomposition",
    "category": "hybrid",
    "environment": "gym",
    "target": "recomposition",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "male",
    "description": "A push/pull methodology applied to the whole body (quads with push, hams with pull) for total recomposition.",
    "isCustom": false,
    "days": [
      {
        "id": "int_push_pull_4d_d1",
        "name": "Push Strength (Chest/Quads)",
        "focus": [
          "chest",
          "quads",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press_close_grip",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_push_pull_4d_d2",
        "name": "Pull Strength (Back/Hams)",
        "focus": [
          "lats",
          "hamstrings",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_push_pull_4d_d3",
        "name": "Push Hypertrophy",
        "focus": [
          "chest",
          "quads",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_pec_deck_fly",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_lateral_raise_behind_back",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_push_pull_4d_d4",
        "name": "Pull Hypertrophy",
        "focus": [
          "lats",
          "hamstrings",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_t_bar_row_machine",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_pullover_back",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "int_arnold_5d",
    "name": "5-Day Arnold Split",
    "category": "arnold_split",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 5,
    "gender": "male",
    "description": "Inspired by Arnold Schwarzenegger. Pairs Chest/Back, Shoulders/Arms, and Legs.",
    "isCustom": false,
    "days": [
      {
        "id": "int_arnold_5d_d1",
        "name": "Chest & Back",
        "focus": [
          "chest",
          "lats",
          "mid_back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_arnold_5d_d2",
        "name": "Shoulders & Arms",
        "focus": [
          "shoulders",
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_skull_crusher_dumbbell",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_arnold_5d_d3",
        "name": "Legs",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_arnold_5d_d4",
        "name": "Chest & Back 2",
        "focus": [
          "chest",
          "lats",
          "mid_back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_arnold_5d_d5",
        "name": "Shoulders & Arms 2",
        "focus": [
          "shoulders",
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_skull_crusher_dumbbell",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "int_recomp_4d",
    "name": "4-Day Recomposition Protocol",
    "category": "upper_lower",
    "environment": "gym",
    "target": "recomposition",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "male",
    "description": "A blend of heavy lifting and conditioning to simultaneously build muscle and lose fat.",
    "isCustom": false,
    "days": [
      {
        "id": "int_recomp_4d_d1",
        "name": "Heavy Upper",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_clean_and_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_skull_crusher_dumbbell",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_recomp_4d_d2",
        "name": "Heavy Lower",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "leg_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_recomp_4d_d3",
        "name": "Upper Conditioning",
        "focus": [
          "chest",
          "back",
          "arms"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_flat_bench_fly",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "int_recomp_4d_d4",
        "name": "Lower & Cardio",
        "focus": [
          "quads",
          "hamstrings",
          "cardio"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "adv_arnold_6d",
    "name": "6-Day Arnold Split Advanced Hypertrophy",
    "category": "arnold_split",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "male",
    "description": "A punishing high-volume 6-day split for advanced lifters seeking maximum aesthetic development.",
    "isCustom": false,
    "days": [
      {
        "id": "adv_arnold_6d_d1",
        "name": "Chest & Back Heavy",
        "focus": [
          "chest",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_arnold_6d_d2",
        "name": "Shoulders & Arms Heavy",
        "focus": [
          "shoulders",
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_skull_crusher_dumbbell",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_arnold_6d_d3",
        "name": "Legs Heavy",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "leg_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_arnold_6d_d4",
        "name": "Chest & Back Pump",
        "focus": [
          "chest",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_arnold_6d_d5",
        "name": "Shoulders & Arms Pump",
        "focus": [
          "shoulders",
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_skull_crusher_dumbbell",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_arnold_6d_d6",
        "name": "Legs Pump",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "adv_ppl_arnold_6d",
    "name": "6-Day PPL / Arnold Hybrid",
    "category": "hybrid",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "male",
    "description": "Combines PPL for the first half of the week and the Arnold split for the second half to maximize shoulder and arm frequency.",
    "isCustom": false,
    "days": [
      {
        "id": "adv_ppl_arnold_6d_d1",
        "name": "Push",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press_close_grip",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_ppl_arnold_6d_d2",
        "name": "Pull",
        "focus": [
          "lats",
          "mid_back",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_ppl_arnold_6d_d3",
        "name": "Legs 1",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "leg_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_ppl_arnold_6d_d4",
        "name": "Chest & Back",
        "focus": [
          "chest",
          "lats",
          "mid_back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_ppl_arnold_6d_d5",
        "name": "Shoulders & Arms",
        "focus": [
          "shoulders",
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_skull_crusher_dumbbell",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_ppl_arnold_6d_d6",
        "name": "Legs 2",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "adv_powerbuilding_5d",
    "name": "5-Day Powerbuilding Specialization",
    "category": "hybrid",
    "environment": "gym",
    "target": "strength",
    "experience": "advanced",
    "daysPerWeek": 5,
    "gender": "male",
    "description": "Heavy compound lifts mixed with bodybuilding accessory work for massive strength and size.",
    "isCustom": false,
    "days": [
      {
        "id": "adv_powerbuilding_5d_d1",
        "name": "Heavy Squat & Lower",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "leg_press",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_powerbuilding_5d_d2",
        "name": "Heavy Bench & Upper",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "barbell_clean_and_press",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "triceps_skull_crusher_dumbbell",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_powerbuilding_5d_d3",
        "name": "Heavy Deadlift & Pull",
        "focus": [
          "hamstrings",
          "lats",
          "mid_back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_row",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_powerbuilding_5d_d4",
        "name": "Upper Hypertrophy",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_flat_bench_fly",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_powerbuilding_5d_d5",
        "name": "Lower Hypertrophy",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "adv_fatloss_6d",
    "name": "6-Day Advanced Fat Loss & Conditioning",
    "category": "full_body",
    "environment": "gym",
    "target": "fat_loss",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "male",
    "description": "High frequency, high volume, short rest periods. A grueling protocol to strip fat while retaining muscle.",
    "isCustom": false,
    "days": [
      {
        "id": "adv_fatloss_6d_d1",
        "name": "Upper Circuit A",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "cable_flat_bench_fly",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_fatloss_6d_d2",
        "name": "Lower Circuit A",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_fatloss_6d_d3",
        "name": "Cardio & Core Extreme",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "treadmill_steady_state_running",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "stationary_upright_bike_liss",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "q_l_stretch_seated",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_fatloss_6d_d4",
        "name": "Upper Circuit B",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "cable_flat_bench_fly",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_fatloss_6d_d5",
        "name": "Lower Circuit B",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_fatloss_6d_d6",
        "name": "HIIT & Abs",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "treadmill_steady_state_running",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "stationary_upright_bike_liss",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "q_l_stretch_seated",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "adv_chest_spec_5d",
    "name": "5-Day Chest/Back Specialization",
    "category": "bro_split",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 5,
    "gender": "male",
    "description": "Brings up a lagging torso by hitting chest and back multiple times a week with high volume.",
    "isCustom": false,
    "days": [
      {
        "id": "adv_chest_spec_5d_d1",
        "name": "Chest & Back Heavy",
        "focus": [
          "chest",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_chest_spec_5d_d2",
        "name": "Legs",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_chest_spec_5d_d3",
        "name": "Chest & Back Volume",
        "focus": [
          "chest",
          "lats",
          "mid_back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_chest_spec_5d_d4",
        "name": "Shoulders & Arms",
        "focus": [
          "shoulders",
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_skull_crusher_dumbbell",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_chest_spec_5d_d5",
        "name": "Chest & Back Pump",
        "focus": [
          "chest",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "adv_arm_spec_5d",
    "name": "5-Day Arm Specialization",
    "category": "bro_split",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 5,
    "gender": "male",
    "description": "Designed to blow up stubborn biceps and triceps through dedicated arm days and secondary stimulation.",
    "isCustom": false,
    "days": [
      {
        "id": "adv_arm_spec_5d_d1",
        "name": "Heavy Arms",
        "focus": [
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press_close_grip",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_preacher_curl",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_arm_spec_5d_d2",
        "name": "Legs",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_arm_spec_5d_d3",
        "name": "Chest & Back",
        "focus": [
          "chest",
          "lats",
          "mid_back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_arm_spec_5d_d4",
        "name": "Shoulders",
        "focus": [
          "shoulders",
          "traps"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_front_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_shrug",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_arm_spec_5d_d5",
        "name": "Arm Pump",
        "focus": [
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press_close_grip",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_preacher_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "adv_recomp_6d",
    "name": "6-Day Advanced Recomposition",
    "category": "ppl",
    "environment": "gym",
    "target": "recomposition",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "male",
    "description": "A calculated mix of heavy tension and metabolic stress designed to shift body composition rapidly.",
    "isCustom": false,
    "days": [
      {
        "id": "adv_recomp_6d_d1",
        "name": "Push Strength",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press_close_grip",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_recomp_6d_d2",
        "name": "Pull Strength",
        "focus": [
          "lats",
          "mid_back",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_row",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_recomp_6d_d3",
        "name": "Legs Strength",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "leg_press",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_recomp_6d_d4",
        "name": "Push Volume/Cardio",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_pec_deck_fly",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_lateral_raise_behind_back",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_recomp_6d_d5",
        "name": "Pull Volume/Cardio",
        "focus": [
          "lats",
          "mid_back",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_t_bar_row_machine",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_pullover_back",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_recomp_6d_d6",
        "name": "Legs Volume/Cardio",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "adv_ul_heavy_4d",
    "name": "4-Day Heavy Upper/Lower",
    "category": "upper_lower",
    "environment": "gym",
    "target": "strength",
    "experience": "advanced",
    "daysPerWeek": 4,
    "gender": "male",
    "description": "Low reps, high sets, long rest periods. Pure strength development for the advanced lifter.",
    "isCustom": false,
    "days": [
      {
        "id": "adv_ul_heavy_4d_d1",
        "name": "Upper Max Effort",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "barbell_clean_and_press",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "triceps_skull_crusher_dumbbell",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_ul_heavy_4d_d2",
        "name": "Lower Max Effort",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "leg_press",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_ul_heavy_4d_d3",
        "name": "Upper Dynamic/Volume",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "cable_flat_bench_fly",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_ul_heavy_4d_d4",
        "name": "Lower Dynamic/Volume",
        "focus": [
          "quads",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "adv_bro_5d",
    "name": "5-Day High Intensity Bro Split",
    "category": "bro_split",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 5,
    "gender": "male",
    "description": "A high-intensity, high-volume assault on single muscle groups utilizing drop sets, supersets, and failure training.",
    "isCustom": false,
    "days": [
      {
        "id": "adv_bro_5d_d1",
        "name": "Chest Annihilation",
        "focus": [
          "chest"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_pullover",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_bro_5d_d2",
        "name": "Back Annihilation",
        "focus": [
          "lats",
          "mid_back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_deadlift",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_bro_5d_d3",
        "name": "Leg Demolition",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "leg_press",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_reverse_lunge_glute_focus",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_calf_raise",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_bro_5d_d4",
        "name": "Shoulder Boulder",
        "focus": [
          "shoulders",
          "traps"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_front_raise",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_shrug",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_bro_5d_d5",
        "name": "Arm Assault",
        "focus": [
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 5,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press_close_grip",
            "sets": 5,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 5,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 5,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_preacher_curl",
            "sets": 5,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 5,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "adv_fb_6d",
    "name": "6-Day Advanced Full Body Frequency",
    "category": "full_body",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "male",
    "description": "Only for the elite. Training the entire body every day with extremely modulated daily volume and intensity to prevent CNS burnout.",
    "isCustom": false,
    "days": [
      {
        "id": "adv_fb_6d_d1",
        "name": "Full Body Heavy",
        "focus": [
          "chest",
          "quads",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 3,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_fb_6d_d2",
        "name": "Full Body Light",
        "focus": [
          "hamstrings",
          "shoulders",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_deadlift",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_clean_and_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_cable_kickback",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_fb_6d_d3",
        "name": "Full Body Medium",
        "focus": [
          "quads",
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "leg_press",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_crossover",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_fb_6d_d4",
        "name": "Full Body Heavy",
        "focus": [
          "chest",
          "quads",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 3,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "4-6",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_fb_6d_d5",
        "name": "Full Body Light",
        "focus": [
          "hamstrings",
          "shoulders",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_deadlift",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_clean_and_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_cable_kickback",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "adv_fb_6d_d6",
        "name": "Full Body Medium",
        "focus": [
          "quads",
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "leg_press",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_crossover",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_beg_bw_3d",
    "name": "3-Day Bodyweight Foundation",
    "category": "full_body",
    "environment": "home",
    "target": "general_fitness",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "male",
    "description": "A minimalist home routine using only bodyweight to build fundamental strength.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_beg_bw_3d_d1",
        "name": "Bodyweight A",
        "focus": [
          "chest",
          "quads",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "push_up",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_beg_bw_3d_d2",
        "name": "Bodyweight B",
        "focus": [
          "lats",
          "shoulders",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dips_ring",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_forward_lunge",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "thread_the_needle",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_beg_bw_3d_d3",
        "name": "Bodyweight C",
        "focus": [
          "chest",
          "quads",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "push_up",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_beg_db_3d",
    "name": "3-Day Dumbbell Full Body",
    "category": "full_body",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "male",
    "description": "Perfect introduction to weighted home workouts using a pair of dumbbells.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_beg_db_3d_d1",
        "name": "Dumbbell Full Body A",
        "focus": [
          "chest",
          "quads",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_beg_db_3d_d2",
        "name": "Dumbbell Full Body B",
        "focus": [
          "hamstrings",
          "lats",
          "chest"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_beg_db_3d_d3",
        "name": "Dumbbell Full Body C",
        "focus": [
          "chest",
          "quads",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_beg_min_2d",
    "name": "2-Day Minimalist Weekend Warrior (Home)",
    "category": "full_body",
    "environment": "home",
    "target": "endurance",
    "experience": "beginner",
    "daysPerWeek": 2,
    "gender": "male",
    "description": "Two intense days to get maximum results when time is limited.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_beg_min_2d_d1",
        "name": "Home Full Body 1",
        "focus": [
          "chest",
          "quads"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_beg_min_2d_d2",
        "name": "Home Full Body 2",
        "focus": [
          "hamstrings",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_beg_band_fatloss_3d",
    "name": "3-Day Band & Bodyweight Fat Loss",
    "category": "full_body",
    "environment": "home",
    "target": "fat_loss",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "male",
    "description": "Fast-paced circuit training combining bands and bodyweight to scorch calories.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_beg_band_fatloss_3d_d1",
        "name": "Band Circuit A",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "band_chest_press",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_row_seated",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_squat_curl_press_complex",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "banded_squat",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_standing_stiff_leg_deadlift",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_beg_band_fatloss_3d_d2",
        "name": "Cardio Core",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 4,
            "reps": "45 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 4,
            "reps": "45 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "mountain_climbers_rapid_cardio",
            "sets": 4,
            "reps": "45 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "jumping_jacks_standard_cardio",
            "sets": 4,
            "reps": "45 sec",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_beg_band_fatloss_3d_d3",
        "name": "Band Circuit B",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "band_chest_press",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_row_seated",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_squat_curl_press_complex",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "banded_squat",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_standing_stiff_leg_deadlift",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_beg_ul_4d",
    "name": "4-Day Dumbbell Upper/Lower",
    "category": "upper_lower",
    "environment": "home",
    "target": "strength",
    "experience": "beginner",
    "daysPerWeek": 4,
    "gender": "male",
    "description": "Build strength at home with a structured upper/lower dumbbell split.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_beg_ul_4d_d1",
        "name": "Upper Body",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_beg_ul_4d_d2",
        "name": "Lower Body",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_beg_ul_4d_d3",
        "name": "Upper Body 2",
        "focus": [
          "chest",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_beg_ul_4d_d4",
        "name": "Lower Body 2",
        "focus": [
          "quads",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_beg_bw_ppl_3d",
    "name": "3-Day Bodyweight PPL",
    "category": "ppl",
    "environment": "home",
    "target": "general_fitness",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "male",
    "description": "A calisthenics adaptation of Push/Pull/Legs for home use.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_beg_bw_ppl_3d_d1",
        "name": "Push (Chest/Tris)",
        "focus": [
          "chest",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 3,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 3,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_beg_bw_ppl_3d_d2",
        "name": "Pull (Back/Bis)",
        "focus": [
          "lats",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 3,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_beg_bw_ppl_3d_d3",
        "name": "Legs (Quads/Hams)",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_beg_kb_3d",
    "name": "3-Day Kettlebell Fundamentals",
    "category": "full_body",
    "environment": "home",
    "target": "strength",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "male",
    "description": "Master the kettlebell basics for full-body strength and conditioning.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_beg_kb_3d_d1",
        "name": "KB Full Body 1",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_swing",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_goblet_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_row_single_arm",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "single_arm_overhead_kettlebell_carry",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_beg_kb_3d_d2",
        "name": "KB Full Body 2",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_swing",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_goblet_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_row_single_arm",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "single_arm_overhead_kettlebell_carry",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_beg_kb_3d_d3",
        "name": "KB Full Body 3",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_swing",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_goblet_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_row_single_arm",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "single_arm_overhead_kettlebell_carry",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_int_ul_4d",
    "name": "4-Day Dumbbell Hypertrophy",
    "category": "upper_lower",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "male",
    "description": "Home muscle building maximizing dumbbell effectiveness with volume and intensity.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_int_ul_4d_d1",
        "name": "Upper Volume 1",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_ul_4d_d2",
        "name": "Lower Volume 1",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_ul_4d_d3",
        "name": "Upper Volume 2",
        "focus": [
          "chest",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_ul_4d_d4",
        "name": "Lower Volume 2",
        "focus": [
          "quads",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_int_bro_5d",
    "name": "5-Day Home Bro Split",
    "category": "bro_split",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 5,
    "gender": "male",
    "description": "The classic golden-era split adapted perfectly for a home dumbbell setup.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_int_bro_5d_d1",
        "name": "Chest",
        "focus": [
          "chest"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "push_up",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_bro_5d_d2",
        "name": "Back",
        "focus": [
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "superman",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_bro_5d_d3",
        "name": "Legs",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_bro_5d_d4",
        "name": "Shoulders",
        "focus": [
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bent_over_dumbbell_rear_delt_fly",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_front_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_bro_5d_d5",
        "name": "Arms",
        "focus": [
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_int_recomp_4d",
    "name": "4-Day Push/Pull Recomposition",
    "category": "hybrid",
    "environment": "home",
    "target": "recomposition",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "male",
    "description": "Recomp at home using a full-body push/pull structure to blend strength and burn.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_int_recomp_4d_d1",
        "name": "Push (Chest/Quads)",
        "focus": [
          "chest",
          "quads"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_recomp_4d_d2",
        "name": "Pull (Back/Hams)",
        "focus": [
          "lats",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_recomp_4d_d3",
        "name": "Cardio Push",
        "focus": [
          "chest",
          "cardio"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_recomp_4d_d4",
        "name": "Cardio Pull",
        "focus": [
          "lats",
          "cardio"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_int_kb_fatloss_4d",
    "name": "4-Day Kettlebell Fat Loss",
    "category": "full_body",
    "environment": "home",
    "target": "fat_loss",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "male",
    "description": "Intense kettlebell flows and complexes designed to strip fat quickly at home.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_int_kb_fatloss_4d_d1",
        "name": "KB Flow A",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_swing",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_goblet_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_row_single_arm",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "single_arm_overhead_kettlebell_carry",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_kb_fatloss_4d_d2",
        "name": "KB Flow B",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_swing",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_goblet_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_row_single_arm",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "single_arm_overhead_kettlebell_carry",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_kb_fatloss_4d_d3",
        "name": "HIIT Cardio",
        "focus": [
          "cardio"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "mountain_climbers_rapid_cardio",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "jumping_jacks_standard_cardio",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_kb_fatloss_4d_d4",
        "name": "KB Flow C",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_swing",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_goblet_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_row_single_arm",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "single_arm_overhead_kettlebell_carry",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_int_ppl_6d",
    "name": "6-Day Dumbbell PPL",
    "category": "ppl",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 6,
    "gender": "male",
    "description": "High frequency Push/Pull/Legs for maximum muscle growth using home dumbbells.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_int_ppl_6d_d1",
        "name": "Push 1",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_ppl_6d_d2",
        "name": "Pull 1",
        "focus": [
          "lats",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_ppl_6d_d3",
        "name": "Legs 1",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_ppl_6d_d4",
        "name": "Push 2",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_ppl_6d_d5",
        "name": "Pull 2",
        "focus": [
          "lats",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_ppl_6d_d6",
        "name": "Legs 2",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_int_db_3d",
    "name": "3-Day Intense DB Full Body",
    "category": "full_body",
    "environment": "home",
    "target": "strength",
    "experience": "intermediate",
    "daysPerWeek": 3,
    "gender": "male",
    "description": "A lower-frequency but higher-intensity dumbbell routine for strong foundational strength.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_int_db_3d_d1",
        "name": "Full Body Heavy A",
        "focus": [
          "chest",
          "quads",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_db_3d_d2",
        "name": "Full Body Heavy B",
        "focus": [
          "hamstrings",
          "shoulders",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_db_3d_d3",
        "name": "Full Body Volume",
        "focus": [
          "chest",
          "quads",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_int_cond_5d",
    "name": "5-Day Home Conditioning (BW & Jump Rope)",
    "category": "full_body",
    "environment": "home",
    "target": "endurance",
    "experience": "intermediate",
    "daysPerWeek": 5,
    "gender": "male",
    "description": "Focus heavily on stamina, heart health, and endurance without leaving the house.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_int_cond_5d_d1",
        "name": "Jump Rope & Core",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 5,
            "reps": "2 mins",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 5,
            "reps": "2 mins",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "mountain_climbers_rapid_cardio",
            "sets": 5,
            "reps": "2 mins",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "jumping_jacks_standard_cardio",
            "sets": 5,
            "reps": "2 mins",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_cond_5d_d2",
        "name": "Bodyweight Circuit",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "push_up",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_cond_5d_d3",
        "name": "Jump Rope HIIT",
        "focus": [
          "cardio"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 5,
            "reps": "1 min",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 5,
            "reps": "1 min",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "mountain_climbers_rapid_cardio",
            "sets": 5,
            "reps": "1 min",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "jumping_jacks_standard_cardio",
            "sets": 5,
            "reps": "1 min",
            "restSeconds": 30,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_cond_5d_d4",
        "name": "Bodyweight Circuit 2",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "dips_ring",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_forward_lunge",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "thread_the_needle",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_cond_5d_d5",
        "name": "Long Cardio",
        "focus": [
          "cardio"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 5,
            "reps": "3 mins",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 5,
            "reps": "3 mins",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "mountain_climbers_rapid_cardio",
            "sets": 5,
            "reps": "3 mins",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "jumping_jacks_standard_cardio",
            "sets": 5,
            "reps": "3 mins",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_int_cali_4d",
    "name": "4-Day Calisthenics Strength",
    "category": "upper_lower",
    "environment": "home",
    "target": "strength",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "male",
    "description": "Master your bodyweight with strict, high-tension calisthenics progressions.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_int_cali_4d_d1",
        "name": "Upper Tension",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "push_up",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_cali_4d_d2",
        "name": "Lower Power",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dips_ring",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_forward_lunge",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "thread_the_needle",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_cali_4d_d3",
        "name": "Upper Volume",
        "focus": [
          "chest",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "push_up",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_cali_4d_d4",
        "name": "Lower Volume",
        "focus": [
          "quads",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "dips_ring",
            "sets": 4,
            "reps": "20-25",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_forward_lunge",
            "sets": 4,
            "reps": "20-25",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "20-25",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "thread_the_needle",
            "sets": 4,
            "reps": "20-25",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 4,
            "reps": "20-25",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_int_arnold_5d",
    "name": "5-Day Home Arnold Split",
    "category": "arnold_split",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 5,
    "gender": "male",
    "description": "The famous Arnold split adjusted for home dumbbells.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_int_arnold_5d_d1",
        "name": "Chest & Back",
        "focus": [
          "chest",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "push_up",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_arnold_5d_d2",
        "name": "Shoulders & Arms",
        "focus": [
          "shoulders",
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bent_over_dumbbell_rear_delt_fly",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_front_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_arnold_5d_d3",
        "name": "Legs",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_arnold_5d_d4",
        "name": "Chest & Back 2",
        "focus": [
          "chest",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "superman",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_int_arnold_5d_d5",
        "name": "Shoulders & Arms 2",
        "focus": [
          "shoulders",
          "arms"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_adv_cali_6d",
    "name": "6-Day Calisthenics Hypertrophy PPL",
    "category": "ppl",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "male",
    "description": "Advanced bodyweight training requiring pull-up bars and dips to drive serious growth.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_adv_cali_6d_d1",
        "name": "Push Strict",
        "focus": [
          "chest",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dips_ring",
            "sets": 5,
            "reps": "Failure",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_forward_lunge",
            "sets": 5,
            "reps": "Failure",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 5,
            "reps": "Failure",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "thread_the_needle",
            "sets": 5,
            "reps": "Failure",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 5,
            "reps": "Failure",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_cali_6d_d2",
        "name": "Pull Strict",
        "focus": [
          "lats",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "push_up",
            "sets": 5,
            "reps": "Failure",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 5,
            "reps": "Failure",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "Failure",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 5,
            "reps": "Failure",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 5,
            "reps": "Failure",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_cali_6d_d3",
        "name": "Legs Explosive",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dips_ring",
            "sets": 5,
            "reps": "20-30",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_forward_lunge",
            "sets": 5,
            "reps": "20-30",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 5,
            "reps": "20-30",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "thread_the_needle",
            "sets": 5,
            "reps": "20-30",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 5,
            "reps": "20-30",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_cali_6d_d4",
        "name": "Push Volume",
        "focus": [
          "chest",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dips_ring",
            "sets": 4,
            "reps": "Failure",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_forward_lunge",
            "sets": 4,
            "reps": "Failure",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "Failure",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "thread_the_needle",
            "sets": 4,
            "reps": "Failure",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 4,
            "reps": "Failure",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_cali_6d_d5",
        "name": "Pull Volume",
        "focus": [
          "lats",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "push_up",
            "sets": 4,
            "reps": "Failure",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "Failure",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "Failure",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "Failure",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 4,
            "reps": "Failure",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_cali_6d_d6",
        "name": "Legs Volume",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dips_ring",
            "sets": 4,
            "reps": "20-30",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_forward_lunge",
            "sets": 4,
            "reps": "20-30",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "20-30",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "thread_the_needle",
            "sets": 4,
            "reps": "20-30",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 4,
            "reps": "20-30",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_adv_arnold_6d",
    "name": "6-Day Dumbbell Arnold Split",
    "category": "arnold_split",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "male",
    "description": "Ruthless volume for home gym warriors using dumbbells.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_adv_arnold_6d_d1",
        "name": "Chest/Back Heavy",
        "focus": [
          "chest",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "push_up",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_arnold_6d_d2",
        "name": "Shoulders/Arms",
        "focus": [
          "shoulders",
          "arms"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bent_over_dumbbell_rear_delt_fly",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_front_raise",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_arnold_6d_d3",
        "name": "Legs",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_arnold_6d_d4",
        "name": "Chest/Back Pump",
        "focus": [
          "chest",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "superman",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_arnold_6d_d5",
        "name": "Shoulders/Arms Pump",
        "focus": [
          "shoulders",
          "arms"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_arnold_6d_d6",
        "name": "Legs Pump",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_adv_power_5d",
    "name": "5-Day Home Powerbuilding (Heavy DBs)",
    "category": "upper_lower",
    "environment": "home",
    "target": "strength",
    "experience": "advanced",
    "daysPerWeek": 5,
    "gender": "male",
    "description": "Maximal strength focus using the heaviest dumbbells you own.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_adv_power_5d_d1",
        "name": "Heavy Lower",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_power_5d_d2",
        "name": "Heavy Upper",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_power_5d_d3",
        "name": "Leg Hypertrophy",
        "focus": [
          "quads",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_power_5d_d4",
        "name": "Push Hypertrophy",
        "focus": [
          "chest",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_power_5d_d5",
        "name": "Pull Hypertrophy",
        "focus": [
          "lats",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_adv_fatloss_6d",
    "name": "6-Day Extreme Fat Loss (HIIT + DBs)",
    "category": "full_body",
    "environment": "home",
    "target": "fat_loss",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "male",
    "description": "High intensity metabolic conditioning mixed with dumbbell resistance to strip fat fast.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_adv_fatloss_6d_d1",
        "name": "Full Body Burn A",
        "focus": [
          "chest",
          "quads"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_fatloss_6d_d2",
        "name": "MetCon Sprints",
        "focus": [
          "cardio"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 6,
            "reps": "45 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 6,
            "reps": "45 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "mountain_climbers_rapid_cardio",
            "sets": 6,
            "reps": "45 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "jumping_jacks_standard_cardio",
            "sets": 6,
            "reps": "45 sec",
            "restSeconds": 30,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_fatloss_6d_d3",
        "name": "Full Body Burn B",
        "focus": [
          "hamstrings",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_fatloss_6d_d4",
        "name": "MetCon Sprints 2",
        "focus": [
          "cardio"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 6,
            "reps": "45 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 6,
            "reps": "45 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "mountain_climbers_rapid_cardio",
            "sets": 6,
            "reps": "45 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "jumping_jacks_standard_cardio",
            "sets": 6,
            "reps": "45 sec",
            "restSeconds": 30,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_fatloss_6d_d5",
        "name": "Full Body Burn C",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "push_up",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_fatloss_6d_d6",
        "name": "Long Cardio",
        "focus": [
          "cardio"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 5,
            "reps": "2 mins",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 5,
            "reps": "2 mins",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "mountain_climbers_rapid_cardio",
            "sets": 5,
            "reps": "2 mins",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "jumping_jacks_standard_cardio",
            "sets": 5,
            "reps": "2 mins",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_adv_chestback_5d",
    "name": "5-Day Chest/Back Home Spec",
    "category": "bro_split",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 5,
    "gender": "male",
    "description": "Brings up the torso using home equipment with high frequency and volume.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_adv_chestback_5d_d1",
        "name": "Chest/Back Power",
        "focus": [
          "chest",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_chestback_5d_d2",
        "name": "Legs/Shoulders",
        "focus": [
          "quads",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_chestback_5d_d3",
        "name": "Chest/Back Volume",
        "focus": [
          "chest",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_chestback_5d_d4",
        "name": "Arms",
        "focus": [
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_chestback_5d_d5",
        "name": "Chest/Back Pump",
        "focus": [
          "chest",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "push_up",
            "sets": 3,
            "reps": "Failure",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "Failure",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "Failure",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 3,
            "reps": "Failure",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 3,
            "reps": "Failure",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_adv_arms_5d",
    "name": "5-Day Home Arm Specialization",
    "category": "bro_split",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 5,
    "gender": "male",
    "description": "Blow up your biceps and triceps using bands and dumbbells.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_adv_arms_5d_d1",
        "name": "Arm Dominance",
        "focus": [
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_arms_5d_d2",
        "name": "Legs",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_arms_5d_d3",
        "name": "Chest/Back",
        "focus": [
          "chest",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_arms_5d_d4",
        "name": "Shoulders",
        "focus": [
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bent_over_dumbbell_rear_delt_fly",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_front_raise",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_arms_5d_d5",
        "name": "Arm Pump (Bands)",
        "focus": [
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "band_chest_press",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_row_seated",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_squat_curl_press_complex",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "banded_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_standing_stiff_leg_deadlift",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_adv_kb_6d",
    "name": "6-Day Advanced Kettlebell Complex",
    "category": "full_body",
    "environment": "home",
    "target": "endurance",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "male",
    "description": "Brutal daily kettlebell complexes testing both grip, strength, and cardiovascular capacity.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_adv_kb_6d_d1",
        "name": "Complex A",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_swing",
            "sets": 5,
            "reps": "10-12",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_goblet_squat",
            "sets": 5,
            "reps": "10-12",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 5,
            "reps": "10-12",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_row_single_arm",
            "sets": 5,
            "reps": "10-12",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "single_arm_overhead_kettlebell_carry",
            "sets": 5,
            "reps": "10-12",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_kb_6d_d2",
        "name": "Complex B",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_swing",
            "sets": 5,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_goblet_squat",
            "sets": 5,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 5,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_row_single_arm",
            "sets": 5,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "single_arm_overhead_kettlebell_carry",
            "sets": 5,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_kb_6d_d3",
        "name": "KB Cardio",
        "focus": [
          "cardio"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "mountain_climbers_rapid_cardio",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "jumping_jacks_standard_cardio",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_kb_6d_d4",
        "name": "Complex C",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_swing",
            "sets": 5,
            "reps": "10-12",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_goblet_squat",
            "sets": 5,
            "reps": "10-12",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 5,
            "reps": "10-12",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_row_single_arm",
            "sets": 5,
            "reps": "10-12",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "single_arm_overhead_kettlebell_carry",
            "sets": 5,
            "reps": "10-12",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_kb_6d_d5",
        "name": "Complex D",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_swing",
            "sets": 5,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_goblet_squat",
            "sets": 5,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 5,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_row_single_arm",
            "sets": 5,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "single_arm_overhead_kettlebell_carry",
            "sets": 5,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_kb_6d_d6",
        "name": "KB Cardio",
        "focus": [
          "cardio"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "mountain_climbers_rapid_cardio",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "jumping_jacks_standard_cardio",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_adv_ul_4d",
    "name": "4-Day Heavy DB Upper/Lower",
    "category": "upper_lower",
    "environment": "home",
    "target": "strength",
    "experience": "advanced",
    "daysPerWeek": 4,
    "gender": "male",
    "description": "Pure home strength training demanding the heaviest dumbbells possible.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_adv_ul_4d_d1",
        "name": "Upper Max Effort",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_ul_4d_d2",
        "name": "Lower Max Effort",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 180,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_ul_4d_d3",
        "name": "Upper Repetition",
        "focus": [
          "chest",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_ul_4d_d4",
        "name": "Lower Repetition",
        "focus": [
          "quads",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "hm_adv_recomp_6d",
    "name": "6-Day Advanced Home Recomposition",
    "category": "hybrid",
    "environment": "home",
    "target": "recomposition",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "male",
    "description": "Masterful blend of heavy dumbbell strength days and metabolic bodyweight conditioning.",
    "isCustom": false,
    "days": [
      {
        "id": "hm_adv_recomp_6d_d1",
        "name": "Heavy DB Push",
        "focus": [
          "chest",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_recomp_6d_d2",
        "name": "Heavy DB Pull",
        "focus": [
          "lats",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "chin_up",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_recomp_6d_d3",
        "name": "Heavy DB Legs",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_recomp_6d_d4",
        "name": "BW Circuit Push",
        "focus": [
          "chest",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dips_ring",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_forward_lunge",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "thread_the_needle",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_recomp_6d_d5",
        "name": "BW Circuit Pull",
        "focus": [
          "lats",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "push_up",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "hm_adv_recomp_6d_d6",
        "name": "HIIT Cardio",
        "focus": [
          "cardio"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "mountain_climbers_rapid_cardio",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "jumping_jacks_standard_cardio",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_beg_fb_3d",
    "name": "3-Day Full Body Foundation",
    "category": "full_body",
    "environment": "gym",
    "target": "general_fitness",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "female",
    "description": "A solid entry point covering major movement patterns to build comprehensive strength.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_beg_fb_3d_d1",
        "name": "Full Body A",
        "focus": [
          "glutes",
          "quads",
          "chest"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_beg_fb_3d_d2",
        "name": "Full Body B",
        "focus": [
          "hamstrings",
          "shoulders",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_forward_lunge",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_beg_fb_3d_d3",
        "name": "Full Body C",
        "focus": [
          "quads",
          "glutes",
          "chest"
        ],
        "exercises": [
          {
            "exerciseId": "leg_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_beg_lower_3d",
    "name": "3-Day Lower Body Focus Intro",
    "category": "full_body",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "female",
    "description": "Full body structure that places early emphasis on building the lower body and glutes.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_beg_lower_3d_d1",
        "name": "Lower & Core",
        "focus": [
          "quads",
          "glutes",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_beg_lower_3d_d2",
        "name": "Upper & Core",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_beg_lower_3d_d3",
        "name": "Glutes & Legs",
        "focus": [
          "glutes",
          "quads",
          "abductors"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_kas_glute_bridge",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_reverse_lunge",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_cable_hip_abduction",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_beg_wellness_2d",
    "name": "2-Day Weekend Wellness",
    "category": "full_body",
    "environment": "gym",
    "target": "general_fitness",
    "experience": "beginner",
    "daysPerWeek": 2,
    "gender": "female",
    "description": "Perfect for busy schedules, hitting all major muscle groups twice a week.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_beg_wellness_2d_d1",
        "name": "Wellness Workout A",
        "focus": [
          "quads",
          "glutes",
          "chest"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_beg_wellness_2d_d2",
        "name": "Wellness Workout B",
        "focus": [
          "hamstrings",
          "lats",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_forward_lunge",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_beg_ul_4d",
    "name": "4-Day Upper/Lower Strength Intro",
    "category": "upper_lower",
    "environment": "gym",
    "target": "strength",
    "experience": "beginner",
    "daysPerWeek": 4,
    "gender": "female",
    "description": "An introduction to heavy lifting using a balanced upper/lower structure.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_beg_ul_4d_d1",
        "name": "Lower Strength",
        "focus": [
          "quads",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_beg_ul_4d_d2",
        "name": "Upper Strength",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 3,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_beg_ul_4d_d3",
        "name": "Lower Volume",
        "focus": [
          "quads",
          "glutes",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_seated_hip_abduction_plate_loaded",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_beg_ul_4d_d4",
        "name": "Upper Volume",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_beg_machine_3d",
    "name": "3-Day Machine & Cable Intro",
    "category": "full_body",
    "environment": "gym",
    "target": "fat_loss",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "female",
    "description": "Safe and effective fat loss training utilizing mostly machines and cables for beginners.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_beg_machine_3d_d1",
        "name": "Machine Circuit A",
        "focus": [
          "quads",
          "glutes",
          "chest"
        ],
        "exercises": [
          {
            "exerciseId": "leg_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_beg_machine_3d_d2",
        "name": "Cardio Core",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "treadmill_steady_state_running",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "stairmaster_stepmill_steady_climb",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_beg_machine_3d_d3",
        "name": "Machine Circuit B",
        "focus": [
          "hamstrings",
          "lats",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_forward_lunge",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_beg_ppl_3d",
    "name": "3-Day Push/Pull/Legs Intro",
    "category": "ppl",
    "environment": "gym",
    "target": "general_fitness",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "female",
    "description": "Fundamental Push/Pull/Legs rotation to efficiently cover all muscle groups.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_beg_ppl_3d_d1",
        "name": "Push Day",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_pec_deck_fly",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_cable_kickback",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_beg_ppl_3d_d2",
        "name": "Pull Day",
        "focus": [
          "lats",
          "mid_back",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "hyperextension_bench_back_extension_45_deg",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_beg_ppl_3d_d3",
        "name": "Legs Day",
        "focus": [
          "quads",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_beg_glute_4d",
    "name": "4-Day Glute & Core Foundation",
    "category": "upper_lower",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "beginner",
    "daysPerWeek": 4,
    "gender": "female",
    "description": "Build a strong foundation with an emphasis on core stability and glute development.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_beg_glute_4d_d1",
        "name": "Glute Focus 1",
        "focus": [
          "glutes",
          "quads"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_kas_glute_bridge",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_reverse_lunge",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_cable_hip_abduction",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_beg_glute_4d_d2",
        "name": "Upper & Core",
        "focus": [
          "chest",
          "back",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_beg_glute_4d_d3",
        "name": "Glute Focus 2",
        "focus": [
          "glutes",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_kas_glute_bridge",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_reverse_lunge",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_cable_hip_abduction",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_beg_glute_4d_d4",
        "name": "Cardio & Core",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "treadmill_steady_state_running",
            "sets": 3,
            "reps": "60 sec",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "stairmaster_stepmill_steady_climb",
            "sets": 3,
            "reps": "60 sec",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 3,
            "reps": "60 sec",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 3,
            "reps": "60 sec",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_int_ul_4d",
    "name": "4-Day Upper/Lower Hypertrophy",
    "category": "upper_lower",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "female",
    "description": "Balanced hypertrophy program maximizing growth across all major muscle groups.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_int_ul_4d_d1",
        "name": "Lower Hypertrophy 1",
        "focus": [
          "quads",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_seated_hip_abduction_plate_loaded",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_ul_4d_d2",
        "name": "Upper Hypertrophy 1",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_ul_4d_d3",
        "name": "Lower Hypertrophy 2",
        "focus": [
          "quads",
          "glutes",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_seated_hip_abduction_plate_loaded",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_ul_4d_d4",
        "name": "Upper Hypertrophy 2",
        "focus": [
          "chest",
          "lats",
          "arms"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_int_lower_emph_4d",
    "name": "4-Day Lower-Body Emphasis",
    "category": "upper_lower",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "female",
    "description": "Dedicates extra volume and intensity to the lower body while maintaining a strong, toned upper body.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_int_lower_emph_4d_d1",
        "name": "Heavy Lower",
        "focus": [
          "quads",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_lower_emph_4d_d2",
        "name": "Upper Maintenance",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_lower_emph_4d_d3",
        "name": "Glute Isolation",
        "focus": [
          "glutes",
          "abductors"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_kas_glute_bridge",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_reverse_lunge",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_cable_hip_abduction",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_lower_emph_4d_d4",
        "name": "Upper & Core",
        "focus": [
          "chest",
          "back",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_int_glute_spec_5d",
    "name": "5-Day Glute Specialization",
    "category": "bro_split",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 5,
    "gender": "female",
    "description": "Three dedicated lower-body days prioritizing maximum glute hypertrophy.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_int_glute_spec_5d_d1",
        "name": "Glute & Hamstring Power",
        "focus": [
          "glutes",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_glute_spec_5d_d2",
        "name": "Upper Body A",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 3,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_glute_spec_5d_d3",
        "name": "Glute Isolation",
        "focus": [
          "glutes",
          "abductors"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_kas_glute_bridge",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_reverse_lunge",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_cable_hip_abduction",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_glute_spec_5d_d4",
        "name": "Upper Body B",
        "focus": [
          "chest",
          "back",
          "arms"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_glute_spec_5d_d5",
        "name": "Quad & Glute Volume",
        "focus": [
          "quads",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_seated_hip_abduction_plate_loaded",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_int_recomp_4d",
    "name": "4-Day Push/Pull Recomposition",
    "category": "hybrid",
    "environment": "gym",
    "target": "recomposition",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "female",
    "description": "Push/Pull split combining strength and metabolic conditioning for body recomposition.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_int_recomp_4d_d1",
        "name": "Push Strength",
        "focus": [
          "chest",
          "quads",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_pec_deck_fly",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_cable_kickback",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_recomp_4d_d2",
        "name": "Pull Strength",
        "focus": [
          "lats",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "hyperextension_bench_back_extension_45_deg",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_recomp_4d_d3",
        "name": "Push Volume & Cardio",
        "focus": [
          "chest",
          "quads",
          "cardio"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_recomp_4d_d4",
        "name": "Pull Volume & Cardio",
        "focus": [
          "lats",
          "hamstrings",
          "cardio"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_forward_lunge",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_int_ppl_6d",
    "name": "6-Day PPL Hypertrophy",
    "category": "ppl",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 6,
    "gender": "female",
    "description": "A high-frequency training program designed for accelerated muscle growth across all body parts.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_int_ppl_6d_d1",
        "name": "Push 1",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_pec_deck_fly",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_cable_kickback",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_ppl_6d_d2",
        "name": "Pull 1",
        "focus": [
          "lats",
          "mid_back",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "hyperextension_bench_back_extension_45_deg",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_ppl_6d_d3",
        "name": "Legs 1",
        "focus": [
          "quads",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_ppl_6d_d4",
        "name": "Push 2",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_pec_deck_fly",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_cable_kickback",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_ppl_6d_d5",
        "name": "Pull 2",
        "focus": [
          "lats",
          "mid_back",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "hyperextension_bench_back_extension_45_deg",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_ppl_6d_d6",
        "name": "Legs 2",
        "focus": [
          "quads",
          "glutes",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_seated_hip_abduction_plate_loaded",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_int_hybrid_5d",
    "name": "5-Day Upper/Lower/Full Hybrid",
    "category": "hybrid",
    "environment": "gym",
    "target": "general_fitness",
    "experience": "intermediate",
    "daysPerWeek": 5,
    "gender": "female",
    "description": "A flexible and dynamic split for well-rounded strength and aesthetics.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_int_hybrid_5d_d1",
        "name": "Upper Strength",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_hybrid_5d_d2",
        "name": "Lower Strength",
        "focus": [
          "quads",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_hybrid_5d_d3",
        "name": "Upper Hypertrophy",
        "focus": [
          "chest",
          "back",
          "arms"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_hybrid_5d_d4",
        "name": "Lower Hypertrophy",
        "focus": [
          "quads",
          "glutes",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_seated_hip_abduction_plate_loaded",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_hybrid_5d_d5",
        "name": "Full Body & Core",
        "focus": [
          "full_body",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_int_power_4d",
    "name": "4-Day Powerbuilding for Women",
    "category": "upper_lower",
    "environment": "gym",
    "target": "strength",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "female",
    "description": "Focus heavily on compound lifts (Squat, Bench, Deadlift) while adding supportive accessory work.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_int_power_4d_d1",
        "name": "Heavy Squat Day",
        "focus": [
          "quads",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_power_4d_d2",
        "name": "Heavy Bench Day",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_power_4d_d3",
        "name": "Heavy Deadlift Day",
        "focus": [
          "hamstrings",
          "glutes",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "3-5",
            "restSeconds": 180,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_power_4d_d4",
        "name": "Upper Accessory",
        "focus": [
          "shoulders",
          "lats",
          "arms"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_int_bro_5d",
    "name": "5-Day Classic Bro Split (Women's Variation)",
    "category": "bro_split",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 5,
    "gender": "female",
    "description": "One major muscle group per day, allowing maximum effort and recovery. Designed with balanced proportions in mind.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_int_bro_5d_d1",
        "name": "Glutes & Hamstrings",
        "focus": [
          "glutes",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_kas_glute_bridge",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_reverse_lunge",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_cable_hip_abduction",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_bro_5d_d2",
        "name": "Back & Core",
        "focus": [
          "lats",
          "mid_back",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "hyperextension_bench_back_extension_45_deg",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_bro_5d_d3",
        "name": "Quads & Calves",
        "focus": [
          "quads",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_seated_hip_abduction_plate_loaded",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_bro_5d_d4",
        "name": "Shoulders & Chest",
        "focus": [
          "shoulders",
          "chest"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_pec_deck_fly",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_cable_kickback",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_bro_5d_d5",
        "name": "Arms & Abs",
        "focus": [
          "biceps",
          "triceps",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_int_metcon_4d",
    "name": "4-Day MetCon & Weights",
    "category": "hybrid",
    "environment": "gym",
    "target": "fat_loss",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "female",
    "description": "Fast-paced metabolic conditioning intertwined with resistance training to drop body fat efficiently.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_int_metcon_4d_d1",
        "name": "Full Body Weights A",
        "focus": [
          "quads",
          "glutes",
          "chest"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_metcon_4d_d2",
        "name": "MetCon Cardio",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "treadmill_steady_state_running",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "stairmaster_stepmill_steady_climb",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_metcon_4d_d3",
        "name": "Full Body Weights B",
        "focus": [
          "hamstrings",
          "shoulders",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_forward_lunge",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_metcon_4d_d4",
        "name": "MetCon Cardio 2",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "treadmill_steady_state_running",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "stairmaster_stepmill_steady_climb",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_int_heavy_fb_3d",
    "name": "3-Day Heavy Full Body",
    "category": "full_body",
    "environment": "gym",
    "target": "strength",
    "experience": "intermediate",
    "daysPerWeek": 3,
    "gender": "female",
    "description": "A low-frequency, high-intensity strength protocol requiring maximum effort per session.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_int_heavy_fb_3d_d1",
        "name": "Heavy Full Body A",
        "focus": [
          "quads",
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_heavy_fb_3d_d2",
        "name": "Heavy Full Body B",
        "focus": [
          "hamstrings",
          "shoulders",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_forward_lunge",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_int_heavy_fb_3d_d3",
        "name": "Heavy Full Body C",
        "focus": [
          "glutes",
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "leg_press",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_adv_glute_leg_6d",
    "name": "6-Day Glute & Leg Domination",
    "category": "hybrid",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "female",
    "description": "Intense lower-body focus hitting the legs and glutes 4 times a week, balanced with 2 upper body days.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_adv_glute_leg_6d_d1",
        "name": "Heavy Glutes/Hams",
        "focus": [
          "glutes",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_glute_leg_6d_d2",
        "name": "Upper Body Push",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_pec_deck_fly",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_cable_kickback",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_glute_leg_6d_d3",
        "name": "Quad Focus",
        "focus": [
          "quads",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_seated_hip_abduction_plate_loaded",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 5,
            "reps": "8-12",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_glute_leg_6d_d4",
        "name": "Upper Body Pull",
        "focus": [
          "lats",
          "biceps",
          "rear_delts"
        ],
        "exercises": [
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "hyperextension_bench_back_extension_45_deg",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_glute_leg_6d_d5",
        "name": "Glute Isolation",
        "focus": [
          "glutes",
          "abductors"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_kas_glute_bridge",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_reverse_lunge",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_cable_hip_abduction",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_glute_leg_6d_d6",
        "name": "Lower Body Pump",
        "focus": [
          "quads",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "leg_press",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_adv_ppl_6d",
    "name": "6-Day PPL Advanced Hypertrophy",
    "category": "ppl",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "female",
    "description": "Grueling push/pull/legs frequency requiring excellent nutrition and recovery to maximize aesthetic results.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_adv_ppl_6d_d1",
        "name": "Push Heavy",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "machine_pec_deck_fly",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_cable_kickback",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_ppl_6d_d2",
        "name": "Pull Heavy",
        "focus": [
          "lats",
          "mid_back",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "lat_pulldown",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "hyperextension_bench_back_extension_45_deg",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_ppl_6d_d3",
        "name": "Legs Heavy",
        "focus": [
          "quads",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 150,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_ppl_6d_d4",
        "name": "Push Pump",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_pec_deck_fly",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_cable_kickback",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_ppl_6d_d5",
        "name": "Pull Pump",
        "focus": [
          "lats",
          "mid_back",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "hyperextension_bench_back_extension_45_deg",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_ppl_6d_d6",
        "name": "Legs Pump",
        "focus": [
          "quads",
          "glutes",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_seated_hip_abduction_plate_loaded",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_adv_power_5d",
    "name": "5-Day Heavy Powerbuilding",
    "category": "hybrid",
    "environment": "gym",
    "target": "strength",
    "experience": "advanced",
    "daysPerWeek": 5,
    "gender": "female",
    "description": "Elite strength protocol combining the big lifts with targeted hypertrophy for a powerful, muscular physique.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_adv_power_5d_d1",
        "name": "Max Effort Squat",
        "focus": [
          "quads",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 5,
            "reps": "2-4",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 5,
            "reps": "2-4",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 5,
            "reps": "2-4",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 5,
            "reps": "2-4",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "2-4",
            "restSeconds": 240,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_power_5d_d2",
        "name": "Max Effort Bench",
        "focus": [
          "chest",
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "2-4",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 5,
            "reps": "2-4",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 5,
            "reps": "2-4",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "2-4",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 5,
            "reps": "2-4",
            "restSeconds": 240,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_power_5d_d3",
        "name": "Max Effort Deadlift",
        "focus": [
          "hamstrings",
          "glutes",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 5,
            "reps": "2-4",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 5,
            "reps": "2-4",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 5,
            "reps": "2-4",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 5,
            "reps": "2-4",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "2-4",
            "restSeconds": 240,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_power_5d_d4",
        "name": "Upper Hypertrophy",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_power_5d_d5",
        "name": "Lower Hypertrophy",
        "focus": [
          "quads",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_seated_hip_abduction_plate_loaded",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_adv_recomp_6d",
    "name": "6-Day Extreme Recomposition",
    "category": "hybrid",
    "environment": "gym",
    "target": "recomposition",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "female",
    "description": "Demanding daily variations in intensity and rep ranges to dramatically shift body composition.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_adv_recomp_6d_d1",
        "name": "Heavy Upper",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_recomp_6d_d2",
        "name": "Heavy Lower",
        "focus": [
          "quads",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_recomp_6d_d3",
        "name": "Cardio & Abs Extreme",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "treadmill_steady_state_running",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "stairmaster_stepmill_steady_climb",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_recomp_6d_d4",
        "name": "Upper Volume",
        "focus": [
          "chest",
          "back",
          "arms"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_recomp_6d_d5",
        "name": "Lower Volume",
        "focus": [
          "quads",
          "glutes",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_seated_hip_abduction_plate_loaded",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_recomp_6d_d6",
        "name": "Cardio & Abs Extreme 2",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "treadmill_steady_state_running",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "stairmaster_stepmill_steady_climb",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_adv_ul_5d",
    "name": "5-Day Upper/Lower Strength & Volume",
    "category": "upper_lower",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 5,
    "gender": "female",
    "description": "High training frequency utilizing heavy and light days across an asymmetrical 5-day week.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_adv_ul_5d_d1",
        "name": "Lower Strength",
        "focus": [
          "quads",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_ul_5d_d2",
        "name": "Upper Strength",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_ul_5d_d3",
        "name": "Lower Volume A",
        "focus": [
          "quads",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "leg_press",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_ul_5d_d4",
        "name": "Upper Volume",
        "focus": [
          "chest",
          "back",
          "arms"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_ul_5d_d5",
        "name": "Lower Volume B (Glute/Ham)",
        "focus": [
          "glutes",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_kas_glute_bridge",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_reverse_lunge",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_cable_hip_abduction",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_adv_bikini_6d",
    "name": "6-Day Bikini Competitor Prep",
    "category": "bro_split",
    "environment": "gym",
    "target": "fat_loss",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "female",
    "description": "Stage-ready prep program emphasizing glutes, shoulders, back width, and extremely low body fat.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_adv_bikini_6d_d1",
        "name": "Glutes & Hams Heavy",
        "focus": [
          "glutes",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_kas_glute_bridge",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_reverse_lunge",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_cable_hip_abduction",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_bikini_6d_d2",
        "name": "Shoulders & Triceps",
        "focus": [
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_pec_deck_fly",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_cable_kickback",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_bikini_6d_d3",
        "name": "Lats & Core",
        "focus": [
          "lats",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_row_seated",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "hyperextension_bench_back_extension_45_deg",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_bikini_6d_d4",
        "name": "Glutes & Quads Volume",
        "focus": [
          "glutes",
          "quads"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "machine_seated_hip_abduction_plate_loaded",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_bikini_6d_d5",
        "name": "Shoulders & Back Pump",
        "focus": [
          "shoulders",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_bikini_6d_d6",
        "name": "HIIT & Abs",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "treadmill_steady_state_running",
            "sets": 6,
            "reps": "45 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "stairmaster_stepmill_steady_climb",
            "sets": 6,
            "reps": "45 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 6,
            "reps": "45 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 6,
            "reps": "45 sec",
            "restSeconds": 30,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_adv_lower_heavy_4d",
    "name": "4-Day Heavy Lower Body Specialization",
    "category": "upper_lower",
    "environment": "gym",
    "target": "strength",
    "experience": "advanced",
    "daysPerWeek": 4,
    "gender": "female",
    "description": "Designed to drastically increase squat and deadlift numbers while building massive leg density.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_adv_lower_heavy_4d_d1",
        "name": "Squat Max Effort",
        "focus": [
          "quads",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_lower_heavy_4d_d2",
        "name": "Upper Body Maintenance",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_lower_heavy_4d_d3",
        "name": "Deadlift Max Effort",
        "focus": [
          "hamstrings",
          "glutes",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 6,
            "reps": "1-3",
            "restSeconds": 240,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_lower_heavy_4d_d4",
        "name": "Lower Accessory Volume",
        "focus": [
          "quads",
          "hamstrings",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "hack_squat",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "seated_leg_curl",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_leg_extension",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_seated_hip_abduction_plate_loaded",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_glute_kickback",
            "sets": 4,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_adv_arnold_5d",
    "name": "5-Day Arnold Split (Women's Advanced)",
    "category": "arnold_split",
    "environment": "gym",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 5,
    "gender": "female",
    "description": "High intensity Arnold Split adapted for advanced female aesthetics and proportions.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_adv_arnold_5d_d1",
        "name": "Chest & Back Heavy",
        "focus": [
          "chest",
          "lats",
          "mid_back"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_row",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_pushdown_rope",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_arnold_5d_d2",
        "name": "Legs Heavy",
        "focus": [
          "quads",
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_back_squat",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_romanian_deadlift",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_arnold_5d_d3",
        "name": "Shoulders & Arms Heavy",
        "focus": [
          "shoulders",
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_arnold_5d_d4",
        "name": "Legs & Glutes Volume",
        "focus": [
          "glutes",
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_b_stance_hip_thrust",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_kas_glute_bridge",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bodyweight_reverse_lunge",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "barbell_deadlift",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "machine_standing_cable_hip_abduction",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_adv_arnold_5d_d5",
        "name": "Chest, Back & Shoulders Pump",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "barbell_bench_press",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "lat_pulldown",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "cable_face_pull",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "barbell_biceps_curl",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_rope",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_beg_bw_3d",
    "name": "3-Day Bodyweight Full Body",
    "category": "full_body",
    "environment": "home",
    "target": "general_fitness",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "female",
    "description": "A solid entry point using just bodyweight to build fundamental strength at home.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_beg_bw_3d_d1",
        "name": "Bodyweight A",
        "focus": [
          "glutes",
          "quads",
          "chest"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_kas_glute_bridge",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "push_up",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bird_dog",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_beg_bw_3d_d2",
        "name": "Bodyweight B",
        "focus": [
          "hamstrings",
          "shoulders",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_kas_glute_bridge",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "push_up",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bird_dog",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_beg_bw_3d_d3",
        "name": "Bodyweight C",
        "focus": [
          "quads",
          "glutes",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_kas_glute_bridge",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "push_up",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bird_dog",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_beg_lower_3d",
    "name": "3-Day Lower-Body Focus",
    "category": "full_body",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "female",
    "description": "Home routines prioritizing glute and lower body development using dumbbells and bands.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_beg_lower_3d_d1",
        "name": "Lower & Core",
        "focus": [
          "quads",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_beg_lower_3d_d2",
        "name": "Upper & Core",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_beg_lower_3d_d3",
        "name": "Glutes & Legs",
        "focus": [
          "glutes",
          "abductors"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_glute_bridge",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_standing_glute_kickback",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_beg_wellness_2d",
    "name": "2-Day Weekend Wellness (Dumbbells)",
    "category": "full_body",
    "environment": "home",
    "target": "general_fitness",
    "experience": "beginner",
    "daysPerWeek": 2,
    "gender": "female",
    "description": "Perfect for busy schedules, hitting all major muscle groups twice a week with dumbbells.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_beg_wellness_2d_d1",
        "name": "Full Body A",
        "focus": [
          "quads",
          "glutes",
          "chest"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_beg_wellness_2d_d2",
        "name": "Full Body B",
        "focus": [
          "hamstrings",
          "lats",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_forward_lunge",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_beg_ul_4d",
    "name": "4-Day Upper/Lower Dumbbell Intro",
    "category": "upper_lower",
    "environment": "home",
    "target": "strength",
    "experience": "beginner",
    "daysPerWeek": 4,
    "gender": "female",
    "description": "An introduction to strength training with a balanced upper/lower dumbbell split.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_beg_ul_4d_d1",
        "name": "Lower Strength",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_beg_ul_4d_d2",
        "name": "Upper Strength",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 3,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_beg_ul_4d_d3",
        "name": "Lower Volume",
        "focus": [
          "quads",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_beg_ul_4d_d4",
        "name": "Upper Volume",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 3,
            "reps": "10-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_beg_band_fatloss_3d",
    "name": "3-Day Band & Bodyweight Fat Loss",
    "category": "full_body",
    "environment": "home",
    "target": "fat_loss",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "female",
    "description": "Fast-paced circuit training combining bands and bodyweight to scorch calories at home.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_beg_band_fatloss_3d_d1",
        "name": "Band Circuit A",
        "focus": [
          "quads",
          "glutes",
          "chest"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_beg_band_fatloss_3d_d2",
        "name": "Cardio Core",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 4,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_beg_band_fatloss_3d_d3",
        "name": "Band Circuit B",
        "focus": [
          "hamstrings",
          "lats",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_forward_lunge",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_beg_glute_3d",
    "name": "3-Day Glute & Core Foundation",
    "category": "upper_lower",
    "environment": "home",
    "target": "general_fitness",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "female",
    "description": "A minimalist routine establishing core stability and strong glutes.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_beg_glute_3d_d1",
        "name": "Glute Focus 1",
        "focus": [
          "glutes",
          "quads"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_glute_bridge",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_standing_glute_kickback",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_beg_glute_3d_d2",
        "name": "Upper & Core",
        "focus": [
          "chest",
          "back",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_beg_glute_3d_d3",
        "name": "Glute Focus 2",
        "focus": [
          "glutes",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_glute_bridge",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_standing_glute_kickback",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_beg_kb_3d",
    "name": "3-Day Kettlebell Basics",
    "category": "full_body",
    "environment": "home",
    "target": "strength",
    "experience": "beginner",
    "daysPerWeek": 3,
    "gender": "female",
    "description": "Master the kettlebell basics for full-body strength and conditioning at home.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_beg_kb_3d_d1",
        "name": "KB Full Body 1",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_swing",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_goblet_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_row_single_arm",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "single_arm_overhead_kettlebell_carry",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_beg_kb_3d_d2",
        "name": "KB Full Body 2",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_swing",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_goblet_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_row_single_arm",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "single_arm_overhead_kettlebell_carry",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_beg_kb_3d_d3",
        "name": "KB Full Body 3",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_swing",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_goblet_squat",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_row_single_arm",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "single_arm_overhead_kettlebell_carry",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_int_ul_4d",
    "name": "4-Day Upper/Lower DB Hypertrophy",
    "category": "upper_lower",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "female",
    "description": "Balanced hypertrophy program maximizing growth across all major muscle groups with dumbbells.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_int_ul_4d_d1",
        "name": "Lower Hypertrophy 1",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_ul_4d_d2",
        "name": "Upper Hypertrophy 1",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_ul_4d_d3",
        "name": "Lower Hypertrophy 2",
        "focus": [
          "quads",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_ul_4d_d4",
        "name": "Upper Hypertrophy 2",
        "focus": [
          "chest",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_int_lower_emph_4d",
    "name": "4-Day Glute Emphasis (DB & Bands)",
    "category": "upper_lower",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "female",
    "description": "Dedicates extra volume to the lower body while maintaining a toned upper body.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_int_lower_emph_4d_d1",
        "name": "Heavy Lower DB",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_lower_emph_4d_d2",
        "name": "Upper Maintenance",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_lower_emph_4d_d3",
        "name": "Glute Isolation",
        "focus": [
          "glutes",
          "abductors"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_glute_bridge",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_standing_glute_kickback",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_lower_emph_4d_d4",
        "name": "Upper & Core",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_int_glute_spec_5d",
    "name": "5-Day Glute Specialization (Home Edition)",
    "category": "bro_split",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 5,
    "gender": "female",
    "description": "Three dedicated lower-body days prioritizing maximum glute hypertrophy at home.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_int_glute_spec_5d_d1",
        "name": "Glute & Hamstring",
        "focus": [
          "glutes",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "8-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_glute_spec_5d_d2",
        "name": "Upper Body A",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 3,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_glute_spec_5d_d3",
        "name": "Glute Isolation",
        "focus": [
          "glutes",
          "abductors"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_glute_bridge",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_standing_glute_kickback",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_glute_spec_5d_d4",
        "name": "Upper Body B",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_glute_spec_5d_d5",
        "name": "Quad & Glute Volume",
        "focus": [
          "quads",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_int_recomp_4d",
    "name": "4-Day Push/Pull Recomposition",
    "category": "hybrid",
    "environment": "home",
    "target": "recomposition",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "female",
    "description": "Push/Pull split combining dumbbell strength and home metabolic conditioning.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_int_recomp_4d_d1",
        "name": "Push Strength",
        "focus": [
          "chest",
          "quads"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_recomp_4d_d2",
        "name": "Pull Strength",
        "focus": [
          "lats",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "superman",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_recomp_4d_d3",
        "name": "Push Volume & Cardio",
        "focus": [
          "chest",
          "quads"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_recomp_4d_d4",
        "name": "Pull Volume & Cardio",
        "focus": [
          "lats",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_forward_lunge",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_int_ppl_6d",
    "name": "6-Day PPL (Dumbbell)",
    "category": "ppl",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 6,
    "gender": "female",
    "description": "High-frequency home training program designed for accelerated muscle growth.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_int_ppl_6d_d1",
        "name": "Push 1",
        "focus": [
          "chest",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_ppl_6d_d2",
        "name": "Pull 1",
        "focus": [
          "lats",
          "mid_back"
        ],
        "exercises": [
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "superman",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_ppl_6d_d3",
        "name": "Legs 1",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_ppl_6d_d4",
        "name": "Push 2",
        "focus": [
          "chest",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_ppl_6d_d5",
        "name": "Pull 2",
        "focus": [
          "lats",
          "mid_back"
        ],
        "exercises": [
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "superman",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_ppl_6d_d6",
        "name": "Legs 2",
        "focus": [
          "quads",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_int_hybrid_5d",
    "name": "5-Day Bodyweight & DB Hybrid",
    "category": "hybrid",
    "environment": "home",
    "target": "general_fitness",
    "experience": "intermediate",
    "daysPerWeek": 5,
    "gender": "female",
    "description": "A flexible split blending calisthenics and dumbbell exercises.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_int_hybrid_5d_d1",
        "name": "Upper DB Strength",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_hybrid_5d_d2",
        "name": "Lower DB Strength",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_hybrid_5d_d3",
        "name": "Upper BW Volume",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_kas_glute_bridge",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "push_up",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "bird_dog",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_hybrid_5d_d4",
        "name": "Lower BW/Band Volume",
        "focus": [
          "glutes",
          "quads"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_glute_bridge",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_standing_glute_kickback",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_hybrid_5d_d5",
        "name": "Full Body & Core",
        "focus": [
          "full_body",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_int_kb_fatloss_4d",
    "name": "4-Day Kettlebell Fat Loss",
    "category": "full_body",
    "environment": "home",
    "target": "fat_loss",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "female",
    "description": "Intense kettlebell flows and complexes designed to strip fat quickly at home.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_int_kb_fatloss_4d_d1",
        "name": "KB Flow A",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_swing",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_goblet_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_row_single_arm",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "single_arm_overhead_kettlebell_carry",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_kb_fatloss_4d_d2",
        "name": "KB Flow B",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_swing",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_goblet_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_row_single_arm",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "single_arm_overhead_kettlebell_carry",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_kb_fatloss_4d_d3",
        "name": "HIIT Cardio",
        "focus": [
          "cardio"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_kb_fatloss_4d_d4",
        "name": "KB Flow C",
        "focus": [
          "full_body"
        ],
        "exercises": [
          {
            "exerciseId": "kettlebell_swing",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_goblet_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_bottoms_up_press_rotator",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "kettlebell_row_single_arm",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "single_arm_overhead_kettlebell_carry",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_int_bro_5d",
    "name": "5-Day Classic Split (Dumbbells)",
    "category": "bro_split",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "intermediate",
    "daysPerWeek": 5,
    "gender": "female",
    "description": "One major muscle group per day, adapted for a home dumbbell setup.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_int_bro_5d_d1",
        "name": "Glutes & Hamstrings",
        "focus": [
          "glutes",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_glute_bridge",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_standing_glute_kickback",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_bro_5d_d2",
        "name": "Back & Core",
        "focus": [
          "lats",
          "mid_back"
        ],
        "exercises": [
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "superman",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_bro_5d_d3",
        "name": "Quads & Calves",
        "focus": [
          "quads",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_bro_5d_d4",
        "name": "Shoulders & Chest",
        "focus": [
          "shoulders",
          "chest"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_bro_5d_d5",
        "name": "Arms & Abs",
        "focus": [
          "biceps",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 3,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_int_metcon_4d",
    "name": "4-Day Metabolic Conditioning",
    "category": "hybrid",
    "environment": "home",
    "target": "fat_loss",
    "experience": "intermediate",
    "daysPerWeek": 4,
    "gender": "female",
    "description": "Metabolic conditioning intertwined with resistance training to drop body fat efficiently.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_int_metcon_4d_d1",
        "name": "Weights A",
        "focus": [
          "quads",
          "glutes",
          "chest"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_metcon_4d_d2",
        "name": "MetCon Cardio",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_metcon_4d_d3",
        "name": "Weights B",
        "focus": [
          "hamstrings",
          "shoulders",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_forward_lunge",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_metcon_4d_d4",
        "name": "MetCon Cardio 2",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 5,
            "reps": "60 sec",
            "restSeconds": 30,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_int_heavy_fb_3d",
    "name": "3-Day Heavy DB Full Body",
    "category": "full_body",
    "environment": "home",
    "target": "strength",
    "experience": "intermediate",
    "daysPerWeek": 3,
    "gender": "female",
    "description": "A high-intensity strength protocol requiring maximum effort with heavy dumbbells.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_int_heavy_fb_3d_d1",
        "name": "Heavy Full Body A",
        "focus": [
          "quads",
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_heavy_fb_3d_d2",
        "name": "Heavy Full Body B",
        "focus": [
          "hamstrings",
          "shoulders",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_forward_lunge",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_int_heavy_fb_3d_d3",
        "name": "Heavy Full Body C",
        "focus": [
          "glutes",
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_adv_glute_6d",
    "name": "6-Day Glute & Leg Domination",
    "category": "hybrid",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "female",
    "description": "Intense lower-body focus hitting the legs and glutes 4 times a week using dumbbells and bands.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_adv_glute_6d_d1",
        "name": "Heavy Glutes/Hams",
        "focus": [
          "glutes",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_glute_6d_d2",
        "name": "Upper Body Push",
        "focus": [
          "chest",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_glute_6d_d3",
        "name": "Quad Focus",
        "focus": [
          "quads"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 5,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 5,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 5,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 5,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_glute_6d_d4",
        "name": "Upper Body Pull",
        "focus": [
          "lats",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "superman",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_glute_6d_d5",
        "name": "Glute Isolation",
        "focus": [
          "glutes",
          "abductors"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_glute_bridge",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_standing_glute_kickback",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_glute_6d_d6",
        "name": "Lower Pump",
        "focus": [
          "quads",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "20-25",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "20-25",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "20-25",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "20-25",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "20-25",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_adv_cali_6d",
    "name": "6-Day Calisthenics & DB Hypertrophy",
    "category": "ppl",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "female",
    "description": "Grueling push/pull/legs frequency combining strict bodyweight tension and dumbbell volume.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_adv_cali_6d_d1",
        "name": "Push Heavy",
        "focus": [
          "chest",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_cali_6d_d2",
        "name": "Pull Heavy",
        "focus": [
          "lats",
          "mid_back"
        ],
        "exercises": [
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "superman",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_cali_6d_d3",
        "name": "Legs Heavy",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_cali_6d_d4",
        "name": "Push BW Volume",
        "focus": [
          "chest",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_kas_glute_bridge",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "push_up",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "bird_dog",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_cali_6d_d5",
        "name": "Pull BW Volume",
        "focus": [
          "lats",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_kas_glute_bridge",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "push_up",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "bird_dog",
            "sets": 4,
            "reps": "AMRAP",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_cali_6d_d6",
        "name": "Legs DB/Band Volume",
        "focus": [
          "quads",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_glute_bridge",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_standing_glute_kickback",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_adv_power_5d",
    "name": "5-Day Heavy DB Powerbuilding",
    "category": "hybrid",
    "environment": "home",
    "target": "strength",
    "experience": "advanced",
    "daysPerWeek": 5,
    "gender": "female",
    "description": "Elite strength protocol combining the heaviest DBs with targeted hypertrophy for a muscular physique.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_adv_power_5d_d1",
        "name": "Heavy Lower A",
        "focus": [
          "quads",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_power_5d_d2",
        "name": "Heavy Upper",
        "focus": [
          "chest",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_power_5d_d3",
        "name": "Heavy Lower B",
        "focus": [
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_power_5d_d4",
        "name": "Upper Hypertrophy",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_power_5d_d5",
        "name": "Lower Hypertrophy",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_adv_recomp_6d",
    "name": "6-Day Extreme Home Recomposition",
    "category": "hybrid",
    "environment": "home",
    "target": "recomposition",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "female",
    "description": "Demanding daily variations in intensity and rep ranges to dramatically shift body composition at home.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_adv_recomp_6d_d1",
        "name": "Heavy Upper",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_recomp_6d_d2",
        "name": "Heavy Lower",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_recomp_6d_d3",
        "name": "Cardio Extreme",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_recomp_6d_d4",
        "name": "Upper Volume",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_recomp_6d_d5",
        "name": "Lower Volume",
        "focus": [
          "quads",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_recomp_6d_d6",
        "name": "Cardio Extreme 2",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 6,
            "reps": "60 sec",
            "restSeconds": 45,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_adv_ul_5d",
    "name": "5-Day Upper/Lower Strength & Volume",
    "category": "upper_lower",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 5,
    "gender": "female",
    "description": "High training frequency utilizing heavy and light days across an asymmetrical week.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_adv_ul_5d_d1",
        "name": "Lower Strength",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_ul_5d_d2",
        "name": "Upper Strength",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_ul_5d_d3",
        "name": "Lower Volume A",
        "focus": [
          "quads",
          "calves"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_ul_5d_d4",
        "name": "Upper Volume",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_ul_5d_d5",
        "name": "Lower Volume B (Glutes)",
        "focus": [
          "glutes",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_glute_bridge",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_standing_glute_kickback",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_adv_bikini_6d",
    "name": "6-Day Bikini Competitor Prep (Home)",
    "category": "bro_split",
    "environment": "home",
    "target": "fat_loss",
    "experience": "advanced",
    "daysPerWeek": 6,
    "gender": "female",
    "description": "Stage-ready prep program emphasizing glutes, shoulders, back width, and extremely low body fat.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_adv_bikini_6d_d1",
        "name": "Glutes & Hams",
        "focus": [
          "glutes",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_glute_bridge",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_standing_glute_kickback",
            "sets": 4,
            "reps": "10-12",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_bikini_6d_d2",
        "name": "Shoulders & Triceps",
        "focus": [
          "shoulders",
          "triceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_fly",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_bikini_6d_d3",
        "name": "Lats & Core",
        "focus": [
          "lats",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "superman",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_bikini_6d_d4",
        "name": "Glutes & Quads",
        "focus": [
          "glutes",
          "quads"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_bikini_6d_d5",
        "name": "Shoulders & Back",
        "focus": [
          "shoulders",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_bikini_6d_d6",
        "name": "HIIT & Abs",
        "focus": [
          "cardio",
          "core"
        ],
        "exercises": [
          {
            "exerciseId": "jump_rope_basic_two_foot_bounce",
            "sets": 6,
            "reps": "45 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "burpees_continuous_cardio_pace",
            "sets": 6,
            "reps": "45 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "side_plank_with_lateral_raise",
            "sets": 6,
            "reps": "45 sec",
            "restSeconds": 30,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_between_feet_lying_leg_raise",
            "sets": 6,
            "reps": "45 sec",
            "restSeconds": 30,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_adv_lower_heavy_4d",
    "name": "4-Day Heavy Lower Body Specialization",
    "category": "upper_lower",
    "environment": "home",
    "target": "strength",
    "experience": "advanced",
    "daysPerWeek": 4,
    "gender": "female",
    "description": "Designed to drastically increase home DB squat/deadlift numbers while building massive leg density.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_adv_lower_heavy_4d_d1",
        "name": "Squat Max Effort",
        "focus": [
          "quads",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 6,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 6,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 6,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 6,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 6,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_lower_heavy_4d_d2",
        "name": "Upper Body Maintenance",
        "focus": [
          "chest",
          "back"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 4,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_lower_heavy_4d_d3",
        "name": "Deadlift Max Effort",
        "focus": [
          "hamstrings",
          "glutes"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 6,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 6,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 6,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 6,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 6,
            "reps": "4-6",
            "restSeconds": 150,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_lower_heavy_4d_d4",
        "name": "Lower Accessory Volume",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 4,
            "reps": "12-15",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      }
    ]
  },
  {
    "id": "wm_hm_adv_arnold_5d",
    "name": "5-Day Advanced Arnold Split (Dumbbells)",
    "category": "arnold_split",
    "environment": "home",
    "target": "muscle_gain",
    "experience": "advanced",
    "daysPerWeek": 5,
    "gender": "female",
    "description": "High intensity Arnold Split adapted for advanced female aesthetics using dumbbells.",
    "isCustom": false,
    "days": [
      {
        "id": "wm_hm_adv_arnold_5d_d1",
        "name": "Chest & Back Heavy",
        "focus": [
          "chest",
          "lats"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_clean_and_press",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "pull_up",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "triceps_overhead_extension_dumbbell_seated",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_arnold_5d_d2",
        "name": "Legs Heavy",
        "focus": [
          "quads",
          "hamstrings"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_goblet_squat",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_romanian_deadlift",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_reverse_lunge_glute_focus",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          },
          {
            "exerciseId": "downward_dog",
            "sets": 5,
            "reps": "6-8",
            "restSeconds": 120,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_arnold_5d_d3",
        "name": "Shoulders & Arms Heavy",
        "focus": [
          "shoulders",
          "biceps"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 5,
            "reps": "8-10",
            "restSeconds": 90,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_arnold_5d_d4",
        "name": "Legs & Glutes Volume",
        "focus": [
          "glutes",
          "quads"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_single_leg_hip_thrust",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_glute_bridge",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_split_squat",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_seated_lateral_hip_abduction",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "band_standing_glute_kickback",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      },
      {
        "id": "wm_hm_adv_arnold_5d_d5",
        "name": "Upper Body Pump",
        "focus": [
          "chest",
          "back",
          "shoulders"
        ],
        "exercises": [
          {
            "exerciseId": "dumbbell_bench_press",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_row_single_arm",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_dumbbell_lateral_raise",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "standing_cable_reverse_fly",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "dumbbell_standing_alternating_curl",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          },
          {
            "exerciseId": "triceps_kickback_dumbbell",
            "sets": 4,
            "reps": "15-20",
            "restSeconds": 60,
            "notes": ""
          }
        ]
      }
    ]
  }
];
