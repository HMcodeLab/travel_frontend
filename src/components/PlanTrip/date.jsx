import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

import Commonheader from "./commonheader";
import Smallsun from "../../../public/Icons/smallsun.svg";
import { Tripprovider } from "./page";
import { formatDate } from "@/helpers/formatDate";

const DateComponent = () => {
  const [date, setDate] = useState();
  const { headerdata, setrender, setheaderdata } = useContext(Tripprovider);
  function handleDateClick(d) {
    // console.log(d);
    setDate(d);
    setrender("destination");
    setheaderdata((prev) => ({ ...prev, departureDate: formatDate(d) }));
  }
  const months = [
    {
      month: "may",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: false,
      border: "#CA1C261F",
    },
    {
      month: "june",
      min: "15°",
      max: "24°",
      color: "#C5C4FE36",
      icon: Smallsun,
      special: false,
      border: "#CA1C261F",
    },
    {
      month: "july",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: false,
      border: "#CA1C261F",
    },
    {
      month: "august",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: true,
      border: "#CA1C261F",
    },
    {
      month: "september",
      min: "15°",
      max: "24°",
      color: "#C5C4FE36",
      icon: Smallsun,
      special: false,
      border: "#CA1C261F",
    },
    {
      month: "october",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: false,
      border: "#CA1C261F",
    },
    {
      month: "november",
      min: "15°",
      max: "24°",
      color: "#D9FBF9B2",
      icon: Smallsun,
      special: false,
      border: "#B2FFFA8A",
    },
    {
      month: "december",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: true,
      border: "#CA1C261F",
    },
    {
      month: "january",
      min: "15°",
      max: "24°",
      color: "#D9FBF9B2",
      icon: Smallsun,
      special: false,
      border: "#B2FFFA8F",
    },
    {
      month: "february",
      min: "15°",
      max: "24°",
      color: "#C5C4FE54",
      icon: Smallsun,
      special: false,
      border: "#CA1C261F",
    },
    {
      month: "march",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: false,
      border: "#CA1C261F",
    },
    {
      month: "april",
      min: "15°",
      max: "24°",
      color: "#D9FBF9B2",
      icon: Smallsun,
      special: false,
      border: "#B2FFFA8F",
    },
  ];
  console.log(date);
  const today = new Date();
  // Reset time part of the date to 00:00:00 for accurate comparison
  today.setHours(0, 0, 0, 0);
  return (
    <div className="pl-14 pt-14 xsm:pl-4 xsm:pb-10 xsm:pt-8 date_outer">
      <Commonheader />
      <div className="flex flex-col mt-8">
        <p className="capitalize font-[500] font-Merri-sans text-xl xsm:text-[15px]">
          When is your departure date?
        </p>
        <div className="flex justify-center w-full mt-10 date_wrapper">
          <Calendar
            className="rounded font-semibold cursor-pointer h-[auto] w-full"
            onChange={setDate}
            onClickDay={handleDateClick}
            value={date}
            minDate={today}
          />
        </div>
      </div>
    </div>
  );
};

export default DateComponent;
