import React from 'react';
import { useOutletContext } from 'react-router-dom'
import Hero from '../components/Hero';
import GridLayout from '../layouts/GridLayout';
import CurrentWeather from '../components/CurrentWeather';  
import WeatherStats from '../components/WeatherStats';
import DailyForecast from '../components/DailyForecast';
import HourlyForecast from '../components/HourlyForecast';


const HomePage = ({ onSearch }) => {
  const { fetchWeather, weatherData, loading  } = useOutletContext()
  

  return (
    <>
      <Hero  onSearch={fetchWeather} />
      <GridLayout>
        <CurrentWeather data={weatherData} />
        <WeatherStats  data={weatherData}/>   
        <DailyForecast data={weatherData} />
        <HourlyForecast  data={weatherData}/>
      </GridLayout>
    </>
  )
}

export default HomePage

