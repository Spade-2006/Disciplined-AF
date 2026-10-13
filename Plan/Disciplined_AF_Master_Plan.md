# DISCIPLINED AF --- MASTER BUILD PLAN

## Product goal

Disciplined AF is a personalized fitness command center built around: 1.
What should I do today? 2. Am I actually improving? 3. What is happening
to my body?

Core stack: React/Vite, Three.js/R3F/Drei, Node/Express,
MongoDB/Mongoose, JWT/Google auth.

------------------------------------------------------------------------

# 1. CURRENT STATE

### Done

-   [x] React + Vite frontend
-   [x] Node + Express backend
-   [x] MongoDB Atlas
-   [x] JWT auth
-   [x] Email/password auth
-   [x] Google auth
-   [x] Protected routes
-   [x] User/profile schema
-   [x] Two-step onboarding
-   [x] Physique profile API/configuration
-   [x] Rigged Male.glb and Feamle.glb
-   [x] Appearance preference architecture
-   [x] Future deformation seam
-   [x] Home dashboard foundation
-   [x] Futuristic 3D lab
-   [x] Workout summary/foundation
-   [x] Track Today entry point
-   [x] Responsive Home pass
-   [x] ESLint/build passing

### Missing

-   [ ] Final Home rebuild/presentation pass
-   [ ] Final Male/Female 3D presentation
-   [ ] Track page
-   [ ] Daily tracking backend
-   [ ] Real workout backend
-   [ ] Workout setup/execution/history
-   [ ] Exercise database
-   [ ] Nutrition tracking
-   [ ] Water/steps/sleep tracking
-   [ ] Weight and measurement history
-   [ ] Streak/consistency engine
-   [ ] Progress page
-   [ ] Goals page
-   [ ] Insights page
-   [ ] Settings completion
-   [ ] Notifications
-   [ ] Reports/export
-   [ ] Morph-capable physique system
-   [ ] Production testing/deployment

------------------------------------------------------------------------

# 2. FINAL ROUTES

## Public

-   [ ] `/`
-   [ ] `/login`
-   [ ] `/signup`
-   [ ] `/privacy`
-   [ ] `/terms`

## Onboarding

-   [ ] `/onboarding`

## Main app

-   [ ] `/dashboard` --- Home
-   [ ] `/track` --- Daily tracking
-   [ ] `/workouts` --- Workout planning
-   [ ] `/workouts/:id` --- Workout execution
-   [ ] `/progress` --- Analytics
-   [ ] `/goals` --- Goals/milestones
-   [ ] `/insights` --- Calculated insights
-   [ ] `/settings` --- Account/profile/preferences

Future: - \[ \] `/exercises` - \[ \] `/reports` - \[ \] `/nutrition`

------------------------------------------------------------------------

# 3. PHASE 1 --- HOME PAGE

Home must be a fitness command center, not just a 3D viewer.

### Layout

-   [ ] Left navigation
-   [ ] Top profile bar
-   [ ] Central Digital Physique
-   [ ] Right command panel
-   [ ] Lower consistency/streak area
-   [ ] Responsive desktop/tablet/laptop behavior

### Digital Physique

-   [ ] Correct male/female model from onboarding
-   [ ] Full head-to-feet framing
-   [ ] Natural perspective
-   [ ] Subtle 3D Y rotation
-   [ ] Better depth through lighting
-   [ ] Natural idle
-   [ ] Correct platform grounding
-   [ ] Contact shadows
-   [ ] Model-specific camera fitting
-   [ ] Consistent male/female scale
-   [ ] Preserve skin/hair/clothing logic
-   [ ] No model selector
-   [ ] No physique presets

### Lab

-   [x] Circular platform
-   [x] Overhead scanner
-   [x] Structural architecture
-   [x] Metallic walls
-   [x] Machinery
-   [x] Red/cyan technical lighting
-   [ ] Final calibration/performance pass

### Right panel

