import React, { useState, useEffect, useRef } from "react";
import HomePage from "./Screens/HomePage/HomePage";
import { store } from "../src/app/Store";
import { Provider } from "react-redux";
import PageScroll from "react-page-scroll";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <HomePage />
      </div>
    </Provider>
  );
};

export default App;
