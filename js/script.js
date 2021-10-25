const exactTime = document.querySelector(".time");
const exactDate = document.querySelector(".date");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();
}

setInterval(setDate, 1000);

setDate();

function time() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  exactTime.innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(time, 1000);
time();

function date() {
  let currentDate = new Date();
  //let currentDateTime = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let dayOfWeek = days[currentDate.getDay()];
  let month = months[currentDate.getMonth()];
  let day = currentDate.getDate();

  exactDate.innerHTML = dayOfWeek + ", " + month + " " + day;
}

setInterval(date, 1000);
date();

const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
}
getWeather();
