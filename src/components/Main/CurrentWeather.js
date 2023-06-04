export const CurrentWeather = ({ weather }) => {
    const date = new Date().getDay()
    const days = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    }
    const day = days[date]

    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{weather?.city}</p>
                    <p className="weather-description">{weather?.weather[0].description}</p>
                </div>
                <img src={`icons/${weather?.weather[0].icon}.png`} alt="weather" className="weather-icon" />
            </div>
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
        </div>
    )
}