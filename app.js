const API_KEY = "6d055e39ee237af35ca066f35474e9df"; // Replace with your actual API key

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
  weather.innerHTML = `<h2>LOAD HO RHA HAI</h2>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  //   console.log(response);
  const data = await response.json();
  //   console.log(data);
  return showWeather(data);
};
const showWeather = function (data) {
  if (data.cod == "404") {
    weather.innerHTML = `<h2>CITY NOT FOUND</h2>`;
    return;
  }
  weather.innerHTML = `<div>
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
<h2>${data.main.temp}</h2>
<h4> ${data.weather[0].main}</h4>
</div>`;
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const city = search.value;
  getWeather(city);
});
