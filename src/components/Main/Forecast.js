import { Accordion } from 'react-accessible-accordion';
import { calculator } from '../../helpers/calculator'
import { ForecastItem } from './ForecastItem';
export const Forecast = ({ forecast }) => {
    const nextDay = forecast.list.slice(0, 9);
    const secondDay = forecast.list.slice(8, 17);
    const thirdDay = forecast.list.slice(16, 25);
    const fourthDay = forecast.list.slice(24, 33);

    const modifiedDays = [calculator(nextDay), calculator(secondDay), calculator(thirdDay), calculator(fourthDay)]
    return (
        <>
            <label className="title">Daily</label>

            <Accordion allowZeroExpanded>
                {modifiedDays.map((item, index) => (
                    <ForecastItem item={item} index={index} />
                ))}
            </Accordion>

        </>
    )
}