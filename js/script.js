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
