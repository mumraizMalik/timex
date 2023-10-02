import React, { forwardRef, useState } from "react";
import "./newCollection.css";
import image from "../../Images/threeWatches.png";
import MapProducts from "../GeneraicComponents/MapProducts";
import { collectionNames } from "../../Services/data";
const NewCollection = ({ str, onProductClick }, ref) => {
  const [activeColorId, setActiveColorId] = useState(0);
  return (
    <>
      <div ref={ref} className="newCollection__parent">
        <div className="newCollection__mainContainer">
          <p style={{ fontSize: 24, margin: "0px" }}>New</p>
          <div style={{ marginBottom: "1rem" }} className="row spaceBetween">
            <span style={{ fontSize: 24, fontWeight: "bold" }}>
              Collections
            </span>
            <a href="" style={{ marginRight: "1vw" }}>
              Discover all collections
            </a>
          </div>
          <div className="newCollection__collectionNameContainer">
            {collectionNames.map((item) => {
              return (
                <div
                  style={{
                    borderColor: activeColorId == item.id ? "blue" : "black",
                  }}
                  key={item.id}
                  onClick={() => {
                    setActiveColorId(item.id);
                  }}
                  className="newCollection__collectionName "
                >
                  {item.name}
                </div>
              );
            })}
          </div>
          <>
            <img
              src={image}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "20vh",
                marginTop: "2rem",
              }}
            />
          </>
          <div className="newCollection__bottomContainer ">
            <h4 style={{ flex: 1 }}>{collectionNames[activeColorId].name}</h4>
            <p style={{ flex: 1 }}>
              {collectionNames[activeColorId].description}
            </p>
            <span
              style={{ flex: 1, justifyContent: "flex-end", display: "flex" }}
            >
              <button className="newCollection__button">BROWSE --</button>
            </span>
          </div>
          <div className="newCollection__bottomItem">
            <span style={{ color: "blue" }}>{activeColorId + 1}</span> --- 4
          </div>
        </div>
        <div className="newCollection__ByCategory">
          <MapProducts
            data={collectionNames[activeColorId]}
            onClick={onProductClick}
          />
        </div>
      </div>
    </>
  );
};
export default forwardRef(NewCollection);
