import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import InputItems from "./components/InputItems";

function App() {
  const [cityName, setCityName] = useState();
  function handleSearch() {
    if (cityName === "") {
      return "Enter a valid city"
    }
  }
  return (
    <>
      <Heading />
      <InputItems
        cityName={cityName}
        setCityName={setCityName}
        handleSearch={handleSearch}
      />
    </>
  );
}

export default App;
