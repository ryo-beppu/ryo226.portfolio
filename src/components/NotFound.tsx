import React from "react";
import error from "../images/Error_animated.svg";
import "../sass/notFound.scss";

const NotFound: React.FC = () => {
  return <img src={error} alt="error" id="error" />;
};

export default NotFound;
