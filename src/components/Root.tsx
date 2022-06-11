import React from "react";
import { useSelector } from "react-redux";
import { WeatherProps } from "./Types";
import { Search } from "./Search";
import Loading from "./Loading";

const ChangeComponent: React.FC = () => {
  const stateResult = useSelector<WeatherProps, string>(
    (state) => state.chapter
  );

  switch (stateResult) {
    case "Search":
      return <Search />;
    default:
      return <Loading />;
  }
};

const Root: React.FC = () => {
  return <ChangeComponent />;
};

export default Root;
