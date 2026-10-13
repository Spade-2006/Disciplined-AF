import { useState, useEffect, useCallback, useMemo, useRef } from 'react'

function getActiveSessionStorageKey() {
	try {
		const user = JSON.parse(localStorage.getItem('user') || '{}')
		const userId = user?.id || user?._id
		return userId ? `daf_active_workout_session_${userId}` : 'daf_active_workout_session'
	} catch {
		return 'daf_active_workout_session'
	}
}

/**
 * Hook to manage live workout execution session
 * Keeps planned workout data separate from performed/logged data.
 */
export function useWorkoutSession({ activeProgram, onSessionComplete } = {}) {
	// Persistent session state (survives refreshes via sessionStorage)
	const [session, setSession] = useState(() => {
		try {
			const key = getActiveSessionStorageKey()
			const saved = sessionStorage.getItem(key) || sessionStorage.getItem('daf_active_workout_session')
			if (!saved) return null
			const parsed = JSON.parse(saved)
			// Validate structure: must be an object with valid sessionId and exercises array
			if (parsed && typeof parsed === 'object' && parsed.sessionId && Array.isArray(parsed.exercises)) {
				return parsed
			}
			sessionStorage.removeItem(key)
			return null
		} catch {
			sessionStorage.removeItem(getActiveSessionStorageKey())
			return null
		}
	})

	const [elapsedSeconds, setElapsedSeconds] = useState(0)
	const timerRef = useRef(null)
	const completingRef = useRef(false)

	// Save to sessionStorage whenever session changes
	useEffect(() => {
		try {
			const key = getActiveSessionStorageKey()
			if (session) {
				sessionStorage.setItem(key, JSON.stringify(session))
			} else {
				sessionStorage.removeItem(key)
			}
		} catch (err) {
			console.error('Failed to sync workout session', err)
		}
	}, [session])

	// Live timer loop
	useEffect(() => {
		if (session?.status === 'in_progress' && session.startTime) {
			const updateTimer = () => {
				const start = new Date(session.startTime).getTime()
				const now = Date.now()
				setElapsedSeconds(Math.max(0, Math.floor((now - start) / 1000)))
			}
			updateTimer()
			timerRef.current = setInterval(updateTimer, 1000)
		} else {
			clearInterval(timerRef.current)
			if (!session) setElapsedSeconds(0)
		}
		return () => clearInterval(timerRef.current)
	}, [session?.status, session?.startTime])

	/**
	 * Start a new workout session for a given day in the active program
	 * @param {number|string} dayIndexOrId
	 * @param {string|null} targetDate
	 */
	const startSession = useCallback((dayIndexOrId = 0, targetDate = null) => {
		if (!activeProgram) return

		const dayObj = typeof dayIndexOrId === 'number'
			? (activeProgram.days?.[dayIndexOrId] || activeProgram.days?.[0])
			: (activeProgram.days?.find(d => (d.id || d._id) === dayIndexOrId) || activeProgram.days?.[0])

		if (!dayObj) return

		// Initialize logged sets based on planned structure
		const loggedExercises = (dayObj.exercises || []).map((planned, exIdx) => {
			const setTargetCount = planned.sets || 3
			const sets = Array.from({ length: setTargetCount }, (_, setIdx) => ({
				setNumber: setIdx + 1,
				targetReps: planned.reps || '8-12',
				reps: null,
				weightKg: null,
				completed: false,
				skipped: false,
			}))

			return {
				exerciseId: planned.exerciseId,
				plannedOrder: exIdx,
				notes: planned.notes || '',
				sets,
			}
		})

		const resolvedTargetDate = targetDate || new Date().toISOString().slice(0, 10)

		const newSession = {
			sessionId: `sess_${Date.now()}`,
			targetDate: resolvedTargetDate,
			workoutProgramId: activeProgram.id || activeProgram._id,
			workoutName: activeProgram.name,
			dayId: dayObj.id || `day_${Date.now()}`,
			dayName: dayObj.name,
			startTime: new Date().toISOString(),
			status: 'in_progress', // 'in_progress' | 'completed' | 'abandoned'
			notes: '',
			exercises: loggedExercises,
		}

		setSession(newSession)
	}, [activeProgram])

	/**
	 * Update logged parameters for a specific set in an exercise
	 */
	const updateSet = useCallback((exerciseIdx, setIdx, updates) => {
		setSession(prev => {
			if (!prev) return prev
			const updatedExercises = [...prev.exercises]
			const targetEx = { ...updatedExercises[exerciseIdx] }
			const targetSets = [...targetEx.sets]

			targetSets[setIdx] = {
				...targetSets[setIdx],
				...updates,
			}

			targetEx.sets = targetSets
			updatedExercises[exerciseIdx] = targetEx

			return { ...prev, exercises: updatedExercises }
		})
	}, [])

	/**
	 * Toggle completed state for a set
	 */
	const toggleSetComplete = useCallback((exerciseIdx, setIdx) => {
		setSession(prev => {
			if (!prev) return prev
			const updatedExercises = [...prev.exercises]
			const targetEx = { ...updatedExercises[exerciseIdx] }
			const targetSets = [...targetEx.sets]
			const current = targetSets[setIdx]

			targetSets[setIdx] = {
				...current,
				completed: !current.completed,
				skipped: false,
			}

			targetEx.sets = targetSets
			updatedExercises[exerciseIdx] = targetEx

			return { ...prev, exercises: updatedExercises }
		})
	}, [])

	/**
	 * Complete and finalize the active session
	 * Returns payload ready for DailyLog ingestion
	 */
	const completeSession = useCallback(async () => {
		if (!session || completingRef.current) return null
		completingRef.current = true

		try {
			const endTime = new Date().toISOString()
			const startTimeMs = new Date(session.startTime).getTime()
			const durationMinutes = Math.max(1, Math.round((Date.now() - startTimeMs) / 60000))

			const completedSessionData = {
				...session,
				status: 'completed',
				endTime,
				durationMinutes,
			}

			// Shape summary payload for DailyLog workout reference
			const dailyLogWorkoutPayload = {
				workout: {
					completed: true,
					workoutProgramId: session.workoutProgramId,
					workoutName: `${session.workoutName} · ${session.dayName}`,
					durationMinutes,
					completedAt: endTime,
				},
			}

			// Ensure onSessionComplete succeeds before clearing session
			if (onSessionComplete) {
				await onSessionComplete(dailyLogWorkoutPayload, completedSessionData)
			}

			// Clear only upon successful persistence
			setSession(null)
			sessionStorage.removeItem(getActiveSessionStorageKey())
			return dailyLogWorkoutPayload
		} finally {
			completingRef.current = false
		}
	}, [session, onSessionComplete])

	/**
	 * Cancel/discard current session without saving
	 */
	const discardSession = useCallback(() => {
		setSession(null)
		sessionStorage.removeItem(getActiveSessionStorageKey())
	}, [])

	/**
	 * Add session notes
	 */
	const setSessionNotes = useCallback((notes) => {
		setSession(prev => prev ? { ...prev, notes } : prev)
	}, [])

	// Telemetry calculations
	const sessionStats = useMemo(() => {
		if (!session) return null
		let totalSets = 0
		let completedSets = 0
		let skippedSets = 0
		let exercisesCompleted = 0

		session.exercises.forEach(ex => {
			let exAllDone = true
			ex.sets.forEach(s => {
				totalSets++
				if (s.completed) completedSets++
				else if (s.skipped) skippedSets++
				else exAllDone = false
			})
			if (ex.sets.length > 0 && exAllDone) {
				exercisesCompleted++
			}
		})

		const formatTime = (secs) => {
			const m = Math.floor(secs / 60)
			const s = secs % 60
			return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
		}

		return {
			totalSets,
			completedSets,
			skippedSets,
			totalExercises: session.exercises.length,
			exercisesCompleted,
			percentComplete: totalSets > 0 ? Math.round((completedSets / totalSets) * 100) : 0,
			durationFormatted: formatTime(elapsedSeconds),
			durationMinutes: Math.max(1, Math.round(elapsedSeconds / 60)),
		}
	}, [session, elapsedSeconds])

	/**
	 * Pause live session
	 */
	const pauseSession = useCallback(() => {
		setSession(prev => prev ? { ...prev, isPaused: true, pauseTimestamp: Date.now() } : prev)
	}, [])

	/**
	 * Resume live session
	 */
	const resumeSession = useCallback(() => {
		setSession(prev => {
			if (!prev || !prev.pauseTimestamp) return prev
			const pauseDuration = Date.now() - prev.pauseTimestamp
			const adjustedStartTime = new Date(new Date(prev.startTime).getTime() + pauseDuration).toISOString()
			return { ...prev, isPaused: false, startTime: adjustedStartTime, pauseTimestamp: null }
		})
	}, [])

	/**
	 * Toggle skipped state for a set
	 */
	const toggleSetSkip = useCallback((exerciseIdx, setIdx) => {
		setSession(prev => {
			if (!prev) return prev
			const updatedExercises = [...prev.exercises]
			const targetEx = { ...updatedExercises[exerciseIdx] }
			const targetSets = [...targetEx.sets]
			const current = targetSets[setIdx]

			targetSets[setIdx] = {
				...current,
				skipped: !current.skipped,
				completed: false,
			}

			targetEx.sets = targetSets
			updatedExercises[exerciseIdx] = targetEx

			return { ...prev, exercises: updatedExercises }
		})
	}, [])

	return {
		session,
		isSessionActive: session?.status === 'in_progress',
		isPaused: Boolean(session?.isPaused),
		elapsedSeconds,
		sessionStats,
		startSession,
		pauseSession,
		resumeSession,
		updateSet,
		toggleSetComplete,
		toggleSetSkip,
		completeSession,
		discardSession,
		setSessionNotes,
	}
}
