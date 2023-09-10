import React from "react";
import { Provider, ProviderProps } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { configureStore } from "@reduxjs/toolkit";
import { createRoot } from "react-dom/client";

import Background from "./components/Background";
import NotFound from "./components/NotFound";
import { Root } from "./components/Root";
import { rootReducer } from "./modules";

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
  <Provider store={store as ProviderProps["store"]}>
    <App />
  </Provider>
);
