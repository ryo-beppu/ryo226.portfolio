import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { WeatherProps, WeatherProp } from "./Common/CommonInterface";

import { Sun, Rain, Clouds, Thunderstorm, Error } from "./WeatherProps";

function ChangeWeather() {
  const weatherApiResult = useSelector<WeatherProps, WeatherProp>(
    (state) => state.payload
  );
  const [apiData, setApiData] = useState<WeatherProp["weather"]>();

  useEffect(() => {
    setApiData(weatherApiResult.weather);
  }, [apiData, weatherApiResult]);

  switch (apiData?.[0].main) {
    case "Thunderstorm":
      return <Thunderstorm />;
    case "Drizzle":
      return <div id="drizzle">drizzle</div>;
    case "Rain":
      return <Rain />;
    case "Snow":
      return <div id="snow">snow</div>;
    case "Atmosphere":
      return <div id="atmosphere">atmosphere</div>;
    case "Clear":
      return <Sun />;
    case "Clouds":
      return <Clouds />;
    case undefined:
      return <Error />;
    default:
      return <div />;
  }
}

const Weather: React.FC = () => {
  return <ChangeWeather />;
};

export default Weather;
