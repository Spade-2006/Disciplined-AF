const fs = require('fs');
const path = require('path');

const mobilityExercises = [
  // NECK & THORACIC SPINE
  { id: "neck_circles", name: "Neck Circles", primaryMuscles: ["neck"], secondaryMuscles: ["traps"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "joint_rotation" },
  { id: "neck_lateral_stretch", name: "Lateral Neck Stretch", primaryMuscles: ["neck", "traps"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "neck_flexion_extension", name: "Neck Flexion and Extension", primaryMuscles: ["neck"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  { id: "chin_tucks", name: "Chin Tucks", primaryMuscles: ["neck"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  { id: "cat_cow", name: "Cat-Cow", primaryMuscles: ["lower_back", "mid_back"], secondaryMuscles: ["core"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  { id: "thread_the_needle", name: "Thread the Needle", primaryMuscles: ["mid_back", "shoulders"], secondaryMuscles: ["lower_back"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "dynamic_stretch" },
  { id: "open_book_stretch", name: "Open Book Stretch", primaryMuscles: ["mid_back", "chest"], secondaryMuscles: ["shoulders"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  { id: "thoracic_extension_foam_roller", name: "Thoracic Extension on Foam Roller", primaryMuscles: ["mid_back"], secondaryMuscles: ["chest"], equipment: ["foam_roller"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "thoracic_rotation_quadruped", name: "Quadruped Thoracic Rotation", primaryMuscles: ["mid_back"], secondaryMuscles: ["shoulders"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  { id: "wall_angels", name: "Wall Angels", primaryMuscles: ["mid_back", "shoulders"], secondaryMuscles: ["chest"], equipment: ["wall"], environment: ["both"], difficulty: "intermediate", movement: "active_mobility" },
  { id: "floor_angels", name: "Floor Angels", primaryMuscles: ["mid_back", "shoulders"], secondaryMuscles: ["chest"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  { id: "childs_pose", name: "Child's Pose", primaryMuscles: ["lats", "lower_back"], secondaryMuscles: ["shoulders"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "puppy_pose", name: "Puppy Pose", primaryMuscles: ["lats", "mid_back"], secondaryMuscles: ["chest", "shoulders"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "seated_thoracic_rotation", name: "Seated Thoracic Rotation", primaryMuscles: ["mid_back"], secondaryMuscles: ["core"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  
  // SHOULDERS, CHEST & UPPER BACK
  { id: "arm_circles_forward", name: "Arm Circles (Forward)", primaryMuscles: ["shoulders"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "joint_rotation" },
  { id: "arm_circles_backward", name: "Arm Circles (Backward)", primaryMuscles: ["shoulders"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "joint_rotation" },
  { id: "shoulder_dislocations_band", name: "Band Shoulder Dislocations", primaryMuscles: ["shoulders", "chest"], secondaryMuscles: ["lats"], equipment: ["resistance_band"], environment: ["both"], difficulty: "intermediate", movement: "dynamic_stretch" },
  { id: "shoulder_dislocations_stick", name: "Stick/PVC Shoulder Dislocations", primaryMuscles: ["shoulders", "chest"], secondaryMuscles: ["lats"], equipment: ["stick"], environment: ["gym"], difficulty: "intermediate", movement: "dynamic_stretch" },
  { id: "cross_body_shoulder_stretch", name: "Cross-Body Shoulder Stretch", primaryMuscles: ["rear_delts", "shoulders"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "overhead_triceps_stretch", name: "Overhead Triceps Stretch", primaryMuscles: ["triceps"], secondaryMuscles: ["lats"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "doorway_pec_stretch", name: "Doorway Pec Stretch", primaryMuscles: ["chest"], secondaryMuscles: ["front_delts"], equipment: ["wall"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "wall_chest_stretch", name: "Wall Chest Stretch", primaryMuscles: ["chest"], secondaryMuscles: ["front_delts", "biceps"], equipment: ["wall"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "band_pull_apart_warmup", name: "Band Pull-Apart (Warmup)", primaryMuscles: ["rear_delts", "mid_back"], secondaryMuscles: ["traps"], equipment: ["resistance_band"], environment: ["both"], difficulty: "beginner", movement: "warmup" },
  { id: "sleeper_stretch", name: "Sleeper Stretch", primaryMuscles: ["rotator_cuff"], secondaryMuscles: ["rear_delts"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "static_stretch" },
  { id: "scapular_push_up", name: "Scapular Push-Up", primaryMuscles: ["serratus", "mid_back"], secondaryMuscles: ["core"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  { id: "scapular_pull_up_warmup", name: "Scapular Pull-Up (Warmup)", primaryMuscles: ["mid_back", "lats"], secondaryMuscles: [], equipment: ["pull_up_bar"], environment: ["gym"], difficulty: "intermediate", movement: "active_mobility" },
  { id: "eagle_arms_stretch", name: "Eagle Arms Stretch", primaryMuscles: ["mid_back", "shoulders"], secondaryMuscles: ["traps"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "behind_the_back_chest_stretch", name: "Behind-the-Back Chest Stretch", primaryMuscles: ["chest", "front_delts"], secondaryMuscles: ["biceps"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "band_overhead_reach", name: "Banded Overhead Reach", primaryMuscles: ["lats", "shoulders"], secondaryMuscles: [], equipment: ["resistance_band"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  { id: "y_w_t_l_raises", name: "Y-W-T-L Prone Raises", primaryMuscles: ["mid_back", "rear_delts"], secondaryMuscles: ["lower_back"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },

  // WRISTS & ELBOWS
  { id: "wrist_circles", name: "Wrist Circles", primaryMuscles: ["forearms"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "joint_rotation" },
  { id: "wrist_flexion_stretch", name: "Wrist Flexion Stretch", primaryMuscles: ["forearms"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "wrist_extension_stretch", name: "Wrist Extension Stretch", primaryMuscles: ["forearms"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "quadruped_wrist_rocks", name: "Quadruped Wrist Rocks", primaryMuscles: ["forearms", "wrists"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  { id: "reverse_prayer_stretch", name: "Reverse Prayer Stretch", primaryMuscles: ["forearms", "wrists"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "static_stretch" },
  { id: "prayer_stretch", name: "Prayer Stretch", primaryMuscles: ["forearms", "wrists"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "elbow_circles", name: "Elbow Circles", primaryMuscles: ["forearms"], secondaryMuscles: ["biceps", "triceps"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "joint_rotation" },
  
  // LOWER BACK & CORE
  { id: "knee_to_chest", name: "Knee-to-Chest Stretch", primaryMuscles: ["lower_back", "glutes"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "double_knee_to_chest", name: "Double Knee-to-Chest", primaryMuscles: ["lower_back", "glutes"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "supine_spinal_twist", name: "Supine Spinal Twist", primaryMuscles: ["lower_back", "mid_back"], secondaryMuscles: ["glutes"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "cobra_pose", name: "Cobra Pose", primaryMuscles: ["core", "hip_flexors"], secondaryMuscles: ["chest"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "sphinx_pose", name: "Sphinx Pose", primaryMuscles: ["lower_back", "core"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "pelvic_tilts", name: "Pelvic Tilts", primaryMuscles: ["lower_back", "core"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  { id: "lumbar_rotation_wipers", name: "Lumbar Rotation (Windshield Wipers - Floor)", primaryMuscles: ["lower_back"], secondaryMuscles: ["core"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  { id: "jefferson_curl_light", name: "Jefferson Curl (Bodyweight/Light)", primaryMuscles: ["lower_back", "hamstrings"], secondaryMuscles: ["mid_back"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "active_mobility" },
  { id: "q_l_stretch_seated", name: "Seated QL Stretch", primaryMuscles: ["lower_back", "obliques"], secondaryMuscles: ["lats"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "static_stretch" },

  // HIPS, GLUTES & ADDUCTORS
  { id: "worlds_greatest_stretch", name: "World's Greatest Stretch", primaryMuscles: ["hip_flexors", "mid_back"], secondaryMuscles: ["hamstrings", "glutes"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "dynamic_stretch" },
  { id: "spiderman_lunge", name: "Spiderman Lunge", primaryMuscles: ["hip_flexors", "groin"], secondaryMuscles: ["glutes"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "dynamic_stretch" },
  { id: "couch_stretch", name: "Couch Stretch", primaryMuscles: ["quadriceps", "hip_flexors"], secondaryMuscles: [], equipment: ["wall", "bench"], environment: ["both"], difficulty: "intermediate", movement: "static_stretch" },
  { id: "kneeling_hip_flexor_stretch", name: "Kneeling Hip Flexor Stretch", primaryMuscles: ["hip_flexors"], secondaryMuscles: ["quadriceps"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "banded_hip_distraction", name: "Banded Hip Distraction", primaryMuscles: ["hips", "glutes"], secondaryMuscles: [], equipment: ["resistance_band"], environment: ["gym"], difficulty: "intermediate", movement: "active_mobility" },
  { id: "ninety_ninety_hip_stretch", name: "90/90 Hip Stretch", primaryMuscles: ["hips", "glutes"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "active_mobility" },
  { id: "ninety_ninety_transitions", name: "90/90 Hip Transitions", primaryMuscles: ["hips", "glutes"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "active_mobility" },
  { id: "pigeon_pose", name: "Pigeon Pose", primaryMuscles: ["glutes", "hips"], secondaryMuscles: ["lower_back"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "static_stretch" },
  { id: "elevated_pigeon_stretch", name: "Elevated Pigeon Stretch", primaryMuscles: ["glutes", "hips"], secondaryMuscles: ["lower_back"], equipment: ["bench"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "deep_squat_hold", name: "Deep Squat Hold (Asian Squat)", primaryMuscles: ["hips", "ankles"], secondaryMuscles: ["glutes"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "static_stretch" },
  { id: "butterfly_stretch", name: "Butterfly Stretch", primaryMuscles: ["groin", "adductors"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "frog_stretch", name: "Frog Stretch", primaryMuscles: ["groin", "adductors"], secondaryMuscles: ["hips"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "static_stretch" },
  { id: "cossack_squat_mobility", name: "Cossack Squat (Mobility Focus)", primaryMuscles: ["adductors", "hips"], secondaryMuscles: ["glutes", "quadriceps"], equipment: ["bodyweight"], environment: ["both"], difficulty: "advanced", movement: "active_mobility" },
  { id: "supine_figure_four", name: "Supine Figure 4 Stretch", primaryMuscles: ["glutes", "hips"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "seated_glute_stretch", name: "Seated Glute Stretch", primaryMuscles: ["glutes", "hips"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "hip_circles", name: "Hip Circles", primaryMuscles: ["hips"], secondaryMuscles: ["lower_back"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "joint_rotation" },
  { id: "leg_swings_forward_back", name: "Leg Swings (Forward/Back)", primaryMuscles: ["hip_flexors", "hamstrings"], secondaryMuscles: ["glutes"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "dynamic_stretch" },
  { id: "leg_swings_side_to_side", name: "Leg Swings (Side-to-Side)", primaryMuscles: ["adductors", "abductors"], secondaryMuscles: ["hips"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "dynamic_stretch" },
  { id: "fire_hydrant_circles", name: "Fire Hydrant Circles", primaryMuscles: ["hips", "glutes"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },

  // QUADS & HAMSTRINGS
  { id: "standing_quad_stretch", name: "Standing Quad Stretch", primaryMuscles: ["quadriceps"], secondaryMuscles: ["hip_flexors"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "lying_quad_stretch", name: "Lying Quad Stretch", primaryMuscles: ["quadriceps"], secondaryMuscles: ["hip_flexors"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "kneeling_quad_stretch", name: "Kneeling Quad Stretch", primaryMuscles: ["quadriceps", "hip_flexors"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "static_stretch" },
  { id: "standing_forward_fold", name: "Standing Forward Fold", primaryMuscles: ["hamstrings"], secondaryMuscles: ["lower_back", "calves"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "seated_forward_fold", name: "Seated Forward Fold", primaryMuscles: ["hamstrings"], secondaryMuscles: ["lower_back"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "elephant_walks", name: "Elephant Walks", primaryMuscles: ["hamstrings"], secondaryMuscles: ["calves"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  { id: "supine_hamstring_stretch_band", name: "Supine Hamstring Stretch (Band)", primaryMuscles: ["hamstrings"], secondaryMuscles: ["calves"], equipment: ["resistance_band"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "hurdler_stretch", name: "Hurdler Stretch", primaryMuscles: ["hamstrings"], secondaryMuscles: ["lower_back"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "straddle_stretch", name: "Straddle Stretch", primaryMuscles: ["adductors", "hamstrings"], secondaryMuscles: ["lower_back"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "static_stretch" },
  { id: "frankenstein_walk", name: "Frankenstein Walk", primaryMuscles: ["hamstrings"], secondaryMuscles: ["hip_flexors"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "dynamic_stretch" },
  { id: "foam_roll_quads", name: "Foam Roll Quads", primaryMuscles: ["quadriceps"], secondaryMuscles: [], equipment: ["foam_roller"], environment: ["both"], difficulty: "beginner", movement: "cooldown" },
  { id: "foam_roll_hamstrings", name: "Foam Roll Hamstrings", primaryMuscles: ["hamstrings"], secondaryMuscles: [], equipment: ["foam_roller"], environment: ["both"], difficulty: "beginner", movement: "cooldown" },
  
  // ANKLES & CALVES
  { id: "downward_dog", name: "Downward Facing Dog", primaryMuscles: ["calves", "hamstrings"], secondaryMuscles: ["shoulders", "mid_back"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "wall_calf_stretch", name: "Wall Calf Stretch", primaryMuscles: ["calves"], secondaryMuscles: ["ankles"], equipment: ["wall"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "knee_to_wall_ankle_mobility", name: "Knee-to-Wall Ankle Mobilization", primaryMuscles: ["ankles", "calves"], secondaryMuscles: [], equipment: ["wall"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  { id: "heel_drops", name: "Heel Drops (Stairs)", primaryMuscles: ["calves"], secondaryMuscles: ["ankles"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  { id: "ankle_circles", name: "Ankle Circles", primaryMuscles: ["ankles"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "joint_rotation" },
  { id: "banded_ankle_distraction", name: "Banded Ankle Distraction", primaryMuscles: ["ankles"], secondaryMuscles: ["calves"], equipment: ["resistance_band"], environment: ["gym"], difficulty: "intermediate", movement: "active_mobility" },
  { id: "seiza_sit", name: "Seiza Sit (Ankle Stretch)", primaryMuscles: ["ankles", "shins"], secondaryMuscles: ["quadriceps"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "static_stretch" },
  { id: "foam_roll_calves", name: "Foam Roll Calves", primaryMuscles: ["calves"], secondaryMuscles: [], equipment: ["foam_roller"], environment: ["both"], difficulty: "beginner", movement: "cooldown" },

  // CONTROLLED ARTICULAR ROTATIONS (CARs)
  { id: "neck_cars", name: "Neck CARs", primaryMuscles: ["neck"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "controlled_articular_rotation" },
  { id: "shoulder_cars", name: "Shoulder CARs", primaryMuscles: ["shoulders", "rotator_cuff"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "controlled_articular_rotation" },
  { id: "scapular_cars", name: "Scapular CARs", primaryMuscles: ["mid_back", "serratus"], secondaryMuscles: ["traps"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "controlled_articular_rotation" },
  { id: "spine_cars", name: "Spine CARs", primaryMuscles: ["core", "lower_back"], secondaryMuscles: ["mid_back"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "controlled_articular_rotation" },
  { id: "hip_cars", name: "Hip CARs", primaryMuscles: ["hips", "glutes"], secondaryMuscles: ["hip_flexors"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "controlled_articular_rotation" },
  { id: "knee_cars", name: "Knee CARs", primaryMuscles: ["knees", "hamstrings"], secondaryMuscles: ["quadriceps"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "controlled_articular_rotation" },
  { id: "ankle_cars", name: "Ankle CARs", primaryMuscles: ["ankles"], secondaryMuscles: ["calves", "shins"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "controlled_articular_rotation" },
  { id: "wrist_cars", name: "Wrist CARs", primaryMuscles: ["wrists", "forearms"], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "controlled_articular_rotation" },
  
  // FULL BODY, DYNAMIC WARM-UPS & RECOVERY
  { id: "inchworm", name: "Inchworm", primaryMuscles: ["core", "hamstrings"], secondaryMuscles: ["shoulders", "chest"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "dynamic_stretch" },
  { id: "inchworm_with_pushup", name: "Inchworm with Push-Up", primaryMuscles: ["core", "chest", "hamstrings"], secondaryMuscles: ["shoulders", "triceps"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "dynamic_stretch" },
  { id: "bear_crawl_warmup", name: "Bear Crawl", primaryMuscles: ["core", "shoulders"], secondaryMuscles: ["quadriceps"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "warmup" },
  { id: "crab_walk", name: "Crab Walk", primaryMuscles: ["triceps", "shoulders"], secondaryMuscles: ["core", "glutes"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "warmup" },
  { id: "jumping_jacks", name: "Jumping Jacks", primaryMuscles: ["calves"], secondaryMuscles: ["shoulders", "core"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "warmup" },
  { id: "high_knees", name: "High Knees", primaryMuscles: ["hip_flexors", "calves"], secondaryMuscles: ["core"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "warmup" },
  { id: "butt_kicks", name: "Butt Kicks", primaryMuscles: ["hamstrings"], secondaryMuscles: ["quadriceps"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "warmup" },
  { id: "walking_lunge_with_twist", name: "Walking Lunge with Twist", primaryMuscles: ["quadriceps", "glutes"], secondaryMuscles: ["core", "obliques"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "dynamic_stretch" },
  { id: "a_skips", name: "A-Skips", primaryMuscles: ["calves", "hip_flexors"], secondaryMuscles: ["core", "glutes"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "warmup" },
  { id: "carioca", name: "Carioca / Grapevine", primaryMuscles: ["hips", "adductors"], secondaryMuscles: ["core", "calves"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "warmup" },
  { id: "side_shuffles", name: "Side Shuffles", primaryMuscles: ["glutes", "abductors"], secondaryMuscles: ["quadriceps", "calves"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "warmup" },
  { id: "foam_roll_upper_back", name: "Foam Roll Upper Back", primaryMuscles: ["mid_back", "traps"], secondaryMuscles: [], equipment: ["foam_roller"], environment: ["both"], difficulty: "beginner", movement: "cooldown" },
  { id: "foam_roll_lats", name: "Foam Roll Lats", primaryMuscles: ["lats"], secondaryMuscles: [], equipment: ["foam_roller"], environment: ["both"], difficulty: "beginner", movement: "cooldown" },
  { id: "foam_roll_it_band", name: "Foam Roll IT Band", primaryMuscles: ["abductors"], secondaryMuscles: [], equipment: ["foam_roller"], environment: ["both"], difficulty: "intermediate", movement: "cooldown" },
  { id: "foam_roll_glutes", name: "Foam Roll Glutes", primaryMuscles: ["glutes"], secondaryMuscles: [], equipment: ["foam_roller"], environment: ["both"], difficulty: "beginner", movement: "cooldown" },
  { id: "corpse_pose", name: "Savasana (Corpse Pose)", primaryMuscles: [], secondaryMuscles: [], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "cooldown" }
,
  { id: "lacrosse_ball_pec_release", name: "Lacrosse Ball Pec Release", primaryMuscles: ["chest"], secondaryMuscles: ["front_delts"], equipment: ["lacrosse_ball"], environment: ["both"], difficulty: "intermediate", movement: "active_mobility" },
  { id: "lacrosse_ball_glute_release", name: "Lacrosse Ball Glute Release", primaryMuscles: ["glutes"], secondaryMuscles: ["hips"], equipment: ["lacrosse_ball"], environment: ["both"], difficulty: "intermediate", movement: "active_mobility" },
  { id: "lacrosse_ball_foot_release", name: "Lacrosse Ball Plantar Fascia Release", primaryMuscles: ["ankles","feet"], secondaryMuscles: [], equipment: ["lacrosse_ball"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  { id: "dynamic_calf_stretch", name: "Dynamic Calf Stretch (Pedaling)", primaryMuscles: ["calves"], secondaryMuscles: ["ankles"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "dynamic_stretch" },
  { id: "seated_pigeon_pose", name: "Seated Pigeon (Chair)", primaryMuscles: ["glutes","hips"], secondaryMuscles: [], equipment: ["bench"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "standing_pigeon_pose", name: "Standing Pigeon (Box/Bench)", primaryMuscles: ["glutes","hips"], secondaryMuscles: [], equipment: ["bench"], environment: ["gym"], difficulty: "intermediate", movement: "static_stretch" },
  { id: "half_kneeling_thoracic_rotation", name: "Half-Kneeling Thoracic Rotation", primaryMuscles: ["mid_back"], secondaryMuscles: ["core"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "active_mobility" },
  { id: "supine_chest_stretch_roller", name: "Supine Chest Stretch on Foam Roller", primaryMuscles: ["chest"], secondaryMuscles: ["shoulders"], equipment: ["foam_roller"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "seated_neck_stretch", name: "Seated Trap/Neck Stretch", primaryMuscles: ["neck","traps"], secondaryMuscles: [], equipment: ["bench"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "quadruped_adductor_rock_back", name: "Quadruped Adductor Rock Back", primaryMuscles: ["adductors"], secondaryMuscles: ["hips"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "active_mobility" },
  { id: "standing_side_bend", name: "Standing Side Bend", primaryMuscles: ["obliques","lats"], secondaryMuscles: ["core"], equipment: ["bodyweight"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "pretzel_stretch", name: "Pretzel Stretch", primaryMuscles: ["quadriceps","mid_back"], secondaryMuscles: ["hips","glutes"], equipment: ["bodyweight"], environment: ["both"], difficulty: "advanced", movement: "static_stretch" },
  { id: "bretzel_stretch", name: "Bretzel Stretch", primaryMuscles: ["mid_back","hips"], secondaryMuscles: ["quadriceps","chest"], equipment: ["bodyweight"], environment: ["both"], difficulty: "advanced", movement: "static_stretch" },
  { id: "slump_flossing", name: "Nerve Flossing (Slump)", primaryMuscles: ["hamstrings","lower_back"], secondaryMuscles: [], equipment: ["bench"], environment: ["both"], difficulty: "intermediate", movement: "active_mobility" },
  { id: "band_lat_stretch", name: "Banded Lat Stretch", primaryMuscles: ["lats"], secondaryMuscles: ["shoulders"], equipment: ["resistance_band"], environment: ["gym"], difficulty: "beginner", movement: "static_stretch" },
  { id: "barbell_wrist_stretch", name: "Barbell Wrist Extension Stretch", primaryMuscles: ["forearms","wrists"], secondaryMuscles: [], equipment: ["barbell"], environment: ["gym"], difficulty: "intermediate", movement: "static_stretch" },
  { id: "seated_piriformis_stretch", name: "Seated Piriformis Stretch", primaryMuscles: ["glutes","hips"], secondaryMuscles: [], equipment: ["bench"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "wall_sit_arm_raises", name: "Wall Sit with Arm Raises", primaryMuscles: ["shoulders","mid_back"], secondaryMuscles: ["quadriceps"], equipment: ["wall"], environment: ["both"], difficulty: "intermediate", movement: "active_mobility" },
  { id: "pvc_pipe_pass_through", name: "PVC Pipe Pass-Throughs", primaryMuscles: ["shoulders","chest"], secondaryMuscles: ["mid_back"], equipment: ["stick"], environment: ["gym"], difficulty: "beginner", movement: "dynamic_stretch" },
  { id: "deep_lunge_rotation", name: "Deep Lunge with Rotation", primaryMuscles: ["hips","mid_back"], secondaryMuscles: ["core","glutes"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "dynamic_stretch" },
  { id: "banded_hamstring_stretch", name: "Banded Supine Hamstring Stretch", primaryMuscles: ["hamstrings"], secondaryMuscles: ["calves"], equipment: ["resistance_band"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
  { id: "half_kneeling_quad_stretch", name: "Half-Kneeling Quad Stretch", primaryMuscles: ["quadriceps"], secondaryMuscles: ["hip_flexors"], equipment: ["bodyweight"], environment: ["both"], difficulty: "intermediate", movement: "static_stretch" },
  { id: "seated_straddle_pancake", name: "Seated Straddle Pancake", primaryMuscles: ["adductors","hamstrings"], secondaryMuscles: ["lower_back"], equipment: ["bodyweight"], environment: ["both"], difficulty: "advanced", movement: "static_stretch" },
  { id: "yoga_block_supported_bridge", name: "Supported Bridge Pose", primaryMuscles: ["hip_flexors","lower_back"], secondaryMuscles: ["core"], equipment: ["yoga_block"], environment: ["both"], difficulty: "beginner", movement: "static_stretch" },
];

const filePath = path.join(__dirname, 'frontend/src/data/exercises.js');
let existingContent = fs.readFileSync(filePath, 'utf-8');

let jsonStr = existingContent.replace('export const exercises = ', '').trim();
if (jsonStr.endsWith(';')) {
  jsonStr = jsonStr.slice(0, -1);
}

const exercises = JSON.parse(jsonStr);
const mobilityIds = new Set(mobilityExercises.map(e => e.id));
const filteredExercises = exercises.filter(e => !mobilityIds.has(e.id));
filteredExercises.push(...mobilityExercises);

const fileContent = "export const exercises = " + JSON.stringify(filteredExercises, null, 2) + ";\n";
fs.writeFileSync(filePath, fileContent, 'utf-8');

console.log(mobilityExercises.length + ' mobility exercises were added. Final total number of exercises in exercises.js is ' + filteredExercises.length + '.');
