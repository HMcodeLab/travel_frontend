import React, { useContext } from 'react'
import  './plantrip.css'
import Search from '../../../public/Icons/search.svg'
import Image from 'next/image'
import { Tripprovider } from './page'
const Cities = () => {
  const cities=["Manali","Kasol","Shimla","Delhi","Bangalore"]
  const {headerdata,setheaderdata,setrender}=useContext(Tripprovider)
  function handleItem(item){
    setheaderdata((prevItems) => [...prevItems, item])
    setrender('month')
  }
  return (
    <>
              <div className='flex items-center uppercase font-bold text-2xl w-full justify-center font-Merri-sans gap-1 mt-8 '>
                <p>Where are </p>
                <p className='text-[var(--primary)]'>You Planning</p>
                <p>To Go ?</p>
              </div>
            
          <div className='relative w-full flex pl-14 h-8 mt-8 '>
              <Image src={Search} className='absolute top-2 left-16 h-5 w-6'/>
              <input className='w-[60%] rounded pl-9 focus:outline-none' placeholder='Pick your destination'/>
          </div>
          <div className='flex flex-col gap-5 pl-20 mt-5 font-Merri-sans'>
            {
              cities?.map((item)=>{
                return(<>
                <p className='font-semibold text-xl cursor-pointer' onClick={()=>handleItem(item)}>{item}</p>
                </>)
              })
            }
          </div>
    </>
  )
}

export default Cities