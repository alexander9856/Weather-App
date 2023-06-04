import { Accordion, AccordionItem, AccordionItemPanel, AccordionItemHeading, AccordionItemButton } from 'react-accessible-accordion'
export const Forecast = ({ forecast }) => {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday", 'Sunday'];
    const nextDay = forecast.list.slice(0, 9);
    const secondDay = forecast.list.slice(8, 17);
    const thirdDay = forecast.list.slice(16, 25);
    const fourthDay = forecast.list.slice(24, 33);

    const modifyDay = (data) => {
        const dayLight = data?.filter(x => x.weather[0].icon.includes('d'));
        const sumMaxDegrees = dayLight.reduce((a, b) => a + b.main.temp_max, 0);
        const sumMinDegrees = dayLight.reduce((a, b) => a + b.main.temp_min, 0);
        const sumPressure = dayLight.reduce((a, b) => a + b.main.pressure, 0);
        const sumHumidity = dayLight.reduce((a, b) => a + b.main.humidity, 0);
        const sumClouds = dayLight.reduce((a, b) => a + b.clouds.all, 0);
        const sumWindSpeed = dayLight.reduce((a, b) => a + b.wind.speed, 0);
        const sumSeaLevel = dayLight.reduce((a, b) => a + b.main.sea_level, 0);
        const sumFeelsLike = dayLight.reduce((a, b) => a + b.main.feels_like, 0);

        const averageMinDegrees = Math.floor(sumMinDegrees / dayLight.length);
        const averageMaxDegrees = Math.ceil(sumMaxDegrees / dayLight.length);
        const averagePressure = Math.round(sumPressure / dayLight.length);
        const averageHumidity = Math.round(sumHumidity / dayLight.length);
        const averageClouds = Math.round(sumClouds / dayLight.length);
        const averageWindSpeed = Math.round(sumWindSpeed / dayLight.length);
        const averageSeaLevel = Math.round(sumSeaLevel / dayLight.length);
        const averageFeelsLike = Math.round(sumFeelsLike / dayLight.length);

        const iconIndex = Math.floor(dayLight.length / 2);
        const icon = dayLight[iconIndex].weather[0].icon;
        const date = dayLight[iconIndex].dt_txt
        const day = weekDays[new Date(date).getDay()]
        return {
            averageMaxDegrees,
            averageMinDegrees,
            averagePressure,
            averageHumidity,
            averageClouds,
            averageWindSpeed,
            averageSeaLevel,
            averageFeelsLike,
            icon,
            day
        }
    }
    
    const modifiedDays = [modifyDay(nextDay), modifyDay(secondDay), modifyDay(thirdDay), modifyDay(fourthDay)]
    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {modifiedDays.map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img src={`icons/${item.icon}.png`} alt="weather" className='icon-small' />
                                    <label className='day'>{item.day}</label>
                                    <label className='min-max'>{item.averageMaxDegrees}°C / {item.averageMinDegrees}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details-flex'>
                                <div className='daily-details-flex-item'>
                                    <label>Pressure:</label>
                                    <label>{item.averagePressure} hPa</label>
                                </div>
                                <div className='daily-details-flex-item'>
                                    <label>Humidity:</label>
                                    <label>{item.averageHumidity}%</label>
                                </div>
                                <div className='daily-details-flex-item'>
                                    <label>Clouds:</label>
                                    <label>{item.averageClouds}%</label>
                                </div>
                                <div className='daily-details-flex-item'>
                                    <label>Wind speed:</label>
                                    <label>{item.averageWindSpeed} m/s</label>
                                </div>
                                <div className='daily-details-flex-item'>
                                    <label>Sea level:</label>
                                    <label>{item.averageSeaLevel}m</label>
                                </div>
                                <div className='daily-details-flex-item'>
                                    <label>Feels like:</label>
                                    <label>{item.averageFeelsLike}°C</label>
                                </div>


                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}