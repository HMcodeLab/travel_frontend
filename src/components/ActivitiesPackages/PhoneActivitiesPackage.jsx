import React from "react";
import "./ActivitiesPackages.css";
import { useRouter } from "next/navigation";


const PhoneActivitiesPackage = ({ data }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div
          className="activity-card1 h-[200px] flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden"
          style={{
            backgroundImage: `url(${data[0]?.pdf_image})`,
          }}
          onClick={() =>
            router.push(
              `/destination/${data[0]?.citySlug}/${data[0]?.id}`
            )
          }
        >
          <div className="relative z-10 flex items-center gap-2">
            <p className="uppercase text-[20px] font-normal tracking-wider smallcaps">
              {data[0]?.package_name}
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
          className="activity-card1 h-[200px] flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden"
          style={{
            backgroundImage: `url(${data[1]?.pdf_image})`,
          }}
          onClick={() =>
            router.push(
              `/destination/${data[1]?.citySlug}/${data[1]?.id}`
            )
          }
        >
          <div className="relative z-10 flex items-center gap-2">
            <p className="uppercase text-[20px] font-normal tracking-wider smallcaps">
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
          className="activity-card1 h-[200px] flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden"
          style={{
            backgroundImage: `url(${data[2]?.pdf_image})`,
          }}
          onClick={() =>
            router.push(
              `/destination/${data[2]?.citySlug}/${data[2]?.id}`
            )
          }
        >
          <div className="relative z-10 flex items-center gap-2">
            <p className="uppercase text-[20px] font-normal tracking-wider smallcaps">
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
          className="activity-card1 h-[200px] flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden"
          style={{
            backgroundImage: `url(${data[3]?.pdf_image})`,
          }}
          onClick={() =>
            router.push(
              `/destination/${data[3]?.citySlug}/${data[3]?.id}`
            )
          }
        >
          <div className="relative z-10 flex items-center gap-2">
            <p className="uppercase text-[20px] font-normal tracking-wider smallcaps">
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
      <div>
        <div
          className="activity-card1 h-[230px] flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden"
          style={{
            backgroundImage: `url(${data[4]?.pdf_image})`,
          }}
          onClick={() =>
            router.push(
              `/destination/${data[4]?.citySlug}/${data[4]?.id}`
            )
          }
        >
          <div className="relative z-10 flex items-center gap-2 justify-center">
            <p className="uppercase text-[20px] font-normal tracking-wider smallcaps">
              {data[4]?.package_name}
            </p>
            <img
              className="w-8 h-8"
              src="/Assets/Icons/activityleaf.svg"
              alt="..."
            />
          </div>
          <p className="relative z-10 text-[12px] capitalize xsm:hidden">
            Let us look at some of the popular adventure sports in Himachal
            Pradesh that take the state by storm
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoneActivitiesPackage;
