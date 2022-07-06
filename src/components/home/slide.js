import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serviceType } from "../../data";
import "./slide.css";
import { Link } from "react-router-dom";

function Slide(props) {
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
      <h1 className="slide_header">Services</h1>
      <Slider {...settings}>
        {serviceType.map((item) => (
          <div className="card">
            <div className="card-top">
              <img src={item.linkedImg} alt={item.title} />
              <h1>{item.title}</h1>
            </div>

            <div className="card-buttom">
              <h3>{item.des}</h3>
              <Link
                to={{
                  pathname: `/services/${item.title}`,
                  state: { stateParam: true },
                }}
              >
                <button className="btn-style">MAKE A RESERVATION</button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slide;
