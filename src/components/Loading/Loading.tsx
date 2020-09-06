import "../../sass/opening.scss";
import React, { useEffect, useRef } from "react";
import { Typography } from "@material-ui/core";
import Vivus from "vivus";
import { useDispatch } from "react-redux";
import OpeningSVG from "../../images/OpeningAnim.svg";
import { ActionCreators, getWeatherData } from "../../redux/action";

const Opening: React.FC = () => {
  const svg = useRef("loadAnim");
  const dispatch = useDispatch();
  const css = document.styleSheets.item(0)!;
  useEffect(() => {
    dispatch(getWeatherData());
  }, [dispatch]);

  useEffect(() => {
    const vivusOpening = new Vivus(
      svg.current,
      {
        file: OpeningSVG,
        type: "scenario-sync",
      },
      () => {
        css.insertRule(".cls-1{animation: strokeAnimation ease-in-out 1s;}", 0);
      }
    );
  }, [svg.current]);

  return (
    <div id="load">
      <Typography>Complete</Typography>
      <div
        id="loadAnim"
        onAnimationEnd={() => dispatch(ActionCreators.changeState("Weather"))}
      />
    </div>
  );
};

export default Opening;
