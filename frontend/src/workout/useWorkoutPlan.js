import { useEffect, useState } from 'react'

/**
 * Workout data seam. No workout backend exists yet, so this resolves to `null`
 * (no plan). Replace the body with an authenticated request that returns the plan
 * shape documented in workoutPlan.js; callers need no changes.
 */
export async function fetchWorkoutPlan() {
	return null
}

export function useWorkoutPlan() {
	const [state, setState] = useState({ plan: null, loading: true, error: '' })

	useEffect(() => {
		let active = true
		fetchWorkoutPlan()
			.then((plan) => active && setState({ plan, loading: false, error: '' }))
			.catch((error) => active && setState({ plan: null, loading: false, error: error.message || 'Workout data unavailable' }))
		return () => {
			active = false
		}
	}, [])

	return state
}
