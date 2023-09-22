import React, { useRef, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Navbar from "../../Components/HeroSection/Navbar";
import { Images } from "../../Services/Images";
import "./homePage.css";
import Explore from "../../Components/Explore/Explore";
import NewCollection from "../../Components/NewCollection/NewCollection";
import BannerPage from "../../Components/BannerPage/BannerPage";
import PopularWatches from "../../Components/PopularWatches/PopularWatches";
import ExpandedMenu from "../../Components/ExpandedMenu/ExpandedMenu";
import ExpnadedSearch from "../../Components/ExpnadedSearch/ExpandedSearch";
import Filter from "../../Components/Filter/Filter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateBgColor } from "../../features/BackgroundColor";
const HomePage = () => {
  const bgColor = useSelector((state) => state.bgColor);
  const heroSectionRef = useRef(null);
  const exploreRef = useRef(null);
  const NewCollectionRef = useRef(null);
  const dispatch = useDispatch();
  console.log("GBCOlor", bgColor);
  const moveToHeroSection = () => {
    heroSectionRef.current?.scrollIntoView();
  };
  const moveToExploreSection = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const moveToCollection = () => {
    NewCollectionRef.current?.scrollIntoView();
  };
  const [isExpanded, setIsExpanded] = useState("");
  const color1 = "#ECEBF0";
  const color2 = "#ffff";
  const expandMenu = () => {
    setIsExpanded("expandedMenu");
    dispatch(updateBgColor(color2));
  };
  const expandSearch = () => {
    setIsExpanded("expandedSearch");
    dispatch(updateBgColor(color2));
  };
  const closeExpanded = () => {
    setIsExpanded("");
    dispatch(updateBgColor(color1));
  };
  return (
    <div className="homepage__position">
      {/* AbsoluteImage */}
      <div
        style={{
          backgroundColor: bgColor,
          transition: "all 0.5s linear",
          WebkitTransition: "all .5s linear",
          MozTransition: "all .5s linear",
          transitionDelay: "0.5s",
        }}
        className="homepage__absoluteContainer"
      >
        <div className="homepage__absoluteInnerContainer">
          <img
            src={Images.image1}
            style={{ width: "50%", height: "50%", objectFit: "contain" }}
          />
        </div>
      </div>
      {/* AbsoluteExpandedMenu */}
      <ExpnadedSearch isExpanded={isExpanded} closeExpanded={closeExpanded} />
      <ExpandedMenu isExpanded={isExpanded} closeExpanded={closeExpanded} />

      <div className="homepage__sidebar ">
        <Sidebar expandMenu={expandMenu} isExpanded={isExpanded} />
      </div>
      <div style={{ flex: 4, position: "relative" }}>
        <div
          style={{
            position: "fixed",
            minWidth: "80%",
            height: "12vh",
          }}
        >
          <Navbar expandSearch={expandSearch} />
        </div>

        <div style={{ marginTop: "12vh" }}></div>
        <HeroSection
          str={""}
          ref={heroSectionRef}
          onClick={moveToExploreSection}
        />
        <Explore str={""} ref={exploreRef} />
        <NewCollection str={""} ref={NewCollectionRef} />
        <BannerPage />
        <PopularWatches />
        <Filter />
      </div>
    </div>
  );
};

export default HomePage;
