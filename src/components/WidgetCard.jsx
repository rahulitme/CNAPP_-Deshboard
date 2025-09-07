import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWidget } from '../features/dashboard/dashboardSlice'

// Chart.js imports
import { Doughnut, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

export default function WidgetCard({ categoryId, widget }) {
  const dispatch = useDispatch()

  const getChart = () => {
    const title = (widget.title || '').trim()
    // doughnut for cloud
    if (title === 'Cloud Accounts') {
      return (
        <Doughnut
          data={{
            labels: ['Connected', 'Not Connected'],
            datasets: [{ data: [2, 0], backgroundColor: ['#3b82f6', '#e5e7eb'] }]
          }}
          options={{ maintainAspectRatio: false, plugins: { legend: { position: 'right' } } }}
        />
      )
    }

    if (title === 'Cloud Account Risk Assessment') {
      return (
        <Doughnut
          data={{
            labels: ['Failed', 'Warning', 'Not available', 'Passed'],
            datasets: [{ data: [1889, 681, 36, 7253], backgroundColor: ['#ef4444', '#f59e0b', '#9ca3af', '#22c55e'] }]
          }}
          options={{ maintainAspectRatio: false, plugins: { legend: { position: 'right' } } }}
        />
      )
    }

    if (title === 'Image Risk Assessment') {
      return (
        <Bar
          data={{ labels: ['Critical', 'High', 'Medium', 'Low'], datasets: [{ label: 'Vulns', data: [120, 300, 800, 250], backgroundColor: ['#ef4444','#f97316','#fbbf24','#94a3b8'] }] }}
          options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }}
        />
      )
    }

    if (title === 'Image Security Issues') {
      return (
        <Bar
          data={{ labels: ['Critical', 'High', 'Medium'], datasets: [{ label: 'Issues', data: [2, 8, 10], backgroundColor: ['#ef4444','#f97316','#f59e0b'] }] }}
          options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }}
        />
      )
    }

    // fallback
    return <div className="widget-placeholder">{widget.text || 'No Graph data available'}</div>
  }

  return (
    <div className="widget-card">
      <div className="widget-head">
        <h3>{widget.title}</h3>
        <button className="icon-btn" title="Remove" onClick={() => dispatch(removeWidget({ categoryId, widgetId: widget.id }))}>✕</button>
      </div>

      <div style={{height:200, minHeight:120}}>
        {getChart()}
      </div>
    </div>
  )
}
