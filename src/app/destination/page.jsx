import Destinationherosection from '@/components/destinationherosection/page'
import Discount from '@/components/discount/page'
import RequestCall from '@/components/requestcall/page'
import Trending from '@/components/trending/page'
import React from 'react'

const Destination = () => {
  return (<>
   
   <Destinationherosection/>
   <div className='px-[var(--padding-inline)] flex flex-col gap-10'>
   <Discount/>
   <Trending/>
   <RequestCall/>
   </div>
   </>)
}
export default Destination;