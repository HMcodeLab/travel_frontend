import Link from "next/link";
import "./destination.css";
import Bg from "../../../public/ladakh.jpg";
import Down from "../../../public/Icons/arrow.svg";
import Image from "next/image";
import { emptyImage } from "@/Data/cardImageData";
const Destinationherosection = ({ resp }) => {
  let { data } = resp
  console.log(resp)
  
  console.log(data)
   return (
    <>
      <div className="w-full  relative destination_hero_section">
        {/* {data?.map((resp,index)=>{
          return ( */}
            <div className="destination_slider_wrapper">
              <div className="absolute top-0 w-full h-full slider_inner_wrapper">
                <img
                  src={resp?.main_image || emptyImage.src}
                  className="brightness-50 h-full object-cover destinations_background_image"
                  alt="..."
                  onError={(e) => {
                    e.target.src = emptyImage.src;
                  }}
                />
              </div>
              <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white space-y-4 xsm:w-max xsm:space-y-2 absolute_header_content">
                <p className="text-white font-extrabold text-5xl text-center xsm:text-3xl ">
                  {resp?.title}
                </p>
                {/* <p className="text-3xl  text-center xsm:text-lg destination_inner_title">
                  Thrills for Soul and Spirit!
                </p> */}
                <p className="flex justify-center text-center gap-1 p-1 font-semibold text-xl xsm:text-[20px]">
                  <span>Get upto</span>
                  <span className="bg-[#CA1C26B2] px-1">
                    {resp?.discount || 0} off
                  </span>
                </p>
                <div className="flex justify-center w-full">
                  <p className="px-5 py-2 cursor-pointer bg-red-700 text-white rounded xsm:text-[12px] xsm:px-3 xsm:py-1">
                    EXPLORE : {resp.title}
                  </p>
                </div>
                <div className="absolute top-[100%]  translate-y-[50%] left-[50%] translate-x-[-50%] h-16 p-1 border-2 border-white rounded-full bg-[var(--primary)] xsm:top-[80%]">
                  <Image
                    src={Down}
                    className="h-10 p-auto scale-down-center"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          {/* );
        
        })} */}
      </div>
    </>
  );
};

export default Destinationherosection;
