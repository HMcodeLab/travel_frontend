import Link from 'next/link'
import './destination.css'
import Bg from '../../../public/ladakh.jpg'
import Down from '../../../public/Icons/page-down.svg'
import Image from 'next/image'
const Destination = () => {
  return (
    <>
    <div className='h-[70vh] w-full flex justify-center items-center relative'>
        <div className='absolute top-0 w-full h-full'>
            <Image src={Bg} className='brightness-50'/>
        </div>
        <div className='absolute top-[30%] text-white space-y-4'>
            <p className='text-white font-extrabold text-5xl text-center'>Ladakh</p>
            <p className='text-3xl border-b-[1px] border-[#B6B6B696]'>Thrills for Soul and Spirit!</p>
            <p className='flex justify-center text-center gap-1 p-1 font-semibold text-xl'>
                <span>Get upto</span>
                <span className='bg-[#CA1C26B2] px-1'>60% off</span>
            </p>
            <div className='flex justify-center w-full'><Link href='/' className='px-5 py-2 bg-red-700 text-white '>EXPLORE LADAKH</Link></div>
            <div className='flex justify-center w-full '><Image className='translate-y-2 h-16' src={Down}/></div>
        </div>
    </div>
    </>
  )
}

export default Destination