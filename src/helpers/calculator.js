export const weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday" ];

const average = (sum, itemsCount) => {
    return Math.round(sum / itemsCount)
}
export const calculator = (data) => {
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
    const averagePressure = average(sumPressure, dayLight.length);
    const averageHumidity = average(sumHumidity, dayLight.length);
    const averageClouds = average(sumClouds, dayLight.length);
    const averageWindSpeed = average(sumWindSpeed, dayLight.length);
    const averageSeaLevel = average(sumSeaLevel, dayLight.length);
    const averageFeelsLike = average(sumFeelsLike, dayLight.length);

    const iconIndex = Math.floor(dayLight.length / 2);
    const icon = dayLight[iconIndex].weather[0].icon;
    const date = dayLight[iconIndex].dt_txt
    const day = weekDays[new Date(date).getDay()];
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