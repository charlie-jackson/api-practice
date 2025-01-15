// function fetchWeatherData(city) {
//     fetch(`http://api.weatherstack.com/current?access_key=a104815df953f673fb0b78342c9d3793&query=London`)
//         .then(resp => resp.json())
//         .then(data => addWeather(data))
//         .catch(err => console.log(err))
// }

// console.log(fetchWeatherData());

const weatherForm = document.querySelector("#inputSection form");
const cityList = document.querySelector("#weatherSection ul");

weatherForm.addEventListener("submit", extractWeather);

function extractWeather(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    e.target[0].value = "";
}