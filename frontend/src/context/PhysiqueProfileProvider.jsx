import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PhysiqueProfileContext } from './PhysiqueProfileContext.js'

function PhysiqueProfileProvider({ children }) {
	const { pathname } = useLocation()
	const requestRef = useRef(null)
	const [physiqueConfiguration, setPhysiqueConfiguration] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const refresh = useCallback(async () => {
		requestRef.current?.abort()
		const controller = new AbortController()
		requestRef.current = controller

		await Promise.resolve()
		if (requestRef.current !== controller) return null

		const token = localStorage.getItem('token')
		if (!token) {
			setPhysiqueConfiguration(null)
			setLoading(false)
			setError(null)
			requestRef.current = null
			return null
		}

		setLoading(true)
		setError(null)

		try {
			const response = await fetch('/api/profile/physique', {
				headers: { Authorization: `Bearer ${token}` },
				signal: controller.signal,
			})
			const result = await response.json().catch(() => null)

			if (!response.ok) {
				throw new Error(result?.message || 'Unable to load physique profile.')
			}
			if (!result?.physiqueConfiguration || typeof result.physiqueConfiguration !== 'object') {
				throw new Error('The physique profile response is invalid.')
			}
			if (requestRef.current !== controller) return null

			setPhysiqueConfiguration(result.physiqueConfiguration)
			return result.physiqueConfiguration
		} catch (requestError) {
			if (requestError.name === 'AbortError') return null
			if (requestRef.current === controller) {
				setPhysiqueConfiguration(null)
				setError(requestError.message || 'Unable to load physique profile.')
			}
			return null
		} finally {
			if (requestRef.current === controller) {
				requestRef.current = null
				setLoading(false)
			}
		}
	}, [])

	useEffect(() => {
		let cancelled = false
		const loadProfile = async () => {
			await Promise.resolve()
			if (!cancelled) void refresh()
		}
		void loadProfile()
		return () => {
			cancelled = true
			requestRef.current?.abort()
			requestRef.current = null
		}
	}, [pathname, refresh])

	useEffect(() => {
		const handleStorage = (event) => {
			if (event.key === 'token' || event.key === null) void refresh()
		}
		window.addEventListener('storage', handleStorage)
		return () => window.removeEventListener('storage', handleStorage)
	}, [refresh])

	const profile = physiqueConfiguration
	const value = {
		physiqueConfiguration: profile,
		bmi: profile?.bmi ?? null,
		estimatedBodyFat: profile?.estimatedBodyFat ?? null,
		physiqueClassification: profile?.physiqueClassification ?? null,
		bodyMeasurements: profile?.bodyMeasurements ?? null,
		modelType: profile?.modelType ?? null,
		height: profile?.height ?? null,
		currentWeight: profile?.currentWeight ?? null,
		targetWeight: profile?.targetWeight ?? null,
		appearancePreferences: profile?.appearancePreferences ?? null,
		loading,
		error,
		refresh,
	}

	return (
		<PhysiqueProfileContext.Provider value={value}>
			{children}
		</PhysiqueProfileContext.Provider>
	)
}

export default PhysiqueProfileProvider