-   [ ] Track Today
-   [ ] Workout summary
-   [ ] Calories
-   [ ] Protein
-   [ ] Steps
-   [ ] Workout
-   [ ] Weight
-   [ ] Sleep
-   [ ] Fitness information

### Lower panel

Replace empty space with: - \[ \] Current logging streak - \[ \] Workout
streak - \[ \] Best streak - \[ \] Workouts this week - \[ \] Active
days - \[ \] 7-day consistency visualization

Never fabricate data.

------------------------------------------------------------------------

# 4. PHASE 2 --- TRACK TODAY

`/track`

One place to log the entire day.

### Daily inputs

-   [ ] Calories
-   [ ] Protein
-   [ ] Water
-   [ ] Steps
-   [ ] Weight
-   [ ] Sleep
-   [ ] Workout
-   [ ] Notes

### UX

-   [ ] Today's summary
-   [ ] Edit/update each metric
-   [ ] Save
-   [ ] Clear individual metric
-   [ ] Completion state
-   [ ] Home synchronization
-   [ ] Empty state
-   [ ] Error state
-   [ ] Loading state

------------------------------------------------------------------------

# 5. PHASE 3 --- DAILY TRACKING BACKEND

Create `DailyLog`.

Fields: - userId - date - calories - protein - water - steps - weight -
sleep - workoutCompleted - notes - timestamps

API: - \[ \] GET today's log - \[ \] PUT today's log - \[ \] GET date
range - \[ \] Clear metric

Rules: - \[ \] one daily record per user/date - \[ \] idempotent
updates - \[ \] partial logs allowed - \[ \] validation - \[ \]
ownership checks - \[ \] consistent units - \[ \] no fabricated values

------------------------------------------------------------------------

# 6. PHASE 4 --- WORKOUT SYSTEM

## Workout setup

-   [ ] Goal-aware setup
-   [ ] Training days/week: 2--6
-   [ ] Full Body
-   [ ] Upper/Lower
-   [ ] Push Pull Legs
-   [ ] PPL + Upper/Lower
-   [ ] Bro Split
-   [ ] Arnold Split
-   [ ] Custom Split
-   [ ] Equipment selection
-   [ ] Session ordering

## Exercise database

Each exercise: - \[ \] name - \[ \] primary muscles - \[ \] secondary
muscles - \[ \] equipment - \[ \] movement pattern - \[ \] difficulty -
\[ \] instructions - \[ \] alternatives - \[ \] optional media

## Workout plan

-   [ ] Create
-   [ ] Edit
-   [ ] Reorder
-   [ ] Add/remove exercises
-   [ ] Sets
-   [ ] Reps
-   [ ] Weight
-   [ ] Rest
-   [ ] Notes

## Workout execution

`/workouts/:id` - \[ \] Exercise list - \[ \] Set logging - \[ \]
Reps/weight - \[ \] RIR/RPE - \[ \] Rest timer - \[ \] Exercise
alternative - \[ \] Complete workout - \[ \] Workout history - \[ \] PR
detection later

------------------------------------------------------------------------

# 7. PHASE 5 --- NUTRITION

-   [ ] Calorie target
-   [ ] Protein target
-   [ ] Daily calories
-   [ ] Daily protein
-   [ ] Remaining calories
-   [ ] Remaining protein
-   [ ] Manual food entry
-   [ ] Saved foods
-   [ ] Meals
-   [ ] Quantities
-   [ ] Calories/macros
-   [ ] Nutrition history
-   [ ] Weekly/monthly adherence

Keep food AI/scanning optional for V2.

------------------------------------------------------------------------

# 8. PHASE 6 --- BODY DATA

## Weight

-   [ ] Log weight
-   [ ] History
-   [ ] Weekly average
-   [ ] Trend
-   [ ] Goal comparison

## Measurements

-   [ ] Waist

-   [ ] Chest

-   [ ] Arms

-   [ ] Thighs

