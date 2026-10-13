import { useEffect, useState } from 'react'
import { ArrowRight, Ruler, Scale, UserRound } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import SmokeyBackground from '../components/SmokeyBackground.jsx'
import './OnboardingPersonal.css'

const lengthFields = ['height', 'chest', 'waist', 'arms', 'thighs']
const weightFields = ['weight', 'targetWeight']

const bodyFields = [
	{ name: 'height', label: 'Height', icon: Ruler, unit: 'length', required: true },
	{ name: 'weight', label: 'Current weight', icon: Scale, unit: 'weight', required: true },
	{ name: 'targetWeight', label: 'Target weight', icon: Scale, unit: 'weight', optional: true },
	{ name: 'bodyFatPercentage', label: 'Body fat %', unit: 'percent', optional: true },
	{ name: 'chest', label: 'Chest', unit: 'length', optional: true },
	{ name: 'waist', label: 'Waist', unit: 'length', optional: true },
	{ name: 'arms', label: 'Arms', unit: 'length', optional: true },
	{ name: 'thighs', label: 'Thighs', unit: 'length', optional: true },
]

const readStoredUser = () => {
	try {
		return JSON.parse(localStorage.getItem('user') || '{}')
	} catch {
		return {}
	}
}

function NumberField({ field, value, units, onChange }) {
	const unit = field.unit === 'length'
		? units === 'metric' ? 'cm' : 'in'
		: field.unit === 'weight'
			? units === 'metric' ? 'kg' : 'lb'
			: '%'

	return (
		<label className="onboarding-field">
			<span className="onboarding-field__label">
				<span>{field.icon && <field.icon size={14} aria-hidden="true" />}{field.label}</span>
				<small data-requirement={field.optional ? 'optional' : 'required'}>
					{field.optional ? 'OPTIONAL' : 'REQUIRED'}
				</small>
			</span>
			<span className="onboarding-field__control">
				<input
					name={field.name}
					type="number"
					min={field.name === 'bodyFatPercentage' ? 0 : 0.1}
					max={field.name === 'bodyFatPercentage' ? 100 : undefined}
					step={field.name === 'age' ? 1 : 'any'}
					value={value}
					required={field.required}
					inputMode="decimal"
					placeholder="0"
					onChange={onChange}
				/>
				<span className="onboarding-field__unit">{unit}</span>
			</span>
		</label>
	)
}

