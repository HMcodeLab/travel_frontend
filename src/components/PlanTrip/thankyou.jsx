'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Thankyou = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }, [router])

  return (
    <div className='fixed top-0 h-screen w-full flex justify-center items-center z-50 bg-[#00000090]'>
      <div className='flex flex-col h-[50vh] w-[40vw] bg-white items-center justify-center gap-5 rounded'>
        <span className='flex flex-col uppercase text-3xl w-full justify-center items-center font-bold gap-2'>
          <p>Thank You for</p>  
          <div className='flex items-center gap-2'>
            <p className='text-[#CA1C26]'>Booking</p>
            <p>with</p>
            <p className='text-[#CA1C26]'>Us!</p>
          </div>
        </span>
        <div className='px-5 font-semibold text-center'>
          Thank you for your reservation. We’re dedicated to giving you the best experience possible. If you have any questions, feel free to get in touch.
        </div>
      </div>
    </div>
  )
}

export default Thankyou
