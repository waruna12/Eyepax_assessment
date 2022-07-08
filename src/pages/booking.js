import React, { useRef } from "react";
import { useState, useEffect } from "react";
import serviceImg from "./../images/services.png";
import "./booking.css";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import emailjs from "emailjs-com";

const Booking = (props) => {
  const navigate = useNavigate();
  const form = useRef();
  const { service_type } = useParams();

  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);

  const [hidebtn, setHideBtn] = useState(true);
  const [servicetype, setService] = useState(service_type);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleChangefname = (event) => {
    setFname(event.target.value);
  };
  const handleChangelname = (event) => {
    setLname(event.target.value);
  };
  const handleChangedate = (event) => {
    setDate(event.target.value);
  };

  const handleChangeService = (event) => {
    setService(event.target.value);
  };

  function validate() {
    if (email == "") {
      return false;
    }
    if (fname == "") {
      return false;
    }
    if (lname == "") {
      return false;
    }
    if (date == "") {
      return false;
    }
    return true;
  }

  const handleToken = (token) => {
    fetch("/payment/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, amount }),
    })
      .then((res) => res.json())
      .then((_) => {
        window.alert("Transaction Successful.");
        navigate("/confirmation");
        mainEmail();
      })
      .catch((_) => window.alert("Transaction Failed."));
  };

  function sendEmail(e) {
    e.preventDefault();
  }

  function mainEmail() {
    emailjs
      .sendForm(
        "service_i5n3mxr",
        "template_eriboxf",
        form.current,
        "zx5XX-Y7Yzw_AZjPQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Sending email is successful");
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  }

  useEffect(() => {
    if (servicetype == "Haircut") {
      setAmount(50);
    } else if (servicetype == "Makeup") {
      setAmount(150);
    } else {
      setAmount(100);
    }
  }, [servicetype]);

  useEffect(() => {
    if (validate() === true) {
      setHideBtn(false);
    }
  }, [validate]);

  console.log(process.env.REACT_APP_STRIPE_SECRET_KEY);

  return (
    <div className="grid-container_booking">
      <div className="grid-item_left_booking">
        <h3>Booking details </h3>
        <form onSubmit={sendEmail} ref={form}>
          {/* onSubmit={sendEmail}  ref={form}*/}
          <div>
            <select
              id="selectser"
              name="select_service"
              defaultValue={service_type}
              required
              type="text"
              onChange={handleChangeService}
            >
              <option value="Haircut">Haircut</option>
              <option value="Hair Styling">Hair Styling</option>
              <option value="Makeup">Makeup</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name*"
              required
              onChange={handleChangefname}
            />
          </div>
          <div>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name*"
              required
              onChange={handleChangelname}
            />
          </div>
          <div>
            <input
              type="text"
              id="emai"
              name="email"
              placeholder="Email*"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="datetime-local"
              id="date"
              name="data_time"
              onChange={handleChangedate}
              required
            />
          </div>
          <div className="total">
            <h6>Total: USD {amount}</h6>
          </div>
          {/* 
          <div className="btn_booking">
            <button type="submit">Pay Now</button>
          </div> */}
          <div hidden={hidebtn}>
            <StripeCheckout
              // stripeKey={
              //   "pk_test_51LIUX6EspvFf5ldRSQy1urPUcIDDN0ypCUwa5DzJC9XbSPdu72BykZae7kiE1H8lKXA54s0ZGIYJB0P0t2NAcMGe005BYSbzJe" ||
              //   ""
              // }
              stripeKey={process.env.REACT_APP_STRIPE_SECRET_KEY || ""}
              token={handleToken}
              name=""
              panelLabel={`Pay Now`}
              currency="USD"
              amount={amount * 100}
              email={email}
            ></StripeCheckout>
          </div>
        </form>
      </div>
      <div className="grid-item_right_booking">
        <img src={serviceImg} alt="service image" />
      </div>
    </div>
  );
};

export default Booking;

// function sendEmail(e) {
//   e.preventDefault();

//   console.log(e.target);

//   emailjs
//     .sendForm(
//       "service_i5n3mxr",
//       "template_eriboxf",
//       e.target,
//       "zx5XX-Y7Yzw_AZjPQ"
//     )
//     .then(
//       (result) => {
//         console.log(result.text);
//         window.alert("Sending email is successful");
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
//   e.target.reset();
// }
