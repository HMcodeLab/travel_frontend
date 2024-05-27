import React from 'react'
import Commonheader from './commonheader'
import Smallsun from '../../../public/Icons/smallsun.svg'
import Favourite from '../../../public/Icons/favourite.svg'
import Flower from '../../../public/Icons/flower.svg'
import Snow from '../../../public/Icons/Snow.svg'

import Image from 'next/image'
const Staycount = () => {
   const Holidays=[
    {
        title:'3-4 Nights',
        color:'#FF9FA554',
        border:'#CA1C261F',
        special:false
    },
    {
        title:'5-6 Nights',
        color:'#C5C4FE36',
        border:'#CA1C261F',
        special:true
    },
    {
        title:'7-8 Nights',
        color:'#FF9FA554',
        border:'#CA1C261F',
        special:false
    },
    {
        title:'6-5 Nights',
        color:'#FFE5B254',
        border:'#CA1C261F',
        special:true
    },
   ]
  return (
    <>
   <div className='pl-14 pt-14'>
         <Commonheader/>
         <div className='flex flex-col mt-8'>
            <p className='capitalize font-[500] font-Merri-sans text-xl'>What is the duration of your holiday?</p>
            <div className='grid grid-cols-6 gap-3 pr-3 mt-12'>
                {
                    Holidays.map((item)=>{
                        return(<>
                        <div className={`h-[137px] w-[130px] relative  rounded ` } style={{backgroundColor:item.color,border:`1px solid ${item.border}`}}>
                        {   
                        item.special &&
                        <div className=' absolute top-0 right-0'>
                            <Image src={Favourite}/>
                        
                        </div>
                           }
                            <div className='flex justify-center items-center  h-full   w-full'>
                                    <p className='text-center font-[500] text-lg font-Merri-sans capitalize'>{item.title}</p>
                             </div>
                        </div>
                        </>)
                    })
                }
                
            </div>
         </div>
   </div>
    </>
  )
}

export default Staycount;