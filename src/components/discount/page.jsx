import Image from "next/image";
import Boat from "../../../public/discountboat.png";
import Cap from "../ParagraphWithLargeFirstLetters/page";
const Discount = () => {
  return (
    <>
      <div className="w-full h-[35vh] bg-[#020241] flex justify-between items-center pl-[5%] rounded-xl">
        <div className="w-[50%] text-white space-y-2 ">
          <div className="text-[#E3E3E3] uppercase"><Cap text="Enjoy Best Deals"/></div>
          <div className="font-semibold text-xl uppercase">
            <Cap text="Up to 40% Discount!"/>
          </div>
          <p className="text-sm ">
            Version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicituuis bibendum auctor
          </p>
          <button className="px-4 py-2 bg-white text-[#020241] font-semibold rounded">
            Discover More{" "}
          </button>
        </div>

        <Image src={Boat} className="w-[35%] h-full rounded-xl" alt="..."/>
      </div>
    </>
  );
};

export default Discount;
