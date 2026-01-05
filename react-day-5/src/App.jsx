import React from 'react'
import Btn from './components/Btn'
import Student from './components/Student'

import Gender from './components/Gender'
import Baathroom from './components/Baathroom'

const App = () => {
  
  return (
    <div className='p-5 space-y-5'>
     <Btn />
     <Student />
     <Gender />
     {/* <Baathroom user ='male'/> */}
    </div>
  )
}

export default App
