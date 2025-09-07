import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Header from './components/Header.jsx'
import Category from './components/Category.jsx'
import WidgetList from './components/WidgetList.jsx'
import AddWidgetModal from './components/AddWidgetModal.jsx'
import { selectCategories } from './features/dashboard/dashboardSlice.js'

export default function App(){
  const categories = useSelector(selectCategories)
  const [openAdd, setOpenAdd] = useState(false)
  const [slotCategory, setSlotCategory] = useState(null)

  const handleEmptyAdd = (categoryId) => {
    setSlotCategory(categoryId)
    setOpenAdd(true)
  }

  return (
    <div className="app">
      <Header onOpenAdd={()=> { setSlotCategory(null); setOpenAdd(true) }} />
      <main className="main">
        <div className="grid">
          <div className="col content">
            {categories.map(cat => (
              <Category key={cat.id} category={cat} onEmptyAdd={handleEmptyAdd} />
            ))}
          </div>

          <div className="col side">
            <WidgetList />
          </div>
        </div>
      </main>

      <AddWidgetModal open={openAdd} onClose={()=> setOpenAdd(false)} initialCategory={slotCategory} />
    </div>
  )
}
