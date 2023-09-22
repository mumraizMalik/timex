import React, { useEffect, useMemo, useRef, useState } from "react";
import "./filter.css";
import Text from "../../Components/SubComponents/Text/Text";
import DropDown from "../../Components/SubComponents/Dropdown/dropDown";
import ReactSlider from "react-slider";
import Button from "../SubComponents/Button/Button";
const Filter = () => {
  const [value, setValue] = useState(null);
  const [sliderValue, setSliderValue] = useState({ left: 0, right: 100 });
  const [selectedData, setSelectedData] = useState({
    price: { left: null, right: null },
    color: "",
    caseDiameter: [],
    attachement: [],
    movement: [],
    features: [],
  });

  const option = [
    { value: "1", label: "item1" },
    { value: "2", label: "item2" },
    { value: "3", label: "item3" },
  ];
  const colors = [
    "black",
    "blue",
    "aliceblue",
    "aquamarine",
    "blueviolet",
    "yellowgreen",
    "violet",
    "tomato",
    "cadetblue",
    "slategray",
  ];

  const filterUiData = [
    {
      id: 0,
      title: "Case Diameter",
      buttons: ["FULL SIZE: 400MM+", "MID SIZE: 30-39MM"],
    },
    {
      id: 1,
      title: "Attachement",
      buttons: ["STRAPS", "METAL BRACELETS"],
    },
    {
      id: 2,
      title: "Movement",
      buttons: ["QUARTZ ANALOG", "DIGITAL", "ANALOG/DIGITAL COMBO"],
    },
    {
      id: 3,
      title: "Features",
      buttons: [
        "ALARMS",
        "COMPASS",
        "COUNTDOWN TIMER",
        "DATE",
        "INDIGLO",
        "SWAROVSKI CRYSTAL",
        "TIMEZONE",
      ],
    },
  ];
  const checkSelected = useMemo(
    () => (id, index) => {
      if (0 == id) return selectedData?.caseDiameter.includes(index);
      else if (1 == id) return selectedData?.attachement.includes(index);
      else if (2 == id) return selectedData?.movement.includes(index);
      else if (3 == id) return selectedData?.features.includes(index);
    },
    []
  );
  const updateSelectedButon = useMemo(
    () => (id, index) => {
      const cd = { ...selectedData };
      if (0 == id) {
        if (!selectedData.caseDiameter.includes(index)) {
          cd.caseDiameter.push(index);
          setSelectedData(cd);
        } else {
          cd.caseDiameter.splice(
            cd.caseDiameter.findIndex((item) => item == index),
            1
          );
        }
        setSelectedData(cd);
      } else if (1 == id) {
        if (!selectedData.attachement.includes(index)) {
          cd.attachement.push(index);
          setSelectedData(cd);
        } else {
          cd.attachement.splice(
            cd.attachement.findIndex((item) => item == index),
            1
          );
        }
        setSelectedData(cd);
      } else if (2 == id) {
        if (!selectedData.movement.includes(index)) {
          cd.movement.push(index);
          setSelectedData(cd);
        } else {
          cd.movement.splice(
            cd.movement.findIndex((item) => item == index),
            1
          );
        }
        setSelectedData(cd);
      } else if (3 == id) {
        if (!selectedData.features.includes(index)) {
          cd.features.push(index);
          setSelectedData(cd);
        } else {
          cd.features.splice(
            cd.features.findIndex((item) => item == index),
            1
          );
        }
        setSelectedData(cd);
      }
    },
    []
  );

  return (
    <div style={{}} className="filter__parent">
      <Text style={{ fontSize: "2rem", fontWeight: "lighter" }}>Men's</Text>
      <div className="filter__topRow ">
        <Text style={{ fontSize: "2rem", fontWeight: "bold" }}>Watches</Text>
        <div className="filter__topRow__right">
          <Text
            style={{
              fontSize: "1rem",
              fontWeight: "lighter",
              marginRight: "1rem",
            }}
          >
            Items on page
          </Text>
          <DropDown
            dropdownContainerStyle={{ marginRight: "1rem" }}
            setValue={setValue}
            value={value}
            options={option}
          ></DropDown>
        </div>
      </div>
      <div className="filter__sliderItemContainer ">
        <Text style={{ marginRight: "5rem" }}>Price</Text>
        <Text style={{ marginRight: "3rem" }}>${sliderValue.left}</Text>
        <div className="filter__slider">
          <ReactSlider
            className="slider"
            thumbClassName="thumb"
            //   trackClassName="track"
            defaultValue={[0, 100]}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            // ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => (
              <div {...props}>
                {/* {state.valueNow} */}
                <div className="thumbCenterCircule"></div>
              </div>
            )}
            pearling
            minDistance={1}
            withTracks={true}
            onChange={(val) => {
              setSliderValue({ left: val[0], right: val[1] });
            }}
            renderTrack={(props, state) => (
              <div className="trackParent">
                <div
                  style={{
                    marginLeft: `${state.value[0]}%`,
                    marginRight: `${100 - state.value[1]}%`,
                  }}
                  className="trackParent__innerLine"
                ></div>
              </div>
            )}
          />
        </div>
        <Text style={{ marginLeft: "3rem" }}>{sliderValue.right}</Text>
      </div>
      <div className="filter__bottomLine"></div>
      <div className="filter__colorParentContainer">
        <Text style={{ marginRight: "5rem" }}>Color</Text>
        <div className="filter__colorContainer">
          {colors.map((color) => {
            return (
              <div
                style={{ backgroundColor: color }}
                className="filter__colorButton"
              ></div>
            );
          })}
        </div>
      </div>
      <div className="filter__bottomLine"></div>
      <div>
        {filterUiData.map((item) => {
          return (
            <>
              <div style={{}} className="filter__colorParentContainer">
                <Text style={{ marginRight: "5rem" }}>{item.title}</Text>
                {item.buttons.map((button, index) => {
                  return (
                    <Button
                      buttonContainerStyle={{ marginRight: "2rem" }}
                      buttonStyle={{
                        border: "1px solid gray",
                        height: "2rem",
                        fontWeight: "bold",
                        borderColor: checkSelected(item.id, index)
                          ? "blue"
                          : "black",
                        color: checkSelected(item.id, index) ? "blue" : "black",
                      }}
                      onClick={() => {
                        updateSelectedButon(item.id, index);
                      }}
                      buttonText={button}
                    />
                  );
                })}
              </div>
              <div className="filter__bottomLine"></div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
