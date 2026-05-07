import React from 'react'

const HourlyCard = ({icon, time, temp}) => {
  return (
    <div className='bg-neutral-600 p-2 flex justify-between items-center w-full border border-neutral-600 rounded-lg'>
                <div className='flex space-x-2 items-center'>
                  <img src={icon} alt="overcast" className='w-10 h-10'/>
    
                  <p className='text-neutral-0'>
                    {time} PM
                  </p>
                </div>
                <p className='text-neutral-0 text-sm'>
                  {temp}
                </p>
               </div>
  )
}

export default HourlyCard