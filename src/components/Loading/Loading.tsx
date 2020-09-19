import "../../sass/loading.scss";
import React, { useEffect, useRef } from "react";
import { Typography } from "@material-ui/core";
import Vivus from "vivus";
import { useDispatch } from "react-redux";
import { ReactSVG } from "react-svg";
import { Transition } from "react-transition-group";
import LoadingSVG from "../../images/LoadingAnim.svg";
import { ActionCreators, getWeatherData } from "../../redux/action";

// const LOADING_STYLE  = {

// }

const Opening: React.FC = () => {
  const dispatch = useDispatch();
  const css = document.styleSheets.item(0);
  useEffect(() => {
    dispatch(getWeatherData());
  }, [dispatch]);

  const el = document.querySelector("#loadingNow");
  const endAnim = () => {
    if (!el) return;
    el.addEventListener("animationend", () => {
      // transition終了時の処理
      alert("animationend");
    });
  };

  // useEffect(() => {
  //   const vivusOpening = new Vivus(
  //     svg.current,
  //     {
  //       file: OpeningSVG,
  //       type: "scenario-sync",
  //     },
  //     () => {
  //       if (!css) return;
  //       css.insertRule(".cls-1{animation: strokeAnimation ease-in-out 1s;}", 0);
  //     }
  //   );
  // }, [svg.current]);

  return (
    <div id="load">
      <Typography id="completeText">Complete</Typography>
      <ReactSVG id="loadAnim" src={LoadingSVG} />
      <Transition in={LoadingSVG} />
      {/* <img
        id="loadAnim"
        src={LoadingSVG}
        alt="loadAnim"
        // onAnimationEnd={() => dispatch(ActionCreators.changeState("Weather"))}
      /> */}
    </div>
  );
};

export default Opening;
