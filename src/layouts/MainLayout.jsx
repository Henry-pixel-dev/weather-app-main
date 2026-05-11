import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NavBar from '../components/NavBar'

const MainLayout = () => {
    const navigate = useNavigate()
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false)
    const [searchHistory, setSearchHistory] = useState([]);
    const [unit, setUnit] = useState('metric')

    const fetchWeather = async (city) => {
      setLoading(true)
      try {
          // FIRST FETCH - get coordinates
          const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`)
          const geoData = await geoRes.json()
          console.log(geoData)
  
           if (!geoData.results || geoData.results.length === 0) {
              navigate('/no-result')  // show navbar + hero only
              return
          } else {
            navigate('./')
          }
          const cityName = geoData.results[0].name
          const country = geoData.results[0].country
          // pull out lat and long from the response
          const lat = geoData.results[0].latitude
          const lon = geoData.results[0].longitude
  
          // SECOND FETCH - use coordinates to get weather
          const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&timezone=auto`)
          const weatherData = await weatherRes.json()
          setWeatherData({
            ...weatherData,    
            city: cityName,   
            country: country  
        })
        setSearchHistory(prev => [...new Set([...prev, cityName])]);
        } catch (error) {
          navigate('/error')
          console.log(error)
        } finally {
          setLoading(false)
        }
    }
  return (
    <>
      <NavBar  setUnit={setUnit} unit={unit}/>
      <Outlet  context={{ fetchWeather, weatherData, loading, searchHistory, unit }}/>
    </>
  )
}

export default MainLayout