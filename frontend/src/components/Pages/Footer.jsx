import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="socialMediaContainer">
        <div className="socialMediaTitle"> Our social media </div>
        <div className="socialMediaButtonsContainer">
          <button className="socialButtons">Insta</button>
          <button className="socialButtons">Reddit</button>
          <button className="socialButtons">Paypal</button>
          <NavLink to="/">
            <button className="socialButtons">Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
