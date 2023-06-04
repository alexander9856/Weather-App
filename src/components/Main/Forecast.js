import { Accordion, AccordionItem, AccordionItemPanel, AccordionItemHeading, AccordionItemButton } from 'react-accessible-accordion'
export const Forecast = ({ forecast }) => {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday", 'Sunday'];
    const dayInWeek = new Date().getDay();
    const forecastDays = weekDays.slice(dayInWeek, 7).concat(weekDays.slice(0, dayInWeek))
    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {forecast.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily-item'>
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className='icon-small' />
                                    <label className='day'>{forecastDays[index]}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className='min-max'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details-flex'>
                                <div className='daily-details-flex-item'>
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className='daily-details-flex-item'>
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className='daily-details-flex-item'>
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className='daily-details-flex-item'>
                                    <label>Wind speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className='daily-details-flex-item'>
                                    <label>Sea level:</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className='daily-details-flex-item'>
                                    <label>Feels like:</label>
                                    <label>{item.main.feels_like}°C</label>
                                </div>


                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}