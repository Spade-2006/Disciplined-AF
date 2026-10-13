import React, { useState } from 'react'
import { 
	Dumbbell, 
	Target, 
	Calendar, 
	Award, 
	Plus, 
	Edit3, 
	Trash2, 
	Copy, 
	CheckCircle2, 
	ArrowRight, 
	Layers, 
	Sparkles, 
	Clock, 
	XCircle, 
	ShieldCheck,
	SlidersHorizontal,
	ExternalLink
} from 'lucide-react'
import WorkoutVisual from './WorkoutVisual.jsx'
import './MyWorkoutsView.css'

export default function MyWorkoutsView({
	activeProgram,
	customPrograms,
	savedPrebuiltPrograms,
	recentPrograms,
	onOpenProgramDetail,
	onSelectActive,
	onClearActive,
	onOpenCreateBuilder,
	onOpenEditBuilder,
	onDuplicateProgram,
	onDeleteCustomProgram,
	onBrowseLibrary
}) {
	const [deletingId, setDeletingId] = useState(null)

	const handleDeleteConfirm = (prog) => {
		if (window.confirm(`Are you sure you want to delete "${prog.name}"? This action cannot be undone.`)) {
			onDeleteCustomProgram(prog.id)
		}
	}

	return (
		<div className="my-workouts-view">
			
			{/* ─── 1. ACTIVE WORKOUT COMMAND COCKPIT ─── */}
			<section className="my-workouts-section my-workouts-section--active">
				<div className="section-title-row">
					<div className="section-title-telemetry">
						<span className="telemetry-pip-red" />
						<h2>ACTIVE CALIBRATION</h2>
					</div>
					{activeProgram && (
						<span className="telemetry-sub-badge">SYSTEM // LIVE PROTOCOL</span>
					)}
				</div>

				{activeProgram ? (
					<div className="active-protocol-cockpit" onClick={() => onOpenProgramDetail(activeProgram)}>
						<div className="active-cockpit__left">
							<div className="active-cockpit__visual-wrap">
								<WorkoutVisual program={activeProgram} />
								<div className="active-cockpit__pulse-tag">
									<CheckCircle2 size={12} /> ACTIVE PROTOCOL
								</div>
							</div>
						</div>

						<div className="active-cockpit__center">
							<div className="active-cockpit__meta-line">
								<span className="cockpit-badge cockpit-badge--cyan">{activeProgram.environment}</span>
								<span className="cockpit-badge">{activeProgram.experience}</span>
								<span className="cockpit-badge cockpit-badge--red">{activeProgram.daysPerWeek} DAYS / WK</span>
								{activeProgram.isCustom && <span className="cockpit-badge cockpit-badge--custom">CUSTOM</span>}
							</div>
							
							<h3 className="active-cockpit__title">{activeProgram.name}</h3>
							<p className="active-cockpit__desc">{activeProgram.description}</p>

							{/* Days Preview */}
							<div className="active-cockpit__days-preview">
								{activeProgram.days?.map((d, i) => (
									<div key={d.id || i} className="active-day-chip">
										<strong>DAY {String(i + 1).padStart(2, '0')}</strong>
										<span>{d.name}</span>
									</div>
								))}
							</div>
						</div>

						<div className="active-cockpit__actions" onClick={(e) => e.stopPropagation()}>
							<button 
								className="btn-cockpit-primary"
								onClick={() => onOpenProgramDetail(activeProgram)}
							>
								<ExternalLink size={15} />
								<span>VIEW PROTOCOL</span>
							</button>

							<button 
								className="btn-cockpit-secondary"
								onClick={onBrowseLibrary}
							>
								<SlidersHorizontal size={15} />
								<span>CHANGE PROTOCOL</span>
							</button>

							<button 
								className="btn-cockpit-clear"
								onClick={onClearActive}
								title="Clear active protocol"
							>
								<XCircle size={14} />
								<span>CLEAR</span>
							</button>
						</div>
					</div>
				) : (
					<div className="active-protocol-empty">
						<div className="empty-cockpit-content">
							<Dumbbell size={36} className="empty-cockpit-icon" />
							<h3>NO ACTIVE PROTOCOL ASSIGNED</h3>
							<p>Select a prebuilt curriculum from the 100+ program facility catalog, or construct your own personalized program.</p>
							<div className="empty-cockpit-btns">
								<button className="btn-cockpit-primary" onClick={onBrowseLibrary}>
									<Layers size={16} /> BROWSE 100+ PROGRAMS
								</button>
								<button className="btn-cockpit-secondary" onClick={onOpenCreateBuilder}>
									<Plus size={16} /> CREATE CUSTOM PROTOCOL
								</button>
							</div>
						</div>
					</div>
				)}
			</section>


			{/* ─── 2. MY CUSTOM WORKOUTS ─── */}
			<section className="my-workouts-section">
				<div className="section-title-row">
					<div className="section-title-telemetry">
						<span className="telemetry-pip-cyan" />
						<h2>MY CUSTOM PROTOCOLS ({customPrograms.length})</h2>
					</div>
					<button className="btn-add-custom" onClick={onOpenCreateBuilder}>
						<Plus size={14} /> NEW CUSTOM PROGRAM
					</button>
				</div>

				{customPrograms.length > 0 ? (
					<div className="custom-programs-grid">
						{customPrograms.map(prog => {
							const isActive = activeProgram?.id === prog.id
							return (
								<div key={prog.id} className={`custom-program-card ${isActive ? 'custom-program-card--active' : ''}`} onClick={() => onOpenProgramDetail(prog)}>
									<div className="custom-card__visual">
										<WorkoutVisual program={prog} />
										<span className="custom-card__tag">CUSTOM</span>
										{isActive && (
											<span className="custom-card__active-tag">
												<CheckCircle2 size={11} /> ACTIVE
											</span>
										)}
									</div>

									<div className="custom-card__body">
										<div className="custom-card__meta">
											<span>{prog.environment} · {prog.experience}</span>
											<span className="dot-sep">•</span>
											<span>{prog.daysPerWeek} DAYS/WK</span>
										</div>
										<h4 className="custom-card__title">{prog.name}</h4>
										<div className="custom-card__target">{prog.target?.replace(/_/g, ' ')}</div>
										<p className="custom-card__desc">{prog.description}</p>
									</div>

									<div className="custom-card__actions" onClick={(e) => e.stopPropagation()}>
										<button 
											className={`btn-action-active ${isActive ? 'active' : ''}`}
											onClick={() => onSelectActive(prog)}
										>
											{isActive ? 'ACTIVE' : 'SET ACTIVE'}
										</button>

										<div className="action-icons-row">
											<button 
												className="btn-icon-tech" 
												onClick={() => onOpenEditBuilder(prog)}
												title="Edit Custom Program"
											>
												<Edit3 size={14} />
											</button>
											<button 
												className="btn-icon-tech" 
												onClick={() => onDuplicateProgram(prog)}
												title="Duplicate Program"
											>
												<Copy size={14} />
											</button>
											<button 
												className="btn-icon-tech btn-icon-tech--delete" 
												onClick={() => handleDeleteConfirm(prog)}
												title="Delete Program"
											>
												<Trash2 size={14} />
											</button>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				) : (
					<div className="custom-empty-card">
						<Sparkles size={32} className="empty-sparkle-icon" />
						<h3>NO CUSTOM PROGRAMS CREATED</h3>
						<p>Build a personalized training protocol from the 1,850+ exercise database.</p>
						<button className="btn-cockpit-primary" onClick={onOpenCreateBuilder}>
							<Plus size={16} /> CONSTRUCT YOUR FIRST PROGRAM
						</button>
					</div>
				)}
			</section>


			{/* ─── 3. SAVED / SELECTED PREBUILT WORKOUTS ─── */}
			{savedPrebuiltPrograms.length > 0 && (
				<section className="my-workouts-section">
					<div className="section-title-row">
						<div className="section-title-telemetry">
							<span className="telemetry-pip-cyan" />
							<h2>SAVED FACILITY PREBUILTS ({savedPrebuiltPrograms.length})</h2>
						</div>
					</div>

					<div className="custom-programs-grid">
						{savedPrebuiltPrograms.map(prog => {
							const isActive = activeProgram?.id === prog.id
							return (
								<div key={prog.id} className={`custom-program-card ${isActive ? 'custom-program-card--active' : ''}`} onClick={() => onOpenProgramDetail(prog)}>
									<div className="custom-card__visual">
										<WorkoutVisual program={prog} />
										{isActive && (
											<span className="custom-card__active-tag">
												<CheckCircle2 size={11} /> ACTIVE
											</span>
										)}
									</div>

									<div className="custom-card__body">
										<div className="custom-card__meta">
											<span>{prog.environment} · {prog.experience}</span>
											<span className="dot-sep">•</span>
											<span>{prog.daysPerWeek} DAYS/WK</span>
										</div>
										<h4 className="custom-card__title">{prog.name}</h4>
										<div className="custom-card__target">{prog.target?.replace(/_/g, ' ')}</div>
										<p className="custom-card__desc">{prog.description}</p>
									</div>

									<div className="custom-card__actions" onClick={(e) => e.stopPropagation()}>
										<button 
											className={`btn-action-active ${isActive ? 'active' : ''}`}
											onClick={() => onSelectActive(prog)}
										>
											{isActive ? 'ACTIVE' : 'SET ACTIVE'}
										</button>

										<div className="action-icons-row">
											<button 
												className="btn-icon-tech" 
												onClick={() => onDuplicateProgram(prog)}
												title="Duplicate as Custom Program"
											>
												<Copy size={14} />
												<span style={{marginLeft: '4px', fontSize: '0.65rem'}}>COPY AS CUSTOM</span>
											</button>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</section>
			)}

		</div>
	)
}
