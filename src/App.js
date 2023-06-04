import './App.css';
import { Search } from './components/Search/Search';
import { Main } from './components/Main/Main';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api'
import { useState } from 'react';
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(' ');
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (res) => {
        const weatherResponse = await res[0].json();
        const forecastResponse = await res[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse })
      })
      .catch(err => {
        console.log(err.message)
      })
  }
  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
      <Main data={currentWeather} />
    </div>

  );
}

export default App;
