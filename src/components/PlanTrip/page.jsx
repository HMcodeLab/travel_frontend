"use client"
import React, { createContext, useState } from 'react'
import Cities from './choosecity'
import Cross from '../../../public/Icons/cross.svg'
import Image from 'next/image'
import Month from './month'
import Date from './date'
import Destinationcity from './departcity'
import Staycount from './staycount'
import Peopletype from './peopletype'
import Tripform from './tripform'
export const Tripprovider=createContext()
const Index = () => {
  const [render, setrender] = useState('cities')
  const [headerdata, setheaderdata] = useState([])
// console.log(headerdata);
  return (
    <>
    <div className='w-full flex justify-end absolute top-0 z-50 bg-[#00000080]'>
    <div className='h-[100vh] w-[65vw] plantrip pt-2'>
    <div className='h-12 w-12 rounded-full bg-[#FADDDD] flex justify-center items-center p-1 fixed right-2 top-2'>
                <Image src={Cross} alt='cross'/>
    </div>
    <Tripprovider.Provider value={{headerdata,setheaderdata,setrender}} >
    {
      render=='cities' ? <Cities /> : render=='month' ? <Month /> : render=='date' ? <Date/> : render=='destination' ? <Destinationcity/> : render=='staycount' ? <Staycount/> : render=='peopletype' ? <Peopletype/> : render=='form' ? <Tripform/> :''
    }
    </Tripprovider.Provider>
    </div>
    </div>
    </>
  )
}

export default Index