import React from 'react'

const SidebarText = ({text}) => {
  return (
    <div className='px-3 py-2 rounded-lg hover:bg-white/30 cursor-pointer transition'>
      {text}
    </div>
  )
}

export default SidebarText
