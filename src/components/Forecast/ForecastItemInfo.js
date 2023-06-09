import { AccordionItemPanel } from 'react-accessible-accordion';
export const ForecastItemInfo = ({ item }) => {
    const { averagePressure, averageHumidity, averageClouds, averageWindSpeed, averageSeaLevel, averageFeelsLike } = item
    return (
        <AccordionItemPanel>
            <div className='daily-details-flex'>
                <div className='daily-details-flex-item'>
                    <label> Pressure: </label>
                    <label> {averagePressure} hPa </label>
                </div>
                <div className='daily-details-flex-item'>
                    <label> Humidity: </label>
                    <label> {averageHumidity}% </label>
                </div>
                <div className='daily-details-flex-item'>
                    <label> Clouds: </label>
                    <label> {averageClouds}% </label>
                </div>
                <div className='daily-details-flex-item'>
                    <label> Wind speed: </label>
                    <label> {averageWindSpeed} m/s </label>
                </div>
                <div className='daily-details-flex-item'>
                    <label> Sea level: </label>
                    <label> {averageSeaLevel}m </label>
                </div>
                <div className='daily-details-flex-item'>
                    <label>Feels like:</label>
                    <label> {averageFeelsLike}°C </label>
                </div>
            </div>
        </AccordionItemPanel>
    )
}