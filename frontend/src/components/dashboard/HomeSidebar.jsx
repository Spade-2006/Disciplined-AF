import { Activity, ChartNoAxesColumnIncreasing, Dumbbell, House, Lightbulb, Settings2, Target } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const sections = [
	{ label: 'Home', icon: House, to: '/dashboard' },
	{ label: 'Track', icon: Activity, to: '/track' },
	{ label: 'Workouts', icon: Dumbbell, to: '/workouts' },
	{ label: 'Progress', icon: ChartNoAxesColumnIncreasing, to: '/progress' },
	{ label: 'Goals', icon: Target, to: '/goals' },
	{ label: 'Insights', icon: Lightbulb, to: '/insights' },
	{ label: 'Settings', icon: Settings2, to: '/settings' },
]

function HomeSidebar() {
	return (
		<aside className="home-sidebar">
			<NavLink className="home-brand" to="/dashboard" aria-label="Disciplined AF fitness command center">
				<span className="home-brand__mark"><i /><i /><i /></span>
				<span className="home-brand__text">DISCIPLINED <b>AF</b><small>FITNESS COMMAND</small></span>
			</NavLink>
			<nav className="home-nav" aria-label="Dashboard sections">
				{sections.map(({ label, icon: Icon, to }) => (
					<NavLink
						className={`home-nav__item${label === 'Settings' ? ' home-nav__settings' : ''}`}
						to={to}
						end={label === 'Home'}
						title={label}
						key={label}
					>
						<Icon size={17} aria-hidden="true" />
						<span>{label}</span>
					</NavLink>
				))}
			</nav>
			<div className="home-sidebar__foot"><span /><small>PROFILE CONNECTED</small></div>
		</aside>
	)
}

export default HomeSidebar