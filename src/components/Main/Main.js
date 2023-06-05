import './Main.css';
import { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import { CurrentWeather } from './CurrentWeather';
import { Forecast } from './Forecast';
export const Main = () => {
    const { weather, forecast } = useContext(WeatherContext)
    return (
        <main>
            {weather && <CurrentWeather/>}
            {forecast && <Forecast />}
        </main>
    )
}