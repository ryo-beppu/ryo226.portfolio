import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { WeatherProps, WeatherProp } from "./Common/CommonInterface";
import { getWeatherData } from "../redux/action";
import { Sun, Rain, Clouds, Thunderstorm, Error } from "./WeatherProps";

function ChangeWeather() {
  const dispatch = useDispatch();
  const weatherApiResult = useSelector<WeatherProps, WeatherProp>(
    (state) => state.payload
  );
  const [apiData, setApiData] = useState<WeatherProp["weather"]>();

  useEffect(() => {
    dispatch(getWeatherData());
  }, [dispatch]);

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
    default:
      return <Error />;
  }
}

const Weather: React.FC = () => {
  return <ChangeWeather />;
};

export default Weather;
