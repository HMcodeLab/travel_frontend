"use client";

import { Suspense, useEffect, useRef, useState } from "react";


import LastSection from "@/components/Detail/lastSection";
import axios from "axios";
import Discount from "@/components/discount/page";
import RequestCall from "@/components/requestcall/page";
import Allcards from "@/components/Allcards/page";
import Destinationherosection from "@/components/destinationherosection/page";

const Destination = (props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DestinationContentInner props={props} />
    </Suspense>
  );
};

const DestinationContentInner = ({props}) => {
  console.log(props.params.slug)
  const [Alldata, setAlldata] = useState([]);
  const componentBRef = useRef(null);

 

  

 
 
  
 

  const formData = new FormData();
  formData.append("city_id", props.params.slug);
 

  useEffect(() => {
    const fetchData = async () => {
      
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_URL}/apis/packages/package_with_city`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          console.log(`response.data.data asdaslkdjaklsjASDJLKAsdjlkASDJL`);
          console.log(response.data.data);
          setAlldata(response.data.data || []);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      
    };

    fetchData();
  }, [props.params.slug]);

  return (
    <>
      <Destinationherosection resp={Alldata} />
      <div className="px-[var(--padding-inline)] flex flex-col gap-[5vh] my-[5vh]">
        <Allcards data={Alldata} cityid={props.params.slug} />

        <Discount />
        <LastSection data={Alldata} />
        <RequestCall />
      </div>
    </>
  );
};

export default Destination;
