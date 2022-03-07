const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;

const searchTemperature = () =>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = temperature => {
   console.log(temperature);

   const cityName = document.getElementById('city');
   cityName.innerText = temperature.name;
   const displayTemperature = document.getElementById('temperature');
   displayTemperature.innerText = temperature.main.temp;
   const displayTemperatureCondition = document.getElementById('condition');
   displayTemperatureCondition.innerText = temperature.weather[0].main;
   const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
   document.getElementById('weather-icon').src = `${url}`;
   console.log(url);
}
