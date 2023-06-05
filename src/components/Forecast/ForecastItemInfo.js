import { AccordionItemPanel } from 'react-accessible-accordion';
import { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
export const ForecastItemInfo = ({ item }) => {
    const { weather } = useContext(WeatherContext);
    const isNight = weather.weather[0].icon.includes('n');
    
    return (
        <AccordionItemPanel>
            <div className={`daily-details-flex ${isNight && 'nighty'}`}>
                <div className='daily-details-flex-item'>
                    <label> Pressure: </label>
                    <label> {item.averagePressure} hPa </label>
                </div>
                <div className='daily-details-flex-item'>
                    <label> Humidity: </label>
                    <label> {item.averageHumidity}% </label>
                </div>
                <div className='daily-details-flex-item'>
                    <label> Clouds: </label>
                    <label> {item.averageClouds}% </label>
                </div>
                <div className='daily-details-flex-item'>
                    <label> Wind speed: </label>
                    <label> {item.averageWindSpeed} m/s </label>
                </div>
                <div className='daily-details-flex-item'>
                    <label> Sea level: </label>
                    <label> {item.averageSeaLevel}m </label>
                </div>
                <div className='daily-details-flex-item'>
                    <label>Feels like:</label>
                    <label> {item.averageFeelsLike}°C </label>
                </div>
            </div>
        </AccordionItemPanel>
    )
}