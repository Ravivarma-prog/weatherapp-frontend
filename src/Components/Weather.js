import React from "react";

function Weather({ weatherData }) {
  const {
    lat,
    lon,
    main,
    temp,
    pressure,
    humidity,
    windSpeed,
    feelsLike,
    city,
  } = weatherData;
  return (
    <div className="container">
      <div className="row city-name-style">
        <div className="col-12">
          {`${city} - ${temp}`}
          <sup>o</sup>
        </div>
      </div>
      <div className="row">
        <div className="col-12">{`${lat} ${lon}`}</div>
      </div>
      <div className="row">
        <div className="col-12">{main}</div>
      </div>

      <div className="row">
        <div className="col-3">
          <div>
            <div>TEMPERATURE</div>
            <div>
              {temp} <sup>o</sup>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div>
            <div>HUMIDITY</div>
            <div>{humidity} %</div>
          </div>
        </div>
        <div className="col-3">
          <div>
            <div>PRESSURE</div>
            <div>{pressure} mbar</div>
          </div>
        </div>
        <div className="col-3">
          <div>
            <div>WIND SPEED</div>
            <div>{windSpeed} m/s</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
