import React, { forwardRef } from "react";
import "./heroSection.css";
import { AiOutlinePlus } from "react-icons/ai";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
const HeroSection = ({ onClick }) => {
  return (
    <div className="heroSection__parent">
      <div className="heroSection__title">
        <div className="flex1_2  blue ">{`- 10%`}</div>
        <div className="col flex1 black ">
          <span
          // style={{ fontSize: 30 }}
          >
            The
          </span>
          <span>Fairfield</span>
          <span>Chronograph</span>
        </div>
      </div>
      <div className="heroSection__subTitle">
        <div className="flex1_2  ">
          <span className="bold1">MEN'S </span>WATCHES
        </div>
        <div className="row flex1 black ">
          <span className="blue mr-1vw bold1">$108.00</span>

          <s className="gray">$120.00</s>
        </div>
      </div>
      <div className="row  p-5vh">
        <div className="flex1_2 ">
          <span>1</span>
          <span>{"  ----  "}</span>
          <span>4</span>
        </div>
        <div className="row flex1 black ">
          <button className="heroSection__buttonAdd blue bold1">
            <span>ADD</span>
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <div className="row py-10vh">
        <div className="flex1_2 ">
          <button onClick={onClick} className="button" type="button">
            <IoIosArrowDown className="heroSection__ArrowIcons" />
          </button>
        </div>

        <div className="row flex1 black ">
          <button
            style={{
              marginLeft: "-20px",
            }}
            type="button"
            className="button"
          >
            <IoIosArrowBack className="heroSection__ArrowIcons" />
          </button>
          <button type="button" className="button">
            <IoIosArrowForward className="heroSection__ArrowIcons" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(HeroSection);
