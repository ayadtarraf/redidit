import React from "react";
import { Button } from "@mui/material";

function SecondaryButton(props) {
  const buttonStyle = {
    boxShadow: "none",
    background: "#f6f7f8",
    color: "#0f1a1c",
    padding: "4px 18px",
    textTransform: "unset",
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "17px",
    minHeight: "32px",
    minWidth: "32px",
    borderRadius: "9999px",
    transition: "none",
    "&:hover": {
      background: "#dae0e6",
      boxShadow: "none",
    },
  };

  return (
    <Button variant="contained" sx={buttonStyle}>
      {props.children}
    </Button>
  );
}

export default SecondaryButton;