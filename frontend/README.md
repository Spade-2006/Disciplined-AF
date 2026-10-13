# Disciplined AF frontend

This React 19 application is built with Vite. It provides the onboarding, dashboard, workout library and builder, daily tracking, and interactive 3D physique experience for Disciplined AF.

## Development

From this directory:

```powershell
npm install
npm run dev
```

The Vite development server proxies `/api` requests to `http://localhost:5000`. Start the backend separately; see the repository [README](../README.md) for MongoDB, environment-variable, and backend setup instructions.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the production app into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

Set `VITE_GOOGLE_CLIENT_ID` in a local `.env` file to enable Google Sign-In. Use the same OAuth client ID for the backend's `GOOGLE_CLIENT_ID`.
