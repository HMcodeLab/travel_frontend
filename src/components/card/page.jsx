import Card1 from '../../../public/card1.png'
import Moon from '../../../public/Icons/moon.svg'
import Sun from '../../../public/Icons/sun.svg'
import Hotel from '../../../public/Icons/hotel.svg'
import Guide from '../../../public/Icons/guide.svg'
import Meals from '../../../public/Icons/meals.svg'
import Sight from '../../../public/Icons/sight.svg'
import Star from '../../../public/Icons/star.svg'
import Call from '../../../public/Icons/cardphone.svg'
import Wtsp from '../../../public/Icons/cardwhatsapp.svg'
import Image from 'next/image'
import Link from 'next/link'
const Cards = () => {
  return (
   <>
   <div className='rounded-lg flex flex-col shadow-lg bg-[#F4F4F4] pb-5'>
      <div className='relative h-[33vh] w-full rounded-t-sm'>
        <Image src={Card1} className="h-full"/>
        <div className='w-full flex justify-between absolute top-0 text-white p-3' >
          <span className='flex items-center bg-black px-2 rounded gap-1'>5 <Image src={Moon}/> / 6 <Image src={Sun}/></span>
          <span className='bg-gradient-to-r from-[#010080] to-[#BC000B] text-white px-2 rounded'>Best Sale!</span>
        </div>
      </div>
      <div className='border-l-[3px] border-r-[3px] border-[#CA1C26] px-2 font-bold text-lg py-2 cardtitle ' >Thrilling Ladakh by Volvo Thrilling Ladakh by Volvo  </div>
      
      <div className='flex flex-col gap-4 px-3'>
      <div className='flex justify-between  items-center mt-3 font-int'>
        <div className='flex items-center gap-1 text-xs font-semibold'><Image src={Hotel}/>Hotel Stay</div>
        <div className='flex items-center gap-1 text-xs font-semibold'><Image src={Meals}/>Meals</div>
        <div className='flex items-center gap-1 text-xs font-semibold'><Image src={Guide}/>Tour Guide</div>
        <div className='flex items-center gap-1 text-xs font-semibold'><Image src={Sight}/>Sightseeing</div>
      </div>

      <div className='w-full flex justify-between items-center '>
          <div className='flex items-center gap-1'>
            <p className='font-bold text-xl '>₹20,700/-</p>
            <strike className="text-[#5F5D5D] text-sm font-semibold">₹22,700/-</strike>
          </div>
          <div className='flex items-center gap-1'>
            <Image src={Star}/>
            <p className='font-semibold '>4.3</p>
            <p className='text-[#969191] text-xs'>(234)</p>
          </div>
      </div>
      <div className='flex justify-between items-center h-9'>
          <Link href='/' className='uppercase bg-[var(--primary)] text-white rounded px-5 h-full text-center flex items-center justify-center'>Explore now</Link>
          <div className='flex items-center divide-x-[1.5px] divide-[var(--primary)] gap-1 border-2 border-[var(--primary)] rounded h-full'>
          <Image src={Call} className='p-1'/>
          <Image src={Wtsp} className=' border-[var(--primary)] '/>
          </div>
      </div>
      </div>
   </div>
   </>
  )
}

export default Cards