import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Vivus from "vivus";
// import ReactVivus from "react-vivus";
import { Grid } from "@material-ui/core";
import ReactVivus from "../react-vivus";
import { WeatherProps, WeatherProp } from "../Common/CommonInterface";
import item from "../../images/Item.svg";
import center from "../../images/Center.svg";
import "../../sass/status.scss";

const Status: React.FC = () => {
  const css = document.styleSheets.item(0)!;
  const weatherApiResult = useSelector<WeatherProps, WeatherProp>(
    (state) => state.payload
  );
  const [sunriseData, setSunriseData] = useState("");
  const [sunsetData, setSunsetData] = useState("");

  useEffect(() => {
    if (
      typeof weatherApiResult.sys?.sunrise !== "undefined" &&
      typeof weatherApiResult.sys?.sunset !== "undefined"
    ) {
      const sunriseTime = new Date(weatherApiResult.sys?.sunrise * 1000);
      const sunsetTime = new Date(weatherApiResult.sys?.sunset * 1000);
      setSunriseData(sunriseTime.toLocaleTimeString());
      setSunsetData(sunsetTime.toLocaleTimeString());
    }
  }, []);

  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <ReactVivus
            id="center"
            option={{
              file: center,
              type: "delayed",
              start: "autostart",
              duration: 360,
              animTimingFunction: Vivus.EASE,
            }}
            callback={() =>
              css.insertRule(
                "#center{animation: strokeAnimation ease-in-out 1s;}"
              )
            }
          />
        </Grid>
      </Grid>
      <Grid container justify="space-around">
        <Grid item>
          <ReactVivus id="item1" option={{ file: item }} />
          <p>CPG : OK</p>
          <p>NEURAL LINGUAGE : OK</p>
          <p>ION CONCENTRATION : OK</p>
          <p>META MOTOR AREA PARAMETERS : OK</p>
          <p>REACTOR : OK</p>
          <p>POWER FLOW : OK</p>
          <ReactVivus id="item2" option={{ file: item }} />
        </Grid>
        <Grid item>
          <ReactVivus id="item3" option={{ file: item }} />
          <p>{`VISIBLITY : ${weatherApiResult.visibility}`}</p>
          <p>{`WEATHER : ${weatherApiResult.weather[0].main}`}</p>
          <p>{`AMBIENT TEMPERATURE : ${weatherApiResult.main.temp}`}</p>
          <p>{`WIND SPEED : ${weatherApiResult.wind.speed}`}</p>
          <p>{`WIND DEG : ${weatherApiResult.wind.deg}`}</p>
          <p>{`CLOUDS ALL : ${weatherApiResult.clouds.all}`}</p>
          <p>{`SUNRISE : ${sunriseData}`}</p>
          <p>{`SUNSET : ${sunsetData}`}</p>
          <ReactVivus id="item4" option={{ file: item }} />
        </Grid>
      </Grid>
    </>
  );
};

export default Status;
