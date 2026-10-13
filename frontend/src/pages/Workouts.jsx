import React, { useState, useMemo, useEffect } from 'react'
import { Search, Plus, X, Dumbbell, Activity, Filter, Home as HomeIcon, Zap, Target, ArrowRight, CheckCircle2, SlidersHorizontal, Layers, Bookmark, AlertTriangle, Loader2 } from 'lucide-react'
import HomeSidebar from '../components/dashboard/HomeSidebar.jsx'
import ShaderDemo_ATC from '../components/ui/atc-shader.jsx'
import WorkoutVisual from '../components/workouts/WorkoutVisual.jsx'
import ProgramDetailModal from '../components/workouts/ProgramDetailModal.jsx'
import WorkoutBuilder from '../components/workouts/WorkoutBuilder.jsx'
import MyWorkoutsView from '../components/workouts/MyWorkoutsView.jsx'
import { prebuiltPrograms } from '../data/programs.js'
import { exercises } from '../data/exercises.js'
import { useWorkouts } from '../hooks/useWorkouts.js'
import './Workouts.css'

export default function Workouts() {
	const [viewMode, setViewMode] = useState('library') // 'library' | 'my_workouts'
	const [searchTerm, setSearchTerm] = useState('')
	const [filters, setFilters] = useState({
		gender: 'all',
		environment: 'all',
		target: 'all',
		experience: 'all',
		origin: 'all' // 'all' | 'custom' | 'prebuilt'
	})
	
	const [selectedProgram, setSelectedProgram] = useState(null)
	const [isBuilderOpen, setIsBuilderOpen] = useState(false)
	const [editingProgram, setEditingProgram] = useState(null)

	// Fetch backend data
	const {
		workouts: customPrograms,
		activeWorkoutId,
		loading,
		error,
		createWorkout,
		updateWorkout,
		deleteWorkout,
		setActiveWorkout,
		clearActiveWorkout,
		refresh
	} = useWorkouts();

	// Saved prebuilt program IDs (UI preference)
	const [savedPrebuiltIds, setSavedPrebuiltIds] = useState(() => {
		try {
			const saved = localStorage.getItem('daf_saved_prebuilt_ids')
			return saved ? JSON.parse(saved) : ['ppl_hypertrophy_6_day']
		} catch {
			return ['ppl_hypertrophy_6_day']
		}
	})

	// Recently accessed program IDs (UI preference)
	const [recentProgramIds, setRecentProgramIds] = useState(() => {
		try {
			const saved = localStorage.getItem('daf_recent_program_ids')
			return saved ? JSON.parse(saved) : ['ppl_hypertrophy_6_day']
		} catch {
			return ['ppl_hypertrophy_6_day']
		}
	})

	const [notificationMessage, setNotificationMessage] = useState('')
	const [isActionLoading, setIsActionLoading] = useState(false)
	
	// Create an exercise lookup map for fast resolution
	const exerciseMap = useMemo(() => {
		const map = new Map()
		exercises.forEach(ex => map.set(ex.id, ex))
		return map
	}, [])

	// Combined Programs: Custom + Prebuilt
	const allPrograms = useMemo(() => {
		return [...customPrograms, ...prebuiltPrograms]
	}, [customPrograms])

	// Active program object
	const activeProgram = useMemo(() => {
		return allPrograms.find(p => p.id === activeWorkoutId) || null
	}, [allPrograms, activeWorkoutId])

	// Saved Prebuilt Programs objects
	const savedPrebuiltPrograms = useMemo(() => {
		return prebuiltPrograms.filter(p => savedPrebuiltIds.includes(p.id))
	}, [savedPrebuiltIds])

	// Recent Programs objects
	const recentPrograms = useMemo(() => {
		return recentProgramIds.map(id => allPrograms.find(p => p.id === id)).filter(Boolean)
	}, [allPrograms, recentProgramIds])

	// Filter Programs for Library
	const filteredPrograms = useMemo(() => {
		return allPrograms.filter(prog => {
			if (searchTerm && !prog.name.toLowerCase().includes(searchTerm.toLowerCase())) return false
			if (filters.origin === 'custom' && !prog.isCustom) return false
			if (filters.origin === 'prebuilt' && prog.isCustom) return false
			if (filters.gender !== 'all' && prog.gender !== filters.gender && prog.gender !== 'unisex') return false
			if (filters.environment !== 'all' && prog.environment !== filters.environment && prog.environment !== 'both') return false
			if (filters.target !== 'all' && prog.target !== filters.target) return false
			if (filters.experience !== 'all' && prog.experience !== filters.experience) return false
			return true
		})
	}, [allPrograms, searchTerm, filters])

	const handleFilterChange = (key, value) => {
		setFilters(prev => ({ ...prev, [key]: value === prev[key] ? 'all' : value }))
	}

	const showNotification = (msg) => {
		setNotificationMessage(msg)
		setTimeout(() => setNotificationMessage(''), 3500)
	}

	const handleSelectProgram = async (prog) => {
		try {
			setIsActionLoading(true)
			await setActiveWorkout(prog.id)
			
			// Add to recent local UI state
			const updatedRecent = [prog.id, ...recentProgramIds.filter(id => id !== prog.id)].slice(0, 8)
			setRecentProgramIds(updatedRecent)
			localStorage.setItem('daf_recent_program_ids', JSON.stringify(updatedRecent))

			// If prebuilt, add to saved prebuilts local UI state
			if (!prog.isCustom && !savedPrebuiltIds.includes(prog.id)) {
				const updatedSaved = [prog.id, ...savedPrebuiltIds]
				setSavedPrebuiltIds(updatedSaved)
				localStorage.setItem('daf_saved_prebuilt_ids', JSON.stringify(updatedSaved))
			}
			
			showNotification(`PROTOCOL ACTIVATED: ${prog.name.toUpperCase()}`)
		} catch (err) {
			console.error(err)
			showNotification(`ERROR: ${err.message}`)
		} finally {
			setIsActionLoading(false)
		}
	}

	const handleClearActiveProgram = async () => {
		try {
			setIsActionLoading(true)
			await clearActiveWorkout()
			showNotification('ACTIVE PROTOCOL CLEARED — IN STANDBY')
		} catch (err) {
			console.error(err)
			showNotification(`ERROR: ${err.message}`)
		} finally {
			setIsActionLoading(false)
		}
	}

	const handleDuplicateProgram = async (prog) => {
		try {
			setIsActionLoading(true)
			const duplicated = {
				...JSON.parse(JSON.stringify(prog)),
				name: `${prog.name} (Custom Copy)`,
				isCustom: true,
				sourceProgramId: prog.id
			}
			delete duplicated.id
			delete duplicated._id
			
			const newProg = await createWorkout(duplicated)
			showNotification(`DUPLICATED AS CUSTOM: ${newProg.name.toUpperCase()}`)
		} catch (err) {
			console.error(err)
			showNotification(`ERROR: ${err.message}`)
		} finally {
			setIsActionLoading(false)
		}
	}

	const handleDeleteCustomProgram = async (progId) => {
		try {
			setIsActionLoading(true)
			await deleteWorkout(progId)
			showNotification('CUSTOM PROTOCOL DELETED')
		} catch (err) {
			console.error(err)
			showNotification(`ERROR: ${err.message}`)
		} finally {
			setIsActionLoading(false)
		}
	}

	const handleOpenCreateBuilder = () => {
		setEditingProgram(null)
		setIsBuilderOpen(true)
	}

	const handleOpenEditBuilder = (progToEdit = null) => {
		setEditingProgram(progToEdit || selectedProgram)
		setSelectedProgram(null)
		setIsBuilderOpen(true)
	}

	const handleSaveCustomProgram = async (savedProg) => {
		try {
			setIsActionLoading(true)
			let updatedProg;
			// check if new by checking prefix of ID or absence
			if (!savedProg.id || savedProg.id.startsWith('custom_')) {
				const toSave = { ...savedProg };
				delete toSave.id;
				updatedProg = await createWorkout(toSave)
			} else {
				updatedProg = await updateWorkout(savedProg.id, savedProg)
			}
			
			await handleSelectProgram(updatedProg)
			setIsBuilderOpen(false)
		} catch (err) {
			console.error('Failed to persist custom program', err)
			showNotification(`ERROR: ${err.message}`)
		} finally {
			setIsActionLoading(false)
		}
	}

	return (
		<div className="workouts-page">
			<div className="atc-shader-bg" aria-hidden="true">
				<ShaderDemo_ATC />
				<div className="shader-tamer"></div>
			</div>

			<HomeSidebar />
			
			<div className="workouts-workspace">
				<header className="workouts-topbar">
					<div className="workouts-topbar__left-wrap">
						<div className="workouts-topbar__context">
							<span>TRAINING FACILITY</span>
							<h1>WORKOUTS</h1>
						</div>

						<div className="workouts-view-tabs">
							<button 
								className={`view-tab-btn ${viewMode === 'library' ? 'active' : ''}`}
								onClick={() => setViewMode('library')}
							>
								<Layers size={14} />
								<span>PROGRAM LIBRARY ({allPrograms.length})</span>
							</button>
							<button 
								className={`view-tab-btn ${viewMode === 'my_workouts' ? 'active' : ''}`}
								onClick={() => setViewMode('my_workouts')}
							>
								<Bookmark size={14} />
								<span>MY WORKOUTS ({customPrograms.length + (activeProgram ? 1 : 0)})</span>
							</button>
						</div>
					</div>

					{activeProgram ? (
						<div className="topbar-active-protocol-badge" onClick={() => setSelectedProgram(activeProgram)} style={{cursor: 'pointer'}}>
							<span className="badge-pip-green" />
							<span>ACTIVE: {activeProgram.name}</span>
						</div>
					) : (
						<div className="topbar-active-protocol-badge" style={{borderColor: 'rgba(255,255,255,0.1)', color: '#64748b'}}>
							<span className="badge-pip-green" style={{background: '#64748b', boxShadow: 'none'}} />
							<span>NO ACTIVE WORKOUT</span>
						</div>
					)}
				</header>

				{notificationMessage && (
					<div className="workout-feedback-toast" role="status">
						{notificationMessage.includes('ERROR') ? (
							<AlertTriangle size={16} color="#ef4444" />
						) : (
							<CheckCircle2 size={16} color="#52d9a6" />
						)}
						<span>{notificationMessage}</span>
					</div>
				)}

				<main className="workouts-content">
					{error ? (
						<div style={{color: '#ef4444', padding: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
							<AlertTriangle size={20} />
							<span>CONNECTION ERROR: {error}</span>
						</div>
					) : loading ? (
						<div style={{color: '#06b6d4', padding: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
							<Loader2 size={20} className="spinner-anim" style={{animation: 'spin 2s linear infinite'}} />
							<span>ESTABLISHING CONNECTION TO BACKEND...</span>
							<style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
						</div>
					) : isActionLoading ? (
						<div style={{color: '#e2e8f0', padding: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
							<Loader2 size={20} className="spinner-anim" style={{animation: 'spin 2s linear infinite'}} />
							<span>PROCESSING COMMAND...</span>
						</div>
					) : viewMode === 'my_workouts' ? (
						<MyWorkoutsView 
							activeProgram={activeProgram}
							customPrograms={customPrograms}
							savedPrebuiltPrograms={savedPrebuiltPrograms}
							recentPrograms={recentPrograms}
							onOpenProgramDetail={(prog) => setSelectedProgram(prog)}
							onSelectActive={handleSelectProgram}
							onClearActive={handleClearActiveProgram}
							onOpenCreateBuilder={handleOpenCreateBuilder}
							onOpenEditBuilder={handleOpenEditBuilder}
							onDuplicateProgram={handleDuplicateProgram}
							onDeleteCustomProgram={handleDeleteCustomProgram}
							onBrowseLibrary={() => setViewMode('library')}
						/>
					) : (
						<>
							<div 
								className="create-workout-cta"
								onClick={handleOpenCreateBuilder}
							>
								<div className="create-workout-cta__text">
									<h2><Plus size={18} color="#db3c47" /> CREATE YOUR OWN WORKOUT</h2>
									<p>Build a custom training protocol from the 1,850+ exercise laboratory database.</p>
								</div>
								<div className="create-workout-cta__badge">
									<span>OPEN CONSTRUCTOR</span>
									<ArrowRight size={14} />
								</div>
							</div>

					<div className="workouts-filters">
						<div className="workouts-search">
							<Search size={18} color="#94a3b8" />
							<input 
								type="text" 
								placeholder="Search programs..." 
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
						
						<div className="workouts-filter-groups">
							<div className="filter-group">
								<button className={`filter-btn ${filters.origin === 'all' ? 'active' : ''}`} onClick={() => handleFilterChange('origin', 'all')}>All ({allPrograms.length})</button>
								<button className={`filter-btn ${filters.origin === 'custom' ? 'active' : ''}`} onClick={() => handleFilterChange('origin', 'custom')}>My Custom ({customPrograms.length})</button>
								<button className={`filter-btn ${filters.origin === 'prebuilt' ? 'active' : ''}`} onClick={() => handleFilterChange('origin', 'prebuilt')}>Prebuilt ({prebuiltPrograms.length})</button>
							</div>

							<div className="filter-group">
								<button className={`filter-btn ${filters.gender === 'all' ? 'active' : ''}`} onClick={() => handleFilterChange('gender', 'all')}>All Genders</button>
								<button className={`filter-btn ${filters.gender === 'male' ? 'active' : ''}`} onClick={() => handleFilterChange('gender', 'male')}>Men</button>
								<button className={`filter-btn ${filters.gender === 'female' ? 'active' : ''}`} onClick={() => handleFilterChange('gender', 'female')}>Women</button>
							</div>
							
							<div className="filter-group">
								<button className={`filter-btn ${filters.environment === 'gym' ? 'active' : ''}`} onClick={() => handleFilterChange('environment', 'gym')}>Gym</button>
								<button className={`filter-btn ${filters.environment === 'home' ? 'active' : ''}`} onClick={() => handleFilterChange('environment', 'home')}>Home</button>
							</div>

							<div className="filter-group">
								<button className={`filter-btn ${filters.target === 'muscle_gain' ? 'active' : ''}`} onClick={() => handleFilterChange('target', 'muscle_gain')}>Muscle Gain</button>
								<button className={`filter-btn ${filters.target === 'fat_loss' ? 'active' : ''}`} onClick={() => handleFilterChange('target', 'fat_loss')}>Fat Loss</button>
								<button className={`filter-btn ${filters.target === 'strength' ? 'active' : ''}`} onClick={() => handleFilterChange('target', 'strength')}>Strength</button>
								<button className={`filter-btn ${filters.target === 'recomposition' ? 'active' : ''}`} onClick={() => handleFilterChange('target', 'recomposition')}>Recomposition</button>
							</div>
						</div>
					</div>

					<div className="programs-grid">
						{filteredPrograms.map(prog => {
							const isCurrent = prog.id === activeWorkoutId
							return (
								<div key={prog.id} className={`program-card ${isCurrent ? 'program-card--active' : ''}`} onClick={() => setSelectedProgram(prog)}>
									<div className="program-card__visual">
										<WorkoutVisual program={prog} />
										<div className="program-card__hover-cta">
											VIEW PROGRAM <ArrowRight size={14} style={{marginLeft: '4px'}} />
										</div>
										{isCurrent && (
											<div className="program-card__active-tag">
												<CheckCircle2 size={11} /> ACTIVE
											</div>
										)}
										{prog.isCustom && (
											<div className="program-card__custom-tag">
												CUSTOM
											</div>
										)}
									</div>
									
									<div className="program-card__content">
										<div className="cover-badge">{prog.environment} · {prog.experience}</div>
										<h3 className="cover-title">{prog.name}</h3>
										<div className="cover-subtitle">{prog.target.replace(/_/g, ' ')}</div>
										<p className="cover-desc">{prog.description}</p>
										<div className="program-card__divider" />
										<div className="program-card__footer">
											<div className="footer-stat"><strong>{prog.daysPerWeek}</strong> DAYS</div>
											<div className="footer-stat"><strong>{prog.category.replace(/_/g, ' ')}</strong></div>
											<div className="footer-stat stat-red"><strong>{prog.target.replace(/_/g, ' ')}</strong></div>
										</div>
									</div>
								</div>
							)
						})}
						
						{filteredPrograms.length === 0 && (
							<div style={{color: '#94a3b8', padding: '2rem 0'}}>No programs match your filters.</div>
						)}
					</div>
					</>
					)}
				</main>
			</div>

			{selectedProgram && (
				<ProgramDetailModal 
					program={selectedProgram}
					exercisesMap={exerciseMap}
					onClose={() => setSelectedProgram(null)}
					selectedProgramId={activeWorkoutId}
					onSelectProgram={handleSelectProgram}
					onEditProgram={handleOpenEditBuilder}
				/>
			)}

			{isBuilderOpen && (
				<WorkoutBuilder
					initialProgram={editingProgram}
					onClose={() => setIsBuilderOpen(false)}
					onSaveCustomProgram={handleSaveCustomProgram}
				/>
			)}
		</div>
	)
}
