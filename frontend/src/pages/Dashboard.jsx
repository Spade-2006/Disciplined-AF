import { useEffect, useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Activity, ArrowRight, Beef, Dumbbell, Flame, Footprints, Moon, Scale, ShieldCheck, Zap } from 'lucide-react'
import DigitalPhysiqueStage from '../components/dashboard/DigitalPhysiqueStage.jsx'
import HomeSidebar from '../components/dashboard/HomeSidebar.jsx'
import ProfileSummary from '../components/dashboard/ProfileSummary.jsx'
import WorkoutCard from '../components/dashboard/WorkoutCard.jsx'
import { createTrainingContext } from '../workout/workoutPlan.js'
import { usePhysiqueProfile, useDailyLog, useWorkouts, useStreaks } from '../hooks/index.js'
import { prebuiltPrograms } from '../data/programs.js'
import './Dashboard.css'

const readStoredUser = () => {
	try {
		return JSON.parse(localStorage.getItem('user') || '{}')
	} catch {
		return {}
	}
}

const displayMeasurement = (value, unit) => {
	if (!Number.isFinite(value)) return 'Unavailable'
	return `${Number(value.toFixed(1))}${unit ? ` ${unit}` : ''}`
}

function Dashboard() {
	const navigate = useNavigate()
	const physique = usePhysiqueProfile()
	const [account] = useState(readStoredUser)
	const training = createTrainingContext(account)
	const [isAuthorized] = useState(() => Boolean(
		localStorage.getItem('token') && readStoredUser().onboardingCompleted
	))

	// Real Persisted Data Layer: DailyLog, Workouts, and Streaks
	const { activeLog, loading: dailyLoading } = useDailyLog()
	const { workouts, activeWorkoutId, loading: workoutsLoading } = useWorkouts()
	const { currentStreak, longestStreak, totalConsistentDays, streakBroken, isStreakActiveToday, loading: streaksLoading } = useStreaks()

	// Resolve the active program if assigned
	const activeProgram = useMemo(() => {
		if (!activeWorkoutId) return null
		const custom = workouts.find((w) => w.id === activeWorkoutId)
		if (custom) return custom
		return prebuiltPrograms.find((p) => p.id === activeWorkoutId) || null
	}, [activeWorkoutId, workouts])

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			navigate('/login', { replace: true })
		} else if (!readStoredUser().onboardingCompleted) {
			navigate('/onboarding/profile', { replace: true })
		}
	}, [navigate])

	if (!isAuthorized) return null

	return (
		<main className="physique-dashboard">
			<HomeSidebar />
			<div className="dashboard-workspace">
				{/* Top Header */}
				<header className="dashboard-topbar">
					<div className="dashboard-topbar__context">
						<span>COMMAND CENTER</span>
					</div>
					<ProfileSummary
						name={account.name}
						configuration={physique.physiqueConfiguration}
						modelType={physique.modelType}
						height={physique.height}
						currentWeight={physique.currentWeight}
						estimatedBodyFat={physique.estimatedBodyFat}
						bmi={physique.bmi}
						physiqueClassification={physique.physiqueClassification}
					/>
				</header>

				{/* Main Content Area */}
				<div className="dashboard-grid">
					{/* Left: Dominant Digital Physique Stage */}
					<section className="dashboard-physique" aria-labelledby="digital-physique-title">
						<div className="dashboard-section-heading">
							<h1 id="digital-physique-title">Digital Physique</h1>
							<span className="physique-status-tag">
								<i /> CALIBRATED MODEL
							</span>
						</div>
						<DigitalPhysiqueStage configuration={physique.physiqueConfiguration} loading={physique.loading} />
						{physique.error && (
							<p className="dashboard-data-error" role="status">Profile data unavailable: {physique.error}</p>
						)}
					</section>

					{/* Right: Command Actions Column */}
					<aside className="dashboard-command-panel" aria-label="Command actions and protocols">
						{/* Primary Action: Track Today */}
						<section className="command-section command-track">
							<div className="command-track__glow" aria-hidden="true" />
							<div className="command-section__heading">
								<span className="command-eyebrow command-eyebrow--active">
									<span className="command-pulse-dot" /> PRIMARY ACTION
								</span>
								<Activity size={14} className="command-icon-accent" aria-hidden="true" />
							</div>
							<div className="command-track__body">
								<h2>TRACK TODAY</h2>
								<p>Log workout performance, macro intake, and biometric recovery.</p>
							</div>
							<Link className="command-track__button" to="/track">
								<span>LOG TODAY'S TELEMETRY</span>
								<ArrowRight size={14} aria-hidden="true" />
							</Link>
						</section>

						{/* Workout Protocol Card */}
						{activeProgram ? (
							<section className="command-section command-workout" aria-labelledby="workout-title">
								<div className="command-section__heading">
									<span className="command-eyebrow">TRAINING PROTOCOL</span>
									<Dumbbell size={14} aria-hidden="true" />
								</div>
								<h2 id="workout-title">Workout</h2>

								<div className="workout-hero">
									<div className="workout-hero__header">
										<strong>{activeProgram.name}</strong>
										<span className="workout-status-pill" data-status={activeLog.workout?.completed ? 'completed' : 'scheduled'}>
											<i /> {activeLog.workout?.completed ? 'COMPLETED TODAY' : 'READY TO COMMENCE'}
										</span>
									</div>
									<p className="workout-hero__focus">
										{activeLog.workout?.completed
											? `Sealed Session: ${activeLog.workout.workoutName || activeProgram.name} (${activeLog.workout.durationMinutes || 0} min)`
											: `${activeProgram.category?.replace(/_/g, ' ').toUpperCase() || 'CUSTOM'} • ${activeProgram.daysPerWeek} DAYS/WK`}
									</p>
								</div>

								<div className="workout-meta-grid">
									<div className="workout-meta-cell">
										<span>ENVIRONMENT</span>
										<strong>{activeProgram.environment?.toUpperCase() || 'GYM'}</strong>
									</div>
									<div className="workout-meta-cell">
										<span>DAYS / WEEK</span>
										<strong>{activeProgram.daysPerWeek} <small>days</small></strong>
									</div>
								</div>

								<Link className="command-workout__button" to="/track">
									<span>{activeLog.workout?.completed ? 'VIEW SESSION LOG' : 'COMMENCE TRAINING'}</span>
									<ArrowRight size={13} aria-hidden="true" />
								</Link>
							</section>
						) : (
							<WorkoutCard plan={null} loading={workoutsLoading} training={training} />
						)}

						{/* Consistency & Streaks Module */}
						<section className="command-section command-consistency" aria-labelledby="streak-summary-title">
							<div className="command-section__heading">
								<span className="command-eyebrow">CONSISTENCY CADENCE</span>
								<Zap size={14} className="command-icon-accent" aria-hidden="true" />
							</div>
							<h2 id="streak-summary-title">Performance Streak</h2>

							<div className="telemetry-grid">
								<div className="telemetry-card telemetry-card--highlight">
									<span className="telemetry-card__label">CURRENT STREAK</span>
									<strong className="telemetry-card__value">
										{currentStreak} <small>days</small>
									</strong>
								</div>
								<div className="telemetry-card">
									<span className="telemetry-card__label">LONGEST STREAK</span>
									<strong className="telemetry-card__value">
										{longestStreak} <small>days</small>
									</strong>
								</div>
								<div className="telemetry-card">
									<span className="telemetry-card__label">DISCIPLINE DAYS</span>
									<strong className="telemetry-card__value">
										{totalConsistentDays} <small>total</small>
									</strong>
								</div>
								<div className="telemetry-card">
									<span className="telemetry-card__label">STREAK STATUS</span>
									<strong className="telemetry-card__value telemetry-card__value--text">
										{isStreakActiveToday ? 'SECURED TODAY' : streakBroken ? 'STREAK BROKEN' : 'CALIBRATING'}
									</strong>
								</div>
							</div>
						</section>

						{/* Protocol & Body Metrics */}
						<section className="command-section command-telemetry" aria-labelledby="protocol-summary-title">
							<div className="command-section__heading">
								<span className="command-eyebrow">BIOMETRIC TELEMETRY</span>
								<ShieldCheck size={14} aria-hidden="true" />
							</div>
							<h2 id="protocol-summary-title">Protocol & Metrics</h2>
							
							<div className="telemetry-grid">
								<div className="telemetry-card">
									<span className="telemetry-card__label">TRAINING GOAL</span>
									<strong className="telemetry-card__value telemetry-card__value--text">
										{training.goal?.label || 'Calibrated protocol'}
									</strong>
								</div>
								<div className="telemetry-card">
									<span className="telemetry-card__label">FREQUENCY</span>
									<strong className="telemetry-card__value telemetry-card__value--text">
										{training.daysPerWeek ? `${training.daysPerWeek} days / wk` : 'Flexible'}
									</strong>
								</div>
								<div className="telemetry-card telemetry-card--highlight">
									<span className="telemetry-card__label">CURRENT WEIGHT</span>
									<strong className="telemetry-card__value">
										{activeLog.body?.weight != null ? (
											<>{activeLog.body.weight} <small>kg</small></>
										) : Number.isFinite(physique.currentWeight) ? (
											<>{Number(physique.currentWeight.toFixed(1))} <small>kg</small></>
										) : (
											<span className="telemetry-card__na">—</span>
										)}
									</strong>
								</div>
								<div className="telemetry-card telemetry-card--highlight">
									<span className="telemetry-card__label">TARGET WEIGHT</span>
									<strong className="telemetry-card__value">
										{Number.isFinite(physique.targetWeight) ? (
											<>{Number(physique.targetWeight.toFixed(1))} <small>kg</small></>
										) : (
											<span className="telemetry-card__na">—</span>
										)}
									</strong>
								</div>
								<div className="telemetry-card">
									<span className="telemetry-card__label">BMI INDEX</span>
									<strong className="telemetry-card__value">
										{Number.isFinite(physique.bmi) ? (
											Number(physique.bmi.toFixed(1))
										) : (
											<span className="telemetry-card__na">—</span>
										)}
									</strong>
								</div>
								<div className="telemetry-card">
									<span className="telemetry-card__label">BODY FAT</span>
									<strong className="telemetry-card__value">
										{Number.isFinite(physique.estimatedBodyFat) ? (
											<>{Number(physique.estimatedBodyFat.toFixed(1))} <small>%</small></>
										) : (
											<span className="telemetry-card__na">—</span>
										)}
									</strong>
								</div>
							</div>
						</section>
					</aside>
				</div>

				{/* Footer: Horizontal Today's Status Telemetry Shelf */}
				<footer className="dashboard-footer" aria-label="Today's daily status">
					<div className="dashboard-footer__label">
						<span>TODAY'S LOG</span>
						<small>DAILY STATUS</small>
					</div>
					<div className="dashboard-footer__metrics">
						{/* Calories */}
						<div className="footer-metric-cell">
							<div className="footer-metric-cell__header">
								<Flame size={12} aria-hidden="true" />
								<span>Calories</span>
							</div>
							<strong>
								{activeLog.nutrition?.calories != null ? `${activeLog.nutrition.calories} kcal` : 'Not logged'}
							</strong>
						</div>

						{/* Protein */}
						<div className="footer-metric-cell">
							<div className="footer-metric-cell__header">
								<Beef size={12} aria-hidden="true" />
								<span>Protein</span>
							</div>
							<strong>
								{activeLog.nutrition?.protein != null ? `${activeLog.nutrition.protein} g` : 'Not logged'}
							</strong>
						</div>

						{/* Steps */}
						<div className="footer-metric-cell">
							<div className="footer-metric-cell__header">
								<Footprints size={12} aria-hidden="true" />
								<span>Steps</span>
							</div>
							<strong>
								{activeLog.activity?.steps != null ? `${activeLog.activity.steps.toLocaleString()} steps` : 'Not logged'}
							</strong>
						</div>

						{/* Workout */}
						<div className="footer-metric-cell">
							<div className="footer-metric-cell__header">
								<Dumbbell size={12} aria-hidden="true" />
								<span>Workout</span>
							</div>
							<strong>
								{activeLog.workout?.completed
									? `Completed (${activeLog.workout.durationMinutes || 0}m)`
									: activeProgram
									? 'Scheduled'
									: 'Not logged'}
							</strong>
						</div>

						{/* Weight */}
						<div className="footer-metric-cell">
							<div className="footer-metric-cell__header">
								<Scale size={12} aria-hidden="true" />
								<span>Weight</span>
							</div>
							<strong>
								{activeLog.body?.weight != null ? `${activeLog.body.weight} kg` : 'Not logged'}
							</strong>
						</div>

						{/* Sleep */}
						<div className="footer-metric-cell">
							<div className="footer-metric-cell__header">
								<Moon size={12} aria-hidden="true" />
								<span>Sleep</span>
							</div>
							<strong>
								{activeLog.recovery?.sleep != null ? `${activeLog.recovery.sleep} hrs` : 'Not logged'}
							</strong>
						</div>
					</div>
				</footer>
			</div>
		</main>
	)
}

export default Dashboard
