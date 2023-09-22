import React from "react";
import HomePage from "./Screens/HomePage/HomePage";
import { store } from "../src/app/Store";
import { Provider } from "react-redux";
const App = () => {
  console.log("update");
  return (
    <Provider store={store}>
      <div
        style={
          {
            // transition: "backgroundColor 0.5 linear",
          }
        }
      >
        <HomePage />
      </div>
    </Provider>
  );
};

export default App;
