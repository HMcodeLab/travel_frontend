import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

import Commonheader from "./commonheader";
import User from "../../../public/Icons/usericon.svg";
import Phone from "../../../public/Icons/phoneicon.svg";
import Email from "../../../public/Icons/emailicon.svg";
import { Tripprovider } from "./page";
import Thankyou from "./thankyou";
import axios from "axios";

const Tripform = () => {
  const formData = new FormData();
  const { headerdata, setrender } = useContext(Tripprovider);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  console.log(headerdata);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  function handleSubmit() {
    if (!userData.name || !userData.phone || !userData?.email) {
    } else {
      setrender("");
    }
  }

  const applyFilter = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/packages/search_filter_packages`,
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    applyFilter();
  }, []);

  return (
    <>
      <div className="pl-14 pt-14 xsm:pl-4">
        <Commonheader />
        <div className="flex flex-col mt-8">
          <p className="capitalize font-[500] font-Merri-sans text-xl">
            Enter your details to personalise your trip
          </p>
          <div className="flex flex-col gap-5 w-[40%] font-Merri-sans pt-5">
            <div className="relative ">
              <Image alt="..." className="absolute top-2 left-5 " src={User} />
              <input
                type="text"
                className="w-full h-10 pl-14 focus:outline-none rounded border border-[#E4E4E4]"
                placeholder="Name"
                name="name"
                value={userData?.name}
                onChange={handleChange}
              />
            </div>
            <div className="relative ">
              <Image alt="..." className="absolute top-2 left-5 " src={Phone} />
              <input
                type="number"
                className="w-full h-10 pl-14 focus:outline-none rounded border border-[#E4E4E4]"
                placeholder="Phone No."
                name="phone"
                value={userData?.phone}
                onChange={handleChange}
              />
            </div>
            <div className="relative ">
              <Image alt="..." className="absolute top-2 left-5 " src={Email} />
              <input
                type="text"
                className="w-full h-10 pl-14 focus:outline-none rounded border border-[#E4E4E4]"
                placeholder="Email"
                name="email"
                value={userData?.email}
                onChange={handleChange}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-[#CA1C26] py-2 px-4 w-[35%] rounded text-white font-Merri-sans"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tripform;
