import Image from 'next/image'
import Tge from '../../../public/tge.png'
import Call from '../../../public/Icons/phone.svg'
import Message from '../../../public/Icons/message.svg'
import Fb from '../../../public/Icons/fb.svg'
import Insta from '../../../public/Icons/insta.svg'
import Youtube from '../../../public/Icons/youtube.svg'

import './footer.css'
const Footer = () => {
  return (
<>
<div className="w-full h-[60vh] footerbg  flex justify-center mt-10 ">
   <div className='w-full h-full flex flex-col justify-around '>
   <div className='flex flex-col h-[80%] w-[80%] bg-[#CFCFEE2E] backdrop-blur-sm rounded-3xl shadow-md mx-auto'>
        <div className='w-28 h-20 mx-auto -translate-y-8'>
            <Image src={Tge}/>
        </div>

        <div className='flex justify-between px-10 items-center'>
            <div className='flex justify-between w-[60%] '>
                <div className='pr-5 border-r-[2px] flex flex-col gap-3 '>
                    <p className='text-[18px] font-semibold'>ABOUT TGE</p>
                    <p>About us</p>
                    <p>Support</p>
                    <p>Copyright Policies</p>
                    <p>Privacy</p>
                </div>
                <div className='pr-5 border-r-[2px] flex flex-col gap-3'>
                    <p className='text-[18px] font-semibold capitalize'>IMPORTANT LINKS</p>
                    <p>Refund Policy</p>
                    <p>Teams & Conditions</p>
                    <p>Posts</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-[18px] font-semibold '>CONTACT US </p>
                    <p className='flex items-center gap-1'>
                        <Image src={Call}/>
                        <span>+91 67535 57043</span>
                    </p>
                    <p className='flex items-center gap-1'>
                        <Image src={Message}/>
                        <span>tourwithtge23@gmail.com</span>
                    </p>
                    <p className='flex gap-4'>
                        <Image src={Fb}/>
                        <Image src={Insta}/>
                        <Image src={Youtube}/>
                    </p>
                </div>
            </div>

            <div>
                <p className='text-[#595858] text-xl font-semibold'>Travel Destinations</p>
                <div className='grid grid-cols-3 gap-2'>
                    <div className='flex justify-center items-center w-24 h-20 beaches text-white ' >
                    Beaches
                    </div>
                    <div className='flex justify-center items-center w-24 h-20 bali text-white' >
                    Bali
                    </div>
                    <div className='flex justify-center items-center w-24 h-20 prague text-white' >
                    Prague
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-2 mt-2'>
                    <div className='flex justify-center items-center w-24 h-20 usa text-white' >
                    USA
                    </div>
                    <div className='flex justify-center items-center w-24 h-20 china text-white' >
                    China
                    </div>
                    <div className='flex justify-center items-center w-24 h-20 paris text-white' >
                    Paris
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='text-center text-[#838282] font-semibold '>© 2024 TGE ALL RIGHTS RESERVED.</div>
   </div>
</div>
</>
  )
}

export default Footer