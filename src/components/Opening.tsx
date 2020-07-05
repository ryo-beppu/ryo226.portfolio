import React, { useEffect } from "react";
import Vivus, { VivusOptions } from "vivus";
import svg from "../images/OpeningAnim.svg";
import "../sass/opening.scss";

const Opening: React.FC<VivusOptions> = () => {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new Vivus("loadAnim", { file: svg, type: "scenario-sync" });
  }, []);

  return (
    <div id="load">
      <div id="loadAnim" />
    </div>
  );
};

export default Opening;
