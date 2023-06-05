import React, { createContext, useEffect, useState } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY, GEO_API_URL, geoApiOptions } from '../api'


export const WeatherContext = createContext();

export const Weather = ({ children }) => {

    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [search, setSearch] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(false)
    
    // Initially show Sofia weather when opening the App
    useEffect(() => {
        ((async () => {
            try {
                const sofiaWeatherRes = await fetch(`${WEATHER_API_URL}/weather?lat=42.697886&lon=23.321726&appid=${WEATHER_API_KEY}&units=metric`);
                const sofiaWeather = await sofiaWeatherRes.json();

                const sofiaForecastRes = await fetch(`${WEATHER_API_URL}/forecast?lat=42.697886&lon=23.321726&appid=${WEATHER_API_KEY}&units=metric`);
                const sofiaForecast = await sofiaForecastRes.json();

                setWeather({ city: 'Sofia, BG', ...sofiaWeather })
                setForecast({ city: 'Sofia, BG', ...sofiaForecast })
            }
            catch(err){
                setFetchError(true)
            }
            setIsLoading(false)
        }))()
    }, [])

    const onSearchChange = async (searchData) => {
        const [latitude, longitude] = searchData.value.split(' ');
        try {
            const weatherRes = await fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);
            const forecasthRes = await fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);

            const weatherData = await weatherRes.json();
            const forecastData = await forecasthRes.json();
            setWeather({ city: searchData.label, ...weatherData });
            setForecast({ city: searchData.label, ...forecastData })
        }
        catch (err) {
            setFetchError(true)
        }
        setIsLoading(false)
    }
    const handleOnChange = (searchValue) => {
        setSearch(searchValue);
        onSearchChange(searchValue);
    }

    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(`${GEO_API_URL}/cities?minPopulation=5000&namePrefix=${inputValue}`, geoApiOptions);
            if (response.status !== 429) {
                const res = await response.json();
                let filteredData = res.data.filter((obj, index) => res.data.findIndex((item) => item.name === obj.name) === index);
                return {
                    options: filteredData.map(x => {
                        return {
                            value: `${x.latitude} ${x.longitude}`,
                            label: `${x.name}, ${x.countryCode}`
                        }
                    })
                }
            }
            else {
                setFetchError(true)
                return {
                    options: []
                }
            }
        }
        catch (err) {
            setFetchError(true)
        }

    }
    const contextValues = {
        weather,
        forecast,
        onSearchChange,
        handleOnChange,
        loadOptions,
        search,
        isLoading,
        fetchError,
    }

    return (
        <>
            <WeatherContext.Provider value={contextValues}>
                {children}
            </WeatherContext.Provider>
        </>
    )
}