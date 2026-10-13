import { useEffect, useState } from 'react'
import { Activity, ArrowLeft, ArrowRight, Dumbbell, Flame, Footprints, RefreshCw, ShieldCheck, UserRound, Utensils, Weight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import SmokeyBackground from '../components/SmokeyBackground.jsx'
import './OnboardingFitness.css'

const goalOptions = [
	{ value: 'fat loss', label: 'Fat loss', detail: 'Reduce body fat', icon: Flame },
	{ value: 'muscle gain', label: 'Muscle gain', detail: 'Build size & strength', icon: Dumbbell },
	{ value: 'recomposition', label: 'Body recomposition', detail: 'Build while leaning out', icon: RefreshCw },
	{ value: 'maintenance', label: 'Maintenance', detail: 'Maintain your baseline', icon: ShieldCheck },
]

const experienceOptions = [
	{ value: 'beginner', label: 'Beginner' },
	{ value: 'intermediate', label: 'Intermediate' },
	{ value: 'advanced', label: 'Advanced' },
]

const equipmentOptions = [
	{ value: 'home', label: 'Home' },
	{ value: 'gym', label: 'Gym' },
	{ value: 'both', label: 'Both' },
]

const activityOptions = [
	{ value: 'sedentary', label: 'Sedentary', detail: 'Mostly seated' },
	{ value: 'lightly active', label: 'Lightly active', detail: 'Some daily movement' },
	{ value: 'moderately active', label: 'Moderately active', detail: 'Regular movement' },
	{ value: 'very active', label: 'Very active', detail: 'High daily activity' },
]

const dietOptions = [
	{ value: 'no preference', label: 'No preference' },
	{ value: 'vegetarian', label: 'Vegetarian' },
	{ value: 'vegan', label: 'Vegan' },
	{ value: 'eggetarian', label: 'Eggetarian' },
	{ value: 'other', label: 'Other' },
]

const appearanceGroups = [
	{
		name: 'modelType',
		label: 'BODY MODEL',
		options: [
			{ value: 'male', label: 'Male' },
			{ value: 'female', label: 'Female' },
		],
	},
	{
		name: 'skinTone',
		label: 'SKIN TONE',
		options: [
			{ value: 'porcelain', label: 'Porcelain', color: '#f0d5c2' },
			{ value: 'fair', label: 'Fair', color: '#e2b99d' },
			{ value: 'light', label: 'Light', color: '#d3a17e' },
			{ value: 'medium', label: 'Medium', color: '#b9805e' },
			{ value: 'olive', label: 'Olive', color: '#a87952' },
			{ value: 'tan', label: 'Tan', color: '#966443' },
			{ value: 'brown', label: 'Brown', color: '#70442f' },
			{ value: 'deep', label: 'Deep', color: '#492b22' },
		],
	},
	{
		name: 'hairStyle',
		label: 'HAIR STYLE',
		options: ['bald', 'buzz', 'short', 'medium', 'long', 'curly', 'wavy', 'braids', 'tied-back']
			.map((value) => ({ value, label: value.replace('-', ' ') })),
	},
	{
		name: 'hairColor',
		label: 'HAIR COLOR',
		options: [
			{ value: 'black', label: 'Black', color: '#191718' },
			{ value: 'brown', label: 'Brown', color: '#493022' },
			{ value: 'blonde', label: 'Blonde', color: '#b99a5a' },
			{ value: 'red', label: 'Red', color: '#803b2e' },
			{ value: 'gray', label: 'Gray', color: '#777579' },
			{ value: 'white', label: 'White', color: '#d5d2cf' },
			{ value: 'other', label: 'Other', color: '#a04c55' },
		],
	},
]

const readStoredUser = () => {
	try {
		return JSON.parse(localStorage.getItem('user') || '{}')
	} catch {
		return {}
	}
}

function ChoiceGroup({ name, label, options, value, onChange, layout = 'cards', required = true }) {
	return (
		<fieldset className={`fitness-choice-group fitness-choice-group--${layout}`}>
			<legend>{label}<small>{required ? 'REQUIRED' : 'OPTIONAL'}</small></legend>
			<div className="fitness-choice-grid" role="radiogroup" aria-label={label}>
				{options.map((option, index) => {
					const Icon = option.icon
					return (
						<label className="fitness-choice" data-selected={value === option.value} key={option.value}>
							<input
								type="radio"
								name={name}
								value={option.value}
								checked={value === option.value}
								required={required}
								onChange={onChange}
							/>
							<span className="fitness-choice__body">
								<span className="fitness-choice__index">{String(index + 1).padStart(2, '0')}</span>
								{Icon && <Icon className="fitness-choice__icon" size={17} aria-hidden="true" />}
								<strong>{option.label}</strong>
								{option.detail && <small>{option.detail}</small>}
								<span className="fitness-choice__check" aria-hidden="true" />
							</span>
						</label>
					)
				})}
			</div>
		</fieldset>
	)
}

function AppearanceGroup({ name, label, options, value, onSelect }) {
	return (
		<fieldset className="fitness-appearance-group" data-appearance={name}>
			<legend>{label}<small>OPTIONAL</small></legend>
			<div className="fitness-appearance-group__options">
				{options.map((option) => (
					<button
						className="fitness-appearance-choice"
						data-selected={value === option.value}
						key={option.value}
						type="button"
						aria-pressed={value === option.value}
						aria-label={`${label}: ${option.label}`}
						onClick={() => onSelect(name, option.value)}
					>
						{option.color && <span className="fitness-appearance-choice__swatch" style={{ '--appearance-swatch': option.color }} />}
						<span>{option.label}</span>
					</button>
				))}
			</div>
		</fieldset>
	)
}

function OnboardingFitness() {
	const navigate = useNavigate()
	const [form, setForm] = useState(() => {
		const user = readStoredUser()
		return {
			primaryGoal: user.primaryGoal || '',
			trainingExperience: user.trainingExperience || '',
			trainingDaysPerWeek: user.trainingDaysPerWeek ? String(user.trainingDaysPerWeek) : '',
			equipmentAccess: user.equipmentAccess || '',
			activityLevel: user.activityLevel || '',
			averageDailySteps: user.averageDailySteps ?? '',
			dietaryPreference: user.dietaryPreference || '',
			modelType: user.modelType || '',
			skinTone: user.skinTone || '',
			hairStyle: user.hairStyle || '',
			hairColor: user.hairColor || '',
		}
	})
	const [feedback, setFeedback] = useState('')
	const [isSaving, setIsSaving] = useState(false)
	const [isAuthorized] = useState(() => Boolean(
		localStorage.getItem('token') && !readStoredUser().onboardingCompleted
	))

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			navigate('/login', { replace: true })
			return
		}
		if (readStoredUser().onboardingCompleted) navigate('/dashboard', { replace: true })
	}, [navigate])

	const updateChoice = (event) => {
		const { name, value } = event.target
		setForm((current) => ({ ...current, [name]: value }))
	}

	const chooseAppearance = (name, value) => {
		setForm((current) => ({ ...current, [name]: value }))
	}

	const chooseDays = (days) => {
		setForm((current) => ({ ...current, trainingDaysPerWeek: String(days) }))
	}

	const submitFitness = async (event) => {
		event.preventDefault()
		setFeedback('')

		const requiredFields = [
			['primaryGoal', 'Choose your primary fitness goal.'],
			['trainingExperience', 'Choose your training experience.'],
			['trainingDaysPerWeek', 'Select your training days per week.'],
			['equipmentAccess', 'Choose your equipment access.'],
			['activityLevel', 'Choose your activity level.'],
			['dietaryPreference', 'Choose your dietary preference.'],
		]
		const missingField = requiredFields.find(([field]) => !form[field])
		if (missingField) {
			setFeedback(missingField[1])
			return
		}

		const trainingDaysPerWeek = Number(form.trainingDaysPerWeek)
		const averageDailySteps = form.averageDailySteps === '' ? undefined : Number(form.averageDailySteps)
		if (!Number.isInteger(trainingDaysPerWeek) || trainingDaysPerWeek < 1 || trainingDaysPerWeek > 7) {
			setFeedback('Training days must be between 1 and 7.')
			return
		}
		if (averageDailySteps !== undefined && (!Number.isInteger(averageDailySteps) || averageDailySteps < 0)) {
			setFeedback('Average daily steps must be a whole number of zero or more.')
			return
		}

		const profile = {
			primaryGoal: form.primaryGoal,
			trainingExperience: form.trainingExperience,
			trainingDaysPerWeek,
			equipmentAccess: form.equipmentAccess,
			activityLevel: form.activityLevel,
			dietaryPreference: form.dietaryPreference,
		}
		if (averageDailySteps !== undefined) profile.averageDailySteps = averageDailySteps
		for (const field of ['modelType', 'skinTone', 'hairStyle', 'hairColor']) {
			if (form[field]) profile[field] = form[field]
		}

		setIsSaving(true)
		try {
			const response = await fetch('/api/auth/profile', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
				body: JSON.stringify(profile),
			})
			const result = await response.json().catch(() => ({}))
			if (!response.ok) throw new Error(result.message || 'Unable to save your training profile.')

			localStorage.setItem('user', JSON.stringify({ ...readStoredUser(), ...result.user }))
			navigate('/dashboard', { replace: true })
		} catch (error) {
			setFeedback(error.message || 'Unable to save your training profile.')
		} finally {
			setIsSaving(false)
		}
	}

	if (!isAuthorized) return null

	return (
		<main className="fitness-onboarding">
			<SmokeyBackground />
			<header className="fitness-topbar">
				<Link className="fitness-brand" to="/" aria-label="Disciplined AF home">
					<span className="fitness-brand__mark">DA</span>
					<span>DISCIPLINED AF<small>PHYSIQUE INTELLIGENCE</small></span>
				</Link>
				<div className="fitness-progress" aria-label="Step 2 of 2">
					<strong>02 <i>/</i> 02</strong>
					<span>TRAINING + LIFESTYLE</span>
					<div><i /></div>
				</div>
			</header>

			<div className="fitness-layout">
				<section className="fitness-intro">
					<p className="fitness-kicker"><span /> PERFORMANCE INTAKE / 02</p>
					<h1>DEFINE YOUR<br />TRAINING <em>DNA.</em></h1>
					<p className="fitness-intro__copy">
						Your goal, training background, and daily rhythm shape the starting point for your plan.
					</p>
					<div className="fitness-module">
						<div className="fitness-module__icon"><Activity size={18} aria-hidden="true" /></div>
						<div><strong>ASSESSMENT MODULE 02</strong><small>GOAL / TRAINING / ACTIVITY / NUTRITION</small></div>
					</div>
					<Link className="fitness-back" to="/onboarding/profile"><ArrowLeft size={14} aria-hidden="true" /> BACK TO PERSONAL + PHYSIQUE</Link>
				</section>

				<section className="fitness-panel" aria-labelledby="fitness-title">
					<div className="fitness-panel__heading">
						<p><span>ASSESSMENT / 002</span><span>REQUIRED <i>/</i> OPTIONAL</span></p>
						<h2 id="fitness-title">Training profile</h2>
						<p>Choose what reflects your current routine. Daily steps are optional.</p>
					</div>
					<form onSubmit={submitFitness}>
						<ChoiceGroup name="primaryGoal" label="PRIMARY GOAL" options={goalOptions} value={form.primaryGoal} onChange={updateChoice} layout="goals" />

						<div className="fitness-section-grid">
							<section className="fitness-section">
								<h3><Dumbbell size={14} aria-hidden="true" /> TRAINING</h3>
								<ChoiceGroup name="trainingExperience" label="EXPERIENCE" options={experienceOptions} value={form.trainingExperience} onChange={updateChoice} layout="compact" />
								<fieldset className="fitness-choice-group fitness-days">
									<legend>TRAINING DAYS / WEEK<small>REQUIRED</small></legend>
									<div className="fitness-day-grid" role="group" aria-label="Training days per week">
										{Array.from({ length: 7 }, (_, index) => index + 1).map((day) => (
											<button key={day} type="button" aria-pressed={form.trainingDaysPerWeek === String(day)} onClick={() => chooseDays(day)}>{day}</button>
										))}
									</div>
								</fieldset>
								<ChoiceGroup name="equipmentAccess" label="EQUIPMENT ACCESS" options={equipmentOptions} value={form.equipmentAccess} onChange={updateChoice} layout="compact" />
							</section>

							<section className="fitness-section">
								<h3><Footprints size={14} aria-hidden="true" /> ACTIVITY</h3>
								<ChoiceGroup name="activityLevel" label="DAILY ACTIVITY LEVEL" options={activityOptions} value={form.activityLevel} onChange={updateChoice} layout="activity" />
								<label className="fitness-steps">
									<span><Weight size={13} aria-hidden="true" /> AVERAGE DAILY STEPS <small>OPTIONAL</small></span>
									<input name="averageDailySteps" type="number" min="0" step="1" inputMode="numeric" placeholder="e.g. 7,500" value={form.averageDailySteps} onChange={updateChoice} />
								</label>
							</section>
						</div>

						<section className="fitness-section fitness-nutrition">
							<h3><Utensils size={14} aria-hidden="true" /> NUTRITION</h3>
							<ChoiceGroup name="dietaryPreference" label="DIETARY PREFERENCE" options={dietOptions} value={form.dietaryPreference} onChange={updateChoice} layout="diet" />
						</section>

						<section className="fitness-section fitness-appearance">
							<div className="fitness-appearance__heading">
								<h3><UserRound size={14} aria-hidden="true" /> MODEL APPEARANCE</h3>
								<span>USER-CONTROLLED PREFERENCES</span>
							</div>
							<div className="fitness-appearance__grid">
								{appearanceGroups.map((group) => (
									<AppearanceGroup
									key={group.name}
									{...group}
									value={form[group.name]}
									onSelect={chooseAppearance}
								/>
								))}
							</div>
						</section>

						{feedback && <p className="fitness-feedback" role="alert">{feedback}</p>}
						<div className="fitness-actions">
							<span>PROFILE INTAKE <i /> 02 / 02</span>
							<button type="submit" disabled={isSaving}>
								{isSaving ? 'SAVING TRAINING PROFILE' : 'SAVE & CONTINUE'}
								<ArrowRight size={16} aria-hidden="true" />
							</button>
						</div>
					</form>
				</section>
			</div>
		</main>
	)
}

export default OnboardingFitness