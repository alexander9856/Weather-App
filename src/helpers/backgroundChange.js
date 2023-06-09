export const backgroundChange = (weather) => {
    let description = weather.weather[0].description;
    const icon = weather.weather[0].icon;
   
    if (icon.includes('d')) {
        if (description.includes('rain')) document.body.className = 'rainy';
        if (description === 'overcast clouds') document.body.className = 'overcast-clouds';
        if (description === 'few clouds') document.body.className = 'few-clouds';
        if (description === 'scattered clouds') document.body.className = 'scattered-clouds';
        if (description === 'broken clouds') document.body.className = 'broken-clouds';
        if (description === 'clear sky') document.body.className = 'clear-sky';
        if (description.includes('snow')) document.body.className = 'snowy';
        if (description === 'fog') document.body.className = 'foggy';
    }
    else {
        document.body.className = 'night';
    }
}