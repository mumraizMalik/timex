import React, { useRef, useState, useEffect } from "react";
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
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateBgColor } from "../../features/BackgroundColor";

import PageScroll, { NestedPageScroll } from "react-page-scroll";
const HomePage = () => {
  const bgColor = useSelector((state) => state.bgColor);
  const heroSectionRef = useRef(null);
  const exploreRef = useRef(null);
  const NewCollectionRef = useRef(null);
  const dispatch = useDispatch();

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
  const [onSelectingProduct, setOnSelectingProduct] = useState({
    show: false,
    id: null,
  });
  const color1 = "#ECEBF0";
  const color2 = "#ffff";
  const expandMenu = () => {
    setIsExpanded("expandedMenu");
    dispatch(updateBgColor(color2));
    hideScrollbar();
  };
  const expandSearch = () => {
    setIsExpanded("expandedSearch");
    dispatch(updateBgColor(color2));
    hideScrollbar();
  };
  const closeExpanded = () => {
    setIsExpanded("");
    dispatch(updateBgColor(color1));
    displayScrollbar();
  };
  const displayScrollbar = () => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  };
  const hideScrollbar = () => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  };
  const onProductClick = ({ id }) => {
    //At the moment no id is null as we dont have data of product
    setOnSelectingProduct({ show: true, id: 0 });
  };
  return (
    <>
      <div className="homepage__position">
        {/* AbsoluteImage */}
        {!onSelectingProduct.show && (
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
        )}
        {/* AbsoluteExpandedMenu */}

        <div className="homepage__sidebar">
          <Sidebar expandMenu={expandMenu} isExpanded={isExpanded} />
        </div>
        <div style={{ flex: 4 }}>
          <div
            style={{
              position: "fixed",
              minWidth: "80%",
              height: "12vh",
            }}
          >
            <Navbar expandSearch={expandSearch} />
          </div>
          {/* <PageScroll
            onScrollEnd={() => console.log("Ended")}
            onScrollCommandCede={() => console.log("Connded")}
            width="80vw"
            height="100vh"
            
          > */}
          <div style={{ marginTop: "12vh" }}></div>
          {!onSelectingProduct.show ? (
            <>
              <HeroSection
                str={""}
                ref={heroSectionRef}
                onClick={moveToExploreSection}
              />

              <Explore
                str={""}
                ref={exploreRef}
                onProductClick={onProductClick}
              />
              <NewCollection
                str={""}
                ref={NewCollectionRef}
                onProductClick={onProductClick}
              />
              <BannerPage />
              <PopularWatches />
              <Filter onProductClick={onProductClick} />
            </>
          ) : (
            <ProductDetail />
          )}
        </div>
      </div>
      <ExpnadedSearch isExpanded={isExpanded} closeExpanded={closeExpanded} />
      <ExpandedMenu isExpanded={isExpanded} closeExpanded={closeExpanded} />
    </>
  );
};

export default HomePage;
