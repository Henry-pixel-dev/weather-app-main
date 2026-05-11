import React from 'react';
import { useOutletContext } from 'react-router-dom'
import Hero from '../components/Hero';
import GridLayout from '../layouts/GridLayout';
import CurrentWeather from '../components/CurrentWeather';  
import WeatherStats from '../components/WeatherStats';
import DailyForecast from '../components/DailyForecast';
import HourlyForecast from '../components/HourlyForecast';
import LoadingSkeleton from '../components/LoadingSkeleton';


const HomePage = ({ onSearch }) => {
  const { fetchWeather, weatherData, loading, unit  } = useOutletContext()
  

  return (
    <>
      <Hero  onSearch={fetchWeather} />
      {!weatherData ? <LoadingSkeleton /> : (
        <GridLayout>
          <CurrentWeather data={weatherData} unit={unit}/>
          <WeatherStats  data={weatherData} unit={unit}/>   
          <DailyForecast data={weatherData} unit={unit}/>
          <HourlyForecast  data={weatherData} unit={unit}/>
        </GridLayout>
      )}
      
    </>
  )
}

export default HomePage

