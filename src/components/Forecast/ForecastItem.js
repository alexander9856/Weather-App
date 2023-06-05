import { AccordionItem, } from 'react-accessible-accordion';
import { ForecastItemHeader } from './ForecastItemHeader';
import { ForecastItemInfo } from './ForecastItemInfo';

export const ForecastItem = ({ item, index }) => {
    return (
        <AccordionItem key={index}>
            <ForecastItemHeader item={item}  />
            <ForecastItemInfo item={item} />
        </AccordionItem>
    )
}