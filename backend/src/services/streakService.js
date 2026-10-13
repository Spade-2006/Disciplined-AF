const DailyLog = require("../models/DailyLog");

/**
 * Checks if a daily log document constitutes meaningful discipline / completion.
 * Rule: A day counts if:
 * 1. Workout was completed (workout.completed === true), OR
 * 2. At least two core physical metrics were recorded (e.g., calories, protein, weight, water, sleep, steps).
 * Empty or single-trivial logs do not artificially trigger streaks.
 */
function isLogMeaningful(log) {
  if (!log) return false;

  // Rule 1: Workout completion is a direct indicator of disciplined activity
  if (log.workout?.completed) return true;

  // Rule 2: Count logged physical tracking vectors
  let loggedCount = 0;
  if (log.nutrition?.calories != null) loggedCount++;
  if (log.nutrition?.protein != null) loggedCount++;
  if (log.body?.weight != null) loggedCount++;
  if (log.hydration?.water != null) loggedCount++;
  if (log.recovery?.sleep != null) loggedCount++;
  if (log.activity?.steps != null) loggedCount++;

  return loggedCount >= 2;
}

/**
 * Calculates current streak, longest streak, consistency days, and missed status.
 * @param {string} userId - Mongo ObjectId string
 * @param {string} clientToday - User's local today date formatted as YYYY-MM-DD
 */
async function calculateUserStreaks(userId, clientToday) {
  // Fetch all user logs sorted by date descending (most recent first)
  const logs = await DailyLog.find({ userId }).sort({ date: -1 }).lean();

  // Filter logs down to only those meeting meaningful consistency threshold
  const qualifyingDates = logs
    .filter(isLogMeaningful)
    .map((l) => l.date);

  const qualifyingSet = new Set(qualifyingDates);

  // If no qualifying days exist at all
  if (qualifyingDates.length === 0) {
    return {
      currentStreak: 0,
      longestStreak: 0,
      totalConsistentDays: 0,
      lastCompletedDate: null,
      isStreakActiveToday: false,
      streakBroken: false,
    };
  }

  // Helper to subtract days in YYYY-MM-DD format
  const getPreviousDateStr = (dateStr) => {
    const [y, m, d] = dateStr.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    dt.setDate(dt.getDate() - 1);
    const prevY = dt.getFullYear();
    const prevM = String(dt.getMonth() + 1).padStart(2, "0");
    const prevD = String(dt.getDate()).padStart(2, "0");
    return `${prevY}-${prevM}-${prevD}`;
  };

  const isCompletedToday = qualifyingSet.has(clientToday);
  const yesterdayStr = getPreviousDateStr(clientToday);
  const isCompletedYesterday = qualifyingSet.has(yesterdayStr);

  // Current Streak Calculation
  let currentStreak = 0;
  let pointer = isCompletedToday ? clientToday : yesterdayStr;

  while (qualifyingSet.has(pointer)) {
    currentStreak++;
    pointer = getPreviousDateStr(pointer);
  }

  // Longest Streak Calculation across all historical qualifying dates
  // Sort qualifying dates in ascending order
  const sortedAsc = [...qualifyingDates].sort();
  let longestStreak = 0;
  let tempStreak = 0;
  let expectedNext = null;

  for (const d of sortedAsc) {
    if (!expectedNext) {
      tempStreak = 1;
    } else if (d === expectedNext) {
      tempStreak++;
    } else {
      tempStreak = 1;
    }
    if (tempStreak > longestStreak) {
      longestStreak = tempStreak;
    }
    // Calculate expected next calendar date
    const [y, m, day] = d.split("-").map(Number);
    const nextDt = new Date(y, m - 1, day);
    nextDt.setDate(nextDt.getDate() + 1);
    const nextY = nextDt.getFullYear();
    const nextM = String(nextDt.getMonth() + 1).padStart(2, "0");
    const nextD = String(nextDt.getDate()).padStart(2, "0");
    expectedNext = `${nextY}-${nextM}-${nextD}`;
  }

  const lastCompletedDate = qualifyingDates[0] || null;

  // Streak broken flag: if user neither logged today nor yesterday, streak is currently 0 / broken
  const streakBroken = !isCompletedToday && !isCompletedYesterday && qualifyingDates.length > 0;

  return {
    currentStreak,
    longestStreak: Math.max(longestStreak, currentStreak),
    totalConsistentDays: qualifyingDates.length,
    lastCompletedDate,
    isStreakActiveToday: isCompletedToday,
    streakBroken,
  };
}

module.exports = {
  isLogMeaningful,
  calculateUserStreaks,
};
