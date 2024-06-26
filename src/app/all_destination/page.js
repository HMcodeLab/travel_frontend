"use client"

import React, { useContext } from 'react'
import { GlobalProvider } from '../layout'
import Cards from '@/components/card/page'

const All_destination = () => {
    const { Fetchcards, CardsData } = useContext(GlobalProvider)
  return (
      <div className='grid grid-cols-3 gap-[2.5rem] mt-[3vh] px-[10vw]'>
          {
              CardsData?.data?.map((val, ind) => {
                  return (
                      <Cards key={ind} val={val} />
                  )
              })
          }
      </div>
  )
}

export default All_destination