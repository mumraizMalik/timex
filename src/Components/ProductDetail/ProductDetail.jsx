import React, { useState } from "react";
import "./productDetail.css";
import Text from "../../Components/SubComponents/Text/Text";
import Button from "../SubComponents/Button/Button";
import ReactStars from "react-rating-stars-component";
import { Images } from "../../Services/Images";
const ProductDetail = () => {
  //inFuture it will come from APi there will be always 6 images
  const productOtehrImages = [
    Images.image16,
    Images.image17,
    Images.image18,
    Images.image19,
    Images.image20,
    Images.image16,
  ];
  const leftSideImage = [
    productOtehrImages[0],
    productOtehrImages[1],
    productOtehrImages[2],
  ];
  const rightSideImage = [
    productOtehrImages[3],
    productOtehrImages[4],
    productOtehrImages[5],
  ];
  const [selectedImage, setSelectedImage] = useState(productOtehrImages[0]);
  const displaySelectedImage = (url) => {
    setSelectedImage(url);
  };
  return (
    <div className="productDetail__parent">
      <div style={{}} className="productDetail__titleDetail">
        <div className="productDetail__title">
          <Text>The FairField</Text>
          <Text style={{ fontSize: "1.5rem" }}>Chronograph</Text>
        </div>
        <div className="productDetail__price_buttonContainer">
          <Text
            style={{ marginRight: "1rem", fontWeight: "bold", color: "blue" }}
          >
            $108
          </Text>
          <Text style={{ marginRight: "1rem" }}>
            <s>$120</s>
          </Text>
          <Button
            buttonStyle={{
              border: "1px solid black",
              justifySelf: "stretch",
              height: "2rem",
              width: "8rem",
              fontWeight: "bold",
              color: "blue",
            }}
            buttonText={`ADD  +`}
          />
        </div>
      </div>
      <div className="productDetail__secondLine">
        <div className="productDetail__rating">
          <Text>ID:&nbsp;</Text>
          <Text>TW2R27300VQ</Text>
          <>
            <div className="verticalLine"></div>
          </>
          <ReactStars
            count={5}
            onChange={() => {}}
            size={20}
            activeColor="#0000FF"
          />
        </div>
        <div>
          <Text style={{ color: "gray" }}>Availability:&nbsp;</Text>
          <Text style={{ color: "lightgreen", fontWeight: "normal" }}>
            Available
          </Text>
        </div>
      </div>
      <div className="bottomLine"></div>
      <div className="productDetail__imageContainer">
        <div style={{ flex: 0.5 }}></div>
        <div className="subImageContainer">
          {leftSideImage.map((item) => {
            return (
              <div
                className="button"
                onClick={() => displaySelectedImage(item)}
              >
                <img className="productSubImage" src={item} />
              </div>
            );
          })}
        </div>
        <div className="productMainImageContainer">
          <img className="productMainImage" src={selectedImage} />
        </div>
        <div className="subImageContainer">
          {rightSideImage.map((item) => {
            return (
              <div
                className="button"
                onClick={() => displaySelectedImage(item)}
              >
                <img className="productSubImage" src={item} />
              </div>
            );
          })}
        </div>
        <div style={{ flex: 0.5 }}></div>
      </div>
      {/* ProductDescriptionDetails */}

      <div className="productDetail__descriptionDetailsContainer">
        <div className="productDetail__overflowTwoPages">
          <div className="productDetail__descriptionDetails">
            <Text style={{ display: "block", fontSize: "1.5rem" }}>
              DESCRIPTION
            </Text>
            <Text style={{ fontSize: "0.8rem", color: "gray" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              voluptatibus, eos eius dicta ipsam doloribus quae repudiandae odit
              nam, in consequatur nobis adipisci doloremque praesentium! Sunt
              natus enim praesentium eaque?
            </Text>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          {/* fixedRightSideBar */}

          <div
            style={{
              backgroundColor: "red",
            }}
          >
            a
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
