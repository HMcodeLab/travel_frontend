import Destinationherosection from '@/components/destinationherosection/page'
import Discount from '@/components/discount/page'
import React from 'react'

const Destination = () => {
  return (<>
   
   <Destinationherosection/>
   <div className='px-[var(--padding-inline)]'>
   <Discount/>
   </div>
   </>)
}
export default Destination;