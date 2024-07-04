"use client";

import ActivitiesPackages from "@/components/ActivitiesPackages/ActivitiesPackages";
import HeroSection from "@/components/Hero/herosection";
import MorphBanner from "@/components/Home/MorphBanner/morphBanner";
import Section7 from "@/components/Home/section7/section7";
import React, { useEffect, useState } from "react";

const page = () => {
  const [activityData, setActivityData] = useState();

  useEffect(() => {
    getActivity();
  }, []);

  const getActivity = async () => {
    try {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/apis/packages/typePacakge/2`
      );
      const response = await data.json();
      setActivityData(response?.data?.data);
      console.log(response?.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <div className="activities_page_outer">
      <HeroSection />
      <ActivitiesPackages data={activityData} />
      <div className="px-[169px] py-14 xsm:px-[15px] xsm:py-6 morph_banner_wrapper">
        <MorphBanner />
      </div>
      <Section7 />
    </div>
  );
};

export default page;
