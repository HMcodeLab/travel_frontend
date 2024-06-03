"use client"
import Allcards from "@/components/Allcards/page";
import Destinationherosection from "@/components/destinationherosection/page";
import Discount from "@/components/discount/page";
import RequestCall from "@/components/requestcall/page";
import Trending from "@/components/trending/page";
import { BASE_URL } from "@/helpers/baseurl";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";

const DestinationContent = ({ scrollToComponentB }) => {
  const [Alldata, setAlldata] = useState([]);
  const componentBRef = useRef(null);
  const search = useSearchParams();
  let city_id = search.get('cityid');

  useEffect(() => {
    async function Fetchdata() {
      try {
        const data = await fetch(BASE_URL + '/package_with_city', {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
          },
          body: JSON.stringify(city_id),
        });
        const response = await data.json();
        setAlldata(response?.data);
      } catch (error) {
        console.error(error);
      }
    }
    Fetchdata();
  }, [city_id]);

  return (
    <>
    <Suspense>
      <Destinationherosection scrollToComponentB={scrollToComponentB} />
      <div className='px-[var(--padding-inline)] flex flex-col gap-10'>
        <Allcards data={Alldata} ref={componentBRef} />
        <Discount />
        <Trending />
        <RequestCall />
      </div>
      </Suspense>
    </>
  );
};
export default DestinationContent;