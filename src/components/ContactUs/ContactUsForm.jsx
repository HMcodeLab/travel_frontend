'use client'
import React, { useState } from 'react'
import './ContactUs.css';
import toast, { Toaster } from 'react-hot-toast';
 

const ContactUsForm = () => {
    let [user, setUser] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    })
    let [errors, setErrors] = useState({})

    const getUserInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: '' })
    }

    const errorHandler = () => {
        let { name, email, mobile } = user
        let valid = true
        let errorFields = {}
        if (!name) {
            valid = false
            errorFields.name = 'name is required'
        }
        if (!email) {
            valid = false
            errorFields.email = 'email is required'
        }
        if (!mobile) {
            valid = false
            errorFields.mobile = 'mobile is required'
        } else if (mobile.length !== 10) {
            valid = false
            errorFields.mobile = 'max length is 10'
        }

        setErrors(errorFields)
        return valid

    }

    const submitHandler = async () => {
        if (errorHandler()) {

            let formdata = new FormData()
            formdata.append('name', user.name)
            formdata.append('email', user.email)
            formdata.append('mobile', user.mobile)
            formdata.append('message', user.message)
            formdata.append('adminEamil', 'sales@eligocs.com')


            try {
                let resp = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/query/savequery`, {
                    method: 'POST',
                    body: formdata
                })
                let data=await resp.json()
                
                if (data.status) {
                   
                    toast.success(data.msg)
                    console.log(resp)

                    setUser({
                        name: '',
                        email: '',
                        mobile: '',
                        message: '',
                    })
                    setErrors({})

                }

            } catch (error) {
                toast.error('query not saved')
            }

        }
    }


    return (
        <>
        <Toaster/>
        <div className='ContactUsForm-Bg-Img w-[57%] xsm:w-full'>
            <div className='pl-[22%] pt-16 pr-[8%] pb-16 font-[Merriweather-Sans] flex flex-col gap-16 xsm:pt-12 xsm:px-[5%] xsm:gap-8 xsm:pb-10'>
                {/* form */}
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-3 xsm:gap-1'>
                        <p className='uppercase text-[21.5px] pl-1 xsm:text-[15px]'>Name</p>
                        <input type="text" name="name" id="" className='bg-transparent border-b-[2px] border-[#CA1C2682] w-full outline-none py-2 pl-2 xsm:text-[13px] xsm:py-1' value={user.name} onChange={getUserInput} />
                        {errors.name && <span className="errors">{errors.name}</span>}
                    </div>
                    <div className='flex flex-col gap-3 xsm:gap-1'>
                        <p className='uppercase text-[21.5px] pl-1 xsm:text-[15px]'>Email Id </p>
                        <input type="email" name="email" id="" className='bg-transparent border-b-[2px] border-[#CA1C2682] w-full outline-none py-2 pl-2 xsm:text-[13px] xsm:py-1' value={user.email} onChange={getUserInput} />
                        {errors.email && <span className="errors">{errors.email}</span>}
                    </div>
                    <div className='flex flex-col gap-3 xsm:gap-1 CUNumber'>
                        <p className='uppercase text-[21.5px] pl-1 xsm:text-[15px]'>Phone No.</p>
                        <input type="number" name="mobile" id="" className='bg-transparent border-b-[2px] border-[#CA1C2682] w-full outline-none py-2 pl-2 xsm:text-[13px] xsm:py-1' value={user.mobile} onChange={getUserInput} />
                        {errors.mobile && <span className="errors">{errors.mobile}</span>}
                    </div>
                    <div className='flex flex-col gap-3 xsm:gap-1'>
                        <p className='uppercase text-[21.5px] pl-1 xsm:text-[15px]'>Message.</p>
                        <textarea name="message" id="" className='bg-transparent border-b-[2px] border-[#CA1C2682] w-full outline-none py-2 pl-2 xsm:text-[13px] xsm:py-1' value={user.message} onChange={getUserInput} />
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <button className='bg-[#CA1C26] text-white uppercase font-int font-semibold text-[22px] px-[50px] py-[10px] rounded-sm xsm:text-[13px] xsm:px-7 xsm:py-[6px]' onClick={submitHandler}>SUBMIT</button>
                    <div className='flex items-center gap-4 xsm:gap-2'>
                        <div className='bg-[#CA1C26] rounded-full p-[10px] xsm:p-[6px]'>
                            <img className='w-5 h-5 xsm:w-3 xsm:h-3' src={'/Assets/Icons/CUfacebook.svg'} alt="" />
                        </div>
                        <div className='bg-[#CA1C26] rounded-full p-[10px] xsm:p-[6px]'>
                            <img className='w-5 h-5 xsm:w-3 xsm:h-3' src={'/Assets/Icons/CUInsta.svg'} alt="" />
                        </div>
                        <div className='bg-[#CA1C26] rounded-full p-[10px] xsm:p-[6px]'>
                            <img className='w-5 h-5 xsm:w-3 xsm:h-3' src={'/Assets/Icons/CUYoutube.svg'} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ContactUsForm