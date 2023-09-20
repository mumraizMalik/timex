import React, { forwardRef } from "react";
import "./explore.css";
import ladiesHandWatches from "../../Images/ladiesHandWatches.jpg";
import manWatchesImage from "../../Images/manWatchesImage.png";
import watchesOnSale from "../../Images/watchesOnSale.jpg";
const Explore = ({ str }, ref) => {
  const watchesCategory = [
    { image: `${manWatchesImage}`, title: "FOR MEN" },
    { image: `${ladiesHandWatches}`, title: "FOR WOMEN" },
    { image: `${watchesOnSale}`, title: "WATCHES ON SALE" },
  ];
  const Cards = () => {
    return watchesCategory.map((item) => {
      return (
        <div onClick={() => {}} className="explore__card button">
          <img className="explore__cardImage" src={item.image} />
          <h5>{item.title}</h5>
          <button className="explore__cardButton" type="button">
            Browse --
          </button>
        </div>
      );
    });
  };
  return (
    <div ref={ref} className="explore__parent">
      <div className="explore__mainContainer">
        <p style={{ fontSize: 26, marginBottom: "0.4rem" }}>Explore</p>
        <div className="row spaceBetween">
          <span style={{ fontWeight: "bold", fontSize: 26 }}>Watches</span>
          <a href="" style={{ marginRight: "1vw" }}>
            Shop all
          </a>
        </div>
        <div className="explore__cardParent ">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Explore);
