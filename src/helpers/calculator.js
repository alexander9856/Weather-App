export const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const average = (sum, itemsCount) => Math.round(sum / itemsCount);

export const calculator = (data) => {
    const dayLight = data?.filter(x => x.weather[0].icon.includes('d'));
    const reducer = (acc, curr) => {
        acc.sumMaxDegrees += curr.main.temp_max;
        acc.sumMinDegrees += curr.main.temp_min;
        acc.sumPressure += curr.main.pressure;
        acc.sumHumidity += curr.main.humidity;
        acc.sumClouds += curr.clouds.all;
        acc.sumWindSpeed += curr.wind.speed;
        acc.sumSeaLevel += curr.main.sea_level;
        acc.sumFeelsLike += curr.main.feels_like;
        acc.icons.push(curr.weather[0].icon);
        return acc;
    };

    const initialValue = {
        sumMaxDegrees: 0,
        sumMinDegrees: 0,
        sumPressure: 0,
        sumHumidity: 0,
        sumClouds: 0,
        sumWindSpeed: 0,
        sumSeaLevel: 0,
        sumFeelsLike: 0,
        icons: []
    };

    const {
        sumMaxDegrees,
        sumMinDegrees,
        sumPressure,
        sumHumidity,
        sumClouds,
        sumWindSpeed,
        sumSeaLevel,
        sumFeelsLike,
        icons
    } = dayLight.reduce(reducer, initialValue);

    const averageMinDegrees = Math.floor(sumMinDegrees / dayLight.length);
    const averageMaxDegrees = Math.ceil(sumMaxDegrees / dayLight.length);
    const averagePressure = average(sumPressure, dayLight.length);
    const averageHumidity = average(sumHumidity, dayLight.length);
    const averageClouds = average(sumClouds, dayLight.length);
    const averageWindSpeed = average(sumWindSpeed, dayLight.length);
    const averageSeaLevel = average(sumSeaLevel, dayLight.length);
    const averageFeelsLike = average(sumFeelsLike, dayLight.length);

    const iconsCount = icons.reduce((acc, icon) => {
        acc[icon] = (acc[icon] || 0) + 1;
        return acc;
    }, {});

    const maxOccurrences = Math.max(...Object.values(iconsCount));
    const icon = Object.keys(iconsCount).find(key => iconsCount[key] === maxOccurrences);

    const middleIndex = Math.floor(dayLight.length / 2);
    const date = dayLight[middleIndex].dt_txt;
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
    };
};