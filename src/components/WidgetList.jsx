import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilteredWidgets, removeWidget } from '../features/dashboard/dashboardSlice'

export default function WidgetList() {
  const widgets = useSelector(selectFilteredWidgets)
  const dispatch = useDispatch()
  return (
    <aside className="widget-list">
      <h3>All Widgets</h3>
      <ul>
        {widgets.map(w => (
          <li key={w.id} className="list-item">
            <div>
              <strong>{w.title}</strong>
              <div className="muted">{w.categoryName}</div>
            </div>
            <button
              className="icon-btn"
              title="Remove widget from category"
              onClick={() => dispatch(removeWidget({ categoryId: w.categoryId, widgetId: w.id }))}>
              ✕
            </button>
          </li>
        ))}
        {widgets.length === 0 && <li className="muted">No widgets match your search.</li>}
      </ul>
    </aside>
  )
}
