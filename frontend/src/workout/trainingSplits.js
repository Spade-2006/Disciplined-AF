export const TRAINING_FREQUENCIES = Object.freeze([2, 3, 4, 5, 6])

const session = (name, focus) => ({ name, focus })

const fullBody = (days) => Array.from({ length: days }, (_, index) => session(`Full Body ${String.fromCharCode(65 + index)}`, 'Full body'))
const upper = (label = 'Upper Body') => session(label, 'Chest, back, shoulders, arms')
const lower = (label = 'Lower Body') => session(label, 'Quads, hamstrings, glutes, calves')
const push = () => session('Push', 'Chest, shoulders, triceps')
const pull = () => session('Pull', 'Back, rear delts, biceps')
const legs = () => session('Legs', 'Quads, hamstrings, glutes, calves')

/**
 * Training program structures (not physique presets). `sessions(days)` returns the
 * ordered session rotation for that weekly frequency; `null` means the user defines it.
 */
export const TRAINING_SPLITS = Object.freeze([
	{
		id: 'full-body',
		label: 'Full Body',
		description: 'Every session trains the whole body.',
		frequencies: [2, 3, 4],
		sessions: fullBody,
	},
	{
		id: 'upper-lower',
		label: 'Upper / Lower',
		description: 'Alternates upper and lower body sessions.',
		frequencies: [2, 4, 6],
		sessions: (days) => Array.from({ length: days }, (_, index) => (index % 2 === 0 ? upper() : lower())),
	},
	{
		id: 'push-pull-legs',
		label: 'Push / Pull / Legs',
		description: 'Pushing, pulling and leg work on separate days.',
		frequencies: [3, 6],
		sessions: (days) => Array.from({ length: days }, (_, index) => [push, pull, legs][index % 3]()),
	},
	{
		id: 'ppl-upper-lower',
		label: 'PPL + Upper / Lower',
		description: 'Push, pull and legs followed by an upper and a lower day.',
		frequencies: [5],
		sessions: () => [push(), pull(), legs(), upper(), lower()],
	},
	{
		id: 'bro-split',
		label: 'Bro Split',
		description: 'One major muscle group per day.',
		frequencies: [5],
		sessions: () => [
			session('Chest', 'Chest'),
			session('Back', 'Back'),
			session('Shoulders', 'Shoulders'),
			session('Legs', 'Quads, hamstrings, glutes, calves'),
			session('Arms', 'Biceps, triceps, forearms'),
		],
	},
	{
		id: 'arnold-split',
		label: 'Arnold Split',
		description: 'Chest & back, shoulders & arms, then legs.',
		frequencies: [3, 6],
		sessions: (days) => Array.from({ length: days }, (_, index) => [
			session('Chest & Back', 'Chest, back'),
			session('Shoulders & Arms', 'Shoulders, biceps, triceps'),
			legs(),
		][index % 3]),
	},
	{
		id: 'custom',
		label: 'Custom Split',
		description: 'Build your own session structure.',
		frequencies: TRAINING_FREQUENCIES,
		sessions: null,
	},
])

export const getSplitById = (id) => TRAINING_SPLITS.find((split) => split.id === id) ?? null

export function getSplitsForFrequency(daysPerWeek) {
	return TRAINING_SPLITS.filter((split) => split.frequencies.includes(daysPerWeek))
}

export function getSplitSessions(splitId, daysPerWeek) {
	const split = getSplitById(splitId)
	if (!split?.sessions || !split.frequencies.includes(daysPerWeek)) return null
	return split.sessions(daysPerWeek)
}

// Monday-first spacing with rest days between sessions; weekday is 0 (Sun) – 6 (Sat).
const DEFAULT_WEEKDAYS = Object.freeze({
	2: [1, 4],
	3: [1, 3, 5],
	4: [1, 2, 4, 5],
	5: [1, 2, 3, 4, 5],
	6: [1, 2, 3, 4, 5, 6],
})

export const getDefaultTrainingWeekdays = (daysPerWeek) => DEFAULT_WEEKDAYS[daysPerWeek] ?? null
