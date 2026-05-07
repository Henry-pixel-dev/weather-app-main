import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';


const App = () => {
  const fetchWeather = async (city) => {
    try {
        // FIRST FETCH - get coordinates
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`)
        const geoData = await geoRes.json()
        console.log(geoData)

        // pull out lat and long from the response
        const lat = geoData.results[0].latitude
        const lon = geoData.results[0].longitude

        // SECOND FETCH - use coordinates to get weather
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m&timezone=auto`)
        const weatherData = await weatherRes.json()

        console.log(weatherData)  // check what comes back

    } catch (error) {
        console.log(error)
    }
}
 
  // const fetchWeather = async (city) => {
  //   try {
  //     const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
  //     const data = await res.json();
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage  onSearch={fetchWeather}/>} />
    </Route>
  )
)


  return (
    <RouterProvider router={router} />
  )
}

export default App