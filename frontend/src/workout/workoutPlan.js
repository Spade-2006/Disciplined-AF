import { TRAINING_FREQUENCIES } from './trainingSplits.js'

export const FITNESS_GOALS = Object.freeze({
	'fat loss': { id: 'fat-loss', label: 'Fat Loss' },
	'muscle gain': { id: 'muscle-gain', label: 'Muscle Gain' },
	recomposition: { id: 'recomposition', label: 'Recomposition' },
	maintenance: { id: 'maintenance', label: 'Maintenance' },
})

/**
 * Reads the goal and frequency the user already saved at onboarding. Values are only
 * normalized — no training recommendations are derived from them yet.
 */
export function createTrainingContext(account) {
	const goal = FITNESS_GOALS[String(account?.primaryGoal ?? '').toLowerCase()] ?? null
	const days = Number(account?.trainingDaysPerWeek)

	return {
		goal,
		daysPerWeek: Number.isInteger(days) && days > 0 ? days : null,
		supportedFrequency: TRAINING_FREQUENCIES.includes(days),
	}
}

const dateKey = (date) => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

function weekStart(date) {
	const start = new Date(date.getFullYear(), date.getMonth(), date.getDate())
	start.setDate(start.getDate() - ((start.getDay() + 6) % 7))
	return start
}

/**
 * Expected plan shape (to be returned by a future workout backend):
 * {
 *   splitId, daysPerWeek,
 *   schedule: [{ weekday: 0-6, sessionId }],
 *   sessions: [{ id, name, focus, exercises: [{ name, sets?, reps? }] }],
 *   completions: [{ date: ISO string, sessionId }]
 * }
 * Everything is derived from that data; nothing is assumed.
 */
export function summarizeWorkoutPlan(plan, now = new Date()) {
	if (!plan?.splitId || !Array.isArray(plan.schedule) || !plan.schedule.length) return null

	const sessions = plan.sessions ?? []
	const completions = (plan.completions ?? []).map((entry) => ({ ...entry, when: new Date(entry.date) }))
	const todayEntry = plan.schedule.find((entry) => entry.weekday === now.getDay())
	const todaySession = todayEntry ? sessions.find((item) => item.id === todayEntry.sessionId) ?? null : null
	const completedToday = completions.some((entry) => dateKey(entry.when) === dateKey(now))
	const start = weekStart(now)
	const completedThisWeek = completions.filter((entry) => entry.when >= start).length
	const plannedThisWeek = plan.daysPerWeek ?? plan.schedule.length

	let status = 'rest'
	if (todaySession) status = completedToday ? 'completed' : 'scheduled'

	return {
		splitId: plan.splitId,
		daysPerWeek: plannedThisWeek,
		todaySession,
		status,
		completedThisWeek,
		plannedThisWeek,
	}
}
