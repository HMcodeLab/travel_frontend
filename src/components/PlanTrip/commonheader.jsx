import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Plane from "../../../public/Icons/plane.svg";
import Calender from "../../../public/Icons/calendericon.svg";
import Nights from "../../../public/Icons/nightsicon.svg";
import Pax from "../../../public/Icons/pax.svg";
import { Tripprovider } from "./page";

const Commonheader = () => {
  const { headerdata, setheaderdata, setrender } = useContext(Tripprovider);
  const [tempdata, settempdata] = useState({})
  let items = [];
  var trimmedData = {};
  
useEffect(() => {
  Object.keys(headerdata).forEach((val, ind) => {
    if (ind == 0 || ind == 1 || ind == 3 || ind == 4 || ind == 8) {
      trimmedData[val] = headerdata[val];
    }
  });
  settempdata(trimmedData)
}, [])

  

  for (let index = 0; index < Object.keys(headerdata)?.length; index++) {
    // console.log(index, Object.keys(headerdata)[index]);

    items.push(<div className="h-[6px] bg-[#FCBFC2]"></div>);
  }
  let ICONS = [Plane, Calender, Plane, Nights, Pax];
  let Rendercomponentdata = [
    "cities",
    "month",
    "date",
    "destination",  
    "staycount",
    "peopletype",
    "form",
  ];

  function handleHeader(specificKey,ind) {
    const updatedData = {};
    let found = false;

    for (const key in tempdata) {
      updatedData[key] = tempdata[key];
      if (found) {
        // console.log(updatedData);
        delete updatedData[key];
      }
      if (key === specificKey) {
        delete updatedData[key];
        found = true;
      }
    }

    setrender(Rendercomponentdata[ind])
    setheaderdata(updatedData)
    settempdata(updatedData);
// console.log(trimmedData);

  }
  //   console.log(Object.keys(headerdata));
  return (
    <div className="flex flex-col gap-3 pr-3">
      <p className="text-xl font-Merri-sans font-semibold xsm:text-[1rem]">
        NOW PLANNING YOUR HOLIDAY TO
      </p>
      <div className="flex  gap-4 xsm:flex xsm:flex-wrap selected_query_wrapper">
        {Object.keys(tempdata)?.map((item, ind) => {
          return (
            <>
            <div className="values_wrapper">
              <div
                onClick={() => handleHeader(item,ind)}
                className="border cursor-pointer border-[#CA1C2654] rounded flex items-center gap-2  p-1 selected_query_values"
              >
                <Image src={ICONS[ind]} alt="icon" />
                <span className="font-[500] text-[#171717] text-lg font-Merri-sans capitalize xsm:text-[0.9rem]">
                  {headerdata[item]}
                </span>
              </div>
              <span className="query_values_border"></span>
              </div>
            </>
          );
        })}
      </div>
     
    </div>
  );
};

export default Commonheader;
