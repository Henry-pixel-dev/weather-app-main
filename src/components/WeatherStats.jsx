import React from 'react'
import StatCard from './StatCard';

const WeatherStats = ({data}) => {
    const stats = [
    { id: 1, label: 'Feels like', value: `${data?.current?.temperature_2m ?? '--'}°` },
    { id: 2, label: 'Humidity', value: `${data?.current?.relative_humidity_2m ?? '--'}%` },
    { id: 3, label: 'Winds', value: `${data?.current?.wind_speed_10m ?? '--'} km/h` },
    { id: 4, label: 'Precipitation', value: `${data?.current?.precipitation ?? '--'} mm`},
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