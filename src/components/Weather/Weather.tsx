import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Vivus from "vivus";
import ReactVivus from "react-vivus";
import { WeatherProps, WeatherProp } from "../Common/CommonInterface";
import { ActionCreators } from "../../redux/action";
import cloudy from "../../images/Cloudy.svg";
import rain from "../../images/Rain.svg";
import sun from "../../images/Sun.svg";
import thunderstorm from "../../images/Thunder.svg";
import error from "../../images/Error_animated.svg";
import "../../sass/weather.scss";

const ChangeWeather: React.FC = () => {
  const dispatch = useDispatch();
  const css = document.styleSheets.item(0)!;
  const weatherApiResult = useSelector<WeatherProps, WeatherProp>(
    (state) => state.payload
  );
  const [weather, setWeather] = useState<string | undefined>();
  useEffect(() => {
    if (Object.keys(weatherApiResult).length > 0) {
      setWeather(weatherApiResult.weather[0].main);
    }
  }, []);

  switch (weather) {
    case "Thunderstorm":
      return (
        <ReactVivus
          id="Thunder"
          option={{
            file: thunderstorm,
            type: "oneByOne",
            start: "autostart",
            duration: 250,
          }}
          callback={() => {
            css.insertRule(
              "#Tunder{animation: strokeAnimation ease-in-out 1s;}"
            );
            const element = document.querySelector("#Thunder");
            if (element != null) {
              element.addEventListener("animationend", () => {
                dispatch(ActionCreators.changeState("Status"));
              });
            }
          }}
        />
      );
    case "Drizzle":
      return <div id="drizzle">drizzle</div>;
    case "Rain":
      return (
        <ReactVivus
          id="Rain"
          option={{
            file: rain,
            type: "oneByOne",
            start: "autostart",
            duration: 150,
            animTimingFunction: Vivus.EASE,
          }}
          callback={() => {
            css.insertRule("#Rain{animation: strokeAnimation ease-in-out 1s;}");
            const element = document.querySelector("#Rain");
            if (element != null) {
              element.addEventListener("animationend", () => {
                dispatch(ActionCreators.changeState("Status"));
              });
            }
          }}
        />
      );
    case "Snow":
      return <div id="snow">snow</div>;
    case "Atmosphere":
      return <div id="atmosphere">atmosphere</div>;
    case "Clear":
      return (
        <ReactVivus
          id="Sun"
          option={{ file: sun, type: "sync", start: "autostart", duration: 30 }}
          callback={() => {
            css.insertRule(
              "#Clear{animation: strokeAnimation ease-in-out 1s;}"
            );
            const element = document.querySelector("#Sun");
            if (element != null) {
              element.addEventListener("animationend", () => {
                dispatch(ActionCreators.changeState("Status"));
              });
            }
          }}
        />
      );
    case "Clouds":
      return (
        <ReactVivus
          id="Cloudy"
          option={{
            file: cloudy,
            type: "sync",
            start: "autostart",
            duration: 100,
            animTimingFunction: Vivus.EASE,
          }}
          callback={() => {
            css.insertRule(
              "#Cloudy{animation: strokeAnimation ease-in-out 1s;}"
            );
            const element = document.querySelector("#Cloudy");
            if (element != null) {
              element.addEventListener("animationend", () => {
                dispatch(ActionCreators.changeState("Status"));
              });
            }
          }}
        />
      );
    default:
      return <img src={error} alt="error" />;
  }
};

const Weather: React.FC = () => {
  return (
    <div id="weather">
      <ChangeWeather />
    </div>
  );
};

export default Weather;
