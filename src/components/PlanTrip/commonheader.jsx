import Image from "next/image";
import React, { useContext } from "react";
import Plane from "../../../public/Icons/plane.svg";
import Calender from "../../../public/Icons/calendericon.svg";
import Nights from "../../../public/Icons/nightsicon.svg";
import Pax from "../../../public/Icons/pax.svg";
import { Tripprovider } from "./page";

const Commonheader = () => {
  const { headerdata, setheaderdata, setrender } = useContext(Tripprovider);
  let items = [];
  var trimmedData = {};

  Object.keys(headerdata).forEach((val, ind) => {
    if (ind == 0 || ind == 1 || ind == 3 || ind == 4 || ind == 8) {
      trimmedData[val] = headerdata[val];
    }
  });

  for (let index = 0; index < Object.keys(headerdata)?.length; index++) {
    console.log(index, Object.keys(headerdata)[index]);

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

  function handleHeader(ind) {
    if (ind == 0) {
      setrender("cities");
      setheaderdata((prevArray) => prevArray.slice(0, ind));
    } else if (ind == 1) {
      setheaderdata((prevArray) => prevArray.slice(0, ind));
      setrender("month");
    } else {
      setheaderdata((prevArray) => prevArray.slice(0, ind));
      setrender(Rendercomponentdata[ind + 1]);
    }
  }
  //   console.log(Object.keys(headerdata));
  return (
    <div className="flex flex-col gap-3 pr-3">
      <p className="text-xl font-Merri-sans font-semibold ">
        NOW PLANNING YOUR HOLIDAY TO
      </p>
      <div className="grid grid-cols-6 gap-2">
        {Object.keys(trimmedData)?.map((item, ind) => {
          return (
            <>
              <div
                onClick={() => handleHeader(ind)}
                className="border cursor-pointer border-[#CA1C2654] rounded flex items-center gap-2  p-1 "
              >
                <Image src={ICONS[ind]} alt="icon" />
                <span className="font-[500] text-[#171717] text-lg font-Merri-sans capitalize">
                  {headerdata[item]}
                </span>
              </div>
            </>
          );
        })}
      </div>
      <div className="grid grid-cols-6 gap-2">
        {Object.keys(trimmedData)?.map((item) => {
          return (
            <>
              <div className="h-[6px] bg-[var(--primary)]"></div>
            </>
          );
        })}

        {/* {items} */}
      </div>
    </div>
  );
};

export default Commonheader;
