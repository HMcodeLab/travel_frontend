import React, { useContext, useState } from "react";
import "./plantrip.css";
import Search from "../../../public/Icons/search.svg";
import Image from "next/image";
import Commonheader from "./commonheader";
import { Tripprovider } from "./page";
import { emptyImage } from "@/Data/cardImageData";
const Destinationcity = () => {
  const cities = ["Manali", "Kasol", "Shimla", "Delhi", "Bangalore"];
  const [searchValue, setsearchValue] = useState("")
  const [result, setresult] = useState([])
  const { headerdata, setheaderdata, setrender } = useContext(Tripprovider);
  function handleItem(item) {
    setheaderdata((prevItems) => ({ ...prevItems, from: item.name }));
    setrender("staycount");
  }
  async function Fetchcities(city){
    try {
      const data=await fetch(process.env.NEXT_PUBLIC_URL+'/apis/packages/city/'+city)
        const response=await data.json()
        setresult(response?.data)
    } catch (error) {
      console.log(error);
    }
      }
    function handleCity(e){
      let {value}=e.target;
      setsearchValue(value)
      if(value.length>=3){
        Fetchcities(value)
      }
      if(value.length==0){
        setresult([])
      }
    }
  let [searchTerm, setSearchTerm] = useState('')

  let filterCities = cities.filter((e) =>  e.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) )
  return (
    <>
      <div className="pl-14 pt-14 xsm:pl-4 xsm:pb-10">
        <Commonheader />
        <p className="capitalize font-[500] font-Merri-sans text-xl mt-8">
          Where are you travelling from?
        </p>
        <div className="relative w-full flex  h-8 mt-5 ">
          <Image
            alt="..."
            src={Search || emptyImage.src}
            onError={(e)=> e.target.src = emptyImage.src}
            className="absolute top-3 left-[1.7rem] h-6 w-6 xsm:left-[1rem]"
          />
          <input
            className="w-[90%] h-[30px] xsm:h-[40px!important] rounded pl-[4.5rem] focus:outline-none xsm:w-full search_for_destinations"
            placeholder="Type departing City "
            value={searchValue}
          onChange={handleCity}
          />
        </div>
        <div className="flex flex-col gap-5 pl-5 mt-5 font-Merri-sans xsm:gap-3">
        {result.length > 0 ? (
          result.map((item, index) => (
            <p
              key={index}
              className="font-semibold text-[1.5rem] cursor-pointer xsm:text-[1.1rem]"
              onClick={() => handleItem(item)}
            >
              {item?.name}
            </p>
          ))
        ) : 
        result.length==0 && searchValue.length>=3 ?
        (
          <p className="font-semibold text-[1.5rem] xsm:text-[1.1rem]">No results found</p>
        ):""}

        </div>
      </div>
    </>
  );
};

export default Destinationcity;
