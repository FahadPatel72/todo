import React from "react";
import "./footer.css";

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    // top: "1vh",
    width: "100%",
  };
  return (
    <footer
      className="bg-dark text-light text-center my-3 py-3"
      style={footerStyle}
    >
      copyright &copy; My todosList.com
    </footer>
  );
};
