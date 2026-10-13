import { useContext } from 'react'
import { PhysiqueProfileContext } from '../context/PhysiqueProfileContext.js'

export function usePhysiqueProfile() {
	const context = useContext(PhysiqueProfileContext)
	if (!context) {
		throw new Error('usePhysiqueProfile must be used inside PhysiqueProfileProvider')
	}
	return context
}