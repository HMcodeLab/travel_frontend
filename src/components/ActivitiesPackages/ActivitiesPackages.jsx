import React from "react";
import "./ActivitiesPackages.css";
import PhoneActivitiesPackage from "./PhoneActivitiesPackage";
import { useRouter } from "next/navigation";
import Link from "next/link";


const ActivitiesPackages = ({ data }) => {
  const router = useRouter();
  //   console.log(data);
  if (data?.length == 0 || data == undefined) {
    return <>Loading...</>;
  }
    // console.log(data)
  return (
    <div className="px-[169px] py-6 flex flex-col gap-8 xsm:px-[20px]">
      <div className="flex justify-between">
        <div className="w-[40%] xsm:w-full">
          <p className="font-Merri-sans border-l-4 border-[#CA1C26] pl-3 uppercase text-[24px] font-bold tracking-wider">
            Explore Our <br /> Best{" "}
            <span className="text-[#CA1C26]">Activities Packages</span>
          </p>
        </div>
        <div className="w-[43%] xsm:hidden">
          <p className="text-[#494545] text-[15px] text-balance font-[Exo]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.
            Aenean massa cum sociis Theme natoque.
          </p>
        </div>
      </div>
      <div className="xsm:block hidden">
        <PhoneActivitiesPackage data={data} />
      </div>
      <Link href={`/destination/${data[0]?.citySlug}/${data[0]?.id}`}>
      <div className="grid grid-cols-3 gap-3 xsm:hidden">
        <div
          className="activity-card1 h-[600px] flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden cursor-pointer"
          style={{
            backgroundImage: `url(${data[0]?.pdf_image})`,
          }}
         
        >
         
          <div className="relative z-10 flex items-center gap-2">
            <p className="uppercase text-[20px] font-normal tracking-wider">
              {data[0]?.package_name}
            </p>
            <img className="w-8 h-8" src={data[0]?.pdf_image} alt="..." />
          </div>
         
          
          {/* <p className="relative z-10 text-[12px] capitalize xsm:hidden">
            Let us look at some of the popular adventure sports in Himachal
            Pradesh that take the state by storm
          </p> */}
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="h-[33%] activity-card3a flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${data[1]?.pdf_image})`,
            }}
            onClick={() =>
              router.push(`/destination/${data[1]?.citySlug}/${data[1]?.id}`)
            }
          >
            <div className="relative z-10 flex items-center gap-2">
              <p className="uppercase text-[20px] font-normal tracking-wider">
                {data[1]?.package_name}
              </p>
              <img
                className="w-8 h-8"
                src="/Assets/Icons/activityleaf.svg"
                alt="..."
              />
            </div>
            {/* <p className="relative z-10 text-[12px] capitalize xsm:hidden">
              Let us look at some of the popular adventure sports in Himachal
              Pradesh that take the state by storm
            </p> */}
          </div>
          <div
            className="h-[33%] activity-card3b flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${data[2]?.pdf_image})`,
            }}
            onClick={() =>
              router.push(`/destination/${data[2]?.citySlug}/${data[2]?.id}`)
            }
          >
            <div className="relative z-10 flex items-center gap-2">
              <p className="uppercase text-[20px] font-normal tracking-wider">
                {data[2]?.package_name}
              </p>
              <img
                className="w-8 h-8"
                src="/Assets/Icons/activityleaf.svg"
                alt="..."
              />
            </div>
            {/* <p className="relative z-10 text-[12px] capitalize xsm:hidden">
              Let us look at some of the popular adventure sports in Himachal
              Pradesh that take the state by storm
            </p> */}
          </div>
          <div
            className="h-[33%] activity-card3c flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${data[3]?.pdf_image})`,
            }}
            onClick={() =>
              router.push(`/destination/${data[3]?.citySlug}/${data[3]?.id}`)
            }
          >
            <div className="relative z-10 flex items-center gap-2">
              <p className="uppercase text-[20px] font-normal tracking-wider">
                {data[3]?.package_name}
              </p>
              <img
                className="w-8 h-8"
                src="/Assets/Icons/activityleaf.svg"
                alt="..."
              />
            </div>
            {/* <p className="relative z-10 text-[12px] capitalize xsm:hidden">
              Let us look at some of the popular adventure sports in Himachal
              Pradesh that take the state by storm
            </p> */}
          </div>
        </div>
        <div
          className="activity-card2 h-[600px] flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden cursor-pointer"
          style={{
            backgroundImage: `url(${data[4]?.pdf_image})`,
          }}
          onClick={() =>
            router.push(`/destination/${data[4]?.citySlug}/${data[4]?.id}`)
          }
        >
          <div className="relative z-10 flex items-center gap-2">
            <p className="uppercase text-[20px] font-normal tracking-wider">
              {data[4]?.package_name}
            </p>
            <img
              className="w-8 h-8"
              src="/Assets/Icons/activityleaf.svg"
              alt="..."
            />
          </div>
          {/* <p className="relative z-10 text-[12px] capitalize xsm:hidden">
            Let us look at some of the popular adventure sports in Himachal
            Pradesh that take the state by storm
          </p> */}
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ActivitiesPackages;
