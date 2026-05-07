import React from 'react'

const ForecastCard = ({day, currtemp, pretemp, icon}) => {
  return (
    <div className='bg-neutral-700 p-3 flex flex-col  space-y-3 items-center justify-center rounded-lg'>
        <p className='text-neutral-200'>
            {day}
        </p>    
        <img src={icon} alt="rainIcon" className='w-20 h-20'/>
    
        <div className='flex flex-row justify-between space-x-5'>
            <p className='text-base text-neutral-200'>
                {currtemp}
            </p>
            <p className='text-base text-neutral-200'>
                {pretemp}
            </p>
        </div>
    </div>
  )
}

export default ForecastCard