import { weekDays } from '../../helpers/calculator';
const day = weekDays[new Date().getDay()];
export const WeatherBody = ({ weather }) => {
    return (
        <div className="bottom">
            <p className="temperature">{Math.round(weather.main.temp)}°C</p>
            <div className="details">
                <p className="weather-day"><i className="fa-solid fa-calendar-days"></i>{day}</p>

                <div className="parameter-row">
                    <span className="parameter-label detail">Details</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Feels like</span>
                    <span className="parameter-value">{Math.round(weather?.main.feels_like)}°C</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Wind</span>
                    <span className="parameter-value">{Math.round(weather?.wind.speed)} m/s</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Humidity</span>
                    <span className="parameter-value">{weather?.main.humidity}%</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Pressure</span>
                    <span className="parameter-value">{weather?.main.pressure} hPa</span>
                </div>
            </div>
        </div>
    )
}