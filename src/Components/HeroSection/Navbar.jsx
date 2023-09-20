// Moved from heroSection to separate file
import React from "react";
import { BiSearch } from "react-icons/bi";
const Navbar = ({ expandSearch }) => {
  return (
    <div
      // style={{ backgroundColor: "#ecebf0" }}
      className="heroSection__topBar tp-6vh"
    >
      <div className="heroSection__topBar_left">
        <span className="heroSection__topBar_leftMenuMargin"></span>
        <span className="heroSection__topBar__text">
          Free shipping on orders
        </span>
        <span className="heroSection__topBar__text blue ">$ 75+- </span>
      </div>

      <div className="heroSection__topBar__right">
        <div className="row flex1">
          <div className="heroSection__topBar__circule">2</div>
          <div className="heroSection__topBar__priceText">257,00 $</div>
        </div>
        <div className="heroSection__topBar__account">
          <div className="">MY ACCOUNT</div>
          <div
            style={{
              backgroundColor: "lightgray",
              width: "1px",
              height: "-webkit-fill-available",
            }}
          ></div>
          <BiSearch onClick={expandSearch} className="button" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
