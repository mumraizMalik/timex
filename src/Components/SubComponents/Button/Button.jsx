import React from "react";

const Button = ({
  buttonContainerStyle,
  buttonStyle,
  buttonText,
  onClick,
  ...otherProps
}) => {
  return (
    <div {...otherProps} style={{ ...buttonContainerStyle }}>
      <button
        onClick={onClick}
        type="button"
        className="button"
        style={{ ...buttonStyle }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
