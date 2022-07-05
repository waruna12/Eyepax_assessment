import React from "react";
import serviceImg from "./../images/services.png";

const booking = () => {
  return (
    <div className="grid-container">
      <div className="grid-item_left"></div>
      <div className="grid-item_right">
        <img src={serviceImg} alt="service image" />
      </div>
    </div>
  );
};

export default booking;
