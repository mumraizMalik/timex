import React from "react";
import "./banner.css";
import { Images } from "../../Services/Images";
function BannerPage() {
  return (
    <div className="banner__parent">
      <div className="banner__container ">
        <div className="banner__containerLeft">
          <img className="banner__containerImage" src={Images.image14} />
        </div>
        <div className="banner__alignment"></div>
        <div className="banner__containerRight">
          <h3>WEEKENDER</h3>
          <h5
            style={{
              fontWeight: "normal",
              margin: "0px",
              marginBottom: "2rem",
              fontSize: "1rem",
            }}
          >
            Switch it up with
            <span style={{ fontWeight: "bold" }}>{` interchangeable `}</span>
            straps.
          </h5>
          <button className=" banner__button" type="button">
            <span>More</span> <span>--</span>
          </button>
        </div>
      </div>
      <div className="banner__container_bottom ">
        <div className="banner__alignment"></div>
        <div className="banner__containerBottomLeft">
          <h3>WEEKENDER</h3>
          <h5
            style={{
              fontWeight: "normal",
              margin: "0px",
              marginBottom: "2rem",
              fontSize: "1rem",
            }}
          >
            Switch it up with
            <span style={{ fontWeight: "bold" }}>{` interchangeable `}</span>
            straps.
          </h5>
          <button className=" banner__button" type="button">
            <span>More</span> <span>--</span>
          </button>
        </div>

        <div className="banner__containerBottomRight">
          <img className="banner__containerImage" src={Images.image15} />
        </div>
      </div>
    </div>
  );
}

export default BannerPage;
