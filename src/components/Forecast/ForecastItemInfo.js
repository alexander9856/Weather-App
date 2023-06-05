import { AccordionItemPanel } from 'react-accessible-accordion';

export const ForecastItemInfo = ({ item }) => {
    return (
        <AccordionItemPanel>
            <div className='daily-details-flex'>
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