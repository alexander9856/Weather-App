import './Main.css'
import { CurrentWeather } from './CurrentWeather'
import { Forecast } from './Forecast'

export const Main = ({ weather, forecast }) => {
    return (
        <main>
            {weather && <CurrentWeather weather={weather} />}
            {forecast && <Forecast forecast={forecast} />}
        </main>
    )
}