import React from 'react'
import StatCard from './StatCard';

const WeatherStats = () => {
    const stats = [
        { id: 1, label: 'Feels like', value: '18°' },
        { id: 2, label: 'Humidity', value: '46%' },
        { id: 3, label: 'Winds', value: '14 km/h' },
        { id: 4, label: 'Precipitation', value: '0 mm' },
    ]


  return (
    <div className='md:col-span-2 md:row-start-2 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows md:h-32'>
        {stats.map((stat) => (
        <StatCard key={stat.id} label={stat.label} value={stat.value} />
      ))}
    </div>
  )
}

export default WeatherStats