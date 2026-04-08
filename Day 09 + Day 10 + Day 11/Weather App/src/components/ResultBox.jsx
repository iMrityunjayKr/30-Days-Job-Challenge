import "./resultbox.css";
function ResultBox({ weatherData, loading, error }) {
  return (
    <>
      <div className="resultBox">
        {error && <p className="error">{error}</p>}
        {loading && <p>{"loading weather details..."}</p>}

        {weatherData && (
          <>
            <p>City : {weatherData.name}</p>
            <p>Temperature : {(weatherData.main.temp - 273.15).toFixed(1)}°C</p>
            <p>Weather condition : {weatherData.weather[0].main}</p>
          </>
        )}
      </div>
    </>
  );
}
export default ResultBox;
