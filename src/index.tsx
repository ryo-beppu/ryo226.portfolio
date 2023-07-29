import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Root } from "./components/Root";
import NotFound from "./components/NotFound";
import Background from "./components/Background";
import { rootReducer } from "./redux/reducer";

const container = document.getElementById("app")!;

const root = createRoot(container);

const store = configureStore({ reducer: rootReducer });

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ryo226.portfolio" element={<Root />} />
        <Route element={<NotFound />} />
      </Routes>
      <Background />
    </BrowserRouter>
  );
};

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
