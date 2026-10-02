function PlaceholderPage({ title }) {
	return (
		<main
			style={{
				minHeight: '100svh',
				display: 'grid',
				placeItems: 'center',
				background: '#fff',
				color: '#111',
			}}
		>
			<h1 style={{ margin: 0, fontFamily: 'Arial, sans-serif', fontSize: 32, fontWeight: 600 }}>
				{title}
			</h1>
		</main>
	)
}

export default PlaceholderPage