import React from "react";
import "./ActivitiesPackages.css";
import PhoneActivitiesPackage from "./PhoneActivitiesPackage";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { emptyImage } from "@/Data/cardImageData";
import styles from './ActivitiesPackages.css'


const ActivitiesPackages = ({ data }) => {
  const router = useRouter();
  //   console.log(data);
  if (data?.length == 0 || data == undefined) {
    return <>Loading...</>;
  }
  // console.log(data)
  return (
    <div className="px-[169px] py-6 flex flex-col gap-8 xsm:px-[20px] acticities_packages">
      <div className="flex justify-between">
        <div className="w-[50%] xsm:w-full">
          <p className="font-Merri-sans border-l-4 border-[#CA1C26] pl-3 uppercase text-[24px] font-bold tracking-wider xsm:text-[18px]">
            Explore Our <br /> Best{" "}
            <span className="text-[#CA1C26]">Activities Packages</span>
          </p>
        </div>
        <div className="w-[50%] xsm:hidden">
          <p className="text-[#494545] text-[17.6px] xsm:text-[12.6px] text-balance font-[Exo]">
            <span>Dive into a world of excitement with our exhilarating travel adventure activities! Whether you're an adrenaline junkie or a nature lover, we have something for everyone.
            </span>
          </p>
        </div>
      </div>
      <div className="bottom_description font-[Exo] flex flex-col text-[17.6px] xsm:text-[12.6px] text-[#494545]">
      <span >From zip-lining through lush rainforests and white-water rafting down roaring rivers to scaling majestic mountains and diving into vibrant coral reefs, our adventure activities promise heart-pounding thrills and breathtaking experiences. Each activity is carefully designed and guided by experts to ensure your safety and maximum enjoyment.</span>
      <span>Don't just see the world—experience it in ways you've never imagined. Explore our range of travel adventure activities now and add a dose of adventure to your next trip. Book today and make your journey extraordinary!</span>
      </div>
      
      <div className="xsm:block hidden">
        <PhoneActivitiesPackage data={data} />
      </div>
      <div className="grid grid-cols-3 gap-3 xsm:hidden activities_posts">
        <Link href={`/destination/${data[0]?.citySlug}/${data[0]?.id}`}>
          <div
            className="activity-card1 h-[600px] flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${data[0]?.pdf_image || emptyImage.src})`, backgroundSize: 'cover', backgroundPosition: 'bottom'
            }}

          >

            <div className="relative z-10 flex items-center gap-2">
              <p className="uppercase text-[20px] font-normal tracking-wider">
                {data[0]?.package_name}
              </p>
              <img className="w-8 h-8" src={data[0]?.pdf_image || emptyImage.src} alt="..."
                onError={(e) => e.target.src = emptyImage.src} />
            </div>
            {/* <p className="relative z-10 text-[12px] capitalize xsm:hidden">
            Let us look at some of the popular adventure sports in Himachal
            Pradesh that take the state by storm
          </p> */}
          </div>
        </Link>
        <Link href={`/destination/${data[1]?.citySlug}/${data[1]?.id}`}>
          <div className="flex flex-col gap-3 activities_center_section">
            <div
              className="h-[100%] activity-card3a flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden cursor-pointer"
              style={{
                backgroundImage: `url(${data[1]?.pdf_image || emptyImage.src})`, backgroundSize: 'cover', backgroundPosition: 'bottom'
              }}
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
            <Link href={`/destination/${data[2]?.citySlug}/${data[2]?.id}`}>
              <div
                className="h-[100%] activity-card3b flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `url(${data[2]?.pdf_image || emptyImage.src})`, backgroundSize: 'cover', backgroundPosition: 'bottom'
                }}

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
            </Link>
            <Link href={`/destination/${data[3]?.citySlug}/${data[3]?.id}`}>
              <div
                className="h-[100%] activity-card3c flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `url(${data[3]?.pdf_image || emptyImage.src})`, backgroundSize: 'cover', backgroundPosition: 'bottom'
                }}
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
            </Link>
          </div>
        </Link>
        <Link href={`/destination/${data[4]?.citySlug}/${data[4]?.id}`}>
          <div
            className="activity-card2 h-[600px] flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${data[4]?.pdf_image || emptyImage.src})`, backgroundSize: 'cover', backgroundPosition: 'bottom'
            }}
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
        </Link>
      </div>
    </div>
  );
};

export default ActivitiesPackages;
