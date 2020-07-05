import React, { useEffect } from "react";
import Vivus from "vivus";
import cloudy from "../images/Cloudy.svg";
import rain from "../images/Rain.svg";
import sun from "../images/Sun.svg";
import thunderstorm from "../images/Thunder.svg";
import error from "../images/Error.svg";
import "../sass/weatherProps.scss";

export function Clouds() {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new Vivus("clouds", { file: cloudy, type: "scenario-sync", duration: 30 });
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
    new Vivus("rain", { file: rain, type: "scenario-sync", duration: 30 });
  }, []);

  return (
    <div id="weather">
      <div id="rain" />
    </div>
  );
}

export function Sun() {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new Vivus("sun", { file: sun, type: "scenario-sync", duration: 30 });
  }, []);

  return (
    <div id="weather">
      <div id="sun" />
    </div>
  );
}

export function Thunderstorm() {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new Vivus("thunderstorm", {
      file: thunderstorm,
      type: "scenario-sync",
      duration: 10,
    });
  }, []);

  return (
    <div id="weather">
      <div id="thunderstorm" />
    </div>
  );
}

export function Error() {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new Vivus("error", { file: error, type: "scenario-sync", duration: 30 });
  }, []);

  return (
    <div id="weather">
      <div id="error" />
    </div>
  );
}
