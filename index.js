//SEARCH ENGINE CHALLENGE
//remember to import axios in index.html
//when a user searches for a city (example: Sydney), it should display the name of the city on the result page and the current temperature of the city.

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input"); //stores input user types in search bar

  //CHALLENGE
  let city = searchInputElement.value; //taking the name of the city from the user input form
  let key = "46a056oa19894b3bfe7e734b4tb25075";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`; //the city and key are gotten from the variables above.

  axios.get(apiUrl).then(showTemp); //gets the apiURL then executes the func below
}

//func gets temp from api & replaces innerHTML
function showTemp(response) {
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city"); //selecting the city element for replacement on the page later

  cityElement.innerHTML = response.data.city;

  let temperatureSpan = document.querySelector(
    "span.current-temperature-value"
  );
  temperatureSpan.innerHTML = `${temperature}`;
}

let searchForm = document.querySelector("#search-form"); //targetting the form so when submit event is triggered(click), the above search function runs.
searchForm.addEventListener("submit", search);

//selecting present default date, getting present date and displaying our formated version using the formatDate function
let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    //doing this bcos dates are given in numbers from 0 to 6 so we create an array to match those numbers.
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

currentDateELement.innerHTML = formatDate(currentDate); //changing default date to the present formated one.
