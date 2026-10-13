import { Link } from 'react-router-dom'
import { ArrowRight, Dumbbell } from 'lucide-react'
import { getSplitById } from '../../workout/trainingSplits.js'
import { summarizeWorkoutPlan } from '../../workout/workoutPlan.js'

const STATUS_LABELS = { scheduled: 'Ready', completed: 'Completed', rest: 'Rest day' }

function WorkoutCard({ plan, loading, training }) {
	const summary = summarizeWorkoutPlan(plan)
	const split = summary ? getSplitById(summary.splitId) : null
	const exercises = summary?.todaySession?.exercises ?? []

	return (
		<section className="command-section command-workout" aria-labelledby="workout-title">
			<div className="command-section__heading">
				<span className="command-eyebrow">TRAINING PROTOCOL</span>
				<Dumbbell size={14} aria-hidden="true" />
			</div>
			<h2 id="workout-title">Workout</h2>

			{summary ? (
				<>
					<div className="workout-hero">
						<div className="workout-hero__header">
							<strong>{summary.todaySession?.name || 'Rest & Recovery'}</strong>
							{summary.status && (
								<span className="workout-status-pill" data-status={summary.status}>
									<i /> {STATUS_LABELS[summary.status]}
								</span>
							)}
						</div>
						<p className="workout-hero__focus">
							{summary.todaySession?.focus || 'Scheduled active recovery and adaptation'}
						</p>
					</div>

					<div className="workout-meta-grid">
						<div className="workout-meta-cell">
							<span>ACTIVE SPLIT</span>
							<strong>{split?.label || 'Custom'}</strong>
						</div>
						<div className="workout-meta-cell">
							<span>WEEK PROGRESS</span>
							<strong>{summary.completedThisWeek}/{summary.plannedThisWeek} <small>sessions</small></strong>
						</div>
					</div>

					{summary.status === 'scheduled' && (
						<Link className="command-workout__button" to="/workouts">
							<span>EXECUTE PROTOCOL</span>
							<ArrowRight size={13} aria-hidden="true" />
						</Link>
					)}
				</>
			) : (
				<>
					<div className="workout-hero">
						<div className="workout-hero__header">
							<strong>{loading ? 'CALIBRATING…' : 'UNASSIGNED PROTOCOL'}</strong>
							<span className="workout-status-pill" data-status="pending">
								<i /> STANDBY
							</span>
						</div>
						<p className="workout-hero__focus">
							Select a split structure and schedule to activate daily workouts.
						</p>
					</div>

					<div className="workout-meta-grid">
						<div className="workout-meta-cell">
							<span>TARGET GOAL</span>
							<strong>{training.goal?.label || 'Calibrating'}</strong>
						</div>
						<div className="workout-meta-cell">
							<span>FREQUENCY</span>
							<strong>{training.daysPerWeek ? `${training.daysPerWeek} days / week` : 'Not configured'}</strong>
						</div>
					</div>

					{!loading && (
						<Link className="command-workout__button" to="/workouts">
							<span>ACTIVATE TRAINING</span>
							<ArrowRight size={13} aria-hidden="true" />
						</Link>
					)}
				</>
			)}
		</section>
	)
}

export default WorkoutCard
