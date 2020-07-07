import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeatherData } from "../redux/action";
import { WeatherProps } from "./Common/CommonInterface";
import Opening from "./Opening";
import Weather from "./Weather";

function ChangeComponent() {
  const dispatch = useDispatch();
  const stateResult = useSelector<WeatherProps, string>(
    (state) => state.chapter
  );

  switch (stateResult) {
    case "Weather":
      return <Weather />;
    default:
      return <Opening />;
  }
}

const Root: React.FC = () => {
  return <ChangeComponent />;
};

export default Root;
