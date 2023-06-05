export const WeatherHeader = ({weather}) => {
    return (
        <div className="top">
            <div>
                <p className="city">{weather?.city}</p>
                <p className="weather-description">{weather?.weather[0].description}</p>
            </div>
            <img src={`icons/${weather?.weather[0].icon}.png`} alt="weather" className="weather-icon" />
        </div>
    )
}