import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWidget, selectCategories } from '../features/dashboard/dashboardSlice.js'

export default function AddWidgetModal({ open, onClose, initialCategory }) {
  const dispatch = useDispatch()
  const categories = useSelector(selectCategories)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [categoryId, setCategoryId] = useState(initialCategory || (categories[0]?.id ?? ''))

  useEffect(()=> {
    if (open) {
      setTitle(''); setText('')
      setCategoryId(initialCategory || (categories[0]?.id ?? ''))
    }
  }, [open, initialCategory, categories])

  if (!open) return null

  const submit = (e) => {
    e.preventDefault()
    if (!title || !categoryId) return
    dispatch(addWidget({ categoryId, title, text }))
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e)=>e.stopPropagation()}>
        <div className="modal-head"><h3>Add Widget</h3><button className="icon-btn" onClick={onClose}>✕</button></div>
        <form onSubmit={submit} className="form">
          <label>
            Widget Title
            <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="e.g. Cloud Accounts"/>
          </label>
          <label>
            Widget Text
            <textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder="Optional text"/>
          </label>
          <label>
            Category
            <select value={categoryId} onChange={(e)=>setCategoryId(e.target.value)}>
              {categories.map(c=> <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </label>
          <div className="actions">
            <button type="button" className="btn ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn">Add Widget</button>
          </div>
        </form>
      </div>
    </div>
  )
}
