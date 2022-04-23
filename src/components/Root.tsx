import React from "react";
import { useSelector } from "react-redux";
import { WeatherProps } from "./Types";
import Loading from "./Loading";
import Timeline from "./Timeline";

const ChangeComponent: React.FC = () => {
  const stateResult = useSelector<WeatherProps, string>(
    (state) => state.chapter
  );

  switch (stateResult) {
    case "Timeline":
      return <Timeline />;
    default:
      return <Loading />;
  }
};

const Root: React.FC = () => {
  return <ChangeComponent />;
};

export default Root;
