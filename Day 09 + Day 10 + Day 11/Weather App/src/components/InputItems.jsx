import "./inputItems.css";
function InputItems({
  cityName,
  setCityName,
  handleSearch,
  handleInputChange,
}) {
  return (
    <div className="inputitems">
      <label htmlFor="input-city">City: </label>
      <input
        className="inputCity"
        id="input-city"
        type="text"
        placeholder="Enter a city name"
        value={cityName}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      />
      <button className="search" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
export default InputItems;
