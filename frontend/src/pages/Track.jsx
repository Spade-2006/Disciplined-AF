import { useState, useEffect, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
	ChevronLeft,
	ChevronRight,
	Calendar,
	Flame,
	Beef,
	Scale,
	Droplets,
	Moon,
	Footprints,
	Dumbbell,
	Smile,
	FileText,
	ArrowRight,
	Plus,
	Check,
	X,
	Lock,
	CheckCircle2,
	AlertCircle,
	Loader2,
	RotateCcw,
	ExternalLink,
	Play,
	Pause,
	Square,
	SkipForward,
	Clock,
	Layers,
	Zap,
	ShieldAlert
} from 'lucide-react'
import ShaderDemo_ATC from '../components/ui/atc-shader.jsx'
import MetallicButton from '../components/ui/metallic-button.jsx'
import { useDailyLog } from '../hooks/useDailyLog.js'
import { useWorkouts } from '../hooks/useWorkouts.js'
import { useWorkoutSession } from '../hooks/useWorkoutSession.js'
import { useStreaks } from '../hooks/useStreaks.js'
import { getTodayDateString } from '../utils/dateUtils.js'
import { prebuiltPrograms } from '../data/programs.js'
import { exercises } from '../data/exercises.js'
import './Track.css'

const MOOD_OPTIONS = [
	{ id: 'terrible', label: 'TERRIBLE', val: 1 },
	{ id: 'low', label: 'LOW', val: 2 },
	{ id: 'neutral', label: 'STEADY', val: 3 },
	{ id: 'good', label: 'FOCUSED', val: 4 },
	{ id: 'great', label: 'ELITE', val: 5 },
]

const SLEEP_QUALITIES = [
	{ id: 'poor', label: 'POOR' },
	{ id: 'fair', label: 'OKAY' },
	{ id: 'good', label: 'GOOD' },
	{ id: 'excellent', label: 'OPTIMAL' },
]

