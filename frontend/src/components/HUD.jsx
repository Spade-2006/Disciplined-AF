function HUD({ viewMode, onViewChange, heatmapMode, onHeatmapToggle, showMeasurements, onMeasurementsToggle }) {
  return (
    <>
      <div className="view-console">
        <div className="view-tabs" role="group" aria-label="Model view">
          {['front', 'side', 'back'].map((mode) => (
            <button key={mode} type="button" aria-pressed={viewMode === mode} onClick={() => onViewChange(mode)}>
              <span className={`view-icon view-icon-${mode}`} aria-hidden="true" />{mode}
            </button>
          ))}
        </div>
        <span className="console-divider" />
        <button className={`view-tool ${heatmapMode ? 'is-active' : ''}`} type="button" aria-pressed={heatmapMode} onClick={onHeatmapToggle}>
          <span className="heat-key" aria-hidden="true" />HEATMAP
        </button>
        <button className={`view-tool ${showMeasurements ? 'is-active' : ''}`} type="button" aria-pressed={showMeasurements} onClick={onMeasurementsToggle}>
          <span className="ruler-key" aria-hidden="true" />MEASURE
        </button>
        <button className="view-reset" type="button" aria-label="Reset model view" title="Reset view" onClick={() => onViewChange('front')}>
          <span aria-hidden="true">↺</span>
        </button>
      </div>
      <div className="stage-meta"><span>DRAG TO ROTATE</span><span>SCROLL TO ZOOM</span></div>
    </>
  )
}

export default HUD