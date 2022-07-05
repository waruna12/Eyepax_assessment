import React from "react";
import backgroundImage from "../../images/background.png";
import "./aboutUs.css";

function aboutUs() {
  return (
    <div className="aboutus_container">
      <img src={backgroundImage} alt="aboutus_back_img" />
      <div className="topcenter">
        <text className="aboutus__text">About us</text>
        <p className="aboutus_para">
          Named “Best Salon” by Main Line Magazine & The Philadelphia Inquirer,
          Prauge Salon & Style Bar has been
          <br /> committed to “raising the bar ” since opening our doors in
          2014. Our mission is simple, give every guest an excellent <br />{" "}
          experience by providing them with a warm, inviting culture & results
          that surpass expectations. <br />
          At Privé we are passionate about making people feel good while looking
          their best. Attending advanced education <br /> allows us to keep up
          with the latest trends and provide each guest with a unique &
          customizable result. For your <br /> convenience, we are open 7 days a
          week & offers online booking 24 hours a day. Schedule your reservation
          today!
        </p>
        <p className="gold_text">Schedule your reservation today!</p>
      </div>
    </div>
  );
}

export default aboutUs;
