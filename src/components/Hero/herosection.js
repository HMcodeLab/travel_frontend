'use client';

import { useState } from 'react';
import styles from './herosection.module.css'
import Image from 'next/image'

const HeroSection = () => {
    const [activeFacility, setactiveFacility] = useState("Tour");
    const [Search, setSearch] = useState(true);
    return (
        <div className={`font-[Merriweather_Sans] ${styles.hero_section}`}>
            <div className={styles.image_container}>
                <Image alt='...' className={styles.image} src={'/Assets/Images/hero_banner.jpg'} height={1000} width={1000} />
            </div>
            <div className={styles.overlay_content}>
                <h2>Empowering Your Travel Dreams</h2>
                <h1>Explore</h1>
                <p className='border-b border-[#CA1C26] text-[1.2rem] text-center'>Curating Unparalleled Travel Experiences, One Journey at a Time</p>
                <div className='grid grid-cols-4 py-4 px-12 gap-6 uppercase text-center'>
                    <div onClick={() => setactiveFacility('Tour')} className={`py-[6px] cursor-pointer ${activeFacility === "Tour" ? 'bg-white text-black rounded-full ':''}`}>
                        <p>Tour</p>
                    </div>
                    <div onClick={() => setactiveFacility('Activities')} className={`py-[6px] cursor-pointer ${activeFacility === "Activities" ? 'bg-white text-black rounded-full ':''}`}>
                        <p>Activities</p>
                    </div>
                    <div onClick={() => setactiveFacility('Flight')} className={`py-[6px] cursor-pointer ${activeFacility === "Flight" ? 'bg-white text-black rounded-full ':''}`}>
                        <p>Flight</p>
                    </div>
                    <div onClick={() => setactiveFacility('Railway')} className={`py-[6px] cursor-pointer ${activeFacility === "Railway" ? 'bg-white text-black rounded-full ':''}`}>
                        <p>Railway</p>
                    </div>
                </div>
                <div className='px-5 z-[9999]'>
                    {/* <div className='bg-[#F6F6F6] rounded-full flex items-center justify-between shadow-md shadow-[#00000021]'>
                        <div className='w-full text-[#848383] flex justify-center text-[14px]'>
                            <p>Search For <span className='text-[#000000]'>Himachal</span></p>
                        </div>
                        <div className='w-max bg-[#FFFFFF] p-2 rounded-full my-1 mx-2'>
                            <img className='w-4 h-4' src={'/Assets/Icons/HeroSearch.svg'} alt='...'/>
                        </div>
                    </div> */}


                    {Search ?
                        <div className='bg-[#F6F6F6] rounded-t-3xl rounded-b flex flex-col shadow-lg shadow-[#00000021] absolute z-[9999999]'>
                            <input className='w-full placeholder:text-[#848383] bg-[#F6F6F6] flex justify-center text-[14px] rounded-full pl-16 py-2 shadow-lg shadow-[#00000021] outline-none' placeholder='Search For Destinations...'/>
                            <div className='px-16 py-4'>
                                <div className='flex flex-col gap-3 border-b border-[#DADADA] pb-2'>
                                    <p className='text-black text-[14px]'>Product Type</p>
                                    <div className='flex items-center gap-2 text-[#848181] text-[14px]'>
                                        <div className='bg-white border border-[#EAE6E6] rounded-full px-3 py-1'>
                                            <p>Tour</p>
                                        </div>
                                        <div className='bg-white border border-[#EAE6E6] rounded-full px-3 py-1'>
                                            <p>Activity</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 border-b border-[#DADADA] py-2'>
                                    <p className='text-black text-[14px]'>Trip Durations</p>
                                    <div className='flex items-center gap-3 text-[#848181] text-[14px]'>
                                        <div className='bg-white border border-[#EAE6E6] rounded-full px-3 py-1'>
                                            <p>Upto 1 day</p>
                                        </div>
                                        <div className='bg-white border border-[#EAE6E6] rounded-full px-3 py-1'>
                                            <p>2 to 3 days</p>
                                        </div>
                                        <div className='bg-white border border-[#EAE6E6] rounded-full px-3 py-1'>
                                            <p>5 to 7 days</p>
                                        </div>
                                        <div className='bg-white border border-[#EAE6E6] rounded-full px-3 py-1'>
                                            <p>7 + days</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 border-b border-[#DADADA] py-2'>
                                    <p className='text-black text-[14px]'>Price Range</p>
                                    <div>
                                        {/* Range */}
                                    </div>
                                    <div className='flex gap-2 w-[80%]'>
                                        <div className='flex '>
                                            <div className='bg-[#C1C1C33D] text-[#848282] text-[13px] flex items-center px-2 py-1 border border-[#DDDDDE]'>
                                                <p>Min</p>
                                            </div>
                                            <div className={`bg-[#FFFFFF3D] text-[#000000] text-[13px] flex items-center gap-1 px-2 border border-[#DDDDDE] border-l-0 ${styles.HeroPrice}`}>
                                                <p>INR</p>
                                                <input type='number' placeholder='0' className='bg-[#FFFFFF3D] placeholder:text-[#000000] outline-none w-full'/>
                                            </div>
                                        </div>
                                        <div className='flex '>
                                            <div className='bg-[#C1C1C33D] text-[#848282] text-[13px] flex items-center px-2 py-1 border border-[#DDDDDE]'>
                                                <p>Max</p>
                                            </div>
                                            <div className={`bg-[#FFFFFF3D] text-[#000000] text-[13px] flex items-center gap-1 px-2 border border-[#DDDDDE] border-l-0 ${styles.HeroPrice}`}>
                                                <p>INR</p>
                                                <input type='number' placeholder='0' className='bg-[#FFFFFF3D] placeholder:text-[#000000] outline-none w-full'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-b border-[#DADADA] py-2'>
                                    <div className='flex items-center gap-1 text-[11px] text-[#514E4E]'>
                                        <input type='checkbox' name='confirm' id='confirm'/>
                                        <label htmlFor='confirm'>I want Flights to be Included</label>
                                    </div>
                                </div>
                                <div className='pt-2 flex justify-end'>
                                    <button className='bg-[#CA1C26] text-white uppercase font-int text-[14px] px-4 py-[6px] rounded-sm xsm:text-[13px] xsm:px-7 xsm:py-[6px]'>Search For Trip</button>
                                </div>
                            </div>
                        </div>
                    :   
                        <div className='bg-[#F6F6F6] rounded-full flex items-center justify-between shadow-md shadow-[#00000021]'>
                            <div className='w-full text-[#848383] flex justify-center text-[14px]'>
                                <p>Search For <span className='text-[#000000]'>Himachal</span></p>
                            </div>
                            <div className='w-max bg-[#FFFFFF] p-2 rounded-full my-1 mx-2'>
                                <img className='w-4 h-4' src={'/Assets/Icons/HeroSearch.svg'} alt='...'/>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroSection