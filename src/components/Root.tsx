import React from "react";
import { useSelector } from "react-redux";
import { WeatherProps } from "./Common/CommonInterface";
import Loading from "./Loading/Loading";
import Weather from "./Weather/Weather";
import Status from "./status/Status";

function ChangeComponent() {
  const stateResult = useSelector<WeatherProps, string>(
    (state) => state.chapter
  );

  switch (stateResult) {
    case "Status":
      return <Status />;
    case "Weather":
      return <Weather />;
    default:
      return <Loading />;
  }
}

const Root: React.FC = () => {
  return <ChangeComponent />;
};

export default Root;
