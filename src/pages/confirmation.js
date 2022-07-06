import React from "react";
import "./confirmation.css";
import teleIcon from "../images/tele_icon.png";

function comfirmation() {
  return (
    <div className="confimation_container">
      <div className="topcenter_confirmation">
        <text className="confirmation__text">
          Thank you for your reservation!
        </text>
        <p className="aboutus_para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo
          <br /> consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <h6> For further information contact us</h6>
        <img src={teleIcon} alt="tele icon"></img>
        <h6 className="email_tele">(487) 1070 1087</h6>
        <h6 className="email_tele">sales.salonprauge@sp.com</h6>
      </div>
    </div>
  );
}

export default comfirmation;
