import React, { useEffect } from "react";
import Vivus, { VivusOptions } from "vivus";

interface propsTypes {
  id: string;
  option: VivusOptions;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: Object;
  callback?: () => void;
  onAnimationEnd?: () => void;
}

function ReactVivus(props: propsTypes) {
  useEffect(() => {
    const { id, option, callback } = props;
    const vivus = new Vivus(id, option, callback);
  }, []);

  const { id, style, className, onAnimationEnd } = props;
  return (
    <div
      id={id}
      className={className}
      style={style}
      onAnimationEnd={onAnimationEnd}
    />
  );
}

export default ReactVivus;
