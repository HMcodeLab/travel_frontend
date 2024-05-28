import Image from 'next/image'
import React from 'react'
import Plane from '../../../public/Icons/plane.svg'

const Commonheader = () => {
  return (
    <div className='flex flex-col gap-3 pr-3'>
        <p className='text-xl font-Merri-sans font-semibold '>NOW PLANNING YOUR HOLIDAY TO</p>
        <div className='grid grid-cols-6 gap-2'>
            <div className='flex flex-col gap-3'>
                <div className='border border-[#CA1C2654] rounded flex items-center gap-2  p-1 '>
                        <Image src={Plane}/>
                        <span className='font-[500] text-[#171717] text-lg font-Merri-sans'>Manali</span>
                </div>
                <div className='h-[6px] bg-[var(--primary)]'></div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='border border-[#CA1C2654] rounded flex items-center gap-2  p-1 '>
                        <Image src={Plane}/>
                        <span className='font-[500] text-[#171717] text-lg font-Merri-sans'>Manali</span>
                </div>
                <div className='h-[6px] bg-[#FCBFC2]'></div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='border border-[#CA1C2654] rounded flex items-center gap-2  p-1 '>
                        <Image src={Plane}/>
                        <span className='font-[500] text-[#171717] text-lg font-Merri-sans'>Manali</span>
                </div>
                <div className='h-[6px] bg-[#FCBFC2]'></div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='border border-[#CA1C2654] rounded flex items-center gap-2  p-1 '>
                        <Image src={Plane}/>
                        <span className='font-[500] text-[#171717] text-lg font-Merri-sans'>Manali</span>
                </div>
                <div className='h-[6px] bg-[#FCBFC2]'></div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='border border-[#CA1C2654] rounded flex items-center gap-2  p-1 '>
                        <Image src={Plane}/>
                        <span className='font-[500] text-[#171717] text-lg font-Merri-sans'>Manali</span>
                </div>
                <div className='h-[6px] bg-[#FCBFC2]'></div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='border border-[#CA1C2654] rounded flex items-center gap-2  p-1 '>
                        <Image src={Plane}/>
                        <span className='font-[500] text-[#171717] text-lg font-Merri-sans'>Manali</span>
                </div>
                <div className='h-[6px] bg-[#FCBFC2]'></div>
            </div>
        </div>
    </div>
  )
}

export default Commonheader