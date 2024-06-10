"use client";

import { BASE_URL } from "@/helpers/baseurl";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import Destinationherosection from "../../components/destinationherosection/page";
import Allcards from "../../components/Allcards/page";
import Trending from "../../components/trending/page";
import RequestCall from "../../components/requestcall/page";
import Discount from "../../components/discount/page";
import LastSection from "@/components/Detail/lastSection";

const Destination = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DestinationContentInner />
    </Suspense>
  );
};

const DestinationContentInner = () => {
  const [Alldata, setAlldata] = useState([]);
  const componentBRef = useRef(null);
  const searchParams = useSearchParams();
  const city_id = searchParams.get("cityid");

  useEffect(() => {
    const fetchData = async () => {
      if (city_id) {
        try {
          const response = await fetch(`${BASE_URL}/package_with_city`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ city_id }),
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setAlldata(data?.data || []);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      }
    };

    fetchData();
  }, [city_id]);

  return (
    <>
      <Destinationherosection />
      <div className="px-[var(--padding-inline)] flex flex-col gap-10">
        <Allcards data={Alldata} />

        <Discount />
        <LastSection />
        <RequestCall />
      </div>
    </>
  );
};

export default Destination;