-   [ ] Body-fat measurement when user provides a reliable value

-   [ ] Optional future neck/hip

-   [ ] Measurement history

-   [ ] Change from baseline

-   [ ] Change from previous

-   [ ] Trend charts

------------------------------------------------------------------------

# 9. PHASE 7 --- SLEEP / RECOVERY

-   [ ] Bedtime
-   [ ] Wake time
-   [ ] Duration
-   [ ] Quality
-   [ ] Notes
-   [ ] Sleep consistency
-   [ ] Training/recovery balance

Do not pretend to calculate HRV/readiness without real biometric data.

------------------------------------------------------------------------

# 10. PHASE 8 --- STREAK + CONSISTENCY

Build a reusable consistency service.

### Streaks

-   [ ] Daily logging streak
-   [ ] Workout streak
-   [ ] Nutrition streak
-   [ ] Weekly consistency
-   [ ] Best streak

### Rules

Define exactly what counts as a completed day.

Example: - logging streak = at least one meaningful daily metric
logged - workout streak = completed workout only

Never count page visits as workouts.

Outputs: - current streak - longest streak - active days - weekly
completion - monthly consistency

------------------------------------------------------------------------

# 11. PHASE 9 --- PROGRESS

`/progress`

### Analytics

-   [ ] Weight
-   [ ] Body measurements
-   [ ] Calories
-   [ ] Protein
-   [ ] Steps
-   [ ] Sleep
-   [ ] Workouts
-   [ ] Consistency

### Charts

-   [ ] Weight trend
-   [ ] Calorie trend
-   [ ] Protein adherence
-   [ ] Workout frequency
-   [ ] Sleep trend
-   [ ] Steps trend
-   [ ] Measurement changes

Ranges: - \[ \] 7D - \[ \] 30D - \[ \] 90D - \[ \] 6M - \[ \] 1Y - \[ \]
All time

------------------------------------------------------------------------

# 12. PHASE 10 --- GOALS

`/goals`

Goal types: - \[ \] Target weight - \[ \] Body measurement - \[ \]
Workout frequency - \[ \] Protein adherence - \[ \] Calorie adherence -
\[ \] Streak target - \[ \] Strength/PR goal

Each goal: - \[ \] Starting value - \[ \] Current value - \[ \] Target -
\[ \] Deadline - \[ \] Progress % - \[ \] Status

Statuses: - \[ \] Active - \[ \] Completed - \[ \] Paused - \[ \]
Abandoned

------------------------------------------------------------------------

# 13. PHASE 11 --- INSIGHTS

`/insights`

Use actual data to calculate:

-   [ ] Weight trend
-   [ ] Average calories
-   [ ] Protein consistency
-   [ ] Workout consistency
-   [ ] Sleep consistency
-   [ ] Goal progress
-   [ ] Missed training days
-   [ ] Training patterns
-   [ ] Adherence patterns

Examples: - "Protein target hit 6/7 days." - "You completed 4/5 planned
workouts." - "Your 14-day average weight is trending down."

Never generate an insight without supporting data.

AI can be added later as a presentation layer, not as the source of
truth.

------------------------------------------------------------------------

# 14. PHASE 12 --- DIGITAL PHYSIQUE 2.0

Current models have rigs but no morph targets.

### Current

-   [x] Male GLB
-   [x] Female GLB
-   [x] Rig
-   [x] Appearance system
-   [x] Deformation architecture seam

### Future

Acquire/create morph-capable models.

Morph targets: - \[ \] Body fat - \[ \] Chest - \[ \] Waist - \[ \]
Arms - \[ \] Thighs - \[ \] Shoulders/torso - \[ \] Overall proportions

Inputs: - height - weight - reliable body-fat measurement - waist -
chest - arms - thighs - training history

Rules: - BMI alone must never pretend to know exact body shape. -
Missing measurements produce approximate visualization. - Never claim
precision that the data does not support.

### Physique evolution

