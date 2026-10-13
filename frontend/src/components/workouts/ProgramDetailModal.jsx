import React, { useState, useMemo } from 'react'
import { 
	X, 
	Dumbbell, 
	Calendar, 
	Target, 
	Award, 
	Activity, 
	CheckCircle2, 
	Edit3, 
	Layers, 
	Shield, 
	Sparkles,
	Clock,
	Sliders
} from 'lucide-react'
import WorkoutVisual from './WorkoutVisual.jsx'
import './ProgramDetailModal.css'

export default function ProgramDetailModal({ 
	program, 
	exercisesMap, 
	onClose, 
	selectedProgramId, 
	onSelectProgram,
	onEditProgram
}) {
	const [activeTab, setActiveTab] = useState('plan') // 'overview' | 'plan' | 'equipment'
	const [activeDayIndex, setActiveDayIndex] = useState(0)
	const [isSelecting, setIsSelecting] = useState(false)

	// Aggregate unique equipment required across all exercises in this program
	const equipmentList = useMemo(() => {
		if (!program) return []
		const eqSet = new Set()
		program.days?.forEach(day => {
			day.exercises?.forEach(exRef => {
				const ex = exercisesMap.get(exRef.exerciseId)
				if (ex && Array.isArray(ex.equipment)) {
					ex.equipment.forEach(item => eqSet.add(item))
				}
			})
		})
		return Array.from(eqSet)
	}, [program, exercisesMap])

	// Aggregate unique muscles targeted
	const musclesTargeted = useMemo(() => {
		if (!program) return []
		const mSet = new Set()
		program.days?.forEach(day => {
			day.exercises?.forEach(exRef => {
				const ex = exercisesMap.get(exRef.exerciseId)
				if (ex && Array.isArray(ex.primaryMuscles)) {
					ex.primaryMuscles.forEach(m => mSet.add(m))
				}
			})
		})
		return Array.from(mSet)
	}, [program, exercisesMap])

	// Total exercise count across all days
	const totalExercisesCount = useMemo(() => {
		if (!program) return 0
		return program.days?.reduce((acc, d) => acc + (d.exercises?.length || 0), 0) || 0
	}, [program])

	if (!program) return null

	const isCurrentlyActive = selectedProgramId === program.id

	const handleSelect = () => {
		setIsSelecting(true)
		onSelectProgram(program)
		setTimeout(() => {
			setIsSelecting(false)
		}, 800)
	}

	const currentDay = program.days?.[activeDayIndex] || program.days?.[0]

	return (
		<div className="program-detail-overlay" onClick={onClose}>
			<div className="program-detail-panel" onClick={(e) => e.stopPropagation()}>
				
				{/* 1. PROCEDURAL HERO SECTION (No stock photos) */}
				<div className="detail-hero">
					<div className="detail-hero__visual-bg">
						<WorkoutVisual program={program} />
					</div>
					<div className="detail-hero__gradient-overlay"></div>

					{/* Top Telemetry Header */}
					<div className="detail-hero__top-bar">
						<div className="detail-telemetry-badge">
							<span className="telemetry-dot"></span>
							<span>FACILITY PROTOCOL // {program.id?.toUpperCase()}</span>
						</div>
						<button className="detail-close-btn" onClick={onClose} aria-label="Close detail view">
							<X size={18} />
						</button>
					</div>

					{/* Main Title Block */}
					<div className="detail-hero__content">
						<div className="detail-hero__category">
							{program.category?.replace(/_/g, ' ')} · {program.gender === 'female' ? "WOMEN'S EDITION" : "MEN'S EDITION"}
						</div>
						<h1 className="detail-hero__title">{program.name}</h1>
						<p className="detail-hero__desc">{program.description}</p>
						
						{/* Quick Meta Chips */}
						<div className="detail-hero__meta-chips">
							<span className="detail-chip detail-chip--cyan">
								<Target size={12} /> {program.target?.replace(/_/g, ' ')}
							</span>
							<span className="detail-chip">
								<Award size={12} /> {program.experience}
							</span>
							<span className="detail-chip">
								<Calendar size={12} /> {program.daysPerWeek} Days / Wk
							</span>
							<span className="detail-chip detail-chip--red">
								<Dumbbell size={12} /> {program.environment}
							</span>
						</div>
					</div>
				</div>

				{/* 2. TABBED NAVIGATION */}
				<div className="detail-nav-tabs">
					<button 
						className={`detail-tab-btn ${activeTab === 'plan' ? 'active' : ''}`}
						onClick={() => setActiveTab('plan')}
					>
						<Layers size={14} />
						<span>WORKOUT PLAN ({program.days?.length || 0} DAYS)</span>
					</button>
					<button 
						className={`detail-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
						onClick={() => setActiveTab('overview')}
					>
						<Activity size={14} />
						<span>PROGRAM OVERVIEW</span>
					</button>
					<button 
						className={`detail-tab-btn ${activeTab === 'equipment' ? 'active' : ''}`}
						onClick={() => setActiveTab('equipment')}
					>
						<Sliders size={14} />
						<span>EQUIPMENT ({equipmentList.length})</span>
					</button>
				</div>

				{/* 3. MAIN TAB CONTENT */}
				<div className="detail-body">
					
					{/* TAB: WORKOUT PLAN */}
					{activeTab === 'plan' && (
						<div className="detail-plan-section">
							{/* Day Selector Pills */}
							<div className="detail-day-selector">
								{program.days?.map((day, idx) => (
									<button
										key={day.id || idx}
										className={`day-select-pill ${activeDayIndex === idx ? 'active' : ''}`}
										onClick={() => setActiveDayIndex(idx)}
									>
										<span className="pill-day-label">DAY {String(idx + 1).padStart(2, '0')}</span>
										<span className="pill-day-name">{day.name}</span>
									</button>
								))}
							</div>

							{/* Active Day Detail Card */}
							{currentDay && (
								<div className="day-detail-card">
									<div className="day-detail-card__header">
										<div>
											<div className="day-step-counter">DAY {String(activeDayIndex + 1).padStart(2, '0')} PROTOCOL</div>
											<h3 className="day-heading">{currentDay.name}</h3>
										</div>
										<div className="day-focus-tags">
											{currentDay.focus?.map(f => (
												<span key={f} className="focus-tag">{f.replace(/_/g, ' ')}</span>
											))}
										</div>
									</div>

									{/* Exercise Rows */}
									<div className="day-exercise-list">
										{currentDay.exercises?.map((planEx, exIdx) => {
											const exData = exercisesMap.get(planEx.exerciseId)
											const exName = exData ? exData.name : planEx.exerciseId
											const primaryMuscles = exData?.primaryMuscles?.join(', ') || 'Targeted'
											const equipment = exData?.equipment?.join(', ') || 'Standard'
											const difficulty = exData?.difficulty || 'Standard'

											return (
												<div key={exIdx} className="detail-exercise-row">
													<div className="ex-row__left">
														<div className="ex-order-number">{String(exIdx + 1).padStart(2, '0')}</div>
														<div className="ex-info">
															<div className="ex-info__title-line">
																<h4 className="ex-name">{exName}</h4>
																<span className="ex-diff-badge">{difficulty}</span>
															</div>
															<div className="ex-meta-specs">
																<span><strong>Primary:</strong> {primaryMuscles}</span>
																<span className="meta-sep">/</span>
																<span><strong>Gear:</strong> {equipment}</span>
															</div>
														</div>
													</div>

													<div className="ex-row__right">
														<div className="ex-stat-box">
															<span className="ex-stat-val">{planEx.sets}</span>
															<span className="ex-stat-lbl">SETS</span>
														</div>
														<div className="ex-stat-box">
															<span className="ex-stat-val">{planEx.reps}</span>
															<span className="ex-stat-lbl">REPS</span>
														</div>
														<div className="ex-stat-box ex-stat-box--rest">
															<span className="ex-stat-val">{planEx.restSeconds || 90}s</span>
															<span className="ex-stat-lbl">REST</span>
														</div>
													</div>
												</div>
											)
										})}
									</div>
								</div>
							)}
						</div>
					)}

					{/* TAB: PROGRAM OVERVIEW */}
					{activeTab === 'overview' && (
						<div className="detail-overview-section">
							<div className="overview-stats-grid">
								<div className="overview-card">
									<div className="overview-card__label">TRAINING FREQUENCY</div>
									<div className="overview-card__val">{program.daysPerWeek} Days / Week</div>
									<div className="overview-card__sub">{program.days?.length} structured workout days</div>
								</div>
								<div className="overview-card">
									<div className="overview-card__label">PRIMARY OBJECTIVE</div>
									<div className="overview-card__val">{program.target?.replace(/_/g, ' ')}</div>
									<div className="overview-card__sub">Periodized hypertrophy & strength</div>
								</div>
								<div className="overview-card">
									<div className="overview-card__label">EXPERIENCE TIER</div>
									<div className="overview-card__val">{program.experience}</div>
									<div className="overview-card__sub">Calibrated load & volume</div>
								</div>
								<div className="overview-card">
									<div className="overview-card__label">ENVIRONMENT SPEC</div>
									<div className="overview-card__val">{program.environment?.toUpperCase()}</div>
									<div className="overview-card__sub">Optimized for {program.environment} gear</div>
								</div>
							</div>

							<div className="overview-blueprint-card">
								<h3><Shield size={16} color="#db3c47" /> PROTOCOL SPECIFICATIONS</h3>
								<p>{program.description}</p>
								<p>
									This curriculum is calibrated for <strong>{program.gender === 'female' ? "Female" : "Male"}</strong> athletes 
									aiming for <strong>{program.target?.replace(/_/g, ' ')}</strong> at an <strong>{program.experience}</strong> level. 
									Every session balances compound foundation movements with targeted accessory hypertrophy to guarantee progressive overload and complete recovery.
								</p>
							</div>

							<div className="overview-muscles-card">
								<h3><Activity size={16} color="#06b6d4" /> TARGETED MUSCLE REGIONS</h3>
								<div className="muscle-tags-cloud">
									{musclesTargeted.map(m => (
										<span key={m} className="muscle-pill">{m.replace(/_/g, ' ')}</span>
									))}
								</div>
							</div>
						</div>
					)}

					{/* TAB: EQUIPMENT REQUIRED */}
					{activeTab === 'equipment' && (
						<div className="detail-equipment-section">
							<div className="equipment-header">
								<h3>REQUIRED FACILITY APPARATUS</h3>
								<p>Verify your training environment has access to the following equipment items:</p>
							</div>
							<div className="equipment-grid">
								{equipmentList.map(item => (
									<div key={item} className="equipment-card">
										<Dumbbell size={20} className="equipment-card__icon" />
										<span className="equipment-card__name">{item.replace(/_/g, ' ')}</span>
										<span className="equipment-card__status">READY</span>
									</div>
								))}
								{equipmentList.length === 0 && (
									<div className="equipment-card">
										<Dumbbell size={20} className="equipment-card__icon" />
										<span className="equipment-card__name">Bodyweight Only</span>
										<span className="equipment-card__status">READY</span>
									</div>
								)}
							</div>
						</div>
					)}

				</div>

				{/* 4. PRIMARY ACTIONS FOOTER */}
				<footer className="detail-footer">
					<div className="detail-footer__status">
						{isCurrentlyActive ? (
							<span className="status-badge status-badge--active">
								<CheckCircle2 size={14} /> CURRENTLY ACTIVE PROTOCOL
							</span>
						) : (
							<span className="status-badge">
								<Clock size={14} /> STANDBY // READY FOR CALIBRATION
							</span>
						)}
					</div>

					<div className="detail-footer__actions">
						<button 
							className="btn-secondary-tech"
							onClick={onEditProgram}
						>
							<Edit3 size={16} />
							<span>EDIT WORKOUT</span>
						</button>

						<button 
							className={`btn-primary-tech ${isCurrentlyActive ? 'btn-primary-tech--active' : ''}`}
							onClick={handleSelect}
							disabled={isSelecting}
						>
							{isCurrentlyActive ? (
								<>
									<CheckCircle2 size={18} />
									<span>ACTIVE PROTOCOL</span>
								</>
							) : (
								<>
									<Sparkles size={18} />
									<span>{isSelecting ? 'CALIBRATING...' : 'SELECT WORKOUT'}</span>
								</>
							)}
						</button>
					</div>
				</footer>

			</div>
		</div>
	)
}