function OnboardingPersonal() {
	const navigate = useNavigate()
	const [form, setForm] = useState(() => ({
		name: readStoredUser().name || '',
		age: '',
		gender: '',
		height: '',
		weight: '',
		targetWeight: '',
		bodyFatPercentage: '',
		chest: '',
		waist: '',
		arms: '',
		thighs: '',
		units: 'metric',
	}))
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
		if (readStoredUser().onboardingCompleted) {
			navigate('/dashboard', { replace: true })
		}
	}, [navigate])

	const updateField = (event) => {
		const { name, value } = event.target
		setForm((current) => ({ ...current, [name]: value }))
	}

	const changeUnits = (nextUnits) => {
		if (nextUnits === form.units) return
		const toImperial = nextUnits === 'imperial'
		setForm((current) => {
			const converted = { ...current, units: nextUnits }
			for (const field of lengthFields) {
				if (current[field] !== '') {
					const value = Number(current[field]) * (toImperial ? 1 / 2.54 : 2.54)
					converted[field] = String(Number(value.toFixed(1)))
				}
			}
			for (const field of weightFields) {
				if (current[field] !== '') {
					const value = Number(current[field]) * (toImperial ? 2.20462 : 1 / 2.20462)
					converted[field] = String(Number(value.toFixed(1)))
				}
			}
			return converted
		})
	}

	const submitProfile = async (event) => {
		event.preventDefault()
		setFeedback('')

		const age = Number(form.age)
		const height = Number(form.height)
		const weight = Number(form.weight)
		if (!form.name.trim() || !form.gender.trim() || !form.age || !form.height || !form.weight) {
			setFeedback('Complete your name, age, gender, height, and current weight to continue.')
			return
		}
		if (!Number.isInteger(age) || age < 13 || age > 120 || height <= 0 || weight <= 0) {
			setFeedback('Check your age, height, and current weight values.')
			return
		}

		const profile = {
			name: form.name.trim(),
			age,
			gender: form.gender.trim(),
			modelType: form.gender.trim().toLowerCase() === 'female' ? 'female' : 'male',
			height,
			weight,
			units: form.units,
		}
		for (const field of bodyFields) {
			if (!field.required && form[field.name] !== '') {
				profile[field.name] = Number(form[field.name])
			}
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
			if (!response.ok) throw new Error(result.message || 'Unable to save your profile.')

			localStorage.setItem('user', JSON.stringify({ ...readStoredUser(), ...result.user }))
			navigate('/onboarding/step-2', { replace: true })
		} catch (error) {
			setFeedback(error.message || 'Unable to save your profile.')
		} finally {
			setIsSaving(false)
		}
	}

	if (!isAuthorized) return null

	return (
		<main className="onboarding-screen">
			<SmokeyBackground />
			<header className="onboarding-topbar">
				<Link className="onboarding-brand" to="/" aria-label="Disciplined AF home">
					<span className="onboarding-brand__mark">DA</span>
					<span>DISCIPLINED AF<small>PHYSIQUE INTELLIGENCE</small></span>
				</Link>
				<div className="onboarding-progress" aria-label="Step 1 of 2">
					<div className="onboarding-progress__count"><span>01</span><i>/</i>02</div>
					<span className="onboarding-progress__label">PERSONAL + PHYSIQUE</span>
					<div className="onboarding-progress__track"><i /></div>
				</div>
			</header>

			<div className="onboarding-layout">
				<section className="onboarding-intro">
					<p className="onboarding-kicker"><span /> PHYSIQUE INTAKE / 01</p>
					<h1>LET'S BUILD<br />YOUR <em>PROFILE.</em></h1>
					<p className="onboarding-intro__copy">
						Personal metrics establish your baseline. Every measurement helps calibrate your physique profile.
					</p>
					<div className="onboarding-stage">
						<span>01</span>
						<div><strong>PERSONAL + PHYSIQUE</strong><small>BASELINE DATA CAPTURE</small></div>
						<span className="onboarding-stage__active" />
					</div>
				</section>

				<section className="onboarding-panel" aria-labelledby="onboarding-title">
					<div className="onboarding-panel__heading">
						<p><span>INTAKE / 001</span><span>REQUIRED / OPTIONAL</span></p>
						<h2 id="onboarding-title">Personal + physique</h2>
						<p>Set your starting point. Optional measurements can be added later.</p>
					</div>
					<form onSubmit={submitProfile}>
						<section className="onboarding-section" aria-labelledby="personal-heading">
							<h3 id="personal-heading"><UserRound size={14} aria-hidden="true" /> PERSONAL</h3>
							<div className="onboarding-personal-grid">
								<label className="onboarding-field onboarding-field--name">
										<span className="onboarding-field__label"><span>Name</span><small data-requirement="required">REQUIRED</small></span>
									<input name="name" type="text" autoComplete="name" value={form.name} onChange={updateField} required />
								</label>
								<label className="onboarding-field">
										<span className="onboarding-field__label"><span>Age</span><small data-requirement="required">REQUIRED</small></span>
									<input name="age" type="number" min="13" max="120" step="1" inputMode="numeric" value={form.age} onChange={updateField} required />
								</label>
								<label className="onboarding-field">
										<span className="onboarding-field__label"><span>Gender</span><small data-requirement="required">REQUIRED</small></span>
									<select name="gender" autoComplete="sex" value={form.gender} onChange={updateField} required>
										<option value="" disabled>Select your gender</option>
										<option value="male">Male</option>
										<option value="female">Female</option>
									</select>
								</label>
							</div>
						</section>

						<section className="onboarding-section onboarding-section--body" aria-labelledby="body-heading">
							<div className="onboarding-section__top">
								<h3 id="body-heading"><Scale size={14} aria-hidden="true" /> BODY</h3>
								<div className="onboarding-units" role="group" aria-label="Measurement units">
									<button type="button" aria-pressed={form.units === 'metric'} onClick={() => changeUnits('metric')}>METRIC</button>
									<button type="button" aria-pressed={form.units === 'imperial'} onClick={() => changeUnits('imperial')}>IMPERIAL</button>
								</div>
							</div>
							<div className="onboarding-body-grid">
								{bodyFields.map((field) => (
									<NumberField
										key={field.name}
										field={field}
										value={form[field.name]}
										units={form.units}
										onChange={updateField}
									/>
								))}
							</div>
						</section>

						{feedback && <p className="onboarding-feedback" role="alert">{feedback}</p>}
						<div className="onboarding-actions">
							<span>PROFILE INTAKE <i /> 01 / 02</span>
							<button type="submit" disabled={isSaving}>
								{isSaving ? 'SAVING PROFILE' : 'SAVE & CONTINUE'}
								<ArrowRight size={16} aria-hidden="true" />
							</button>
						</div>
					</form>
				</section>
			</div>
		</main>
	)
}

export default OnboardingPersonal