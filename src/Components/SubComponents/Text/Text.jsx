import React from "react";

const Text = ({ style, children, ...otherProps }) => {
  return (
    <span {...otherProps} style={{ ...style }}>
      {children}
    </span>
  );
};

export default Text;
