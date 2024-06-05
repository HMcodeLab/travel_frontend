import Image from "next/image";
import Boat from "../../../public/discountboat.png";
import Cap from "../ParagraphWithLargeFirstLetters/page";
const Discount = () => {
  return (
    <>
      <div className=" relative w-full h-[35vh] bg-[#020241] flex justify-between items-center pl-[5%] rounded-xl xsm:h-[30vh]">
        <div className="w-[50%] text-white space-y-2 xsm:w-[100%] xsm:z-[2]">
          <div className="text-[#E3E3E3] uppercase xsm:text-sm">
            <Cap text="Enjoy Best Deals" />
          </div>
          <div className="font-semibold text-xl uppercase xsm:text-sm">
            <Cap text="Up to 40% Discount!" />
          </div>
          <p className="text-sm xsm:text-[13px]">
            Version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicituuis bibendum auctor
          </p>
          <button className="px-4 py-2 bg-white text-[#020241] font-semibold rounded xsm:text-[12px] xsm:py-1">
            Discover More{" "}
          </button>
        </div>

        <Image
          src={Boat}
          className="w-[35%] h-full rounded-xl xsm:absolute xsm:top-0 xsm:right-0 xsm:w-[50vw] xsm:brightness-50 z-[1]"
          alt="..."
        />
      </div>
    </>
  );
};

export default Discount;
