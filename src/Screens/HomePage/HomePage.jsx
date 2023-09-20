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
const HomePage = () => {
  const heroSectionRef = useRef(null);
  const exploreRef = useRef(null);
  const NewCollectionRef = useRef(null);

  let updatedColor = "";
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
  const expandMenu = () => {
    console.log(isExpanded);
    if (isExpanded) setIsExpanded("");
    else setIsExpanded("expandedMenu");
  };
  const expandSearch = () => {
    if (isExpanded) setIsExpanded("");
    else setIsExpanded("expandedSearch");
  };

  return (
    <div className="homepage__position">
      {/* AbsoluteImage */}
      <div className="homepage__absoluteContainer">
        <div className="homepage__absoluteInnerContainer">
          <img
            src={Images.image1}
            style={{ width: "50%", height: "50%", objectFit: "contain" }}
          />
        </div>
      </div>
      {/* AbsoluteExpandedMenu */}
      <ExpnadedSearch isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <ExpandedMenu isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

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
      </div>
    </div>
  );
};

export default HomePage;
