import React from 'react'
import  './plantrip.css'
import Search from '../../../public/Icons/search.svg'
import Image from 'next/image'
import Commonheader from './commonheader'
const Destinationcity = () => {
  const cities=["Manali","Kasol","Shimla","Delhi","Bangalore"]
  return (
    <>
    <div className='pl-14 pt-14'>
           <Commonheader/>
           <p className='capitalize font-[500] font-Merri-sans text-xl mt-8'>Where are you travelling from?</p>
          <div className='relative w-full flex  h-8 mt-5 '>
              <Image src={Search} className='absolute top-2 left-2 h-5 w-6'/>
              <input className='w-[60%] rounded pl-9 focus:outline-none' placeholder='Type departing City '/>
          </div>
          <div className='flex flex-col gap-5 pl-5 mt-5 font-Merri-sans'>
            {
              cities?.map((item)=>{
                return(<>
                <p className='font-semibold text-xl'>{item}</p>
                </>)
              })
            }
          </div>

          </div>
    </>
  )
}

export default Destinationcity;