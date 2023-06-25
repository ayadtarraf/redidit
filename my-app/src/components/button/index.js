import React from "react";
import { Button } from "@mui/material";

function MainButton(props) {
  const buttonStyle = {
    boxShadow: "none",
    background: "#FF4500",
    color: "#fff",
    padding: "4px 36px",
    textTransform: "unset",
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "17px",
    minHeight: "32px",
    minWidth: "32px",
    borderRadius: "9999px",
    transition: "none",
    "&:hover": {
      background: "#ff4520",
      boxShadow: "none",
    },
  };

  return (
    <Button
      variant="contained"
      sx={buttonStyle}
      style={props.style}
      fullWidth={props.fullWidth}
    >
      {props.children}
    </Button>
  );
}

export default MainButton;
