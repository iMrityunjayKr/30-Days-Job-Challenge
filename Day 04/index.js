const inputCity = document.querySelector(".inputCity");
const searchBtn = document.querySelector(".searchBtn");
const resultContainer = document.querySelector(".resultContainer");
const cityName = document.createElement("p");
const temperature = document.createElement("p");
const weatherCondition = document.createElement("p");
const errorMessage = document.createElement("p");
const loadingWeather = document.createElement("p");

const elements = [
  cityName,
  temperature,
  weatherCondition,
  errorMessage,
  loadingWeather,
];

elements.forEach((element) => {
  element.style.fontSize = "30px";
  element.style.color = "#9c8e8e";
});

searchBtn.addEventListener("click", handleSerach);
inputCity.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

function handleSerach() {
  if (cityName.parentNode) resultContainer.removeChild(cityName);
  if (temperature.parentNode) resultContainer.removeChild(temperature);
  if (weatherCondition.parentNode)
    resultContainer.removeChild(weatherCondition);
  if (errorMessage.parentNode) resultContainer.removeChild(errorMessage);
  let cityValue = inputCity.value.toLowerCase();

  //error handling
  if (cityValue === "") {
    errorMessage.innerHTML = "Enter a valid city name";
    resultContainer.appendChild(errorMessage);
  } else {
    loadingWeather.innerHTML = "Loading Weather...";
    resultContainer.appendChild(loadingWeather);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=apikey`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === "404") {
          if (loadingWeather.parentNode)
            resultContainer.removeChild(loadingWeather);
          errorMessage.innerHTML = "Enter a valid city name";
          resultContainer.appendChild(errorMessage);
        } else {
          console.log(data);

          if (loadingWeather.parentNode)
            resultContainer.removeChild(loadingWeather);

          cityName.innerHTML = `City : ${data["name"]}`;
          temperature.innerHTML = `Temperature : ${(data["main"]["temp"] - 273.15).toFixed(1)}°C`;
          weatherCondition.innerText = `Weather Condition - ${data["weather"][0]["main"]}`;
          resultContainer.appendChild(cityName);
          resultContainer.appendChild(temperature);
          resultContainer.appendChild(weatherCondition);
        }
      })
      .catch((error) => {
        if (loadingWeather.parentNode)
          resultContainer.removeChild(loadingWeather);
        if (errorMessage.parentNode) resultContainer.removeChild(errorMessage);
        errorMessage.innerHTML =
          "Something went wrong - no internet, server down etc...";
        resultContainer.appendChild(errorMessage);
      });
  }
  inputCity.value = "";
}
