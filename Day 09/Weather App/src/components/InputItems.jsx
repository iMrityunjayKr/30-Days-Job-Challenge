function InputItems({ cityName, setCityName, handleSearch }) {
  return (
    <>
      <label htmlFor="input-city">City: </label>
      <input
        id="input-city"
        type="text"
        placeholder="Enter a city name"
        value={cityName}
        onChange={(e) => {
          setCityName(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
}
export default InputItems;
