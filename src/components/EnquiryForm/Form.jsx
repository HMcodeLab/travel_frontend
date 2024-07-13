"use client";

import { useState } from "react";
import "./EnquiryForm.css";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { validateEmail } from "@/helpers/validation";
import Thankyou from "../thankyou/thankyou";

function FormFields({ setEnquiryModal }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    starting: "",
    destination: "",
    total_no_travelers: "",
    message: "",
  });

  let [error, setError] = useState({});

  let handelErrors = () => {
    let { name, email, mobile, starting, destination, total_no_travelers } = user;
    let valid = true;
    let errorFields = {};
    if (!name) {
      valid = false;
      errorFields.name = 'Name is required';
    }
    if (!email) {
      valid = false;
      errorFields.email = 'Email is required';
    }
    if (!validateEmail(email)) {
      valid = false;
      errorFields.email = "Enter valid email";
    }
    if (!mobile) {
      valid = false;
      errorFields.mobile = 'Phone no. is required';
    }
    if (String(mobile).length !== 10) {
      valid = false;
      errorFields.mobile = "Phone no. should be of 10 digits";
    }

    if (!starting) {
      valid = false;
      errorFields.starting = 'Starting point is required';
    }
    if (!destination) {
      valid = false;
      errorFields.destination = 'Destination is required';
    }
    if (!total_no_travelers) {
      valid = false;
      errorFields.total_no_travelers = 'Number of travelers is required';
    }
    setError(errorFields);
    return valid;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setError({ ...error, [name]: '' });
  };

  const handleSendQuery = async () => {
    console.log(user);
    if (handelErrors()) {
      let formData = new FormData();
      formData.append('name', user.name);
      formData.append('email', user.email);
      formData.append('mobile', user.mobile);
      formData.append('starting', user.starting);
      formData.append('destination', user.destination);
      formData.append('total_no_travelers', user.total_no_travelers);
      formData.append('message', user.message);
      formData.append('adminEamil', "sales@eligocs.com");

      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_URL}/apis/query/savequery`,
          formData
        );
        console.log(res);

        if (res.status) {
          toast.success(<Thankyou name={user.name} />);
          setUser({
            name: "",
            email: "",
            mobile: "",
            starting: "",
            destination: "",
            total_no_travelers: "",
            message: "",
          });
          setTimeout(() => {
            setEnquiryModal(false);
          }, 1000);
        }
      } catch (error) {
        console.log(error);
        toast.success("Error: Query not sent");
      }
    }
  };

  return (
    <>
      <div className="enquiry_form_outer">
        <div className="form-field">
          <label>Name</label>
          <input
          placeholder="Enter your name"
            type="text"
            value={user.name}
            name="name"
            onChange={handleChange}
          />
          {error.name && <span className="errors">{error.name}</span>}
        </div>
        <div className="form-field">
          <label>Email id</label>
          <input
          placeholder="Your EmailID"
            type="email"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
          {error.email && <span className="errors">{error.email}</span>}
        </div>
        <div className="form-field">
          <label>Phone No.</label>
          <input
          placeholder="Phone Number"
            type="text"
            name="mobile"
            value={user.mobile}
            onChange={handleChange}
          />
          {error.mobile && <span className="errors">{error.mobile}</span>}
        </div>
        <div className="form-field">
          <label>Starting</label>
          <input
          placeholder="Travel Date"
            type="text"
            name="starting"
            value={user.starting}
            onChange={handleChange}
          />
          {error.starting && <span className="errors">{error.starting}</span>}
        </div>
        <div className="form_last_field">
        <div className="form-field">
          <label>Destination</label>
          <input
          placeholder="Enter destination"
            type="text"
            name="destination"
            value={user.destination}
            onChange={handleChange}
          />
          {error.destination && <span className="errors">{error.destination}</span>}
        </div>
        <div className="form-field">
          <label>No. Of Person</label>
          <input
          placeholder="No of Travellers"
            type="number"
            name="total_no_travelers"
            value={user.total_no_travelers}
            onChange={handleChange}
          />
          {error.total_no_travelers && <span className="errors">{error.total_no_travelers}</span>}
        </div>
        </div>

        <div className="form-field">
          <label>Message</label>
          <textarea
          placeholder="Your message"
            name="message"
            value={user.message}
            onChange={handleChange}
          />
        </div>
        <div className="submit-button">
          <button onClick={handleSendQuery}>
            <img
              src={"/Assets/Icons/map.svg"}
              alt=""
              className="enquiry_icon"
            />
            <p>Book Now</p>
          </button>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default FormFields;
