import React from "react";

function Img(props) {
  const { src, alt, style } = props;

  return (
    <img
      src={src}
      alt={alt}
      style={{ ...style, width: "100%", height: "100%" }}
    />
  );
}

export default Img;
