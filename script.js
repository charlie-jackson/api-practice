// function fetchWeatherData(city) {
//     fetch
//         .then(resp => resp.json())
//         .then(data => addWeather(data))
//         .catch(err => console.log(err))
// }

// console.log(fetchWeatherData());

const weatherForm = document.querySelector("#inputSection form");
const cityList = document.querySelector("#citySection ul");

weatherForm.addEventListener("submit", extractWeather);

function extractWeather(e) {
    e.preventDefault()
    addCity(e.target[0].value)
    e.target[0].value = ""
}

function addCity(city) {
    const li = document.createElement("li")
    li.textContent = city
    cityList.appendChild(li)
}