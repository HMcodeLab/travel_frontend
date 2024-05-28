'use client'
import React, { useContext, useState } from 'react'
import Commonheader from './commonheader'
import Favourite from '../../../public/Icons/favourite.svg'
import Solo from '../../../public/Icons/solo.svg'
import Couple from '../../../public/Icons/couple.svg'
import Family from '../../../public/Icons/family.svg'
import Downarrow from '../../../public/Icons/downarrow.svg'
import Group from '../../../public/Icons/group.svg'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Image from 'next/image'
import { Tripprovider } from './page'
const Peopletype = () => {
  const [familygroup, setfamilygroup] = useState('')
  const {headerdata,setheaderdata,setrender}=useContext(Tripprovider)
  function handleItem(item){
    setheaderdata((prevItems) => [...prevItems, item])
    setrender('form')
  }
   const Holidays=[
    {
        title:'Solo',
        icon:Solo,
        color:'#010080',
        border:'#CA1C261F',
        special:false
    },
    {
        title:'Couple',
        icon:Couple,
        color:'#CA1C26',
        border:'#CA1C261F',
        special:true
    },
    {
        title:'Family',
        icon:Family,
        color:'#E0AF00',
        border:'#CA1C261F',
        special:false
    },
    {
        title:'Group',
        icon:Group,
        color:'#814500',
        border:'#CA1C261F',
        special:true
    },
    
   ]

   function handleClick(title){
    setfamilygroup(title)
    if(title!='Family' ||title!='Group' ){
      handleItem(title)
    }
   }
  return (
    <>
   <div className='pl-14 pt-10 relative'>
         <Commonheader />
         <div className='flex flex-col mt-6 '>
            <p className='capitalize font-[550] font-Merri-sans text-xl'>Who is travelling with you?</p>
            <div className='grid grid-cols-5   pr-3 mt-6'>
                {
                    Holidays.map((item)=>{
                        return(<>
                        <div onClick={()=>handleClick(item.title)} className={`h-[140px] w-[130px] relative border border-[#CA1C261F] bg-white rounded ` } >
                        {   
                        item.special &&
                        <div className=' absolute top-0 right-0'>
                            <Image src={Favourite}/>
                        
                        </div>
                           }
                            <div className='flex justify-center items-center  h-full   w-full'>
                                    <div className='flex flex-col gap-1'>
                                      <Image src={item.icon}/>
                                    <p className='text-center font-[500] text-[18px] font-Merri-sans capitalize ' style={{color:item.color}}>{item.title}</p>
                                    </div>
                             </div>
                        </div>
                        </>)
                    })
                }
                
            </div>

          {
           (familygroup=='Family' || familygroup=='Group') ?
          <div className='flex flex-col mt-3'>
                  <p className='font-Merri-sans capitalize font-semibold text-lg'>How many of you are travelling?</p>
                  <p className='text-[#373A3B] capitalize '>Number of rooms</p>
                  <div className='flex justify-between h-8 w-[40%] bg-white items-center pl-3 pr-2'>
                      <p className='text-[#373A3B] capitalize '>1 room, 2 adults</p>
                      <Image src={Downarrow}/>
                  </div>
           
          
           <div className=' w-[40%] bg-white  px-3'>
                    <div className='flex justify-between  font-Merri-sans py-2 border-b'>
                      <p className='font-semibold'> Room</p>
                      <div className='flex items-center gap-2 '>
                        <p  className='h-8 w-8 roombutton rounded-full bg-[#F6F6F6]  shadow-xl text-xl flex justify-center items-center'><FaMinus className='text-[#010080]'/></p>
                        <p>20</p>
                        <p  className='h-8 w-8 roombutton rounded-full bg-[#F6F6F6] shadow-xl  text-xl flex justify-center items-center'><FaPlus className='text-[#010080]'/></p>
                      </div>
                    </div>

                    <div className='flex items-center gap-10 '>
                        <div className='flex flex-col'>
                          <p  className='font-semibold'>Adults(12+)</p>
                          <div className='flex items-center gap-2 '>
                        <p  className='h-8 w-8 roombutton rounded-full bg-[#F6F6F6]  shadow-xl text-xl flex justify-center items-center'><FaMinus className='text-[#010080]'/></p>
                        <p>20</p>
                        <p  className='h-8 w-8 roombutton rounded-full bg-[#F6F6F6] shadow-xl  text-xl flex justify-center items-center'><FaPlus className='text-[#010080]'/></p>
                      </div>
                        </div>
                        <div className='flex flex-col py-2'>
                          <p  className='font-semibold'>Children</p>
                          <div className='flex items-center gap-2 '>
                        <p  className='h-8 w-8 roombutton rounded-full bg-[#F6F6F6]  shadow-xl text-xl flex justify-center items-center'><FaMinus className='text-[#010080]'/></p>
                        <p>20</p>
                        <p  className='h-8 w-8 roombutton rounded-full bg-[#F6F6F6] shadow-xl  text-xl flex justify-center items-center'><FaPlus className='text-[#010080]'/></p>
                      </div>
                        </div>
                    </div>  
                    
                    <div className='w-full flex justify-end pb-1'>
                        <button className='py-1 px-4 rounded bg-[#FFFFFF] text-black border border-[#00000021]'>Done</button>
                    </div>
            </div>
            
            </div>:''
            
          }
           {(familygroup=='Family' || familygroup=='Group') ? <div onClick={()=>handleItem(familygroup)} className='bg-[#CA1C26] text-white px-6 py-2 fixed bottom-10 right-3 rounded-md uppercase'>Continue</div>:''}

            {/* {(familygroup!='Family' && familygroup!='Group') ? <p className='mt-5'>*Avoid more than 3-4 people in each room for lower prices and maximum applicable hotel options</p> :''} */}

         </div>
   </div>
    </>
  )
}

export default Peopletype;