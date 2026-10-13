const fs = require('fs');
const path = require('path');

const cardioExercises = [
  {
    "id": "treadmill_steady_state_running",
    "name": "Treadmill Steady-State Running",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "calves",
      "hamstrings",
      "glutes"
    ],
    "equipment": [
      "treadmill"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "beginner",
    "movement": "steady_state"
  },
  {
    "id": "treadmill_incline_walking",
    "name": "Treadmill Incline Walking (12-3-30)",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings"
    ],
    "equipment": [
      "treadmill"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "beginner",
    "movement": "steady_state"
  },
  {
    "id": "treadmill_sprint_intervals",
    "name": "Treadmill Sprint Intervals (HIIT)",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "hamstrings",
      "glutes",
      "calves"
    ],
    "equipment": [
      "treadmill"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "advanced",
    "movement": "sprint"
  },
  {
    "id": "outdoor_distance_running",
    "name": "Outdoor Distance Running",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "calves",
      "hamstrings",
      "glutes"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "steady_state"
  },
  {
    "id": "outdoor_tempo_run",
    "name": "Outdoor Tempo Run",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "calves",
      "hamstrings",
      "glutes"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "cardio"
  },
  {
    "id": "outdoor_hill_sprints",
    "name": "Outdoor Hill Sprints",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings",
      "calves",
      "quadriceps"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "advanced",
    "movement": "sprint"
  },
  {
    "id": "track_sprint_intervals_100m",
    "name": "Track 100m Sprint Intervals",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "hamstrings",
      "glutes",
      "quadriceps",
      "calves"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "advanced",
    "movement": "sprint"
  },
  {
    "id": "track_sprint_intervals_400m",
    "name": "Track 400m Sprint Intervals",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "hamstrings",
      "glutes",
      "calves"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "advanced",
    "movement": "sprint"
  },
  {
    "id": "fartlek_running_intervals",
    "name": "Fartlek Speed-Play Running",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "calves",
      "hamstrings"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "hiit"
  },
  {
    "id": "backward_treadmill_walking",
    "name": "Backward Treadmill Incline Walking",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "tibialis_anterior",
      "calves"
    ],
    "equipment": [
      "treadmill"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "beginner",
    "movement": "cardio"
  },
  {
    "id": "jogging_in_place_cardio",
    "name": "Jogging in Place",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "calves",
      "quadriceps"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "beginner",
    "movement": "cardio"
  },
  {
    "id": "high_knees_cardio_drill",
    "name": "High Knees Running in Place",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "hip_flexors",
      "quadriceps",
      "calves",
      "core"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "hiit"
  },
  {
    "id": "butt_kicks_cardio_drill",
    "name": "Butt Kicks Running Drill",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "hamstrings",
      "quadriceps",
      "calves"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "beginner",
    "movement": "cardio"
  },
  {
    "id": "shuttle_runs_agility_drill",
    "name": "Agility Shuttle Runs (Suicides)",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "glutes",
      "hamstrings",
      "calves"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "advanced",
    "movement": "hiit"
  },
  {
    "id": "lateral_shuffles_cardio_drill",
    "name": "Lateral Shuffles Drill",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "glutes",
      "abductors",
      "calves"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "beginner",
    "movement": "cardio"
  },
  {
    "id": "carioca_grapevine_agility_drill",
    "name": "Carioca Agility Footwork Drill",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "hip_flexors",
      "glutes",
      "calves"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "cardio"
  },
  {
    "id": "stationary_upright_bike_liss",
    "name": "Stationary Upright Bike (LISS)",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "hamstrings",
      "calves"
    ],
    "equipment": [
      "stationary_bike"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "beginner",
    "movement": "steady_state"
  },
  {
    "id": "stationary_recumbent_bike_cardio",
    "name": "Recumbent Exercise Bike Cardio",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "hamstrings",
      "calves"
    ],
    "equipment": [
      "stationary_bike"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "beginner",
    "movement": "steady_state"
  },
  {
    "id": "spin_bike_hiit_intervals",
    "name": "Spin Bike High-Intensity Intervals (HIIT)",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "glutes",
      "calves",
      "hamstrings"
    ],
    "equipment": [
      "stationary_bike"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "intermediate",
    "movement": "hiit"
  },
  {
    "id": "spin_bike_standing_hill_climb",
    "name": "Spin Bike Standing Hill Climb",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "glutes",
      "core",
      "calves"
    ],
    "equipment": [
      "stationary_bike"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "intermediate",
    "movement": "cardio"
  },
  {
    "id": "assault_air_bike_sprint_intervals",
    "name": "Assault Air Bike Tabata Sprints",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "shoulders",
      "lats",
      "calves"
    ],
    "equipment": [
      "air_bike"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "advanced",
    "movement": "hiit"
  },
  {
    "id": "assault_air_bike_aerobic_pace",
    "name": "Assault Air Bike Steady-State Aerobic Pace",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "shoulders",
      "upper_back"
    ],
    "equipment": [
      "air_bike"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "intermediate",
    "movement": "steady_state"
  },
  {
    "id": "road_cycling_endurance_ride",
    "name": "Outdoor Road Cycling Endurance",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "hamstrings",
      "glutes",
      "calves"
    ],
    "equipment": [
      "bicycle"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "steady_state"
  },
  {
    "id": "mountain_biking_trail_climb",
    "name": "Outdoor Mountain Biking Trail Ride",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "glutes",
      "core",
      "forearms"
    ],
    "equipment": [
      "bicycle"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "advanced",
    "movement": "cardio"
  },
  {
    "id": "concept2_rower_steady_state_5000m",
    "name": "Concept2 Rowing 5,000m Steady State",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "lats",
      "legs",
      "lower_back",
      "core"
    ],
    "equipment": [
      "rowing_machine"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "intermediate",
    "movement": "steady_state"
  },
  {
    "id": "concept2_rower_500m_sprint_intervals",
    "name": "Concept2 Rowing 500m Sprint Intervals",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "lats",
      "quadriceps",
      "glutes",
      "biceps",
      "core"
    ],
    "equipment": [
      "rowing_machine"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "advanced",
    "movement": "sprint"
  },
  {
    "id": "concept2_rower_pyramid_intervals",
    "name": "Concept2 Rowing Pyramid Intervals",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "lats",
      "quadriceps",
      "glutes",
      "hamstrings"
    ],
    "equipment": [
      "rowing_machine"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "advanced",
    "movement": "hiit"
  },
  {
    "id": "water_rower_aerobic_session",
    "name": "WaterRower Low-Impact Aerobic Row",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "lats",
      "legs",
      "core"
    ],
    "equipment": [
      "rowing_machine"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "beginner",
    "movement": "steady_state"
  },
  {
    "id": "skierg_steady_state_aerobic",
    "name": "Concept2 SkiErg Steady-State Aerobic",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "lats",
      "triceps",
      "core",
      "glutes"
    ],
    "equipment": [
      "skierg"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "intermediate",
    "movement": "steady_state"
  },
  {
    "id": "skierg_hiit_sprints",
    "name": "Concept2 SkiErg 30-Second Sprints",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "lats",
      "triceps",
      "core",
      "hamstrings"
    ],
    "equipment": [
      "skierg"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "advanced",
    "movement": "sprint"
  },
  {
    "id": "skierg_alternating_arm_pulls",
    "name": "Concept2 SkiErg Alternating Arm Pulls",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "lats",
      "triceps",
      "obliques",
      "core"
    ],
    "equipment": [
      "skierg"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "intermediate",
    "movement": "cardio"
  },
  {
    "id": "upper_body_ergometer_hand_cycle",
    "name": "Upper-Body Ergometer (UBE Hand Cycle)",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "shoulders",
      "chest",
      "upper_back",
      "arms"
    ],
    "equipment": [
      "machine"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "beginner",
    "movement": "steady_state"
  },
  {
    "id": "stairmaster_stepmill_steady_climb",
    "name": "StairMaster / StepMill Steady Climb",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "glutes",
      "quadriceps",
      "calves",
      "hamstrings"
    ],
    "equipment": [
      "stairmaster"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "intermediate",
    "movement": "steady_state"
  },
  {
    "id": "stairmaster_hiit_interval_climbs",
    "name": "StairMaster High-Intensity Interval Climbs",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "glutes",
      "quadriceps",
      "calves"
    ],
    "equipment": [
      "stairmaster"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "advanced",
    "movement": "hiit"
  },
  {
    "id": "stadium_stairs_sprints",
    "name": "Stadium Stairs Running Sprints",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "glutes",
      "quadriceps",
      "calves",
      "hamstrings"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "advanced",
    "movement": "sprint"
  },
  {
    "id": "aerobic_step_box_fast_step_ups",
    "name": "Aerobic Step-Bench Rapid Step-Ups",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "glutes",
      "calves"
    ],
    "equipment": [
      "step_bench"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "beginner",
    "movement": "cardio"
  },
  {
    "id": "lateral_stair_climbing_intervals",
    "name": "Lateral Stair Climbing Intervals",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "glutes",
      "abductors",
      "calves"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "cardio"
  },
  {
    "id": "jump_rope_basic_two_foot_bounce",
    "name": "Jump Rope Basic Two-Foot Bounce",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "calves",
      "forearms",
      "shoulders"
    ],
    "equipment": [
      "jump_rope"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "beginner",
    "movement": "cardio"
  },
  {
    "id": "jump_rope_boxer_alternating_skip",
    "name": "Jump Rope Boxer Skip (Alternating Step)",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "calves",
      "quadriceps",
      "forearms"
    ],
    "equipment": [
      "jump_rope"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "cardio"
  },
  {
    "id": "jump_rope_high_knees_sprint",
    "name": "Jump Rope High Knees Sprint",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "hip_flexors",
      "calves",
      "quadriceps"
    ],
    "equipment": [
      "jump_rope"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "advanced",
    "movement": "hiit"
  },
  {
    "id": "jump_rope_double_unders_crossfit",
    "name": "Jump Rope Double Unders",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "calves",
      "shoulders",
      "forearms"
    ],
    "equipment": [
      "jump_rope"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "advanced",
    "movement": "hiit"
  },
  {
    "id": "jump_rope_criss_cross_crossover",
    "name": "Jump Rope Criss-Cross",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "calves",
      "shoulders",
      "chest"
    ],
    "equipment": [
      "jump_rope"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "cardio"
  },
  {
    "id": "weighted_heavy_jump_rope_intervals",
    "name": "Weighted Heavy Jump Rope Intervals",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "shoulders",
      "forearms",
      "calves",
      "traps"
    ],
    "equipment": [
      "jump_rope"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "advanced",
    "movement": "hiit"
  },
  {
    "id": "speed_rope_sprint_intervals",
    "name": "Speed Rope 30-Second Sprints",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "calves",
      "forearms",
      "core"
    ],
    "equipment": [
      "jump_rope"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "sprint"
  },
  {
    "id": "jump_rope_skier_side_to_side",
    "name": "Jump Rope Skier Side-to-Side Bounces",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "calves",
      "abductors",
      "adductors"
    ],
    "equipment": [
      "jump_rope"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "cardio"
  },
  {
    "id": "elliptical_trainer_forward_stride",
    "name": "Elliptical Trainer Forward Stride",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "glutes",
      "hamstrings",
      "calves"
    ],
    "equipment": [
      "elliptical"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "beginner",
    "movement": "steady_state"
  },
  {
    "id": "elliptical_trainer_reverse_stride",
    "name": "Elliptical Trainer Reverse Stride",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "hamstrings",
      "glutes",
      "calves"
    ],
    "equipment": [
      "elliptical"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "beginner",
    "movement": "steady_state"
  },
  {
    "id": "cybex_arc_trainer_stride",
    "name": "Cybex Arc Trainer Incline Glide",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "glutes",
      "quadriceps",
      "hamstrings"
    ],
    "equipment": [
      "machine"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "intermediate",
    "movement": "steady_state"
  },
  {
    "id": "versaclimber_climbing_intervals",
    "name": "VersaClimber Cross-Crawl Intervals",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "lats",
      "quadriceps",
      "glutes",
      "shoulders"
    ],
    "equipment": [
      "machine"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "advanced",
    "movement": "hiit"
  },
  {
    "id": "jacobs_ladder_continuous_climb",
    "name": "Jacob's Ladder Continuous Climb",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "calves",
      "glutes",
      "core",
      "shoulders"
    ],
    "equipment": [
      "machine"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "advanced",
    "movement": "hiit"
  },
  {
    "id": "swimming_freestyle_front_crawl",
    "name": "Freestyle Front Crawl Lap Swimming",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "lats",
      "shoulders",
      "core",
      "quadriceps"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "steady_state"
  },
  {
    "id": "swimming_breaststroke_intervals",
    "name": "Breaststroke Swimming",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "chest",
      "adductors",
      "lats",
      "quadriceps"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "steady_state"
  },
  {
    "id": "swimming_backstroke_laps",
    "name": "Backstroke Lap Swimming",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "lats",
      "rear_delts",
      "hamstrings",
      "glutes"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "steady_state"
  },
  {
    "id": "swimming_butterfly_stroke_sprints",
    "name": "Butterfly Stroke Sprints",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "shoulders",
      "lats",
      "core",
      "glutes"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "advanced",
    "movement": "sprint"
  },
  {
    "id": "swimming_kickboard_flutter_kicks",
    "name": "Swimming Kickboard Flutter Kicks",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "hip_flexors",
      "calves"
    ],
    "equipment": [
      "kickboard"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "beginner",
    "movement": "cardio"
  },
  {
    "id": "deep_water_high_intensity_treading",
    "name": "Deep Water High-Intensity Treading",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "hip_flexors",
      "adductors",
      "quadriceps",
      "arms"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "cardio"
  },
  {
    "id": "jumping_jacks_standard_cardio",
    "name": "Standard Jumping Jacks",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "calves",
      "shoulders",
      "abductors"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "beginner",
    "movement": "cardio"
  },
  {
    "id": "seal_jacks_horizontal_cardio",
    "name": "Seal Jacks (Horizontal Arm Claps)",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "chest",
      "rear_delts",
      "calves"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "beginner",
    "movement": "cardio"
  },
  {
    "id": "star_jumps_plyometric_cardio",
    "name": "Star Jumps Plyometric Cardio",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "calves",
      "glutes",
      "shoulders"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "advanced",
    "movement": "hiit"
  },
  {
    "id": "mountain_climbers_rapid_cardio",
    "name": "Rapid Mountain Climbers",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "core",
      "hip_flexors",
      "shoulders",
      "quadriceps"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "hiit"
  },
  {
    "id": "cross_body_mountain_climbers_speed",
    "name": "Speed Cross-Body Mountain Climbers",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "obliques",
      "core",
      "hip_flexors",
      "shoulders"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "hiit"
  },
  {
    "id": "burpees_continuous_cardio_pace",
    "name": "Continuous Cardio Burpees",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "chest",
      "core",
      "glutes"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "hiit"
  },
  {
    "id": "half_burpees_rapid_squat_thrusts",
    "name": "Rapid Squat Thrusts (Half Burpees)",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "core",
      "quadriceps",
      "glutes",
      "shoulders"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "beginner",
    "movement": "cardio"
  },
  {
    "id": "skater_hops_lateral_bounds",
    "name": "Speed Skater Hops (Lateral Bounds)",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "glutes",
      "quadriceps",
      "calves",
      "abductors"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "cardio"
  },
  {
    "id": "tuck_jumps_explosive_cardio",
    "name": "Explosive Tuck Jumps",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "glutes",
      "calves",
      "hip_flexors"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "advanced",
    "movement": "hiit"
  },
  {
    "id": "plank_jacks_rapid_cardio",
    "name": "Plank Jacks Rapid Rhythm",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "core",
      "abductors",
      "shoulders"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "beginner",
    "movement": "cardio"
  },
  {
    "id": "fast_feet_agility_fire_drill",
    "name": "Fast Feet Football Drill",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "calves",
      "quadriceps",
      "hip_flexors"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "beginner",
    "movement": "cardio"
  },
  {
    "id": "shadow_boxing_speed_combos",
    "name": "Shadow Boxing Speed Combinations",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "shoulders",
      "core",
      "calves"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "beginner",
    "movement": "cardio"
  },
  {
    "id": "jumping_lunges_speed_intervals",
    "name": "Speed Alternating Jumping Lunges",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "glutes",
      "calves",
      "hamstrings"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "advanced",
    "movement": "hiit"
  },
  {
    "id": "air_squat_jumps_continuous",
    "name": "Continuous Air Squat Jumps",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "glutes",
      "calves"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "hiit"
  },
  {
    "id": "bear_crawl_forward_reverse_sprints",
    "name": "Bear Crawl Speed Sprints",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "shoulders",
      "core",
      "quadriceps"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "advanced",
    "movement": "hiit"
  },
  {
    "id": "battle_ropes_alternating_waves_intervals",
    "name": "Battle Ropes Alternating Waves Intervals",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "shoulders",
      "forearms",
      "core",
      "quadriceps"
    ],
    "equipment": [
      "battle_ropes"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "intermediate",
    "movement": "hiit"
  },
  {
    "id": "battle_ropes_double_arm_slam_cardio",
    "name": "Battle Ropes Double Arm Slam Sprints",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "lats",
      "shoulders",
      "core",
      "glutes"
    ],
    "equipment": [
      "battle_ropes"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "advanced",
    "movement": "hiit"
  },
  {
    "id": "prowler_sled_push_sprints",
    "name": "Prowler Sled Maximum Speed Push Sprints",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "calves",
      "glutes",
      "hamstrings"
    ],
    "equipment": [
      "sled"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "advanced",
    "movement": "sprint"
  },
  {
    "id": "backward_sled_drag_aerobic_walk",
    "name": "Backward Sled Drag Aerobic Conditioning",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "calves",
      "core"
    ],
    "equipment": [
      "sled"
    ],
    "environment": [
      "gym"
    ],
    "difficulty": "intermediate",
    "movement": "steady_state"
  },
  {
    "id": "medicine_ball_rapid_slam_intervals",
    "name": "Medicine Ball Rapid Overhead Slams",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "lats",
      "core",
      "shoulders",
      "glutes"
    ],
    "equipment": [
      "medicine_ball"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "hiit"
  },
  {
    "id": "kettlebell_swings_aerobic_emom",
    "name": "Kettlebell Two-Hand Swings (Aerobic EMOM)",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "glutes",
      "hamstrings",
      "lower_back",
      "core"
    ],
    "equipment": [
      "kettlebell"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "cardio"
  },
  {
    "id": "agility_ladder_rapid_ickey_shuffle",
    "name": "Agility Ladder Rapid Ickey Shuffle",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "calves",
      "hip_flexors",
      "quadriceps"
    ],
    "equipment": [
      "agility_ladder"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "cardio"
  },
  {
    "id": "agility_ladder_in_and_out_runs",
    "name": "Agility Ladder In-and-Out Sprints",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "calves",
      "adductors",
      "abductors"
    ],
    "equipment": [
      "agility_ladder"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "cardio"
  },
  {
    "id": "heavy_bag_boxing_rounds_conditioning",
    "name": "Heavy Bag Boxing 3-Minute Conditioning Rounds",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "shoulders",
      "core",
      "calves",
      "chest"
    ],
    "equipment": [
      "heavy_bag"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "hiit"
  },
  {
    "id": "power_walking_brisk_pace_liss",
    "name": "Brisk Power Walking (LISS)",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "calves",
      "glutes",
      "hamstrings",
      "tibialis_anterior"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "beginner",
    "movement": "steady_state"
  },
  {
    "id": "rucking_weighted_backpack_walk",
    "name": "Rucking (Weighted Pack Endurance Walk)",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "glutes",
      "traps",
      "calves",
      "core"
    ],
    "equipment": [
      "backpack"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "steady_state"
  },
  {
    "id": "incline_trail_hiking_cardio",
    "name": "Incline Outdoor Trail Hiking",
    "primaryMuscles": [
      "cardio"
    ],
    "secondaryMuscles": [
      "quadriceps",
      "glutes",
      "calves",
      "hamstrings"
    ],
    "equipment": [
      "bodyweight"
    ],
    "environment": [
      "both"
    ],
    "difficulty": "intermediate",
    "movement": "steady_state"
  }
];

const filePath = path.join(__dirname, 'frontend', 'src', 'data', 'exercises.js');
let existingContent = fs.readFileSync(filePath, 'utf-8');

let jsonStr = existingContent.replace('export const exercises = ', '').trim();
if (jsonStr.endsWith(';')) {
  jsonStr = jsonStr.slice(0, -1);
}

const exercises = JSON.parse(jsonStr);
const cardioIds = new Set(cardioExercises.map(e => e.id));
const filteredExercises = exercises.filter(e => !cardioIds.has(e.id));
filteredExercises.push(...cardioExercises);

const fileContent = 'export const exercises = ' + JSON.stringify(filteredExercises, null, 2) + ';\n';
fs.writeFileSync(filePath, fileContent, 'utf-8');

console.log(cardioExercises.length + ' cardio exercises were processed. Final total number of exercises in exercises.js is ' + filteredExercises.length + '.');
