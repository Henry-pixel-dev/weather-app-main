import React from 'react'

const GridLayout = ({ children }) => {
  return (
    <div className='container mx-auto flex flex-col  md:grid md:grid-cols-3  md:auto-rows-min gap-8 mt-20'>
      {children}
    </div>
  )
}

export default GridLayout