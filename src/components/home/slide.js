import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serviceType } from "../../data";
import "./slide.css";

function Slide() {
  const settings = {
    dots: true,
    infinite: false,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
  };

  return (
    <div className="slide">
      <Slider {...settings}>
        {serviceType.map((item) => (
          <div className="card">
            <div className="card-top">
              <img src={item.linkedImg} alt={item.title} />
              <h1>{item.title}</h1>
            </div>

            <div className="card-buttom">
              <h3>{item.des}</h3>
              {/* <p className="category">{item.category}</p> */}
              <button className="btn-style">MAKE A RESERVATION</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slide;
