"use client";
import React, { createContext, useState } from "react";
import Cities from "./choosecity";
import "./plantrip.css";
import Cross from "../../../public/Icons/cross.svg";
import Image from "next/image";
import Month from "./month";
import Date from "./date";
import Destinationcity from "./departcity";
import Staycount from "./staycount";
import Peopletype from "./peopletype";
import Tripform from "./tripform";
import Thankyou from "./thankyou";
export const Tripprovider = createContext();

const BASE_URL = process.env.NEXT_PUBLIC_URL;
console.log(BASE_URL);

const Planningtriphome = ({ planning, setPlanning }) => {
  const [render, setrender] = useState("cities");

  const [headerdata, setheaderdata] = useState();
  const [animationClass, setAnimationClass] = useState("fadeInLeft");
  const [totalpeople, settotalpeople] = useState({
    room: 1,
    adult: 1,
    children: 0,
  });

  console.log(headerdata);

  const closeModal = () => {
    setAnimationClass("fadeOutLeft");
    setTimeout(() => {
      setPlanning(false);
    }, 1000); // Match this duration to your CSS animation-duration
  };

  return (
    <>
      {render != "" ? (
        <div className="w-full flex justify-end fixed top-0 z-[9999] bg-[rgba(0,0,0,0.2)]">
          <div
            className={`h-[100vh] w-[60vw] px-[40px]  plantrip pt-2 xsm:w-[100vw] ${animationClass}`}
          >
            <div className="h-12 w-12 rounded-full bg-[#FADDDD] flex justify-center items-center p-1 fixed right-2 top-2 z-20">
              <Image
                className="cursor-pointer"
                onClick={() => closeModal()}
                src={Cross}
                alt="cross"
              />
            </div>
            <Tripprovider.Provider
              value={{
                headerdata,
                setheaderdata,
                setrender,
                totalpeople,
                settotalpeople,
              }}
            >
              {render == "cities" ? (
                <Cities />
              ) : render == "month" ? (
                <Month />
              ) : render == "date" ? (
                <Date />
              ) : render == "destination" ? (
                <Destinationcity />
              ) : render == "staycount" ? (
                <Staycount />
              ) : render == "peopletype" ? (
                <Peopletype />
              ) : render == "form" ? (
                <Tripform />
              ) : render == "thankyou" ? (
                <Thankyou setPlanning={setPlanning} />
              ) : (
                ""
              )}
            </Tripprovider.Provider>
          </div>
        </div>
      ) : (
        <Thankyou setPlanning={setPlanning} />
      )}
    </>
  );
};

export default Planningtriphome;
