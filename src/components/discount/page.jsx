'use client'
import Image from "next/image";
import Boat from "../../../public/discountboat.png";
import Cap from "../ParagraphWithLargeFirstLetters/page";
import EnquiryForm from "../EnquiryForm/EnquiryForm";
import { useState } from "react";
import { emptyImage } from "@/Data/cardImageData";
const Discount = () => {
  const [enquiryModal, setEnquiryModal] = useState(false);
  return (
    <>

    {
      enquiryModal&&(
        <div className="modal-overlay">
        <EnquiryForm setEnquiryModal={setEnquiryModal} />
      </div>
      )
    }
     
      <div className=" font-Merri-sans relative w-full h-[auto] bg-[#020241] flex justify-between items-center pl-[4%] rounded-xl xsm:h-[auto] discount_section_wrapper xsm:px-[4%]">
        <div className="w-[60%] text-white space-y-2 xsm:w-[100%] xsm:z-[2] discount_section_wrapper py-6">
          <div className="text-[#E3E3E3] text-[17px]  font-[400] uppercase xsm:text-sm discount_heading_first">
            <Cap text="Enjoy Best Deals" />
          </div>
          <div className="font-semibold text-[20.75px] uppercase xsm:text-sm discount_heading_top_second">
            <Cap text="Up to 40% Discount!" />
          </div>
          <p className="text-sm xsm:text-[13px] py-3 discount_section_para">
           <span>
           Enjoy incredible savings on flights, accommodations, and tour packages without compromising on quality. From last-minute escapes to early bird specials, our discounted deals cater to every budget and travel style. Imagine sipping cocktails on a pristine beach, exploring ancient cities, or traveling  through breathtaking landscapes – all at a fraction of the cost.
           </span>
           <span>Don’t miss out on these limited-time offers! Check out our best discounted travel deals now and start planning your next adventure today. Your dream vacation is just a click away, and at a price you'll love!</span>
          </p>
          <button className=" bg-white text-[#020241] font-semibold rounded xsm:text-[12px] xsm:py-1" onClick={()=>setEnquiryModal(true)}>
            Discover More{" "}
            
          </button>
        </div>

        <Image
          src={Boat || emptyImage.src}
          className="w-[35%] h-full rounded-xl xsm:absolute xsm:top-0 xsm:right-0 xsm:w-[50vw] xsm:brightness-50 z-[1]"
          alt="..."
          onError={(e) => e.target.src = emptyImage.src}
        />
      </div>
    </>
  );
};

export default Discount;
