import './Weather.css';
import { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import { WeatherHeader } from './WeatherHeader';
import { WeatherBody } from './WeatherBody';

import { backgroundChange } from '../../helpers/backgroundChange'
export const Weather = () => {
    const { weather } = useContext(WeatherContext);
    backgroundChange(weather);
    return (
        <div className="weather">
            <WeatherHeader weather={weather} />
            <WeatherBody weather={weather} />
        </div>
    )
}