import React, { useState, useMemo, useEffect } from 'react'
import { 
	X, 
	Plus, 
	Trash2, 
	Copy, 
	ArrowUp, 
	ArrowDown, 
	Search, 
	Dumbbell, 
	Sliders, 
	CheckCircle2, 
	AlertTriangle, 
	Layers, 
	Calendar, 
	Target, 
	Award, 
	FileText, 
	ArrowRight,
	Sparkles,
	Settings
} from 'lucide-react'
import ShaderDemo_ATC from '../ui/atc-shader.jsx'
import { exercises } from '../../data/exercises.js'
import './WorkoutBuilder.css'

export default function WorkoutBuilder({ 
	initialProgram, 
	onClose, 
	onSaveCustomProgram 
}) {
	// Initialize custom program state
	const [program, setProgram] = useState(() => {
		if (initialProgram) {
			return {
				...JSON.parse(JSON.stringify(initialProgram)),
				id: initialProgram.isCustom ? initialProgram.id : `custom_${Date.now()}`,
				name: initialProgram.isCustom ? initialProgram.name : `[Custom] ${initialProgram.name}`,
				isCustom: true,
			}
		}
		return {
			id: `custom_${Date.now()}`,
			name: 'My Custom Protocol',
			category: 'custom',
			environment: 'gym',
			target: 'muscle_gain',
			experience: 'intermediate',
			daysPerWeek: 3,
			gender: 'unisex',
			description: 'Personalized training protocol tailored to specific physique and performance goals.',
			isCustom: true,
			days: [
				{
					id: `day_${Date.now()}_1`,
					name: 'Day 01 · Push A',
					focus: ['chest', 'shoulders', 'triceps'],
					exercises: []
				},
				{
					id: `day_${Date.now()}_2`,
					name: 'Day 02 · Pull A',
					focus: ['lats', 'mid_back', 'biceps'],
					exercises: []
				},
				{
					id: `day_${Date.now()}_3`,
					name: 'Day 03 · Legs A',
					focus: ['quadriceps', 'hamstrings', 'glutes'],
					exercises: []
				}
			]
		}
	})

	const [activeDayIdx, setActiveDayIdx] = useState(0)
	const [showProgramSettings, setShowProgramSettings] = useState(false)
	const [errors, setErrors] = useState([])

	// Exercise Picker Filters
	const [searchQuery, setSearchQuery] = useState('')
	const [muscleFilter, setMuscleFilter] = useState('all')
	const [equipmentFilter, setEquipmentFilter] = useState('all')
	const [environmentFilter, setEnvironmentFilter] = useState('all')
	const [difficultyFilter, setDifficultyFilter] = useState('all')
	const [page, setPage] = useState(1)
	const PAGE_SIZE = 40

	// Exercise map for fast O(1) lookup
	const exercisesMap = useMemo(() => {
		const map = new Map()
		exercises.forEach(ex => map.set(ex.id, ex))
		return map
	}, [])

	// Unique list of all primary muscles & equipments from exercises.js
	const { allMuscles, allEquipments } = useMemo(() => {
		const mSet = new Set()
		const eSet = new Set()
		exercises.forEach(ex => {
			ex.primaryMuscles?.forEach(m => mSet.add(m))
			ex.equipment?.forEach(e => eSet.add(e))
		})
		return {
			allMuscles: Array.from(mSet).sort(),
			allEquipments: Array.from(eSet).sort()
		}
	}, [])

	// Filtered exercise list for the picker
	const filteredExercises = useMemo(() => {
		const q = searchQuery.toLowerCase().trim()
		return exercises.filter(ex => {
			if (q && !ex.name.toLowerCase().includes(q) && !ex.id.includes(q)) return false
			if (muscleFilter !== 'all' && !ex.primaryMuscles.includes(muscleFilter)) return false
			if (equipmentFilter !== 'all' && !ex.equipment.includes(equipmentFilter)) return false
			if (environmentFilter !== 'all' && ex.environment !== environmentFilter && ex.environment !== 'both') return false
			if (difficultyFilter !== 'all' && ex.difficulty !== difficultyFilter) return false
			return true
		})
	}, [searchQuery, muscleFilter, equipmentFilter, environmentFilter, difficultyFilter])

	// Reset page when filters change
	useEffect(() => {
		setPage(1)
	}, [searchQuery, muscleFilter, equipmentFilter, environmentFilter, difficultyFilter])

	const paginatedExercises = useMemo(() => {
		return filteredExercises.slice(0, page * PAGE_SIZE)
	}, [filteredExercises, page])

	// Active Day
	const activeDay = program.days[activeDayIdx] || program.days[0]

	// ─── DAY MANAGEMENT ─────────────────────────────────────────────
	const handleAddDay = () => {
		if (program.days.length >= 7) {
			alert('Maximum training frequency reached. A weekly workout program cannot exceed 7 days.')
			return
		}
		const nextNum = program.days.length + 1
		const newDay = {
			id: `day_${Date.now()}_${nextNum}`,
			name: `Day ${String(nextNum).padStart(2, '0')} Protocol`,
			focus: ['full_body'],
			exercises: []
		}
		setProgram(prev => ({
			...prev,
			daysPerWeek: prev.days.length + 1,
			days: [...prev.days, newDay]
		}))
		setActiveDayIdx(program.days.length)
	}

	const handleRemoveDay = (indexToRemove) => {
		if (program.days.length <= 1) {
			alert('A workout program must contain at least 1 training day.')
			return
		}
		setProgram(prev => {
			const updated = prev.days.filter((_, idx) => idx !== indexToRemove)
			return {
				...prev,
				daysPerWeek: updated.length,
				days: updated
			}
		})
		if (activeDayIdx >= indexToRemove && activeDayIdx > 0) {
			setActiveDayIdx(activeDayIdx - 1)
		}
	}

	const handleDayNameChange = (newName) => {
		setProgram(prev => {
			const updatedDays = [...prev.days]
			updatedDays[activeDayIdx] = {
				...updatedDays[activeDayIdx],
				name: newName
			}
			return { ...prev, days: updatedDays }
		})
	}

	const handleMoveDay = (fromIdx, toIdx) => {
		if (toIdx < 0 || toIdx >= program.days.length) return
		setProgram(prev => {
			const updatedDays = [...prev.days]
			const [moved] = updatedDays.splice(fromIdx, 1)
			updatedDays.splice(toIdx, 0, moved)
			return { ...prev, days: updatedDays }
		})
		setActiveDayIdx(toIdx)
	}

	// ─── EXERCISE MANAGEMENT IN ACTIVE DAY ──────────────────────────
	const handleAddExerciseToDay = (exerciseId) => {
		if (!activeDay) return
		const exDef = exercisesMap.get(exerciseId)
		const newPlannedEx = {
			exerciseId,
			sets: 3,
			reps: '8-12',
			restSeconds: 90,
			notes: ''
		}

		setProgram(prev => {
			const updatedDays = [...prev.days]
			const day = updatedDays[activeDayIdx]
			
			// Auto update focus tags from added exercise muscles
			const currentFocus = new Set(day.focus || [])
			exDef?.primaryMuscles?.forEach(m => currentFocus.add(m))
			// remove 'full_body' default if specific muscles added
			if (currentFocus.size > 1 && currentFocus.has('full_body')) {
				currentFocus.delete('full_body')
			}

			updatedDays[activeDayIdx] = {
				...day,
				focus: Array.from(currentFocus),
				exercises: [...day.exercises, newPlannedEx]
			}
			return { ...prev, days: updatedDays }
		})
	}

	const handleUpdatePlannedExercise = (exIdx, field, value) => {
		setProgram(prev => {
			const updatedDays = [...prev.days]
			const day = updatedDays[activeDayIdx]
			const updatedExs = [...day.exercises]
			updatedExs[exIdx] = {
				...updatedExs[exIdx],
				[field]: value
			}
			updatedDays[activeDayIdx] = {
				...day,
				exercises: updatedExs
			}
			return { ...prev, days: updatedDays }
		})
	}

	const handleDuplicateExercise = (exIdx) => {
		setProgram(prev => {
			const updatedDays = [...prev.days]
			const day = updatedDays[activeDayIdx]
			const targetEx = day.exercises[exIdx]
			const updatedExs = [...day.exercises]
			updatedExs.splice(exIdx + 1, 0, { ...targetEx })
			updatedDays[activeDayIdx] = {
				...day,
				exercises: updatedExs
			}
			return { ...prev, days: updatedDays }
		})
	}

	const handleRemoveExercise = (exIdx) => {
		setProgram(prev => {
			const updatedDays = [...prev.days]
			const day = updatedDays[activeDayIdx]
			const updatedExs = day.exercises.filter((_, i) => i !== exIdx)
			
			// Recalculate focus tags from remaining exercises
			const newFocus = new Set()
			updatedExs.forEach(item => {
				const def = exercisesMap.get(item.exerciseId)
				def?.primaryMuscles?.forEach(m => newFocus.add(m))
			})

			updatedDays[activeDayIdx] = {
				...day,
				focus: newFocus.size ? Array.from(newFocus) : ['general'],
				exercises: updatedExs
			}
			return { ...prev, days: updatedDays }
		})
	}

	const handleMoveExercise = (fromIdx, toIdx) => {
		if (toIdx < 0 || toIdx >= activeDay.exercises.length) return
		setProgram(prev => {
			const updatedDays = [...prev.days]
			const day = updatedDays[activeDayIdx]
			const updatedExs = [...day.exercises]
			const [moved] = updatedExs.splice(fromIdx, 1)
			updatedExs.splice(toIdx, 0, moved)
			updatedDays[activeDayIdx] = {
				...day,
				exercises: updatedExs
			}
			return { ...prev, days: updatedDays }
		})
	}

	// ─── VALIDATION & SAVE ──────────────────────────────────────────
	const validateProgram = () => {
		const errs = []
		if (!program.name.trim()) errs.push('Program Name is required.')
		if (!program.days.length) errs.push('At least one workout day is required.')
		if (program.days.length > 7) errs.push('A workout program cannot exceed a maximum of 7 days.')
		program.days.forEach((d, i) => {
			if (!d.exercises.length) {
				errs.push(`Day ${i + 1} ("${d.name}") has no exercises configured.`)
			}
		})
		setErrors(errs)
		return errs.length === 0
	}

	const handleSave = () => {
		if (!validateProgram()) return
		onSaveCustomProgram(program)
		onClose()
	}

	return (
		<div className="workout-builder-fullscreen">
			{/* WebGL Animated Background */}
			<div className="atc-shader-bg" aria-hidden="true">
				<ShaderDemo_ATC />
				<div className="shader-tamer"></div>
			</div>

			{/* Top Bar Header */}
			<header className="builder-topbar">
				<div className="builder-topbar__left">
					<div className="builder-telemetry-tag">
						<span className="builder-pip" />
						<span>CONSTRUCTOR // {program.id}</span>
					</div>
					<input 
						type="text" 
						className="builder-title-input" 
						value={program.name} 
						onChange={(e) => setProgram(p => ({ ...p, name: e.target.value }))}
						placeholder="Protocol Name..."
					/>
				</div>

				<div className="builder-topbar__right">
					<button 
						className={`builder-settings-toggle ${showProgramSettings ? 'active' : ''}`}
						onClick={() => setShowProgramSettings(!showProgramSettings)}
					>
						<Settings size={15} />
						<span>SPECS</span>
					</button>

					<button className="builder-save-btn" onClick={handleSave}>
						<CheckCircle2 size={16} />
						<span>SAVE PROTOCOL</span>
					</button>

					<button className="builder-close-btn" onClick={onClose} aria-label="Exit Builder">
						<X size={18} />
					</button>
				</div>
			</header>

			{/* Inline Validation Banner */}
			{errors.length > 0 && (
				<div className="builder-error-banner" role="alert">
					<AlertTriangle size={16} color="#ef4444" />
					<div className="error-list">
						{errors.map((err, i) => <span key={i}>{err}</span>)}
					</div>
				</div>
			)}

			{/* Main Constructor 3-Column Workspace */}
			<div className="builder-workspace">
				
				{/* ─── COLUMN 1: PROGRAM STRUCTURE & DAYS ─── */}
				<aside className="builder-col builder-col--days">
					<div className="builder-col__header">
						<span>TRAINING DAYS ({program.days.length}/7)</span>
						<button 
							className="btn-add-day" 
							onClick={handleAddDay} 
							disabled={program.days.length >= 7}
							title={program.days.length >= 7 ? "Maximum of 7 days reached" : "Add New Training Day"}
						>
							<Plus size={14} /> {program.days.length >= 7 ? 'MAX DAYS' : 'ADD DAY'}
						</button>
					</div>

					<div className="builder-days-list">
						{program.days.map((d, idx) => {
							const isActive = activeDayIdx === idx
							return (
								<div 
									key={d.id || idx} 
									className={`builder-day-item ${isActive ? 'active' : ''}`}
									onClick={() => setActiveDayIdx(idx)}
								>
									<div className="day-item__meta">
										<span className="day-item__num">DAY {String(idx + 1).padStart(2, '0')}</span>
										<span className="day-item__count">{d.exercises.length} EXERCISES</span>
									</div>
									<div className="day-item__name">{d.name}</div>
									
									<div className="day-item__actions" onClick={(e) => e.stopPropagation()}>
										<button 
											disabled={idx === 0} 
											onClick={() => handleMoveDay(idx, idx - 1)}
											title="Move Up"
										>
											<ArrowUp size={12} />
										</button>
										<button 
											disabled={idx === program.days.length - 1} 
											onClick={() => handleMoveDay(idx, idx + 1)}
											title="Move Down"
										>
											<ArrowDown size={12} />
										</button>
										<button 
											className="btn-trash" 
											onClick={() => handleRemoveDay(idx)}
											title="Delete Day"
										>
											<Trash2 size={12} />
										</button>
									</div>
								</div>
							)
						})}
					</div>

					{/* Program Global Specs Modal / Panel */}
					{showProgramSettings && (
						<div className="builder-specs-drawer">
							<div className="specs-drawer__header">
								<h4>PROGRAM SPECIFICATIONS</h4>
								<button onClick={() => setShowProgramSettings(false)}><X size={14} /></button>
							</div>

							<div className="specs-field">
								<label>TARGET OBJECTIVE</label>
								<select 
									value={program.target} 
									onChange={(e) => setProgram(p => ({ ...p, target: e.target.value }))}
								>
									<option value="muscle_gain">Muscle Gain</option>
									<option value="fat_loss">Fat Loss</option>
									<option value="strength">Strength</option>
									<option value="recomposition">Recomposition</option>
									<option value="general_fitness">General Fitness</option>
								</select>
							</div>

							<div className="specs-field">
								<label>EXPERIENCE LEVEL</label>
								<select 
									value={program.experience} 
									onChange={(e) => setProgram(p => ({ ...p, experience: e.target.value }))}
								>
									<option value="beginner">Beginner</option>
									<option value="intermediate">Intermediate</option>
									<option value="advanced">Advanced</option>
								</select>
							</div>

							<div className="specs-field">
								<label>ENVIRONMENT</label>
								<select 
									value={program.environment} 
									onChange={(e) => setProgram(p => ({ ...p, environment: e.target.value }))}
								>
									<option value="gym">Gym Only</option>
									<option value="home">Home Setup</option>
									<option value="both">Both / Hybrid</option>
								</select>
							</div>

							<div className="specs-field">
								<label>CATEGORY / SPLIT</label>
								<select 
									value={program.category} 
									onChange={(e) => setProgram(p => ({ ...p, category: e.target.value }))}
								>
									<option value="ppl">Push Pull Legs</option>
									<option value="upper_lower">Upper / Lower</option>
									<option value="full_body">Full Body</option>
									<option value="bro_split">Bodypart Split</option>
									<option value="hybrid">Hybrid Routine</option>
									<option value="custom">Custom Configuration</option>
								</select>
							</div>

							<div className="specs-field">
								<label>DESCRIPTION</label>
								<textarea 
									rows={3} 
									value={program.description}
									onChange={(e) => setProgram(p => ({ ...p, description: e.target.value }))}
									placeholder="Overview and training instructions..."
								/>
							</div>
						</div>
					)}
				</aside>

				{/* ─── COLUMN 2: CURRENT DAY'S EXERCISES ─── */}
				<main className="builder-col builder-col--active-day">
					{activeDay ? (
						<>
							<div className="active-day-header">
								<div className="active-day-title-wrap">
									<span className="active-day-step">DAY {String(activeDayIdx + 1).padStart(2, '0')} CONFIGURATION</span>
									<input 
										type="text" 
										className="active-day-name-input"
										value={activeDay.name}
										onChange={(e) => handleDayNameChange(e.target.value)}
										placeholder="Day Name (e.g., Push Hypertrophy)..."
									/>
								</div>

								<div className="active-day-focus-tags">
									{activeDay.focus?.map(f => (
										<span key={f} className="focus-pill">{f.replace(/_/g, ' ')}</span>
									))}
								</div>
							</div>

							<div className="active-day-exercise-sequence">
								{activeDay.exercises.map((item, exIdx) => {
									const def = exercisesMap.get(item.exerciseId)
									return (
										<div key={exIdx} className="builder-exercise-card">
											<div className="ex-card__drag-order">
												<span className="ex-num">{String(exIdx + 1).padStart(2, '0')}</span>
												<div className="ex-order-arrows">
													<button 
														disabled={exIdx === 0} 
														onClick={() => handleMoveExercise(exIdx, exIdx - 1)}
													>
														<ArrowUp size={12} />
													</button>
													<button 
														disabled={exIdx === activeDay.exercises.length - 1} 
														onClick={() => handleMoveExercise(exIdx, exIdx + 1)}
													>
														<ArrowDown size={12} />
													</button>
												</div>
											</div>

											<div className="ex-card__body">
												<div className="ex-card__header">
													<div>
														<h4 className="ex-card__title">{def ? def.name : item.exerciseId}</h4>
														<div className="ex-card__meta">
															<span>{def?.primaryMuscles?.join(', ') || 'Targeted'}</span>
															<span className="dot-sep">•</span>
															<span>{def?.equipment?.join(', ') || 'Equipment'}</span>
														</div>
													</div>

													<div className="ex-card__actions">
														<button onClick={() => handleDuplicateExercise(exIdx)} title="Duplicate">
															<Copy size={13} />
														</button>
														<button className="btn-del-ex" onClick={() => handleRemoveExercise(exIdx)} title="Remove">
															<Trash2 size={13} />
														</button>
													</div>
												</div>

												{/* Set / Rep / Rest Inputs */}
												<div className="ex-card__config-grid">
													<div className="cfg-field">
														<label>SETS</label>
														<input 
															type="number" 
															min={1} 
															max={20}
															value={item.sets}
															onChange={(e) => handleUpdatePlannedExercise(exIdx, 'sets', Number(e.target.value))}
														/>
													</div>

													<div className="cfg-field">
														<label>REPS</label>
														<input 
															type="text" 
															value={item.reps}
															placeholder="e.g. 8-12"
															onChange={(e) => handleUpdatePlannedExercise(exIdx, 'reps', e.target.value)}
														/>
													</div>

													<div className="cfg-field">
														<label>REST (SEC)</label>
														<input 
															type="number" 
															step={15}
															min={0}
															max={600}
															value={item.restSeconds}
															onChange={(e) => handleUpdatePlannedExercise(exIdx, 'restSeconds', Number(e.target.value))}
														/>
													</div>

													<div className="cfg-field cfg-field--notes">
														<label>COACHING NOTES</label>
														<input 
															type="text" 
															value={item.notes || ''}
															placeholder="Target RPE, tempo, drop set..."
															onChange={(e) => handleUpdatePlannedExercise(exIdx, 'notes', e.target.value)}
														/>
													</div>
												</div>
											</div>
										</div>
									)
								})}

								{activeDay.exercises.length === 0 && (
									<div className="builder-day-empty">
										<Dumbbell size={36} className="empty-icon" />
										<h4>NO EXERCISES ASSIGNED</h4>
										<p>Search the 1,850+ exercise library on the right to build today's sequence.</p>
									</div>
								)}
							</div>
						</>
					) : null}
				</main>

				{/* ─── COLUMN 3: EXERCISE PICKER & DATABASE ─── */}
				<aside className="builder-col builder-col--picker">
					<div className="picker-header">
						<div className="picker-search-bar">
							<Search size={15} color="#94a3b8" />
							<input 
								type="text" 
								placeholder="Search 1,850+ exercises..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							{searchQuery && (
								<button onClick={() => setSearchQuery('')}><X size={13} /></button>
							)}
						</div>

						{/* Quick Filter Selectors */}
						<div className="picker-filters-row">
							<select value={muscleFilter} onChange={(e) => setMuscleFilter(e.target.value)}>
								<option value="all">All Muscles</option>
								{allMuscles.map(m => (
									<option key={m} value={m}>{m.replace(/_/g, ' ')}</option>
								))}
							</select>

							<select value={equipmentFilter} onChange={(e) => setEquipmentFilter(e.target.value)}>
								<option value="all">All Gear</option>
								{allEquipments.map(eq => (
									<option key={eq} value={eq}>{eq.replace(/_/g, ' ')}</option>
								))}
							</select>

							<select value={environmentFilter} onChange={(e) => setEnvironmentFilter(e.target.value)}>
								<option value="all">Any Location</option>
								<option value="gym">Gym</option>
								<option value="home">Home</option>
							</select>
						</div>

						<div className="picker-count-badge">
							<span>{filteredExercises.length} MATCHING MOVEMENTS</span>
						</div>
					</div>

					<div className="picker-results-list">
						{paginatedExercises.map(ex => (
							<div key={ex.id} className="picker-exercise-item">
								<div className="picker-ex-info">
									<div className="picker-ex-name">{ex.name}</div>
									<div className="picker-ex-sub">
										<span className="picker-tag picker-tag--muscle">{ex.primaryMuscles.join(', ')}</span>
										<span className="picker-tag">{ex.equipment.join(', ')}</span>
										<span className="picker-tag picker-tag--env">{ex.environment}</span>
									</div>
								</div>
								
								<button 
									className="picker-add-btn" 
									onClick={() => handleAddExerciseToDay(ex.id)}
									title={`Add ${ex.name} to ${activeDay?.name || 'Day'}`}
								>
									<Plus size={14} /> ADD
								</button>
							</div>
						))}

						{paginatedExercises.length < filteredExercises.length && (
							<button 
								className="picker-load-more" 
								onClick={() => setPage(p => p + 1)}
							>
								LOAD MORE ({filteredExercises.length - paginatedExercises.length} REMAINING)
							</button>
						)}

						{filteredExercises.length === 0 && (
							<div className="picker-no-results">
								No exercises matching your filter query.
							</div>
						)}
					</div>
				</aside>

			</div>
		</div>
	)
}
