import { ChevronDown, UserRound } from 'lucide-react'

function formatStats(height, currentWeight, estimatedBodyFat) {
	const parts = []
	if (Number.isFinite(height)) parts.push(`${height} cm`)
	if (Number.isFinite(currentWeight)) parts.push(`${currentWeight} kg`)
	if (Number.isFinite(estimatedBodyFat)) parts.push(`${estimatedBodyFat}% BF`)
	return parts.length > 0 ? parts.join(' · ') : 'Profile loaded'
}

function ProfileSummary({ name, modelType, height, currentWeight, estimatedBodyFat, bmi, physiqueClassification }) {
	const stats = formatStats(height, currentWeight, estimatedBodyFat)
	const meta = [
		modelType ? modelType.toUpperCase() : null,
		Number.isFinite(bmi) ? `BMI ${bmi}` : null,
	].filter(Boolean).join(' · ')

	return (
		<details className="profile-summary">
			<summary>
				<span className="profile-summary__avatar"><UserRound size={18} aria-hidden="true" /></span>
				<span className="profile-summary__identity">
					<strong>{name || 'Member profile'}</strong>
					<small>{stats}</small>
				</span>
				{meta && <span className="profile-summary__meta">{meta}</span>}
				<ChevronDown size={15} aria-hidden="true" />
			</summary>
			<div className="profile-summary__details">
				<span>PHYSIQUE CLASSIFICATION</span>
				<strong>{physiqueClassification?.label || 'Calibrated Silhouette'}</strong>
			</div>
		</details>
	)
}

export default ProfileSummary