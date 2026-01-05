import React from 'react'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'

const App = () => {
  return (
    <div className='flex gap-8   bg-black'>
      <LeftSidebar />
      <RightSidebar />
    </div>
  )
}

export default App

