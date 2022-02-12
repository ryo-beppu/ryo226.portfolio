import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reducer from "./redux/reducer";
import Root from "./components/Root";
import "./sass/index.scss";
import NotFound from "./components/NotFound";
import Background from "./components/Background";

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare let window: ExtendedWindow;

const logger = createLogger({
  diff: true,
  collapsed: true,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middleware = [];
if (process.env.NODE_ENV === "development") {
  middleware = [thunk, logger];
} else {
  middleware = [thunk];
}

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/ryo226.portfolio" component={Root} />
        <Route component={NotFound} />
      </Switch>
      <Background />
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
