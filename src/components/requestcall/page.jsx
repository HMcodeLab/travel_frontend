import Image from "next/image";
import React from "react";
import Wtsp from "../../../public/Icons/Whatsapp.svg";

const RequestCall = () => {
  return (
    <>
      <div className="flex w-full justify-between ">
        <p className="w-[40%] xsm:w-[60%] xsm:text-[0.8rem] resuest_call_para">
          Affordable <strong>adventures</strong>, our Pocket Friendly Guarantee
          ensures unforgettable{" "}
          <span className="font-semibold text-[var(--primary)]">
            budget-friendly tours.
          </span>
        </p>

        <div className="flex items-center h-12 gap-14 xsm:h-8 calling_flex_wrapper">
          <a href='tel:6753557043' className="bg-[var(--primary)] text-white px-10 h-full rounded xsm:text-[10px] xsm:px-5 go_to_dial_num">
          +91 67535 57043
          </a>
         
           
          <a href="https://api.whatsapp.com/send/?phone=6753557043&text&type=phone_number&app_absent=0" className="goto_whatsapp" target="_blank">
          <Image
            alt="..."
            src={Wtsp}
            className="h-full w-16 bg-[#64B161] p-2 rounded xsm:hidden"
          /></a>
          
        </div>
      </div>
    </>
  );
};

export default RequestCall;
