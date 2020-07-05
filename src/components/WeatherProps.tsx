import React, { useEffect } from "react";
import Vivus from "vivus";
import cloudy from "../images/Cloudy.svg";
import rain from "../images/Rain.svg";
import sun from "../images/Sun.svg";
import thunderstorm from "../images/Thunder.svg";
import "../sass/weatherProps.scss";

export function Clouds() {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new Vivus("clouds", { file: cloudy, type: "scenario-sync" });
  }, []);

  return (
    <div id="weather">
      <div id="clouds" />
    </div>
  );
}

export function Rain() {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new Vivus("clouds", { file: rain, type: "scenario-sync" });
  }, []);

  return (
    <div id="weather">
      <div id="clouds" />
    </div>
  );
}

export function Sun() {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new Vivus("clouds", { file: sun, type: "scenario-sync" });
  }, []);

  return (
    <div id="weather">
      <div id="clouds" />
    </div>
  );
}

export function Thunderstorm() {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new Vivus("clouds", { file: thunderstorm, type: "scenario-sync" });
  }, []);

  return (
    <div id="weather">
      <div id="clouds" />
    </div>
  );
}
