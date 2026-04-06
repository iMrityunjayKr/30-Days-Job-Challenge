let resutBox = document.querySelector(".result-container");
let searchBtn = document.querySelector(".Search");
let inputCity = document.querySelector(".inputCity");
let cityName = document.createElement("p");
let temperature = document.createElement("p");
let weatherCondition = document.createElement("p");
let loadingWeather = document.createElement("p");
let errorMessage = document.createElement("p");
let elements = [
  cityName,
  temperature,
  weatherCondition,
  errorMessage,
  loadingWeather,
];

elements.forEach((element) => {
  element.style.fontSize = "40px";
  element.style.color = "#9c8e8e";
  // element.style.textAlign = "left";
});

searchBtn.addEventListener("click", () => {
  // ALL your logic goes here
  if (cityName.parentNode) resutBox.removeChild(cityName);
  if (temperature.parentNode) resutBox.removeChild(temperature);
  if (weatherCondition.parentNode) resutBox.removeChild(weatherCondition);
  if (errorMessage.parentNode) resutBox.removeChild(errorMessage);
  let cityValue = inputCity.value.toLowerCase();

  if (inputCity.value === "") {
    errorMessage.innerText = "Enter a valid city";
    resutBox.appendChild(errorMessage);
  } else {
    loadingWeather.innerHTML = "Loading Weather...";
    resutBox.appendChild(loadingWeather);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (loadingWeather.parentNode) resutBox.removeChild(loadingWeather);

        if (data.cod !== 200) {
          errorMessage.innerText = `${data.message}`;
          resutBox.appendChild(errorMessage);
        } else {
          cityName.innerText = ` City - ${data["name"]}`;
          temperature.innerText = `Temperature - ${(data["main"]["temp"] - 273.15).toFixed(1)}°C `;
          weatherCondition.innerText = `Weather Condition - ${data["weather"][0]["main"]}`;
          resutBox.appendChild(cityName);
          resutBox.appendChild(temperature);
          resutBox.appendChild(weatherCondition);

          console.log(cityName, temperature, weatherCondition);
        }
      })
      .catch((error) => {
        if (loadingWeather.parentNode) resutBox.removeChild(loadingWeather);
        errorMessage.innerText =
          "Something went wrong - no internet, server down etc...";
        resutBox.appendChild(errorMessage);
      });
    inputCity.value = "";
  }
});
