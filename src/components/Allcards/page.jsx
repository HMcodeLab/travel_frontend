import React from 'react'
import Cards from '../card/page'
import Image from 'next/image'
import Pointer from '../../../public/Icons/pointer.svg'
const Allcards =  React.forwardRef(({data}, ref) => {
  
  return (
   <>
   <div ref={ref} className=' text-center font-bold text-3xl  w-fit border-b-4 border-[var(--primary)] mx-auto py-2 font-int'>Explore Ladakh</div>
    <div className='grid grid-cols-3 w-full  gap-[50px]  h-auto bg-[#FAFAFA]'>
  {    
  data?.map((item)=>{
      return(<>
      <Cards val={item}/>
      </>)
})
      }
    </div>
    <div className='w-fit mx-auto flex items-center cursor-pointer'>
        <p className='border-b-2 border-[var(--primary)] font-semibold font-Merri-sans uppercase '>See More</p>
        <Image className='scale-down-center' src={Pointer} alt='...'/>
    </div>
   </>
  )
})

export default Allcards;