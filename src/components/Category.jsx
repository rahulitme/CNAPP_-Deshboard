import React from 'react'
import WidgetCard from './WidgetCard'

export default function Category({ category, onEmptyAdd }) {
  // layout: display grid of widgets; if widget.title === 'Add Slot' show a light empty card with + Add Widget inside
  return (
    <section className="category">
      <div className="category-head">
        <h2>{category.name}</h2>
        <span className="badge">{category.widgets.length}</span>
      </div>

      <div className="widgets-grid">
        {category.widgets.map(w => {
          if (w.title === 'Add Slot') {
            return (
              <div key={w.id || w.title} className="widget-card add-slot">
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                  {/* empty slot */}
                </div>
                <div style={{height:120, display:'grid', placeItems:'center'}}>
                  <button className="btn ghost" onClick={() => onEmptyAdd(category.id)}>+ Add Widget</button>
                </div>
              </div>
            )
          }
          return <WidgetCard key={w.id} categoryId={category.id} widget={w} />
        })}
      </div>
    </section>
  )
}