-   [ ] Baseline physique
-   [ ] Historical snapshots
-   [ ] Month-to-month changes
-   [ ] Weight/measurement-driven updates
-   [ ] Training-history influence where scientifically justified

------------------------------------------------------------------------

# 15. PHYSIQUE QUALITY

-   [ ] Better male model
-   [ ] Better female model
-   [ ] Better topology/materials
-   [ ] Complete head/hair presentation
-   [ ] Hair variants
-   [ ] Clothing variants
-   [ ] Skin tones
-   [ ] Model-specific camera
-   [ ] LOD/performance
-   [ ] Morph calibration
-   [ ] Front/side/back inspection
-   [ ] Measurement overlay
-   [ ] Optional muscle-region visualization

No pointless physique presets.

------------------------------------------------------------------------

# 16. SETTINGS

`/settings`

### Account

-   [ ] Name
-   [ ] Email
-   [ ] Password
-   [ ] Google status
-   [ ] Logout
-   [ ] Delete account

### Fitness profile

-   [ ] Height
-   [ ] Weight
-   [ ] Goal
-   [ ] Activity
-   [ ] Experience
-   [ ] Training days
-   [ ] Equipment
-   [ ] Diet

### Appearance

-   [ ] Skin
-   [ ] Hair
-   [ ] Supported appearance options

### Preferences

-   [ ] Metric/imperial
-   [ ] Reduced motion
-   [ ] Theme
-   [ ] Notifications

------------------------------------------------------------------------

# 17. NOTIFICATIONS

Future: - \[ \] Workout reminder - \[ \] Water reminder - \[ \] Weigh-in
reminder - \[ \] Sleep reminder - \[ \] Missed tracking reminder - \[ \]
Streak warning

Optional and non-spammy.

------------------------------------------------------------------------

# 18. REPORTS / EXPORT

`/reports`

-   [ ] Weekly report
-   [ ] Monthly report
-   [ ] Progress summary
-   [ ] Workout history
-   [ ] Nutrition history
-   [ ] Weight history

Formats: - \[ \] PDF - \[ \] CSV - \[ \] JSON

------------------------------------------------------------------------

# 19. BACKEND ARCHITECTURE

Recommended:

``` text
backend/src/
├── config/
├── models/
├── routes/
├── controllers/
├── services/
├── middleware/
├── validators/
├── utils/
└── index.js
```

Models: - \[ \] User - \[ \] DailyLog - \[ \] WorkoutPlan - \[ \]
WorkoutSession - \[ \] Exercise - \[ \] WorkoutLog - \[ \] WeightEntry -
\[ \] MeasurementEntry - \[ \] Goal - \[ \] SavedFood/Meal (later) - \[
\] NotificationPreference (later)

API groups: - `/api/auth` - `/api/profile` - `/api/track` -
`/api/workouts` - `/api/exercises` - `/api/progress` - `/api/goals` -
`/api/insights` - `/api/settings` - `/api/reports`

------------------------------------------------------------------------

# 20. FRONTEND ARCHITECTURE

Recommended:

``` text
frontend/src/
├── components/
├── pages/
├── hooks/
├── contexts/
├── services/
├── api/
├── workout/
├── physique/
├── tracking/
├── progress/
├── goals/
├── insights/
├── utils/
├── styles/
└── assets/
```

Rules: - keep business logic out of giant page components - reuse domain
services/hooks - backend is source of truth for important calculations

------------------------------------------------------------------------

# 21. VALIDATION / EDGE CASES

-   [ ] Missing optional data
-   [ ] Invalid numeric values
-   [ ] Future dates
-   [ ] Duplicate daily records
-   [ ] Duplicate workouts
-   [ ] No workout plan
-   [ ] No history
-   [ ] First-time user
-   [ ] Expired JWT
-   [ ] Google account edge cases
-   [ ] Deleted records
-   [ ] Partial onboarding

Every major page needs: - \[ \] Loading state - \[ \] Empty state - \[
\] Error state - \[ \] Success state

