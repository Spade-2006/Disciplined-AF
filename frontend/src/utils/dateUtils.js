/**
 * Formats a Date object into local calendar YYYY-MM-DD
 * Avoids UTC timezone conversion shifts.
 * @param {Date} date
 * @returns {string} YYYY-MM-DD
 */
export function formatLocalDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Returns today's local date string YYYY-MM-DD
 */
export function getTodayDateString() {
  return formatLocalDate(new Date());
}

/**
 * Adds or subtracts days from a YYYY-MM-DD string
 * @param {string} dateStr YYYY-MM-DD
 * @param {number} daysOffset
 * @returns {string} YYYY-MM-DD
 */
export function shiftDateString(dateStr, daysOffset) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + daysOffset);
  return formatLocalDate(date);
}

/**
 * Checks if a given date string is in the future compared to today's local date
 * @param {string} dateStr YYYY-MM-DD
 * @returns {boolean}
 */
export function isFutureDate(dateStr) {
  const today = getTodayDateString();
  return dateStr > today;
}
