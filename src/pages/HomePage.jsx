import React from 'react';
import Hero from '../components/Hero';
import GridLayout from '../layouts/GridLayout';
import CurrentWeather from '../components/CurrentWeather';  
import WeatherStats from '../components/WeatherStats';
import DailyForecast from '../components/DailyForecast';
import HourlyForecast from '../components/HourlyForecast';

const HomePage = ({ onSearch }) => {
  return (
    <>
      <Hero  onSearch={onSearch}/>
      <GridLayout>
        <CurrentWeather />
        <WeatherStats />   
        <DailyForecast />
        <HourlyForecast />
      </GridLayout>
    </>
  )
}

export default HomePage

