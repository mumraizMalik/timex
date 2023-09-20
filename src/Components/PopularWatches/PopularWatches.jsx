import React from "react";
import "./popularWatches.css";
import MapProducts from "../GeneraicComponents/MapProducts";
import { collectionNames } from "../../Services/data";
const PopularWatches = () => {
  return (
    <div className="popularWatches__parent">
      <span style={{ fontWeight: "normal" }} className="popularWatches__title">
        Popular{" "}
      </span>
      <div className="centerTopContainer">
        <li className="popularWatches__title">watches</li>
        <li>{`1 ---- 4`}</li>
        <li>SHOP ALL</li>
      </div>
      <div className="popularWatches__products">
        <MapProducts data={collectionNames[1]} />
      </div>
    </div>
  );
};

export default PopularWatches;
