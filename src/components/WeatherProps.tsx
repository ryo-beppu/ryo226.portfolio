import React, { useEffect, useRef } from "react";
import Vivus from "vivus";
import cloudy from "../images/Cloudy.svg";
import rain from "../images/Rain.svg";
import sun from "../images/Sun.svg";
import thunderstorm from "../images/Thunder.svg";
import error from "../images/Error.svg";
import "../sass/weatherProps.scss";

export function Clouds() {
  const svg = useRef("clouds");
  useEffect(() => {
    const vivusClouds = new Vivus(svg.current, {
      file: cloudy,
      type: "scenario-sync",
      start: "autostart",
      duration: 30,
    });
  }, [svg.current]);

  return (
    <div id="weather">
      <div id="clouds" />
    </div>
  );
}

export function Rain() {
  const svg = useRef("rain");
  useEffect(() => {
    const vivusRain = new Vivus(svg.current, {
      file: rain,
      type: "scenario-sync",
      start: "autostart",
      duration: 30,
    });
  }, [svg.current]);

  return (
    <div id="weather">
      <div id="rain" />
    </div>
  );
}

export function Sun() {
  const svg = useRef("sun");
  useEffect(() => {
    const vivusSun = new Vivus(svg.current, {
      file: sun,
      type: "scenario-sync",
      start: "autostart",
      duration: 30,
    });
  }, [svg.current]);

  return (
    <div id="weather">
      <div id="sun" />
    </div>
  );
}

export function Thunderstorm() {
  const svg = useRef("thunderstorm");
  useEffect(() => {
    const vivusThunderstorm = new Vivus(svg.current, {
      file: thunderstorm,
      type: "scenario-sync",
      start: "autostart",
      duration: 30,
    });
  }, [svg.current]);

  return (
    <div id="weather">
      <div id="thunderstorm" />
    </div>
  );
}

export function Error() {
  const svg = useRef("error");
  useEffect(() => {
    const vivusError = new Vivus(svg.current, {
      file: error,
      type: "scenario-sync",
      start: "autostart",
      duration: 15,
    });
  }, [svg.current]);

  return (
    <div id="weather">
      <div id="error" />
    </div>
  );
}
