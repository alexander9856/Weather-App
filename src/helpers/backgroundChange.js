export const backgroundChange = (weather) => {
    let description = weather.weather[0].description;
    const icon = weather.weather[0].icon;

    if (icon.includes('d')) {
        description.includes('rain') ? document.body.className = 'rainy' : document.body.classList.remove('rainy');
        description === 'overcast clouds' ? document.body.className = 'overcast-clouds' : document.body.classList.remove('overcast-clouds');
        description ==='few clouds' ? document.body.className = 'few-clouds' : document.body.classList.remove('few-clouds');
        description === 'scattered clouds' ? document.body.className = 'scattered-clouds' : document.body.classList.remove('scattered-clouds');
        description === 'broken clouds' ? document.body.className = 'broken-clouds' : document.body.classList.remove('broken-clouds');
        description === 'clear sky' ? document.body.className = 'clear-sky' : document.body.classList.remove('clear-sky');
        description.includes('snow') ? document.body.className = 'snowy' : document.body.classList.remove('snowy');
        description.includes('wind') ? document.body.className = 'windy' : document.body.classList.remove('windy');
    }
    else{
        document.body.className = ''
    }
}