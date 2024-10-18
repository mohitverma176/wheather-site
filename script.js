const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtu');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');
const tempContainer=document.querySelector(".temp");
const weather_box = document.querySelector('.weather-box');


async function checkWeather(city){
    const api_key = `zvkNoqRQd9VFriqYpUuOR3jBiW9emY9x`
   
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=fcc8de7015bbb202209bbf0261babf4c`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
       console.log(inputBox.value);
       tempContainer.textContent =weather_data.main.temp ;
    humidity.textContent=weather_data.main.humidity;
    wind_speed.textContent=weather_data.wind.speed;
    
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
