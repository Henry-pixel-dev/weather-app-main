import fogIcon from '../assets/images/icon-fog.webp'; 
import overcastIcon from '../assets/images/icon-overcast.webp';
import partlyCloudyIcon from '../assets/images/icon-partly-cloudy.webp';  
import rainIcon from '../assets/images/icon-rain.webp'; 
import snowIcon from '../assets/images/icon-snow.webp'; 
import stormIcon from '../assets/images/icon-storm.webp'; 
import sunIcon from '../assets/images/icon-sunny.webp';
import drizzleIcon from '../assets/images/icon-drizzle.webp';

export const getWeatherIcon = (weatherCode) => {
    switch(true) {
        case weatherCode === 0:
            return sunIcon
        case weatherCode <= 3:
            return overcastIcon
        case weatherCode <= 48:
            return fogIcon
        case weatherCode <= 57:
            return drizzleIcon
        case weatherCode <= 67:
            return rainIcon
        case weatherCode <= 77:
            return snowIcon
        case weatherCode <= 82:
            return rainIcon
        case weatherCode <= 86:
            return snowIcon
        case weatherCode <= 99:
            return stormIcon
        default:
            return sunIcon
    }
}

export const convertTemp = (temp, unit) => {
    if (unit === 'imperial') return `${((temp * 9/5) + 32).toFixed(1)}°F`
    return `${temp}°C`
}

export const convertWind = (wind, unit) => {
    if (unit === 'imperial') return `${(wind * 0.621371).toFixed(1)} mph`
    return `${wind} km/h`
}

export const convertPrecipitation = (precip, unit) => {
    if (unit === 'imperial') return `${(precip * 0.0393701).toFixed(2)} in`
    return `${precip} mm`
}