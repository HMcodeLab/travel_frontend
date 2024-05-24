import Image from 'next/image'
import React from 'react'
import Wtsp from '../../../public/Icons/Whatsapp.svg'

const RequestCall = () => {
  return (
    <>
    <div className='flex w-full justify-between'>
        <p className='w-[40%]'>Affordable <strong>adventures</strong>, our Pocket Friendly Guarantee ensures unforgettable <span className='font-semibold text-[var(--primary)]'>budget-friendly tours.</span></p>

        <div className='flex items-center h-12 gap-14'>
            <button className='bg-[var(--primary)] text-white px-10 h-full rounded'>Request To Call</button>
            <Image src={Wtsp} className='h-full w-16 bg-[#64B161] p-2 rounded'/>
        </div>
    </div>
    </>
  )
}

export default RequestCall