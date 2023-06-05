import { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import { Weather } from '../Weather/Weather';
import { Forecast } from '../Forecast/Forecast';
export const Main = () => {
    const { weather, forecast } = useContext(WeatherContext)
    return (
        <main>
            {weather && <Weather/>}
            {forecast && <Forecast />}
        </main>
    )
}