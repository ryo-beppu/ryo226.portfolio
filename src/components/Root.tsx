import React from "react";
import { useSelector } from "react-redux";
import { WeatherProps } from "./Types";
import Loading from "./Loading";
import Timeline from "./Timeline";
import Status from "./Status";

const ChangeComponent: React.FC = () => {
  const stateResult = useSelector<WeatherProps, string>(
    (state) => state.chapter
  );

  switch (stateResult) {
    case "Status":
      return <Status />;
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
