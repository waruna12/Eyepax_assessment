import React from "react";
import "./services.css";
import serviceImg from "./../images/services.png";

const Services = () => {
  return (
    <div className="grid-container">
      <div className="grid-item_left">
        <div className="topleft_service">
          <text className="text_style_service">Haircut</text>
          <p className="para_style_service">
            At Prauge we are passionate about making people feel good while
            looking <br /> their best. Attending advanced education allows us to
            keep up with the <br /> t latest trends and provide each guest with
            a unique & customizable result. <br /> t For your convenience,
            Schedule your reservation today!
          </p>
          <button className="btn__style_service">Book now</button>
        </div>
      </div>
      <div className="grid-item_right">
        <img src={serviceImg} alt="service image" />
      </div>
    </div>
  );
};

export default Services;
