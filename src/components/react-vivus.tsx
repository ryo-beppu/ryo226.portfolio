import React, { useEffect, useState } from "react";
import Vivus, { VivusOptions } from "vivus";

interface propsTypes {
  id: string;
  option: VivusOptions;
  className?: string;
  callback?: () => void;
  onAnimationEnd?: () => void;
  Loop?: {
    startDelay: number;
    endPause: number;
    fadeDuration: number;
  };
}

const ReactVivus: React.FC<propsTypes> = (props) => {
  const { id, option, className, callback, onAnimationEnd, Loop } = props;
  const [vivus, setvivus] = useState<Vivus>();

  // const isLoop: React.CSSProperties = () => {
  //   const style = {
  //     // Add a missing property
  //     [`${id}` as any]: `{animation: fade ${Loop?.fadeDuration} linear 0ms infinite}`,
  //   };
  //   if (typeof Loop !== "undefined") {
  //     return style;
  //   }
  // };

  useEffect(() => {
    setvivus(new Vivus(id, option, callback));
  }, []);

  return <div id={id} className={className} onAnimationEnd={onAnimationEnd} />;
};

export default ReactVivus;
