import Image from "next/image";
import Link from "next/link";
import Moon from "../../../public/Icons/moon.svg";
import Sun from "../../../public/Icons/sun.svg";
import Star from "../../../public/Icons/star.svg";
import Call from "../../../public/Icons/cardphone.svg";
import Wtsp from "../../../public/Icons/cardwhatsapp.svg";
import { emptyImage } from "@/Data/cardImageData";

const Cards = ({ val, cityid }) => {
  console.log(val)
  console.log(cityid)
  return (
    <div className="rounded-lg flex flex-col shadow-lg bg-[#F4F4F4] pb-5 card_section_wrapper">
      <div className="relative w-full h-[33vh]  card_top_section">
        <Image
          src={val?.pdf_image || emptyImage.src}
          onError={(e) => e.target.src = emptyImage.src}
          alt="Package image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-sm tour_package_img"
        />
        <div className="w-full flex justify-between absolute top-0 text-white p-3">
          <span className="flex items-center bg-black px-2 rounded gap-1">
            {val?.days}{" "}
            <Image src={Moon || emptyImage.src} alt="Moon icon" width={12} height={12}
              onError={(e) => e.target.src = emptyImage.src} /> /{" "}

            {val?.night}{" "}
            <Image src={Sun || emptyImage.src} alt="Sun icon" width={12} height={12}
              onError={(e) => e.target.src = emptyImage.src} />
          </span>
          <span
            className="bg-gradient-to-r from-[#010080] to-[#BC000B] text-white px-2 rounded"
            style={{ fontFamily: "Montserrat" }}
          >
            Best Sale!
          </span>
        </div>
      </div>
      <div className="border-l-[3px] border-r-[3px] border-[#CA1C26] px-2 font-bold text-[18px] py-2 cardtitle card_middle_section">
        {val?.package_name}
      </div>
      <div className="flex flex-col gap-4 px-3 card_bottom_section">
        <div className="flex gap-3 items-center flex-wrap pb-[10px] mt-3 font-int min-h-10 card_bottom_underline_section">
          {val?.servies === null
            ? "no services found"
            : val?.servies?.slice(0, 4)?.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-1 text-xs font-semibold"
              >
                <div className="relative w-6 h-6">
                  <Image
                    className="meal_icon"
                    src={item?.icon || emptyImage.src}
                    onError={(e) => e.target.src = emptyImage.src}
                    alt={`icon`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                {item?.service}
              </div>
            ))}
        </div>

        <div
          className="w-full flex justify-between items-center"
          style={{ fontFamily: "Montserrat" }}
        >
          <div className="flex items-center gap-1">
            <p className="font-bold text-xl flex flex-nowrap">₹ {val?.discount || val?.starting_cost || ""}/- </p>
            <strike className="text-[#5F5D5D] text-sm font-semibold">
            ₹ {val?.starting_cost || val?.pakage_discounted_cost || ""}
            </strike>
          </div>
          <div className="flex items-center justify-end gap-1 flex-wrap">
            <Image src={`/Assets/Images/Star.svg`} alt="Star icon" width={16} height={16} />
            <p className="font-semibold ">{val?.rating} / 5</p>
            <p className="text-[#969191] text-xs">({val?.reviews || '354'} reviews)</p>
          </div>
        </div>
        <div className="flex justify-between items-center h-9">
          <Link
            href={`/destination/${val.city_name.toLowerCase()}/${val?.id}`}
            className="uppercase bg-[var(--primary)] text-white rounded px-5 h-full text-center flex items-center justify-center"
            style={{ fontFamily: "Merriweather-sans" }}
          >
            Explore now
          </Link>
          <div className="flex items-center divide-x-[1.5px] divide-[var(--primary)] gap-1 border-2 border-[var(--primary)] rounded h-full cards_icons_wrapper">

            <a href="tel:6753557043"><Image
              src={Call}
              className="p-1"
              alt="Call icon"
              width={26}
              height={26}
              srcset={`${Call} 480w, 
              ${Call} 800w, 
              ${Call} 1200w`}
              sizes="(max-width: 600px) 480px, 
              (max-width: 1200px) 800px, 
              1200px"
            /></a>


            <a href="https://api.whatsapp.com/send/?phone=6753557043&text&type=phone_number&app_absent=0" target="_blank">
              <Image
                src={Wtsp}
                className="p-1"
                alt="WhatsApp icon"
                width={32}
                height={32}
                srcset={`${Wtsp} 480w, 
                ${Wtsp} 800w, 
                ${Wtsp} 1200w`}
                sizes="(max-width: 600px) 480px, 
                (max-width: 1200px) 800px, 
                1200px"
              /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
