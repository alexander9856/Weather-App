import './Main.css'
import { CurrentWeather } from './CurrentWeather'

export const Main = ({ data }) => {
    return (
        <main>
            {data && <CurrentWeather data={data} />}

        </main>
    )
}