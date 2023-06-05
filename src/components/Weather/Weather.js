import './Weather.css'
import { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import { WeatherHeader } from './WeatherHeader';
import { WeatherBody } from './WeatherBody';
export const Weather = () => {
    const { weather } = useContext(WeatherContext);
    return (
        <div className="weather">
            <WeatherHeader weather={weather} />
            <WeatherBody weather={weather} />
        </div>
    )
}