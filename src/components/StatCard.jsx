import React from 'react'

const StatCard = ({label, value}) => { 

  return (
    <div className='flex-1 bg-neutral-700 p-3 rounded-lg flex flex-col space-y-3 border border-neutral-700'>
      <p className='text-neutral-200 text-sm'>{label}</p>
      <p className='text-neutral-0 text-2xl '>
        {value}
      </p>
    </div>
  )
}

export default StatCard