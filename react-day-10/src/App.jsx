import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import About from './pages/About'
import Project from './pages/Project'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Project' element={<Project />} />
      </Routes>
    </div>
  )
}

export default App
