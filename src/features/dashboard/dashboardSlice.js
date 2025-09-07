import { createSlice, nanoid } from '@reduxjs/toolkit'
import initial from '../../data/initialData.json'

const initialState = {
  categories: initial.categories || [],
  query: '',
  timeRange: 'Last 2 days'
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload
    },
    setTimeRange(state, action) {
      state.timeRange = action.payload
    },
    addWidget: {
      reducer(state, action) {
        const { categoryId, widget } = action.payload
        const cat = state.categories.find(c => c.id === categoryId)
        if (cat) {
          // replace the first "Add Slot" placeholder if exists, else push
          const slotIndex = cat.widgets.findIndex(w => w.title === 'Add Slot')
          if (slotIndex !== -1) {
            cat.widgets[slotIndex] = widget
          } else {
            cat.widgets.push(widget)
          }
        }
      },
      prepare({ categoryId, title, text }) {
        return {
          payload: {
            categoryId,
            widget: { id: nanoid(), title, text }
          }
        }
      }
    },
    removeWidget(state, action) {
      const { categoryId, widgetId } = action.payload
      const cat = state.categories.find(c => c.id === categoryId)
      if (cat) {
        cat.widgets = cat.widgets.filter(w => w.id !== widgetId)
      }
    },
    addCategory(state, action) {
      state.categories.push(action.payload)
    }
  }
})

export const { setQuery, setTimeRange, addWidget, removeWidget, addCategory } = dashboardSlice.actions

export const selectCategories = (state) => state.dashboard.categories
export const selectQuery = (state) => state.dashboard.query
export const selectTimeRange = (state) => state.dashboard.timeRange

export const selectAllWidgets = (state) => {
  const categories = state.dashboard.categories
  return categories.flatMap(cat => cat.widgets.map(w => ( { ...w, categoryId: cat.id, categoryName: cat.name } )))
}

export const selectFilteredWidgets = (state) => {
  const q = state.dashboard.query.trim().toLowerCase()
  if (!q) return selectAllWidgets(state)
  return selectAllWidgets(state).filter(w =>
    (w.title || '').toLowerCase().includes(q) ||
    (w.text || '').toLowerCase().includes(q) ||
    (w.categoryName || '').toLowerCase().includes(q)
  )
}

export default dashboardSlice.reducer
