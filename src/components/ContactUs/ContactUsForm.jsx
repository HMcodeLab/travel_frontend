import React from 'react'
import './ContactUs.css';

const ContactUsForm = () => {
  return (
    <div className='ContactUsForm-Bg-Img w-[57%]'>
        <div className='pl-[22%] pt-16 pr-[8%] pb-16 font-[Merriweather-Sans] flex flex-col gap-16'>
            {/* form */}
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-3'>
                    <p className='uppercase text-[21.5px] pl-1'>Name</p>
                    <input type="text" name="" id="" className='bg-transparent border-b-[2px] border-[#CA1C2682] w-full outline-none py-2 pl-2'/>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='uppercase text-[21.5px] pl-1'>Email Id </p>
                    <input type="email" name="" id="" className='bg-transparent border-b-[2px] border-[#CA1C2682] w-full outline-none py-2 pl-2'/>
                </div>
                <div className='flex flex-col gap-3 CUNumber'>
                    <p className='uppercase text-[21.5px] pl-1'>Phone No.</p>
                    <input type="number" name="" id="" className='bg-transparent border-b-[2px] border-[#CA1C2682] w-full outline-none py-2 pl-2'/>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='uppercase text-[21.5px] pl-1'>Message.</p>
                    <textarea type="email" name="" id="" className='bg-transparent border-b-[2px] border-[#CA1C2682] w-full outline-none py-2 pl-2'/>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <button className='bg-[#CA1C26] text-white uppercase font-int font-semibold text-[22px] px-[50px] py-[10px] rounded-sm'>SUBMIT</button>
                <div className='flex items-center gap-4'>
                    <div className='bg-[#CA1C26] rounded-full p-[10px]'>
                        <img className='w-5 h-5' src={'/Assets/Icons/CUfacebook.svg'} alt="" />
                    </div>
                    <div className='bg-[#CA1C26] rounded-full p-[10px]'>
                        <img className='w-5 h-5' src={'/Assets/Icons/CUInsta.svg'}  alt="" />
                    </div>
                    <div className='bg-[#CA1C26] rounded-full p-[10px]'>
                        <img className='w-5 h-5' src={'/Assets/Icons/CUYoutube.svg'}  alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUsForm