import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Root from "./Root";

const Portfolio: React.FC = () => {
  return (
    <Router>
      <Route exact path="/ryo226.portfolio" component={Root} />
    </Router>
  );
};

export default Portfolio;
