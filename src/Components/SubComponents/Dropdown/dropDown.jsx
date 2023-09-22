import React, { useState } from "react";
import Text from "../../SubComponents/Text/Text";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./dropdown.css";
import Button from "../Button/Button";

const DropDown = ({
  dropdownContainerStyle,
  options,
  textStle,
  iconStyle,
  iconSize = 35,
  iconColor = "grey",
  value = null,
  setValue,
  placeholder = "Select",
  ...otherProps
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        width: "70px",
        position: "relative",
        border: "1px Solid black",
        height: "2rem",
        padding: "0.2rem 0.2rem 0.2rem 0.4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ...dropdownContainerStyle,
      }}
    >
      <Text style={{ flex: 1, ...textStle }}>
        {value ? value : placeholder}
      </Text>
      <RiArrowDropDownLine
        style={{ ...iconStyle }}
        size={iconSize}
        color={iconColor}
        className="button"
      />
      {open && (
        <div
          style={{ border: "1px solid lightgray" }}
          className="dropdown__itemContainer"
        >
          {options?.map((item, index) => {
            return (
              <Button
                key={index}
                buttonStyle={{ width: "100%" }}
                className="dropDown__button"
                buttonContainerStyle={{}}
                buttonText={item.label}
                onClick={() => setValue(item.value)}
              ></Button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
