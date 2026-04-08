import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import InputItems from "./components/InputItems";
import ResultBox from "./components/ResultBox";

const API_KEY = import.meta.env.VITE_API_KEY;
function App() {
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [showWeatherDetails, setWeatherDetails] = useState(null);
  function handleSearch() {
    setWeatherDetails(null);
    if (cityName === "") {
      return setError("City name blank, please enter a city name!");
    }
    setLoadingWeather(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== 200) {
          setError(data.message);
          setLoadingWeather(false);
          setWeatherDetails("");
        } else {
          console.log(data.cod);
          console.log(typeof data.cod);
          console.log(data.message);
          setError("");
          setLoadingWeather(false);
          setWeatherDetails(data);
        }
      })
      .catch((error) => {
        setWeatherDetails("");
        setLoadingWeather(false);
        setError("Something went wrong - no internet, server down etc...");
      });
  }
  function handleInputChange(value) {
    setCityName(value);
    setError(null);
    setLoadingWeather(false);
    setWeatherDetails(null);
  }
  return (
    <div className="app">
      <Heading />
      <InputItems
        cityName={cityName}
        setCityName={setCityName}
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
      />
      <ResultBox
        weatherData={showWeatherDetails}
        error={error}
        loading={loadingWeather}
      />
    </div>
  );
}

export default App;
