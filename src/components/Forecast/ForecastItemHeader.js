import { AccordionItemButton, AccordionItemHeading } from 'react-accessible-accordion';

export const ForecastItemHeader = ({ item }) => {
    return (
        <AccordionItemHeading >
            <AccordionItemButton>
                <div className='daily-item'>
                    <img src={`icons/${item.icon}.png`} alt="weather" className='icon-small' />
                    <label className='day'>{item.day} </label>
                    <label className='min-max'>{item.averageMinDegrees}°C / {item.averageMaxDegrees}°C </label>
                </div>
            </AccordionItemButton>
        </AccordionItemHeading>
    )
}