import React, { useState } from "react";
import "../navbar.css";
import logo from "./../images/Black.png";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    // TogglerIcon

    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        <img src={logo} alt="header_img"></img>
      </a>
      <ul className={active}>
        <li className="nav__item">
          {/* <a href="#" className="nav_link">
            Home
          </a> */}
          <Link to="/" className="nav_link">
            {" "}
            Home
          </Link>
        </li>
        <li className="nav__item">
          {/* <a href="#" className="nav_link">
            About
          </a> */}
          <Link to="about" className="nav_link">
            {" "}
            About
          </Link>
        </li>
        <li className="nav__item">
          {/* <a href="#" className="nav_link">
            Services
          </a> */}
          <Link to="/services" className="nav_link">
            {" "}
            Services
          </Link>
        </li>
        <li className="nav__item">
          {/* <a href="#" className="nav_link">
            Shop
          </a> */}
          <Link to="/shop" className="nav_link">
            Shop
          </Link>
        </li>
        <li className="nav_item">
          <Link to="/booking" className="nav_link">
            <button className="nav__btn">Book now</button>
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className="nav__toggler">
        <div className="line1"></div>
        <div className="line1"></div>
        <div className="line1"></div>
      </div>
    </nav>
  );
}

export default Navbar;
