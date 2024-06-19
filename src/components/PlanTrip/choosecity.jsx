import React, { useContext } from "react";
import "./plantrip.css";
import Search from "../../../public/Icons/search.svg";
import Image from "next/image";
import { Tripprovider } from "./page";
const Cities = ({ formData }) => {
  const cities = [
    "Manali",
    "Kasol",
    "Shimla",
    "Mcleodganj",
    "Dalhousie",
    "Spiti Valley",
    "Mandi",
    "Kasauli",
    "Kaza",
    "Jibhi",
  ];
  const { headerdata, setheaderdata, setrender } = useContext(Tripprovider);
  function handleItem(item) {
    setheaderdata((prevItems) => ({ ...prevItems, to: item }));
    setrender("month");
  }
  return (
    <>
      <div className="flex items-center uppercase font-bold text-2xl w-full justify-center font-Merri-sans gap-1 mt-8 ">
        <p>Where are </p>
        <p className="text-[var(--primary)]">You Planning</p>
        <p>To Go ?</p>
      </div>

      <div className="relative w-full flex pl-20 h-10 mt-8 ">
        <Image
          alt="..."
          src={Search}
          className="absolute top-2 left-[5.2rem] h-5 w-6"
        />
        <input
          className="w-[75%] h-[35px] rounded pl-9 focus:outline-none"
          placeholder="Pick your destination"
        />
      </div>
      <div className="flex flex-col gap-5 pl-28 mt-5 font-Merri-sans">
        {cities?.map((item) => {
          return (
            <>
              <p
                className="font-semibold text-[1.5rem] cursor-pointer"
                onClick={() => handleItem(item)}
              >
                {item}
              </p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cities;
