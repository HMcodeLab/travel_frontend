'use client'
import Allcards from '@/components/Allcards/page'
import Destinationherosection from '@/components/destinationherosection/page'
import Discount from '@/components/discount/page'
import RequestCall from '@/components/requestcall/page'
import Trending from '@/components/trending/page'
import React, { useRef } from 'react'

const Destination = () => {
  const componentBRef = useRef(null);
  const scrollToComponentB = () => {
    componentBRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (<>
   
   <Destinationherosection scrollToComponentB={scrollToComponentB}/>
   <div className='px-[var(--padding-inline)] flex flex-col gap-10'>
    <Allcards ref={componentBRef}/>
   <Discount/>
   <Trending/>
   <RequestCall/>
   </div>
   </>)
}
export default Destination;