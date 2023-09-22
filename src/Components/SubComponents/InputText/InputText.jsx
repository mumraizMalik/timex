import React from "react";
import "./inputText.css";
const InputText = ({
  containerStyle,
  inputStyle,
  buttonExist = true,
  onInput,
  ...otherProps
}) => {
  return (
    <div
      {...otherProps}
      style={{
        display: "flex",
        // border: "0px solid black",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "lightgray",
        paddingBottom: "5px",
        ...containerStyle,
      }}
    >
      <input
        onInput={(e) => onInput(e.target.value)}
        style={{
          flex: 1,
          width: "100%",
          height: "2.2rem",
          ...inputStyle,
        }}
        type="text"
      ></input>
      {buttonExist && (
        <button className="input__SearchButton  button">SEARCH NOW</button>
      )}
    </div>
  );
};

export default InputText;
