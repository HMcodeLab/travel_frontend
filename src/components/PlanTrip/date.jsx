import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

import Commonheader from './commonheader';
import Smallsun from '../../../public/Icons/smallsun.svg';

const DateComponent = () => {
  const [date, setDate] = useState(new Date());

  const months = [
    {
      month: "may",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: false,
      border: '#CA1C261F',
    },
    {
      month: "june",
      min: "15°",
      max: "24°",
      color: "#C5C4FE36",
      icon: Smallsun,
      special: false,
      border: '#CA1C261F',
    },
    {
      month: "july",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: false,
      border: '#CA1C261F',
    },
    {
      month: "august",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: true,
      border: '#CA1C261F',
    },
    {
      month: "september",
      min: "15°",
      max: "24°",
      color: "#C5C4FE36",
      icon: Smallsun,
      special: false,
      border: '#CA1C261F',
    },
    {
      month: "october",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: false,
      border: '#CA1C261F',
    },
    {
      month: "november",
      min: "15°",
      max: "24°",
      color: "#D9FBF9B2",
      icon: Smallsun,
      special: false,
      border: '#B2FFFA8A',
    },
    {
      month: "december",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: true,
      border: '#CA1C261F',
    },
    {
      month: "january",
      min: "15°",
      max: "24°",
      color: "#D9FBF9B2",
      icon: Smallsun,
      special: false,
      border: '#B2FFFA8F',
    },
    {
      month: "february",
      min: "15°",
      max: "24°",
      color: "#C5C4FE54",
      icon: Smallsun,
      special: false,
      border: '#CA1C261F',
    },
    {
      month: "march",
      min: "15°",
      max: "24°",
      color: "#FF9FA554",
      icon: Smallsun,
      special: false,
      border: '#CA1C261F',
    },
    {
      month: "april",
      min: "15°",
      max: "24°",
      color: "#D9FBF9B2",
      icon: Smallsun,
      special: false,
      border: '#B2FFFA8F',
    },
  ];

  return (
    <div className='pl-14 pt-14'>
      <Commonheader />
      <div className='flex flex-col mt-8'>
        <p className='capitalize font-[500] font-Merri-sans text-xl'>When is your departure date?</p>
        <div className='flex justify-center w-full mt-10'>
          <Calendar
          className='rounded font-semibold'
            onChange={setDate}
            value={date}
          />
        </div>
      </div>
    </div>
  );
};

export default DateComponent;
