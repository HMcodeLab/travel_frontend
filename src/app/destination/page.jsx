'use client'
import Allcards from '@/components/Allcards/page'
import Destinationherosection from '@/components/destinationherosection/page'
import Discount from '@/components/discount/page'
import RequestCall from '@/components/requestcall/page'
import Trending from '@/components/trending/page'
import { BASE_URL } from '@/helpers/baseurl'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const Destination = () => {
  const [Alldata, setAlldata] = useState([])
  const componentBRef = useRef(null);
  const scrollToComponentB = () => {
    componentBRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const search=useSearchParams()
  let city_id=search.get('cityid')
  useEffect(() => {
async function Fetchdata(){
  try {
    const data=await fetch(BASE_URL+'/package_with_city',{
      method:'POST',
      headers:{
        'accept':'application/json',
        'content-type':'application/json'
      },
      body:JSON.stringify(city_id)
    })
    const response=await data.json()
    console.log(response);
    setAlldata(response?.data)
  } catch (error) {
    console.log(error);
  }
}
Fetchdata()
  }, [])
  
  return (<>
   
   <Destinationherosection scrollToComponentB={scrollToComponentB}/>
   <div className='px-[var(--padding-inline)] flex flex-col gap-10'>
    <Allcards data={Alldata} ref={componentBRef}/>
   <Discount/>
   <Trending/>
   <RequestCall/>
   </div>
   </>)
}
export default Destination;