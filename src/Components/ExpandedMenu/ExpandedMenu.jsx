import React, { useState } from "react";
import "./expandedMenu.css";
import { RxCross1 } from "react-icons/rx";
import { watchesData } from "../../Services/watchMenuData";
import BannerPage from "../BannerPage/BannerPage";
const ExpandedMenu = ({ isExpanded, setIsExpanded }) => {
  console.log("MenuPAGE", isExpanded);
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <div
      style={{
        translate: isExpanded == "expandedMenu" ? "0vw" : "80vw",
      }}
      className="expandedMenu_parent"
    >
      <div className="expandedMenu__pageSpaces">
        <div className="expandedMenu__topIcon">
          <button
            onClick={() => setIsExpanded("")}
            className="button"
            type="button"
          >
            <RxCross1 size={20} />
          </button>
        </div>
        <div className="expandedMenu__mainSection">
          <div className="expandedMenu__categoryTitle">
            {watchesData.map((item, index) => {
              return (
                <div style={{ display: "flex" }}>
                  <button
                    style={{ color: selectedItem === index ? "blue" : "black" }}
                    onClick={() => {
                      setSelectedItem(index);
                    }}
                    className="button expandedMenu__categoryTitleButton"
                  >
                    {item.category}
                  </button>
                  {selectedItem === index && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flex: "1",
                      }}
                    >
                      <div
                        style={{
                          height: "2px",
                          width: "20px",
                          backgroundColor: "blue",
                          marginBottom: "0.8rem",
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="expandedMenu__subCategory">
            <div className="expandedMenu__subItem bold1">Trending</div>
            {watchesData[selectedItem].trending.map((item) => {
              return (
                <button className="expandedMenu__subItem button">{item}</button>
              );
            })}
          </div>
          <div className="expandedMenu__subCategory">
            <div className="expandedMenu__subItem bold1">Watch Types</div>
            {watchesData[selectedItem].watchType.map((item) => {
              return (
                <button className="expandedMenu__subItem button">{item}</button>
              );
            })}
          </div>
          <div className="expandedMenu__subCategory">
            <div className="expandedMenu__subItem bold1">By Collection</div>
            {watchesData[selectedItem].byCollection.map((item) => {
              return (
                <button className="expandedMenu__subItem button">{item}</button>
              );
            })}
          </div>
        </div>
        <div className="expandedMenu__bottomSection">
          <div style={{ flex: 2 }}> </div>
          <div
            style={{
              flex: 3,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedMenu;