------------------------------------------------------------------------

# 22. SECURITY

-   [ ] Strong JWT secret
-   [ ] bcrypt password hashing
-   [ ] Protected routes
-   [ ] Ownership validation
-   [ ] Input validation
-   [ ] Auth rate limiting
-   [ ] Secure production CORS
-   [ ] Environment variables
-   [ ] `.env` never committed
-   [ ] Central error handling

------------------------------------------------------------------------

# 23. PERFORMANCE

Especially important for Three.js.

-   [ ] GLB preload/cache
-   [ ] Shared materials
-   [ ] Geometry reuse
-   [ ] Controlled shadows
-   [ ] Lazy-load heavy pages
-   [ ] Code splitting
-   [ ] Optimize GLBs
-   [ ] LOD if necessary
-   [ ] Reduce unnecessary React renders
-   [ ] Bundle analysis
-   [ ] Mobile performance pass

------------------------------------------------------------------------

# 24. ACCESSIBILITY

-   [ ] Keyboard navigation
-   [ ] Visible focus
-   [ ] Semantic controls
-   [ ] Good contrast
-   [ ] Reduced motion
-   [ ] Proper input labels
-   [ ] Accessible chart summaries
-   [ ] Don't rely only on color

------------------------------------------------------------------------

# 25. TESTING

### Backend

-   [ ] Auth
-   [ ] Profile
-   [ ] Daily tracking
-   [ ] Workouts
-   [ ] Progress
-   [ ] Goals
-   [ ] Streaks

### Frontend

-   [ ] Routing
-   [ ] Forms
-   [ ] Empty states
-   [ ] Track submission
-   [ ] Workout creation
-   [ ] Responsive layouts

### 3D

-   [ ] Male
-   [ ] Female
-   [ ] 1600x950
-   [ ] 1280x720
-   [ ] 820x1100
-   [ ] Reduced motion
-   [ ] Average laptop performance

------------------------------------------------------------------------

# 26. DEPLOYMENT

### Backend

-   [ ] Production MongoDB config
-   [ ] Production environment variables
-   [ ] CORS
-   [ ] Deployment
-   [ ] Health endpoint
-   [ ] Logging
-   [ ] Error monitoring

### Frontend

-   [ ] Production API URL
-   [ ] Production build
-   [ ] SPA routing
-   [ ] Asset caching
-   [ ] Deployment

### Final

-   [ ] HTTPS
-   [ ] Domain
-   [ ] Favicon
-   [ ] Metadata
-   [ ] OpenGraph
-   [ ] Error page
-   [ ] Loading states

------------------------------------------------------------------------

# 27. V2 / OPTIONAL FUTURE FEATURES

Only after V1 works:

-   [ ] Apple Health
-   [ ] Google Fit / Health Connect
-   [ ] Wearables
-   [ ] Automatic steps
-   [ ] Automatic sleep
-   [ ] Heart rate
-   [ ] HRV/readiness using real data
-   [ ] Barcode food scanning
-   [ ] Food database
-   [ ] Exercise video library
-   [ ] Progress photos
-   [ ] Photo timeline
-   [ ] Advanced physique comparison
-   [ ] Social/accountability
-   [ ] Challenges
-   [ ] Achievements
-   [ ] Badges
-   [ ] PR detection
-   [ ] Advanced training analytics

------------------------------------------------------------------------

# 28. RECOMMENDED BUILD ORDER

## A --- Product foundation

-   [ ] Home rebuild/finalization
-   [ ] 3D physique final presentation
-   [ ] Lab finalization
-   [ ] Navigation cleanup

## B --- Core tracking

-   [ ] DailyLog model
-   [ ] Tracking API
-   [ ] Track page
-   [ ] Save/load daily metrics
-   [ ] Home status integration

## C --- Consistency

-   [ ] Streak engine
-   [ ] Weekly consistency
-   [ ] Home streak panel

