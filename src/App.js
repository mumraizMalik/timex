import React from "react";
import HomePage from "./Screens/HomePage/HomePage";

const App = () => {
  console.log("update");
  return (
    <div
      style={
        {
          // transition: "backgroundColor 0.5 linear",
        }
      }
    >
      <HomePage />
    </div>
  );
};

export default App;
