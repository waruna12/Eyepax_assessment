import React from "react";
import serviceImg from "./../images/services.png";
import "./booking.css";
import { Link, useParams, useLocation } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const Booking = (props) => {
  // const stateParamVal = useLocation().state;

  const { service_type } = useParams();

  console.log("props parameter value " + service_type);
  // console.log("props state value " + stateParamVal);

  var bodyFormData = new FormData();

  const onSubmitForm = async (
    values,
    { resetForm, setErrors, setFieldValue }
  ) => {
    bodyFormData.append("fname", values.fname);

    try {
      console.log("success");
      // setFieldValue()
    } catch (err) {
      console.log("false");
    }
  };

  return (
    <div className="grid-container_booking">
      <div className="grid-item_left_booking">
        <h3>Booking details </h3>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object().shape({
            select_service: Yup.string().required("Required"),
            fname: Yup.string().required("Required"),
            lname: Yup.string().required("Required"),
            email: Yup.string().required("Required"),
          })}
          onSubmit={onSubmitForm}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            submitForm,
            /* and other goodies */
          }) => (
            <form>
              <div>
                <div>
                  <select
                    id="selectser"
                    name="select_service"
                    defaultValue={service_type}
                  >
                    <option value="Haircut">Haircut</option>
                    <option value="Hair Styling">Hair Styling</option>
                    <option value="Makeup">Makeup</option>
                  </select>
                </div>
                <div>{touched.select_service && errors.select_service}</div>
                <div>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="First Name*"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fname}
                  />
                </div>
                <div style={{ color: "red", fontSize: "12px" }}>
                  {touched.fname && errors.fname}
                </div>
                <div>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Last Name*"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lname}
                  />
                </div>
                <div style={{ color: "red", fontSize: "12px" }}>
                  {touched.lname && errors.lname}
                </div>
                <div>
                  <input
                    type="text"
                    id="emai"
                    name="email"
                    placeholder="Email*"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                <div style={{ color: "red", fontSize: "12px" }}>
                  {touched.email && errors.email}
                </div>
                <div>
                  <input type="datetime-local" id="date" name="date" />
                </div>
              </div>
              <div className="total">
                <h6>Total: USD 25.00</h6>
              </div>

              <div className="btn_booking">
                {/* <Link to="/confirmation"> */}
                <button onClick={submitForm}>Pay Now</button>
                {/* </Link> */}
              </div>
            </form>
          )}
        </Formik>
      </div>
      <div className="grid-item_right_booking">
        <img src={serviceImg} alt="service image" />
      </div>
    </div>
  );
};

export default Booking;
