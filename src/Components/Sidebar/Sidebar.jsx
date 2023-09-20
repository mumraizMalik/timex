import React, { useState } from "react";
import "./sidebar.css";
import {
  AiOutlineEllipsis,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
const Sidebar = ({ expandMenu, isExpanded }) => {
  console.log("SideBarPage", isExpanded);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = () => {
    const items = ["Mens", "womens", "kids", "Sale"];
    return items.map((item) => {
      return <li className="mb-1vh">{item}</li>;
    });
  };
  const showHideMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div onClick={showHideMenu} className="button sidebar__menu">
        <GiHamburgerMenu className="sidebar__menuIcon tp-6vh" />
      </div>
      <div
        style={{ display: menuOpen ? "block" : "none" }}
        className="sidebar__parent"
      >
        <div className="sidebar__upperContainer">
          <div className="textHeading tp-6vh">TIMEX</div>
          {isExpanded != "expandedMenu" && (
            <>
              <ul className="tp-5vh">{menuItems()}</ul>
              <button onClick={expandMenu} type="button" className="button">
                <AiOutlineEllipsis className="sidebar__upperContainer__font tp-5vh " />
              </button>
            </>
          )}
        </div>
        <div className="sidebar__lowerContainer">
          <div className="sidebar__lowerContainer__circule">
            <FaFacebookF className="white sidebar__lowerContainer__font" />
          </div>
          <div className="sidebar__lowerContainer__circule">
            <AiOutlineTwitter className="white sidebar__lowerContainer__font" />
          </div>
          <div className="sidebar__lowerContainer__circule">
            <AiOutlineInstagram className="white sidebar__lowerContainer__font" />
          </div>
          <div className="sidebar__lowerContainer__circule">
            <FaPinterestP className="white sidebar__lowerContainer__font" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