export default function Track() {
	const {
		selectedDate,
		setSelectedDate,
		activeLog,
		dailyLog,
		hasLoggedData,
		loading,
		saving,
		error,
		isToday,
		isFuture,
		updateDailyLog,
		fetchDailyLog,
		goToPreviousDay,
		goToNextDay,
		goToToday,
	} = useDailyLog()

	const todayDate = useMemo(() => getTodayDateString(), [])
	const [recentLogs, setRecentLogs] = useState([])

	// Fetch recent daily logs for consistency heatmap
	const fetchRecentLogs = useCallback(async () => {
		const token = localStorage.getItem('token')
		if (!token) return
		try {
			const res = await fetch('/api/daily-logs', {
				headers: { Authorization: `Bearer ${token}` },
			})
			if (res.ok) {
				const data = await res.json()
				if (Array.isArray(data)) setRecentLogs(data)
			}
		} catch {
			// silent fallback
		}
	}, [])

	useEffect(() => {
		fetchRecentLogs()
	}, [fetchRecentLogs, selectedDate, activeLog])

	const { workouts, activeWorkoutId } = useWorkouts()

	// Resolve Active Workout metadata if set
	const activeProgram = useMemo(() => {
		if (!activeWorkoutId) return null
		const custom = workouts.find((w) => w.id === activeWorkoutId)
		if (custom) return custom
		return prebuiltPrograms.find((p) => p.id === activeWorkoutId) || null
	}, [activeWorkoutId, workouts])

	// Centralized Streak Engine
	const {
		currentStreak,
		longestStreak,
		totalConsistentDays,
		lastCompletedDate,
		isStreakActiveToday,
		streakBroken,
		loading: streaksLoading,
		refreshStreaks,
	} = useStreaks()

	// Calculate qualifying discipline days for micro-heatmap
	const qualifyingDatesSet = useMemo(() => {
		const set = new Set()
		recentLogs.forEach((log) => {
			if (!log || !log.date) return
			const workoutDone = Boolean(log.workout?.completed)
			let count = 0
			if (log.nutrition?.calories != null) count++
			if (log.nutrition?.protein != null) count++
			if (log.body?.weight != null) count++
			if (log.hydration?.water != null) count++
			if (log.recovery?.sleep != null) count++
			if (log.activity?.steps != null) count++
			if (workoutDone || count >= 2) {
				set.add(log.date)
			}
		})

		if (activeLog && selectedDate) {
			const workoutDone = Boolean(activeLog.workout?.completed)
			let count = 0
			if (activeLog.nutrition?.calories != null) count++
			if (activeLog.nutrition?.protein != null) count++
			if (activeLog.body?.weight != null) count++
			if (activeLog.hydration?.water != null) count++
			if (activeLog.recovery?.sleep != null) count++
			if (activeLog.activity?.steps != null) count++
			if (workoutDone || count >= 2) {
				set.add(selectedDate)
			}
		}

		if (isStreakActiveToday) {
			set.add(todayDate)
		}

		return set
	}, [recentLogs, activeLog, selectedDate, isStreakActiveToday, todayDate])

	// Generate chronological 14-day window ending today
	const heatmapDays = useMemo(() => {
		const days = []
		const [y, m, d] = todayDate.split('-').map(Number)
		const base = new Date(y, m - 1, d)

		for (let i = 13; i >= 0; i--) {
			const dt = new Date(base)
			dt.setDate(dt.getDate() - i)
			const yr = dt.getFullYear()
			const mo = String(dt.getMonth() + 1).padStart(2, '0')
			const day = String(dt.getDate()).padStart(2, '0')
			const dateStr = `${yr}-${mo}-${day}`
			days.push({
				date: dateStr,
				dayNum: day,
				isToday: dateStr === todayDate,
				isSelected: dateStr === selectedDate,
				isCompleted: qualifyingDatesSet.has(dateStr),
			})
		}
		return days
	}, [todayDate, selectedDate, qualifyingDatesSet])

	// Workout Session Controller
	const [showFinishModal, setShowFinishModal] = useState(false)
	const [finishingSession, setFinishingSession] = useState(false)
	const [finishError, setFinishError] = useState('')

	const {
		session,
		isSessionActive,
		isPaused,
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
	} = useWorkoutSession({
		activeProgram,
		onSessionComplete: async (dailyLogWorkoutPayload, completedSessionData) => {
			const targetDate = completedSessionData?.targetDate || selectedDate
			await updateDailyLog(targetDate, dailyLogWorkoutPayload)
			refreshStreaks()
			fetchRecentLogs()
			setSaveNotification('SESSION LOGGED // SYNCED TO DAY')
			setTimeout(() => setSaveNotification(''), 3500)
		},
	})

	const handleConfirmFinish = async () => {
		if (finishingSession) return
		setFinishingSession(true)
		setFinishError('')
		try {
			await completeSession()
			setShowFinishModal(false)
		} catch (err) {
			console.error(err)
			setFinishError(err.message || 'Failed to save workout session. Session preserved.')
		} finally {
			setFinishingSession(false)
		}
	}

	// Fast lookup map for exercise metadata (names, primary muscles)
	const exerciseMap = useMemo(() => {
		const map = new Map()
		exercises.forEach((ex) => map.set(ex.id, ex))
		return map
	}, [])

	// Selected training day index for launching session
	const [selectedDayIdx, setSelectedDayIdx] = useState(0)

	// Read user targets if stored in localStorage from auth
	const userProfile = useMemo(() => {
		try {
			const u = localStorage.getItem('user')
			return u ? JSON.parse(u) : {}
		} catch {
			return {}
		}
	}, [])

	const calorieTarget = userProfile.calorieTarget || 2400
	const proteinTarget = userProfile.proteinTarget || 160
	const waterTarget = 3.0 // Liters default target
	const stepsTarget = userProfile.averageDailySteps || 10000
	const sleepTarget = userProfile.sleepGoal || 8.0

	// Inline Editor Modal / Drawer state
	const [activeEditor, setActiveEditor] = useState(null)
	const [inputValues, setInputValues] = useState({})
	const [saveNotification, setSaveNotification] = useState('')

	// Compute logged completion score across all 8 daily vectors
	const completionScore = useMemo(() => {
		const metrics = [
			{ key: 'calories', label: 'CALORIES', logged: activeLog.nutrition?.calories != null },
			{ key: 'protein', label: 'PROTEIN', logged: activeLog.nutrition?.protein != null },
			{ key: 'weight', label: 'WEIGHT', logged: activeLog.body?.weight != null },
			{ key: 'water', label: 'WATER', logged: activeLog.hydration?.water != null },
			{ key: 'sleep', label: 'SLEEP', logged: activeLog.recovery?.sleep != null },
			{ key: 'steps', label: 'STEPS', logged: activeLog.activity?.steps != null },
			{ key: 'mood', label: 'MOOD', logged: Boolean(activeLog.mind?.mood) },
			{ key: 'notes', label: 'NOTES', logged: Boolean(activeLog.mind?.notes?.trim()) },
		]

		const completedCount = metrics.filter((m) => m.logged).length
		const totalCount = metrics.length

		return {
			metrics,
			completed: completedCount,
			total: totalCount,
			percent: Math.round((completedCount / totalCount) * 100),
			statusLabel:
				completedCount === totalCount
					? 'RECORD COMPLETE'
					: completedCount >= 4
					? 'OPTIMAL PROGRESS'
					: completedCount > 0
					? 'PARTIALLY LOGGED'
					: 'STANDBY // UNLOGGED',
		}
	}, [activeLog])

	const [editorError, setEditorError] = useState('')

	const openEditor = (type) => {
		if (isFuture) return
		setActiveEditor(type)
		setEditorError('')
		switch (type) {
			case 'calories':
				setInputValues({ calories: activeLog.nutrition?.calories ?? '' })
				break
			case 'protein':
				setInputValues({ protein: activeLog.nutrition?.protein ?? '' })
				break
			case 'weight':
				setInputValues({ weight: activeLog.body?.weight ?? '' })
				break
			case 'water':
				setInputValues({ water: activeLog.hydration?.water ?? '' })
				break
			case 'sleep':
				setInputValues({
					sleep: activeLog.recovery?.sleep ?? '',
					sleepQuality: activeLog.recovery?.sleepQuality ?? 'good',
				})
				break
			case 'steps':
				setInputValues({ steps: activeLog.activity?.steps ?? '' })
				break
			case 'notes':
				setInputValues({ notes: activeLog.mind?.notes ?? '' })
				break
			case 'mood':
				setInputValues({ mood: activeLog.mind?.mood ?? '' })
				break
			default:
				setInputValues({})
		}
	}

	const handleSaveMetric = async (e) => {
		e?.preventDefault()
		if (isFuture) return
		setEditorError('')

		let updatePayload = {}
		try {
			if (activeEditor === 'calories') {
				if (inputValues.calories !== '' && (Number(inputValues.calories) < 0 || isNaN(Number(inputValues.calories)))) {
					setEditorError('Calories must be 0 or higher.')
					return
				}
				const val = inputValues.calories === '' ? null : Math.round(Number(inputValues.calories))
				updatePayload = { nutrition: { ...activeLog.nutrition, calories: val } }
			} else if (activeEditor === 'protein') {
				if (inputValues.protein !== '' && (Number(inputValues.protein) < 0 || isNaN(Number(inputValues.protein)))) {
					setEditorError('Protein must be 0 or higher.')
					return
				}
				const val = inputValues.protein === '' ? null : Math.round(Number(inputValues.protein))
				updatePayload = { nutrition: { ...activeLog.nutrition, protein: val } }
			} else if (activeEditor === 'weight') {
				if (inputValues.weight !== '' && (Number(inputValues.weight) <= 0 || isNaN(Number(inputValues.weight)))) {
					setEditorError('Weight must be greater than 0.')
					return
				}
				const val = inputValues.weight === '' ? null : Number(Number(inputValues.weight).toFixed(1))
				updatePayload = { body: { ...activeLog.body, weight: val } }
			} else if (activeEditor === 'water') {
				if (inputValues.water !== '' && (Number(inputValues.water) < 0 || isNaN(Number(inputValues.water)))) {
					setEditorError('Water intake must be 0 or higher.')
					return
				}
				const val = inputValues.water === '' ? null : Number(Number(inputValues.water).toFixed(2))
				updatePayload = { hydration: { ...activeLog.hydration, water: val } }
			} else if (activeEditor === 'sleep') {
				if (inputValues.sleep !== '' && (Number(inputValues.sleep) < 0 || Number(inputValues.sleep) > 24 || isNaN(Number(inputValues.sleep)))) {
					setEditorError('Sleep must be between 0 and 24 hours.')
					return
				}
				const val = inputValues.sleep === '' ? null : Number(Number(inputValues.sleep).toFixed(1))
				updatePayload = {
					recovery: {
						...activeLog.recovery,
						sleep: val,
						sleepQuality: inputValues.sleepQuality || null,
					},
				}
			} else if (activeEditor === 'steps') {
				if (inputValues.steps !== '' && (Number(inputValues.steps) < 0 || isNaN(Number(inputValues.steps)))) {
					setEditorError('Steps must be 0 or higher.')
					return
				}
				const val = inputValues.steps === '' ? null : Math.round(Number(inputValues.steps))
				updatePayload = { activity: { ...activeLog.activity, steps: val } }
			} else if (activeEditor === 'notes') {
				updatePayload = { mind: { ...activeLog.mind, notes: (inputValues.notes || '').trim() } }
			} else if (activeEditor === 'mood') {
				updatePayload = { mind: { ...activeLog.mind, mood: inputValues.mood || null } }
			}

			await updateDailyLog(updatePayload)
			refreshStreaks()
			fetchRecentLogs()
			setActiveEditor(null)
			setSaveNotification(`SAVED // ${activeEditor.toUpperCase()}`)
			setTimeout(() => setSaveNotification(''), 3000)
		} catch (err) {
			console.error(err)
			setEditorError(err.message || 'Transmission failed. Try again.')
		}
	}

	const handleSelectMood = async (moodId) => {
		if (isFuture) return
		const nextMood = activeLog.mind?.mood === moodId ? null : moodId
		try {
			await updateDailyLog({
				mind: { ...activeLog.mind, mood: nextMood },
			})
			refreshStreaks()
			fetchRecentLogs()
			setSaveNotification(`MIND STATE CALIBRATED`)
			setTimeout(() => setSaveNotification(''), 2500)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div className="track-page">
			<div className="atc-shader-bg" aria-hidden="true">
				<ShaderDemo_ATC />
				<div className="shader-tamer"></div>
			</div>

			<div className="track-content-layer">
				{/* Top Telemetry & Navigation Bar */}
				<header className="track-top-bar">
					<div className="track-top-bar__left">
						<Link to="/dashboard" className="track-brand-link" aria-label="Go to Dashboard">
							<span>DISCIPLINED <b>AF</b></span>
						</Link>
						<div className="track-nav-divider" />
						<div className="track-console-title">
							<span className="telemetry-pip-red" />
							<span>SYSTEM // DAILY COCKPIT</span>
						</div>
					</div>

					<div className="track-top-bar__right">
						{saving && (
							<div className="track-saving-badge">
								<Loader2 size={11} className="spin-icon" />
								<span>SYNCING TO CLOUD...</span>
							</div>
						)}
						{saveNotification && (
							<div className="track-save-toast">
								<CheckCircle2 size={12} color="#52d9a6" />
								<span>{saveNotification}</span>
							</div>
						)}
						<Link to="/dashboard" className="track-nav-back">
							← DASHBOARD
						</Link>
					</div>
				</header>

				{/* Cockpit Date Bar */}
				<div className="track-date-bar">
					<div className="date-controls-container">
						<button
							className="date-nav-btn"
							onClick={goToPreviousDay}
							title="Previous Day"
							aria-label="Previous Day"
						>
							<ChevronLeft size={16} />
						</button>

						<div className="date-display-badge">
							<Calendar size={13} className="date-calendar-icon" />
							<span className="date-text">{selectedDate}</span>
							{isToday ? (
								<span className="date-status-pill today">TODAY</span>
							) : isFuture ? (
								<span className="date-status-pill future">FUTURE // LOCKED</span>
							) : (
								<button className="date-status-pill past-btn" onClick={goToToday}>
									JUMP TO TODAY
								</button>
							)}
						</div>

						<button
							className="date-nav-btn"
							onClick={goToNextDay}
							title="Next Day"
							aria-label="Next Day"
						>
							<ChevronRight size={16} />
						</button>
					</div>

					{/* Streak / Consistency Telemetry Module */}
					<div className={`track-streak-module ${streakBroken ? 'broken' : isStreakActiveToday ? 'active-today' : 'active'}`}>
						<div className="streak-main-metric">
							<div className="streak-icon-wrap">
								{streakBroken ? (
									<ShieldAlert size={14} className="streak-icon streak-icon--broken" />
								) : (
									<Zap size={14} className="streak-icon streak-icon--live" />
								)}
							</div>
							<div className="streak-metric-text">
								<span className="streak-metric-num">{currentStreak}</span>
								<span className="streak-metric-unit">DAYS STREAK</span>
							</div>
						</div>

						{/* Integrated Consistency Micro-Heatmap (Last 14 Days) */}
						<div className="streak-micro-heatmap" role="region" aria-label="14-Day Consistency Heatmap">
							<div className="heatmap-header">
								<span className="heatmap-label">14D CONSISTENCY</span>
								<span className="heatmap-counter">
									{heatmapDays.filter((d) => d.isCompleted).length}/14
								</span>
							</div>
							<div className="heatmap-strip">
								{heatmapDays.map((d) => (
									<button
										key={d.date}
										type="button"
										className={`heatmap-cell ${d.isCompleted ? 'completed' : 'empty'} ${d.isToday ? 'today' : ''} ${d.isSelected ? 'selected' : ''}`}
										onClick={() => setSelectedDate(d.date)}
										title={`${d.date}: ${d.isCompleted ? 'RECORDED' : 'UNLOGGED'}${d.isToday ? ' (TODAY)' : ''}`}
										aria-label={`${d.date} ${d.isCompleted ? 'Recorded' : 'Unlogged'}`}
									/>
								))}
							</div>
						</div>

						<div className="streak-sub-telemetry">
							<div className="streak-tele-item">
								<span className="st-lbl">LONGEST</span>
								<span className="st-val">{longestStreak} D</span>
							</div>
							<div className="streak-tele-item">
								<span className="st-lbl">TOTAL ACTIVE</span>
								<span className="st-val">{totalConsistentDays} D</span>
							</div>
							<div className="streak-tele-item">
								<span className="st-lbl">STATUS</span>
								<span className={`st-val-status ${isStreakActiveToday ? 'done' : streakBroken ? 'broken' : 'pending'}`}>
									{isStreakActiveToday ? 'SECURED TODAY' : streakBroken ? 'STREAK RESET' : 'CALIBRATING'}
								</span>
							</div>
						</div>
					</div>

					{/* Daily Completion Meter & Day Status */}
					<div className="daily-completion-strip">
						<div className="completion-stats">
							<span className="comp-label">DAY STATUS: <strong className="status-label-highlight">{completionScore.statusLabel}</strong></span>
							<span className="comp-value">
								{completionScore.completed}/{completionScore.total} VECTORS ({completionScore.percent}%)
							</span>
						</div>
						<div className="completion-bar">
							<div
								className="completion-fill"
								style={{ width: `${completionScore.percent}%` }}
							/>
						</div>
					</div>
				</div>

				{/* Future date lock warning */}
				{isFuture && (
					<div className="future-warning-banner" role="status">
						<Lock size={14} />
						<span>FUTURE LOGGING DEACTIVATED // RECORDS CANNOT BE GENERATED AHEAD OF TIME</span>
					</div>
				)}

				{/* Main Performance Cockpit Stage */}
				<main className="track-cockpit-workspace">
					{error && (
						<div className="track-error-banner" role="alert">
							<AlertCircle size={15} />
							<span>SYSTEM TELEMETRY NOTICE: {error}</span>
							<button className="btn-retry-telemetry" onClick={() => fetchDailyLog(selectedDate)}>
								RETRY SYNC
							</button>
						</div>
					)}

					{loading && !activeLog ? (
						<div className="track-loading-state">
							<Loader2 size={24} className="spin-icon" />
							<span>CALIBRATING DAILY PERFORMANCE DATA...</span>
						</div>
					) : (
						<>
						<div className="track-console-stage">

							{/* Eyebrow & Console Header */}
							<div className="console-hud-header">
								<div className="hud-badge-tag">
									<span className="hud-dot" />
									<span>DISCIPLINE LABORATORY // HARDWARE CONTROLS</span>
								</div>
								<h1 className="console-main-headline">TELEMETRY CONTROLS</h1>
								<p className="console-hud-lead">
									Engage physical vector controllers to calibrate and log today’s performance metrics.
								</p>
							</div>

							{/* ─── HERO PRIMARY SLOT: WORKOUT TRAINING PROTOCOL ─── */}
							<div className="track-hero-workout-slot">
								<div className="workout-slot-frame">
									<div className="slot-corner-dec tl" />
									<div className="slot-corner-dec tr" />
									<div className="slot-corner-dec bl" />
									<div className="slot-corner-dec br" />

									<div className="workout-slot-header">
										<div className="slot-tag-group">
											<span className="telemetry-pip-red" />
											<span className="slot-tag">PRIMARY VECTOR // 00 WORKOUT EXECUTION</span>
										</div>
										<div className="slot-readout-pill">
											{activeLog.workout?.completed ? (
												<span className="readout-logged"><Check size={11} /> RECORDED ({activeLog.workout.durationMinutes || 0}M)</span>
											) : isSessionActive ? (
												<span className="readout-live"><span className="pulse-dot" /> LIVE IN PROGRESS</span>
											) : (
												<span className="readout-standby">STANDBY</span>
											)}
										</div>
									</div>

									{activeProgram ? (
										<div className="workout-slot-body">
											<div className="workout-protocol-info">
												<span className="protocol-sub">ASSIGNED PROTOCOL:</span>
												<h3 className="protocol-name">{activeProgram.name}</h3>
												<div className="protocol-details-row">
													<span className="detail-chip">{activeProgram.difficulty || 'ADVANCED'}</span>
													<span className="detail-chip">{activeProgram.days?.length || 0} TRAINING DAYS</span>
													{activeLog.workout?.workoutName && (
														<span className="detail-chip detail-chip--last">
															LOGGED: {activeLog.workout.workoutName}
														</span>
													)}
												</div>
											</div>

											{/* Training Day Selection or Active Session HUD */}
											{isSessionActive ? (
												<div className="slot-active-session-deck">
													<div className="live-clock-badge">
														<Clock size={14} className="spin-slow" />
														<span>{sessionStats?.durationFormatted || '00:00'}</span>
													</div>
													<MetallicButton
														label="RESUME WORKOUT"
														icon={Play}
														size="lg"
														sheenColor="#db3c47"
														onClick={() => {}}
														className="metallic-primary-action"
													/>
													<button
														className="btn-abort-action"
														onClick={discardSession}
														title="Abort Session"
													>
														ABORT
													</button>
												</div>
											) : (
												<div className="slot-ready-deck">
													{activeProgram.days && activeProgram.days.length > 1 && (
														<div className="protocol-day-selector">
															<span className="selector-label">SELECT DAY:</span>
															<select
																value={selectedDayIdx}
																onChange={(e) => setSelectedDayIdx(Number(e.target.value))}
																className="protocol-day-select"
																disabled={isFuture}
															>
																{activeProgram.days.map((d, i) => (
																	<option key={d.id || i} value={i}>
																		DAY {String(i + 1).padStart(2, '0')}: {d.name}
																	</option>
																))}
															</select>
														</div>
													)}

													<MetallicButton
														label={activeLog.workout?.completed ? "LOG ANOTHER SESSION" : "START WORKOUT SESSION"}
														icon={Dumbbell}
														size="lg"
														sheenColor="#db3c47"
														onClick={() => !isFuture && startSession(selectedDayIdx, selectedDate)}
														className="metallic-primary-action"
													/>
												</div>
											)}
										</div>
									) : (
										<div className="workout-slot-empty">
											<div className="empty-info">
												<h4>NO ACTIVE PROTOCOL ASSIGNED</h4>
												<p>Select a workout from your training facility to engage session telemetry.</p>
											</div>
											<Link to="/workouts" className="btn-assign-protocol">
												<MetallicButton
													label="SELECT WORKOUT"
													icon={ExternalLink}
													size="lg"
													sheenColor="#06b6d4"
													className="metallic-primary-action"
												/>
											</Link>
										</div>
									)}
								</div>
							</div>

							{/* ─── SECONDARY METALLIC ACTION MATRIX (8 ACTIVITIES) ─── */}
							<div className="track-activities-array-header">
								<div className="array-divider" />
								<span className="array-header-title">DISCIPLINE VECTORS // METALLIC CONTROLS</span>
								<div className="array-divider" />
							</div>

							<div className="track-metallic-grid">
								{/* 1. CALORIES */}
								<div className={`metallic-vector-bay ${activeLog.nutrition?.calories != null ? 'logged' : ''}`}>
									<div className="bay-top">
										<span className="bay-index">01 // NUTRITION</span>
										<span className={`bay-pip ${activeLog.nutrition?.calories != null ? 'active' : ''}`} />
									</div>
									<div className="bay-readout">
										<span className="readout-label">CALORIES</span>
										<span className="readout-val">
											{activeLog.nutrition?.calories != null ? `${activeLog.nutrition.calories} KCAL` : 'STANDBY'}
										</span>
									</div>
									<MetallicButton
										label="CALORIES"
										icon={Flame}
										size="md"
										sheenColor="#db3c47"
										onClick={() => openEditor('calories')}
										className="metallic-vector-btn"
									/>
								</div>

								{/* 2. PROTEIN */}
								<div className={`metallic-vector-bay ${activeLog.nutrition?.protein != null ? 'logged' : ''}`}>
									<div className="bay-top">
										<span className="bay-index">02 // PROTEIN</span>
										<span className={`bay-pip ${activeLog.nutrition?.protein != null ? 'active' : ''}`} />
									</div>
									<div className="bay-readout">
										<span className="readout-label">PROTEIN</span>
										<span className="readout-val">
											{activeLog.nutrition?.protein != null ? `${activeLog.nutrition.protein} G` : 'STANDBY'}
										</span>
									</div>
									<MetallicButton
										label="PROTEIN"
										icon={Beef}
										size="md"
										sheenColor="#db3c47"
										onClick={() => openEditor('protein')}
										className="metallic-vector-btn"
									/>
								</div>

								{/* 3. WEIGHT */}
								<div className={`metallic-vector-bay ${activeLog.body?.weight != null ? 'logged' : ''}`}>
									<div className="bay-top">
										<span className="bay-index">03 // BIOMETRIC</span>
										<span className={`bay-pip ${activeLog.body?.weight != null ? 'active' : ''}`} />
									</div>
									<div className="bay-readout">
										<span className="readout-label">WEIGHT</span>
										<span className="readout-val">
											{activeLog.body?.weight != null ? `${activeLog.body.weight} KG` : 'STANDBY'}
										</span>
									</div>
									<MetallicButton
										label="WEIGHT"
										icon={Scale}
										size="md"
										sheenColor="#06b6d4"
										onClick={() => openEditor('weight')}
										className="metallic-vector-btn"
									/>
								</div>

								{/* 4. WATER */}
								<div className={`metallic-vector-bay ${activeLog.hydration?.water != null ? 'logged' : ''}`}>
									<div className="bay-top">
										<span className="bay-index">04 // HYDRATION</span>
										<span className={`bay-pip ${activeLog.hydration?.water != null ? 'active' : ''}`} />
									</div>
									<div className="bay-readout">
										<span className="readout-label">WATER</span>
										<span className="readout-val">
											{activeLog.hydration?.water != null ? `${activeLog.hydration.water} L` : 'STANDBY'}
										</span>
									</div>
									<MetallicButton
										label="WATER"
										icon={Droplets}
										size="md"
										sheenColor="#06b6d4"
										onClick={() => openEditor('water')}
										className="metallic-vector-btn"
									/>
								</div>

								{/* 5. SLEEP */}
								<div className={`metallic-vector-bay ${activeLog.recovery?.sleep != null ? 'logged' : ''}`}>
									<div className="bay-top">
										<span className="bay-index">05 // RECOVERY</span>
										<span className={`bay-pip ${activeLog.recovery?.sleep != null ? 'active' : ''}`} />
									</div>
									<div className="bay-readout">
										<span className="readout-label">SLEEP</span>
										<span className="readout-val">
											{activeLog.recovery?.sleep != null ? `${activeLog.recovery.sleep} HRS` : 'STANDBY'}
										</span>
									</div>
									<MetallicButton
										label="SLEEP"
										icon={Moon}
										size="md"
										sheenColor="#db3c47"
										onClick={() => openEditor('sleep')}
										className="metallic-vector-btn"
									/>
								</div>

								{/* 6. STEPS */}
								<div className={`metallic-vector-bay ${activeLog.activity?.steps != null ? 'logged' : ''}`}>
									<div className="bay-top">
										<span className="bay-index">06 // LOCOMOTION</span>
										<span className={`bay-pip ${activeLog.activity?.steps != null ? 'active' : ''}`} />
									</div>
									<div className="bay-readout">
										<span className="readout-label">STEPS</span>
										<span className="readout-val">
											{activeLog.activity?.steps != null ? `${activeLog.activity.steps.toLocaleString()} STEPS` : 'STANDBY'}
										</span>
									</div>
									<MetallicButton
										label="STEPS"
										icon={Footprints}
										size="md"
										sheenColor="#db3c47"
										onClick={() => openEditor('steps')}
										className="metallic-vector-btn"
									/>
								</div>

								{/* 7. MOOD */}
								<div className={`metallic-vector-bay ${activeLog.mind?.mood != null ? 'logged' : ''}`}>
									<div className="bay-top">
										<span className="bay-index">07 // COGNITIVE</span>
										<span className={`bay-pip ${activeLog.mind?.mood != null ? 'active' : ''}`} />
									</div>
									<div className="bay-readout">
										<span className="readout-label">MOOD</span>
										<span className="readout-val">
											{activeLog.mind?.mood ? activeLog.mind.mood.toUpperCase() : 'STANDBY'}
										</span>
									</div>
									<MetallicButton
										label="MOOD"
										icon={Smile}
										size="md"
										sheenColor="#06b6d4"
										onClick={() => openEditor('mood')}
										className="metallic-vector-btn"
									/>
								</div>

								{/* 8. NOTES */}
								<div className={`metallic-vector-bay ${activeLog.mind?.notes ? 'logged' : ''}`}>
									<div className="bay-top">
										<span className="bay-index">08 // LOG NOTES</span>
										<span className={`bay-pip ${activeLog.mind?.notes ? 'active' : ''}`} />
									</div>
									<div className="bay-readout">
										<span className="readout-label">NOTES</span>
										<span className="readout-val">
											{activeLog.mind?.notes ? 'RECORDED' : 'STANDBY'}
										</span>
									</div>
									<MetallicButton
										label="NOTES"
										icon={FileText}
										size="md"
										sheenColor="#db3c47"
										onClick={() => openEditor('notes')}
										className="metallic-vector-btn"
									/>
								</div>
							</div>

						</div>

						{/* ─── END-OF-DAY TELEMETRY SUMMARY SECTION ─── */}
						<section className="eod-summary-section">
							<div className="eod-summary-header">
								<div className="eod-title-group">
									<span className="telemetry-pip-red" />
									<h3>AUDIT SUMMARY // {selectedDate}</h3>
								</div>
								<div className="eod-status-badge">
									<span>{completionScore.completed} OF 8 METRICS DOCUMENTED</span>
								</div>
							</div>

							<div className="eod-vectors-grid">
								{completionScore.metrics.map((metric) => (
									<div
										key={metric.key}
										className={`eod-vector-chip ${metric.logged ? 'logged' : 'missing'}`}
									>
										<div className="vector-meta">
											<span className="vector-indicator" />
											<span className="vector-name">{metric.label}</span>
										</div>
										<span className="vector-state">
											{metric.logged ? 'RECORDED' : 'UNLOGGED'}
										</span>
									</div>
								))}
							</div>
						</section>
						</>
					)}
				</main>

				{/* Minimal Terminal Footer */}
				<footer className="track-footer">
					<span>© DISCIPLINED AF — SYSTEM NODE // DAILY PERFORMANCE COCKPIT</span>
					<span>ACTIVE DATE: {selectedDate}</span>
				</footer>
			</div>

			{/* ─── LIVE TRAINING CONSOLE MODAL / OVERLAY ─── */}
			{isSessionActive && (
				<div className="training-console-overlay">
					<div className="training-console-panel">
						
						{/* Console Top Header Bar */}
						<div className="console-header">
							<div className="console-brand-wrap">
								<span className="console-pip" />
								<div className="console-titles">
									<span className="console-protocol-tag">TRAINING CONSOLE // LIVE EXECUTION</span>
									<h2>{session.workoutName}</h2>
									<p className="console-day-name">{session.dayName}</p>
								</div>
							</div>

							<div className="console-telemetry-hud">
								<div className="console-stat-box">
									<span className="stat-label">ELAPSED TIME</span>
									<span className="stat-value">{sessionStats?.durationFormatted || '00:00'}</span>
								</div>
								<div className="console-stat-box">
									<span className="stat-label">PROGRESS</span>
									<span className="stat-value">
										{sessionStats?.completedSets} / {sessionStats?.totalSets} SETS ({sessionStats?.percentComplete}%)
									</span>
								</div>

								<div className="console-main-actions">
									{isPaused ? (
										<button className="btn-hud btn-hud--resume" onClick={resumeSession}>
											<Play size={13} /> RESUME
										</button>
									) : (
										<button className="btn-hud btn-hud--pause" onClick={pauseSession}>
											<Pause size={13} /> PAUSE
										</button>
									)}
									<button className="btn-hud btn-hud--finish" onClick={() => setShowFinishModal(true)}>
										<Check size={14} /> FINISH
									</button>
									<button className="btn-hud btn-hud--abort" onClick={discardSession} title="Abort Session">
										<X size={14} />
									</button>
								</div>
							</div>
						</div>

						{/* Console Exercise Sequence Workspace */}
						<div className="console-body">
							<div className="console-exercises-list">
								{session.exercises?.map((ex, exIdx) => {
									const def = exerciseMap.get(ex.exerciseId)
									const exCompleted = ex.sets.every(s => s.completed || s.skipped)
									const completedSetsCount = ex.sets.filter(s => s.completed).length

									return (
										<div key={ex.exerciseId || exIdx} className={`console-ex-block ${exCompleted ? 'completed' : ''}`}>
											<div className="console-ex-header">
												<div className="ex-title-group">
													<span className="ex-order-idx">{String(exIdx + 1).padStart(2, '0')}</span>
													<div>
														<h3 className="ex-name">{def?.name || ex.exerciseId}</h3>
														<div className="ex-meta-tags">
															<span>{def?.primaryMuscles?.join(', ') || 'Targeted'}</span>
															<span className="sep">•</span>
															<span>{def?.equipment?.join(', ') || 'Gear'}</span>
															{ex.notes && (
																<>
																	<span className="sep">•</span>
																	<span className="ex-notes-hint">{ex.notes}</span>
																</>
															)}
														</div>
													</div>
												</div>

												<div className="ex-progress-badge">
													<span>{completedSetsCount} / {ex.sets.length} COMPLETED</span>
												</div>
											</div>

											{/* Sets Grid */}
											<div className="console-sets-grid">
												<div className="sets-table-header">
													<span>SET</span>
													<span>TARGET</span>
													<span>LOAD (KG)</span>
													<span>REPS</span>
													<span>ACTIONS</span>
												</div>

												{ex.sets.map((set, sIdx) => (
													<div
														key={sIdx}
														className={`set-table-row ${set.completed ? 'set-completed' : set.skipped ? 'set-skipped' : ''}`}
													>
														<div className="set-idx-cell">
															<span className="set-num-badge">#{set.setNumber}</span>
														</div>

														<div className="set-target-cell">
															<span>{set.targetReps} reps</span>
														</div>

														<div className="set-input-cell">
															<input
																type="number"
																step="0.5"
																min="0"
																placeholder="kg"
																value={set.weightKg ?? ''}
																onChange={(e) =>
																	updateSet(exIdx, sIdx, {
																		weightKg: e.target.value === '' ? null : Number(e.target.value),
																	})
																}
															/>
														</div>

														<div className="set-input-cell">
															<input
																type="number"
																step="1"
																min="0"
																placeholder="reps"
																value={set.reps ?? ''}
																onChange={(e) =>
																	updateSet(exIdx, sIdx, {
																		reps: e.target.value === '' ? null : Number(e.target.value),
																	})
																}
															/>
														</div>

														<div className="set-actions-cell">
															<button
																className={`btn-set-complete ${set.completed ? 'active' : ''}`}
																onClick={() => toggleSetComplete(exIdx, sIdx)}
																title={set.completed ? 'Mark uncompleted' : 'Complete set'}
															>
																<Check size={14} />
																<span>{set.completed ? 'DONE' : 'LOG'}</span>
															</button>
															<button
																className={`btn-set-skip ${set.skipped ? 'active' : ''}`}
																onClick={() => toggleSetSkip(exIdx, sIdx)}
																title="Skip set"
															>
																<SkipForward size={12} />
															</button>
														</div>
													</div>
												))}
											</div>
										</div>
									)
								})}
							</div>

							{/* Session Notes Footer */}
							<div className="console-notes-footer">
								<label>SESSION NOTES // OBSERVATIONS</label>
								<textarea
									rows={2}
									placeholder="Log RPE, fatigue, modifications, machine pin settings..."
									value={session.notes || ''}
									onChange={(e) => setSessionNotes(e.target.value)}
								/>
							</div>
						</div>

						{/* Confirmation Dialog Overlay */}
						{showFinishModal && (
							<div className="session-finish-modal-overlay" onClick={() => !finishingSession && setShowFinishModal(false)}>
								<div className="session-finish-modal" onClick={(e) => e.stopPropagation()}>
									<div className="modal-header">
										<div className="modal-title-group">
											<span className="telemetry-pip-red" />
											<h3>FINAL AUDIT // COMPLETE SESSION</h3>
										</div>
										{!finishingSession && (
											<button className="modal-close-btn" onClick={() => setShowFinishModal(false)}>
												<X size={16} />
											</button>
										)}
									</div>

									<div className="finish-summary-card">
										<h4 className="summary-protocol-title">{session.workoutName}</h4>
										<p className="summary-day-subtitle">{session.dayName}</p>

										<div className="summary-metrics-grid">
											<div className="summary-metric-item">
												<span className="sm-label">DURATION</span>
												<span className="sm-val">{sessionStats?.durationFormatted || '00:00'}</span>
											</div>
											<div className="summary-metric-item">
												<span className="sm-label">SETS COMPLETED</span>
												<span className="sm-val">{sessionStats?.completedSets} / {sessionStats?.totalSets}</span>
											</div>
											<div className="summary-metric-item">
												<span className="sm-label">SETS SKIPPED</span>
												<span className="sm-val">{sessionStats?.skippedSets}</span>
											</div>
											<div className="summary-metric-item">
												<span className="sm-label">EXERCISES</span>
												<span className="sm-val">{sessionStats?.exercisesCompleted} / {sessionStats?.totalExercises}</span>
											</div>
										</div>

										{finishError && (
											<div className="modal-error-alert" role="alert">
												<AlertCircle size={14} />
												<span>{finishError}</span>
											</div>
										)}
									</div>

									<p className="finish-instruction">
										Confirming will seal today's training log into your permanent DailyLog record.
									</p>

									<div className="modal-actions">
										<button
											type="button"
											className="btn-modal-cancel"
											disabled={finishingSession}
											onClick={() => setShowFinishModal(false)}
										>
											RESUME SESSION
										</button>
										<button
											type="button"
											className="btn-modal-save"
											disabled={finishingSession}
											onClick={handleConfirmFinish}
										>
											{finishingSession ? 'PERSISTING RECORD...' : 'CONFIRM & SAVE'}
										</button>
									</div>
								</div>
							</div>
						)}

					</div>
				</div>
			)}

			{/* ─── INLINE METRIC MODAL / DRAWER ─── */}
			{activeEditor && (
				<div className="metric-editor-overlay" onClick={() => setActiveEditor(null)}>
					<div className="metric-editor-modal" onClick={(e) => e.stopPropagation()}>
						<div className="modal-header">
							<div className="modal-title-group">
								<span className="telemetry-pip-red" />
								<h3>UPDATE // {activeEditor.toUpperCase()}</h3>
							</div>
							<button className="modal-close-btn" onClick={() => setActiveEditor(null)}>
								<X size={16} />
							</button>
						</div>

						{/* Current Logged Readout */}
						<div className="modal-current-readout">
							<span className="readout-label">CURRENT RECORDED:</span>
							<span className="readout-value">
								{activeEditor === 'calories' && (activeLog.nutrition?.calories != null ? `${activeLog.nutrition.calories} kcal` : 'UNLOGGED')}
								{activeEditor === 'protein' && (activeLog.nutrition?.protein != null ? `${activeLog.nutrition.protein} g` : 'UNLOGGED')}
								{activeEditor === 'weight' && (activeLog.body?.weight != null ? `${activeLog.body.weight} kg` : 'UNLOGGED')}
								{activeEditor === 'water' && (activeLog.hydration?.water != null ? `${activeLog.hydration.water} L` : 'UNLOGGED')}
								{activeEditor === 'sleep' && (activeLog.recovery?.sleep != null ? `${activeLog.recovery.sleep} hrs (${activeLog.recovery?.sleepQuality || 'standard'})` : 'UNLOGGED')}
								{activeEditor === 'steps' && (activeLog.activity?.steps != null ? `${activeLog.activity.steps.toLocaleString()} steps` : 'UNLOGGED')}
								{activeEditor === 'notes' && (activeLog.mind?.notes ? 'ENTRY PRESENT' : 'EMPTY')}
								{activeEditor === 'mood' && (activeLog.mind?.mood ? activeLog.mind.mood.toUpperCase() : 'UNLOGGED')}
							</span>
						</div>

						{editorError && (
							<div className="modal-error-alert" role="alert">
								<AlertCircle size={14} />
								<span>{editorError}</span>
							</div>
						)}

						<form onSubmit={handleSaveMetric} className="modal-form">
							{activeEditor === 'calories' && (
								<div className="form-group">
									<label>CONSUMED CALORIES (KCAL)</label>
									<input
										type="number"
										step="1"
										min="0"
										autoFocus
										placeholder="e.g. 2400"
										value={inputValues.calories}
										onChange={(e) => setInputValues({ ...inputValues, calories: e.target.value })}
									/>
									<span className="input-hint">Default Target: {calorieTarget} kcal</span>
								</div>
							)}

							{activeEditor === 'protein' && (
								<div className="form-group">
									<label>PROTEIN CONSUMPTION (GRAMS)</label>
									<input
										type="number"
										step="1"
										min="0"
										autoFocus
										placeholder="e.g. 160"
										value={inputValues.protein}
										onChange={(e) => setInputValues({ ...inputValues, protein: e.target.value })}
									/>
									<span className="input-hint">Target: {proteinTarget} g</span>
								</div>
							)}

							{activeEditor === 'weight' && (
								<div className="form-group">
									<label>BODY MASS (KG)</label>
									<input
										type="number"
										step="0.1"
										min="10"
										max="400"
										autoFocus
										placeholder="e.g. 78.5"
										value={inputValues.weight}
										onChange={(e) => setInputValues({ ...inputValues, weight: e.target.value })}
									/>
								</div>
							)}

							{activeEditor === 'water' && (
								<div className="form-group">
									<label>WATER INTAKE (LITERS)</label>
									<input
										type="number"
										step="0.1"
										min="0"
										autoFocus
										placeholder="e.g. 3.0"
										value={inputValues.water}
										onChange={(e) => setInputValues({ ...inputValues, water: e.target.value })}
									/>
								</div>
							)}

							{activeEditor === 'sleep' && (
								<>
									<div className="form-group">
										<label>SLEEP DURATION (HOURS)</label>
										<input
											type="number"
											step="0.25"
											min="0"
											max="24"
											autoFocus
											placeholder="e.g. 7.5"
											value={inputValues.sleep}
											onChange={(e) => setInputValues({ ...inputValues, sleep: e.target.value })}
										/>
									</div>
									<div className="form-group">
										<label>QUALITY ASSESSMENT</label>
										<div className="sleep-quality-selector">
											{SLEEP_QUALITIES.map((q) => (
												<button
													type="button"
													key={q.id}
													className={`quality-btn ${inputValues.sleepQuality === q.id ? 'active' : ''}`}
													onClick={() => setInputValues({ ...inputValues, sleepQuality: q.id })}
												>
													{q.label}
												</button>
											))}
										</div>
									</div>
								</>
							)}

							{activeEditor === 'steps' && (
								<div className="form-group">
									<label>TOTAL DAILY STEPS</label>
									<input
										type="number"
										step="100"
										min="0"
										autoFocus
										placeholder="e.g. 10000"
										value={inputValues.steps}
										onChange={(e) => setInputValues({ ...inputValues, steps: e.target.value })}
									/>
								</div>
							)}

							{activeEditor === 'notes' && (
								<div className="form-group">
									<label>DAILY JOURNAL & OBSERVATIONS</label>
									<textarea
										rows={4}
										autoFocus
										placeholder="Log energy levels, diet deviations, session notes..."
										value={inputValues.notes}
										onChange={(e) => setInputValues({ ...inputValues, notes: e.target.value })}
									/>
								</div>
							)}

							{activeEditor === 'mood' && (
								<div className="form-group">
									<label>COGNITIVE DISCIPLINE // MOOD STATE</label>
									<div className="mood-modal-options">
										{MOOD_OPTIONS.map((m) => (
											<button
												type="button"
												key={m.id}
												className={`mood-modal-btn ${inputValues.mood === m.id ? 'active' : ''}`}
												onClick={() => setInputValues({ ...inputValues, mood: m.id })}
											>
												<span className="mood-modal-score">{m.val}</span>
												<span className="mood-modal-name">{m.label}</span>
											</button>
										))}
									</div>
								</div>
							)}

							<div className="modal-actions">
								<button
									type="button"
									className="btn-modal-cancel"
									onClick={() => setActiveEditor(null)}
								>
									CANCEL
								</button>
								<button
									type="submit"
									className="btn-modal-save"
									disabled={saving}
								>
									{saving ? 'SYNCING...' : 'SAVE ENTRY'}
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}
