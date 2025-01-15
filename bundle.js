(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// function fetchWeatherData(city) {
//     fetch(`http://api.weatherstack.com/current?access_key=a104815df953f673fb0b78342c9d3793&query=London`)
//         .then(resp => resp.json())
//         .then(data => addWeather(data))
//         .catch(err => console.log(err))
// }

// console.log(fetchWeatherData());

const weatherForm = document.querySelector("#inputSection form");

weatherForm.addEventListener("submit", extractWeather);

function extractWeather(e) {
    e.preventDefault();
    console.log(e.target[0].value);
}
},{}]},{},[1]);
