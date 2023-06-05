import { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import { Weather } from '../Weather/Weather';
import { Forecast } from '../Forecast/Forecast';
import { Spinner } from '../Spinner/Spinner';
import { FetchError } from '../FetchError/FetchError'
export const Main = () => {
    const { weather, forecast, isLoading, fetchError } = useContext(WeatherContext)
    return (
        <main>
            {isLoading && <Spinner />}
            {!isLoading && fetchError && <FetchError />}
            {!isLoading && !fetchError && weather && <Weather />}
            {!isLoading && !fetchError && forecast && <Forecast />}
        </main>
    )
}