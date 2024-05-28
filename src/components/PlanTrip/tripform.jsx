import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

import Commonheader from './commonheader';
import User from '../../../public/Icons/usericon.svg';
import Phone from '../../../public/Icons/phoneicon.svg';
import Email from '../../../public/Icons/emailicon.svg';

const Tripform = () => {
  return (
    <div className='pl-14 pt-14'>
      <Commonheader />
      <div className='flex flex-col mt-8'>
        <p className='capitalize font-[500] font-Merri-sans text-xl'>Enter your details to personalise your trip</p>
        <div className='flex flex-col gap-5 w-[40%] font-Merri-sans pt-5'>
            <div className='relative '>
                <Image className='absolute top-2 left-5 ' src={User}/>
                <input  type="text" className='w-full h-10 pl-14 focus:outline-none rounded border border-[#E4E4E4]' placeholder='Name'/>
            </div>
            <div className='relative '>
                <Image className='absolute top-2 left-5 ' src={Phone}/>
                <input  type="number" className='w-full h-10 pl-14 focus:outline-none rounded border border-[#E4E4E4]' placeholder='Phone No.'/>
            </div>
            <div className='relative '>
                <Image className='absolute top-2 left-5 ' src={Email}/>
                <input  type="text" className='w-full h-10 pl-14 focus:outline-none rounded border border-[#E4E4E4]' placeholder='Email'/>
            </div>
            <button className='bg-[#CA1C26] py-2 px-4 w-[35%] rounded text-white font-Merri-sans'>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Tripform;
