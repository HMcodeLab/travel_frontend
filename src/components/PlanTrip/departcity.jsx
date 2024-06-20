import React, { useContext } from "react";
import "./plantrip.css";
import Search from "../../../public/Icons/search.svg";
import Image from "next/image";
import Commonheader from "./commonheader";
import { Tripprovider } from "./page";
const Destinationcity = () => {
  const cities = ["Manali", "Kasol", "Shimla", "Delhi", "Bangalore"];
  const { headerdata, setheaderdata, setrender } = useContext(Tripprovider);
  function handleItem(item) {
    setheaderdata((prevItems) => ({ ...prevItems, from: item }));
    setrender("staycount");
  }
  return (
    <>
      <div className="pl-14 pt-14 xsm:pl-4">
        <Commonheader />
        <p className="capitalize font-[500] font-Merri-sans text-xl mt-8">
          Where are you travelling from?
        </p>
        <div className="relative w-full flex  h-8 mt-5 ">
          <Image
            alt="..."
            src={Search}
            className="absolute top-2 left-2 h-5 w-6"
          />
          <input
            className="w-[60%] rounded pl-9 focus:outline-none xsm:w-full"
            placeholder="Type departing City "
          />
        </div>
        <div className="flex flex-col gap-5 pl-5 mt-5 font-Merri-sans xsm:gap-3">
          {cities?.map((item) => {
            return (
              <>
                <p
                  className="font-semibold text-xl cursor-pointer xsm:text-[1.1rem]"
                  onClick={() => handleItem(item)}
                >
                  {item}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Destinationcity;
