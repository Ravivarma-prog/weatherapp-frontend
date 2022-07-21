import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Weather from "./Weather";

function Home() {
  const [weatherData, setWeatherData] = useState([]);

  const displayWeatherDetails = weatherData.map((weather) => {
    return (
      <>
        <Weather weatherData={weather.data} />
        <hr></hr>
      </>
    );
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="text-center">
            <div className="header-style">C L I M A</div>
          </div>
          <div className="text-center">
            <div className="header-caption-style">
              Know <i>Weather</i> it rains
            </div>
          </div>
        </div>
        <div className="row">
          <SearchBar
            placeholder={`Add City...`}
            weatherData={weatherData}
            setWeatherData={setWeatherData}
          />
        </div>
        <div className="row">{displayWeatherDetails}</div>
      </div>
    </>
  );
}

export default Home;
