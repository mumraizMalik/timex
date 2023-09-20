import React from "react";

const Button = ({ buttonContainerStyle, buttonStyle, buttonText, onClick }) => {
  return (
    <div style={{ ...buttonContainerStyle }}>
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
