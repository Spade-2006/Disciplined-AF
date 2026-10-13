const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  getDailyLog,
  createDailyLog,
  upsertDailyLog,
  deleteDailyLog,
  getStreaks,
} = require("../controllers/dailyLogController");

const router = express.Router();

router.use(authMiddleware);

router.get("/streaks", getStreaks);
router.get("/", getDailyLog);
router.post("/", createDailyLog);
router.put("/:date", upsertDailyLog);
router.delete("/:date", deleteDailyLog);

module.exports = router;
