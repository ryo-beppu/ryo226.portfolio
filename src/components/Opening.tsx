import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Vivus, { VivusOptions } from "vivus";
import { ActionCreators } from "../redux/action";
import OpeningSVG from "../images/OpeningAnim.svg";
import "../sass/opening.scss";

const Opening: React.FC<VivusOptions> = () => {
  const svg = useRef("loadAnim");
  const dispatch = useDispatch();
  useEffect(() => {
    const vivusOpening = new Vivus(
      svg.current,
      {
        file: OpeningSVG,
        type: "scenario-sync",
      },
      () => dispatch(ActionCreators.changeState("Weather"))
    );
  }, [svg.current]);

  return (
    <div id="load">
      <div id="loadAnim" />
    </div>
  );
};

export default Opening;
