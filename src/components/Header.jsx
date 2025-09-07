import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery, selectQuery, setTimeRange, selectTimeRange } from '../features/dashboard/dashboardSlice.js'

export default function Header({ onOpenAdd }) {
  const dispatch = useDispatch()
  const query = useSelector(selectQuery)
  const timeRange = useSelector(selectTimeRange)

  return (
    <header className="header">
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        <h1 style={{fontSize:18}}>CNAPP Dashboard</h1>
        <div className="muted" style={{fontSize:13}}> / Dashboard V2</div>
      </div>

      <div className="header-actions">
        <input
          type="text"
          placeholder="Search widgets..."
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          style={{width:320}}
        />
        <button className="btn" onClick={onOpenAdd}>+ Add Widget</button>

        <div className="time-filter">
          <select value={timeRange} onChange={(e)=>dispatch(setTimeRange(e.target.value))}>
            <option>Last 2 days</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
      </div>
    </header>
  )
}
