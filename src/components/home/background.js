import React from "react";
import backgroundImage from "../../images/background.png";
import "./background.css";
import { Link } from "react-router-dom";

function Background() {
  return (
    <div className="container">
      <img
        src={backgroundImage}
        alt="background_image"
        className="main_background_img"
      />
      <div className="topleft">
        <text className="text__style">
          Always make room for <br /> beauty in your life
        </text>
        <p className="para__style">
          At Prauge we are passionate about making people feel good while
          looking <br /> their best. Attending advanced education allows us to
          keep up with the <br /> t latest trends and provide each guest with a
          unique & customizable result. <br /> t For your convenience, Schedule
          your reservation today!
        </p>
        <Link to="/booking/Haircut">
          <button className="btn__style">Book now</button>
        </Link>
      </div>
    </div>
  );
}

export default Background;
