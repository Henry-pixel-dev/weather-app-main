import React from 'react'

const DaysList = ({day, onSelectDay}) => {
  return (
    <div className='w-full  p-3 flex flex-col space-y-3 '>
        <p className='bg-neutral-600 p-3 w-full text-neutral-0 rounded-md'
        onClick={() => onSelectDay(day.date)}>
           {day}
        </p>
    </div>
  )
}

export default DaysList