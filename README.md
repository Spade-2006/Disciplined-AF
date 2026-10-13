# Disciplined AF

Disciplined AF is a personalized fitness and workout-tracking web app. It combines a React dashboard and workout tools with an Express API and MongoDB persistence for user profiles, workout programs, and daily logs.

## Features

- **Account and profile setup:** register with email and password or Google Sign-In, then complete personal and fitness onboarding. Profile preferences include goals, experience, training schedule and environment, activity, nutrition, recovery, and physique appearance.
- **Dashboard:** review your profile, active workout, daily metrics, and consistency streaks.
- **Workout library and builder:** browse prebuilt programs or create, edit, activate, and delete your own programs. Search and filter programs by goal, experience, training environment, and other attributes.
- **Exercise catalogue:** build sessions from a catalogue of 1,850 exercises, with equipment and muscle-group details.
- **Workout sessions:** follow a selected program, track sets and session progress, and record completed workouts in your daily log.
- **Daily tracking:** log calories, protein, body weight, water, sleep and sleep quality, steps, mood, notes, and workout completion. Browse dates, update logs, and review consistency streaks.
- **3D physique experience:** personalize a digital physique profile and view it in the dashboard's interactive 3D environment.
- **Information pages:** About, FAQ, privacy policy, and terms pages.

## Tech stack

- Frontend: React 19, Vite 8, React Router, Three.js / React Three Fiber, GSAP, and Tailwind CSS.
- Backend: Node.js, Express 5, Mongoose, MongoDB, JWT, bcrypt, and Google OAuth token verification.
- In development, Vite proxies `/api` requests to the backend at `http://localhost:5000`.

## Requirements

- Node.js `^20.19.0` or `>=22.12.0` (required by Vite 8).
- MongoDB, local or hosted, for persisted accounts, profiles, workouts, and daily logs.
- Google OAuth client credentials only if Google Sign-In is required.

## Local development

1. Install dependencies in each application folder:

   ```powershell
   cd backend
   npm install
   cd ..\frontend
   npm install
   ```

2. Configure environment variables. Create `backend/.env`:

   ```dotenv
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/disciplined-af
   JWT_SECRET=replace-with-a-long-random-secret
   GOOGLE_CLIENT_ID=your-google-oauth-client-id
   ```

   Create `frontend/.env` if using Google Sign-In:

   ```dotenv
   VITE_GOOGLE_CLIENT_ID=your-google-oauth-client-id
   ```

   `GOOGLE_CLIENT_ID` and `VITE_GOOGLE_CLIENT_ID` should be the same OAuth client ID. The Google variables are only needed for Google authentication. Keep real credentials out of source control; `.env` files are ignored by Git.

3. Start the backend and frontend in separate terminals:

   ```powershell
   cd backend
   npm run dev
   ```

   ```powershell
   cd frontend
   npm run dev
   ```

   Open the local URL printed by Vite. The backend listens on port `5000` by default; `PORT` can override it. The API health endpoint is `http://localhost:5000/`.

## Available scripts

Run frontend commands from `frontend/`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the production frontend into `frontend/dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

Run backend commands from `backend/`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the API with Nodemon |
| `npm start` | Start the API with Node.js |

## API overview

Authenticated endpoints expect `Authorization: Bearer <token>`.

| Area | Routes |
| --- | --- |
| Authentication | `POST /api/auth/register`, `POST /api/auth/login`, `POST /api/auth/google/signup`, `POST /api/auth/google/login` |
| Account and profile | `GET /api/auth/me`, `PUT /api/auth/profile`, `GET /api/profile/physique` |
| Workout programs | `GET/POST /api/workouts`, `GET/PUT/DELETE /api/workouts/:id`, `GET/PUT /api/workouts/active` |
| Daily logs and streaks | `GET/POST /api/daily-logs`, `PUT/DELETE /api/daily-logs/:date`, `GET /api/daily-logs/streaks` |

Daily log dates use the `YYYY-MM-DD` format. The API stores data per user.

## Current scope

The main implemented journeys are onboarding, dashboard, tracking, and workouts. Goals and settings currently render placeholder pages; several legacy routes (including `/features`, `/analysis`, `/progress`, and `/insights`) redirect to login. The root `package.json` does not provide a combined start script, so run the frontend and backend separately as described above.
