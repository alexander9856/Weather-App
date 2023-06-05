import { AccordionItemButton } from 'react-accessible-accordion';

export const ForecastItemHeader = ({item}) => {
    return (
        <AccordionItemButton>
            <div className='daily-item'>
                <img src={`icons/${item.icon}.png`} alt="weather" className='icon-small' />
                <label className='day'>{item.day} </label>
                <label className='min-max'>{item.averageMinDegrees}°C / {item.averageMaxDegrees}°C </label>
            </div>
        </AccordionItemButton>
    )
}