import Image from "next/image";
import Tge from "../../../public/tge.png";
import Call from "../../../public/Assets/Icons/phone.svg";
import Message from "../../../public/Assets/Icons/message.svg";
import Fb from "../../../public/Icons/fb.svg";
import Insta from "../../../public/Icons/insta.svg";
import Youtube from "../../../public/Icons/youtube.svg";

import "./footer.css";
import Link from "next/link";
const Footer = () => {
  const pstyle = "text-[14px]";

  return (
    <>
      <div className="w-full h-[60vh] footerbg  flex justify-center mt-10 xsm:h-fit font-Merri-sans">
        <div className="w-full h-full flex flex-col justify-around ">
          <div className="flex flex-col h-[80%] w-[80%] bg-[#CFCFEE2E] backdrop-blur-sm rounded-3xl shadow-md mx-auto xsm:w-[95%]">
            <div className="w-28 h-20 mx-auto -translate-y-8">
              <Image
                src={"/Assets/Images/logo.png"}
                alt="..."
                height={1000}
                width={1000}
              />
            </div>

            <div className="flex justify-between px-10 items-center xsm:flex-col xsm:px-5">
              <div className="flex justify-between w-[60%] xsm:w-[100%]">
                <div className="pr-5 border-r-[2px] flex flex-col gap-3 xsm:hidden">
                  <p className="text-[16px] font-semibold xsm:text-[14px]">
                    ABOUT TGE
                  </p>
                  <Link href={"/about_us"} className={`${pstyle}`}>
                    About us
                  </Link>
                  <Link href={"/support"} className={`${pstyle}`}>
                    Support
                  </Link>
                  <Link href={"/policy/copyright"} className={`${pstyle}`}>
                    Copyright Policies
                  </Link>
                  <Link href={"/policy/privacy"} className={`${pstyle}`}>
                    Privacy
                  </Link>
                </div>
                <div className="pr-5 border-r-[2px] flex flex-col gap-3">
                  <p className="text-[16px] font-semibold xsm:text-[12px] capitalize">
                    IMPORTANT LINKS
                  </p>
                  <Link href={"/policy/refund"} className={`${pstyle}`}>
                    Refund Policy
                  </Link>
                  <Link href={"/policy/terms"} className={`${pstyle}`}>
                    Teams & Conditions
                  </Link>
                  <p className={`${pstyle}`}>Posts</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-[16px] font-semibold xsm:text-[12px] ">
                    CONTACT US{" "}
                  </p>
                  <p className="flex items-center gap-1">
                    <span className="bg-[var(--primary)] rounded-full p-[6px] flex justify-center items-center">
                      <Image src={Call} alt="..." />
                    </span>
                    <span className={`${pstyle}`}>+91 67535 57043</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <span className="bg-[var(--primary)] rounded-full p-[6px] flex justify-center items-center">
                      <Image src={Message} alt="..." />
                    </span>
                    <span className={`${pstyle}`}>tourwithtge23@gmail.com</span>
                  </p>
                  <p className="flex gap-4">
                    <Image src={Fb} alt="..." />
                    <Image src={Insta} alt="..." />
                    <Image src={Youtube} alt="..." />
                  </p>
                </div>
              </div>

              <div className="xsm:my-5">
                <p className="text-[#595858] text-xl font-semibold">
                  Travel Destinations
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex justify-center items-center w-24 h-24 beaches text-white ">
                    Beaches
                  </div>
                  <div className="flex justify-center items-center w-24 h-24 bali text-white">
                    Bali
                  </div>
                  <div className="flex justify-center items-center w-24 h-24 prague text-white">
                    Prague
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <div className="flex justify-center items-center w-24 h-24 usa text-white">
                    USA
                  </div>
                  <div className="flex justify-center items-center w-24 h-24 china text-white">
                    China
                  </div>
                  <div className="flex justify-center items-center w-24 h-24 paris text-white">
                    Paris
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-[#838282] font-semibold ">
            © 2024 TGE ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
