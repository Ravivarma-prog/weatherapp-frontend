import axios from "axios";
import React, { useState } from "react";
import { SERVER_URL } from "../Constants";

function SearchBar({ placeholder, weatherData, setWeatherData }) {
  const [city, setCity] = useState("");

  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  const keyHandler = (e) => {
    let cityIndex = weatherData.findIndex(
      (weather) => weather.data.city === city
    );
    if (e.key === "Enter") {
      if (city === "") {
        alert("City can't be empty");
      } else if (cityIndex >= 0) {
        alert("The weather details of city has already been displayed");
      } else {
        axios
          .get(`${SERVER_URL}/weather/${city}`)
          .then((res) => setWeatherData([...weatherData, res.data]))
          .catch((err) => alert(err.message));
      }
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder={placeholder}
          value={city}
          onChange={changeHandler}
          onKeyPress={keyHandler}
          className="search-bar-style"
        />
      </div>
    </>
  );
}

export default SearchBar;
