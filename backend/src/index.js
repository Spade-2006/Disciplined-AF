require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Load route modules
const authRoutes = require('./routes/auth');
const workoutRoutes = require('./routes/workouts');
const nutritionRoutes = require('./routes/nutrition');
const progressRoutes = require('./routes/progress');
const exportRoutes = require('./routes/export');
const trackingRoutes = require('./routes/tracking');

// Helper to normalize router exports (for Express 5 compatibility)
const asRouter = (mod) => (typeof mod === 'function' ? mod : mod && mod.default ? mod.default : mod);

// Mount routes
app.use('/api/auth', asRouter(authRoutes));
app.use('/api/workouts', asRouter(workoutRoutes));
app.use('/api/nutrition', asRouter(nutritionRoutes));
app.use('/api/progress', asRouter(progressRoutes));
app.use('/api/export', asRouter(exportRoutes));
app.use('/api/tracking', asRouter(trackingRoutes));


// Health check
app.get('/api/health', async (req, res) => {
  try {
    // Test database connection
    await db.query('SELECT 1');
    res.json({ 
      status: 'ok',
      timestamp: new Date().toISOString(),
      database: 'connected'
    });
  } catch (err) {
    res.status(503).json({ 
      status: 'error',
      timestamp: new Date().toISOString(),
      database: 'disconnected',
      error: err.message 
    });
  }
});

// DB test
app.get('/api/testdb', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.json({ now: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Disciplined AF API server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});
