import React from "react";
import { useSelector } from "react-redux";
import { WeatherProps } from "./Common/CommonInterface";
import Opening from "./Opening";
import Weather from "./Weather";

function ChangeComponent() {
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