## D --- Workouts

-   [ ] Exercise model/database
-   [ ] Workout plan backend
-   [ ] Workout setup
-   [ ] Workout execution
-   [ ] History

## E --- Body/nutrition/recovery

-   [ ] Weight
-   [ ] Measurements
-   [ ] Nutrition
-   [ ] Water
-   [ ] Steps
-   [ ] Sleep

## F --- Analytics

-   [ ] Progress
-   [ ] Goals
-   [ ] Insights

## G --- Physique 2.0

-   [ ] Morph-capable models
-   [ ] Body deformation
-   [ ] Measurement calibration
-   [ ] Historical physique evolution

## H --- Product completion

-   [ ] Settings
-   [ ] Notifications
-   [ ] Reports/export

## I --- Quality

-   [ ] Security
-   [ ] Tests
-   [ ] Performance
-   [ ] Accessibility
-   [ ] Mobile
-   [ ] Production deployment

------------------------------------------------------------------------

# 29. DEFINITION OF DONE --- V1

Disciplined AF V1 is complete when:

-   [ ] Register/login works
-   [ ] Onboarding works
-   [ ] Personalized physique works
-   [ ] Home works as a command center
-   [ ] Daily tracking works
-   [ ] Workout plans work
-   [ ] Workout execution/history work
-   [ ] Nutrition logging works
-   [ ] Weight/measurements work
-   [ ] Sleep/water/steps work
-   [ ] Progress works
-   [ ] Goals work
-   [ ] Streaks work
-   [ ] Insights work
-   [ ] No fake data
-   [ ] No dead core buttons
-   [ ] Responsive
-   [ ] Secure
-   [ ] Production deployed

------------------------------------------------------------------------

# 30. DEVELOPMENT RULES

1.  Build one system at a time.
2.  Do not build UI before the data model is understood.
3.  Never fabricate metrics.
4.  Keep important calculations centralized.
5.  Detailed workflows belong on their own pages; Home stays compact.
6.  The 3D physique is the signature feature, but it must not replace
    actual fitness functionality.
7.  Use real data instead of decorative fake statistics.
8.  AI is optional; deterministic fitness logic comes first.
9.  Every major feature needs:
    -   data model
    -   API
    -   frontend state
    -   UI
    -   empty state
    -   validation
    -   error handling
10. Run lint/build after meaningful implementation batches.
11. Test both male and female models after physique changes.
12. Stop polishing one page when core functionality is still missing.

------------------------------------------------------------------------

# 31. IMMEDIATE TODO QUEUE

1.  [ ] Rebuild/finalize Home page
2.  [ ] Finalize Male/Female 3D presentation
3.  [ ] Build Track page
4.  [ ] Build DailyLog backend
5.  [ ] Connect Track ↔ backend
6.  [ ] Connect Home status ↔ real data
7.  [ ] Build streak/consistency engine
8.  [ ] Add streak section to Home
9.  [ ] Build workout backend
10. [ ] Build workout setup
11. [ ] Build workout execution
12. [ ] Build exercise database
13. [ ] Build weight/measurement history
14. [ ] Build nutrition tracking
15. [ ] Build sleep/water/steps
16. [ ] Build Progress
17. [ ] Build Goals
18. [ ] Build Insights
19. [ ] Upgrade physique to morph-capable models
20. [ ] Build Settings
21. [ ] Add notifications
22. [ ] Add reports/export
23. [ ] Security pass
24. [ ] Testing pass
25. [ ] Performance pass
26. [ ] Production deployment

------------------------------------------------------------------------

# FINAL PRODUCT PRINCIPLE

Disciplined AF should always answer:

**WHAT DO I DO TODAY?** → Workout + nutrition + recovery + goals.

**AM I IMPROVING?** → Progress + measurements + performance +
consistency.

**WHAT IS HAPPENING TO MY BODY?** → Personalized evolving Digital
Physique.

Every feature should strengthen one of these three answers.
