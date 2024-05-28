import React from 'react'
import './ActivitiesPackages.css'

const ActivitiesPackages = () => {
  return (
    <div className='px-[169px] py-6 flex flex-col gap-8'>
        <div className='flex justify-between'>
            <div className='w-[40%]'>
                <p className='font-[Merriweather_Sans] border-l-4 border-[#CA1C26] pl-3 uppercase text-[24px] font-bold tracking-wider'>Explore Our <br /> Best <span className='text-[#CA1C26]'>Activities Packages</span></p>
            </div>
            <div className='w-[43%]'>
                <p className='text-[#494545] text-[15px] text-balance font-[Exo]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis Theme natoque. Aenean massa cum sociis Theme natoque.</p>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-3'>
            <div className='activity-card1 h-[600px] flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden'>
                <div className='relative z-10 flex items-center gap-2'>
                    <p className='uppercase text-[20px] font-normal tracking-wider'>Rock Climbing</p>
                    <img className='w-8 h-8' src='/Assets/Icons/activityleaf.svg' alt='' />
                </div>
                <p className='relative z-10 text-[12px] capitalize'>Let us look at some of the popular adventure sports in Himachal Pradesh that take the state by storm</p>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='h-[33%] activity-card3a flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden'>
                    <div className='relative z-10 flex items-center gap-2'>
                        <p className='uppercase text-[20px] font-normal tracking-wider'>Hiking</p>
                        <img className='w-8 h-8' src='/Assets/Icons/activityleaf.svg' alt='' />
                    </div>
                    <p className='relative z-10 text-[12px] capitalize'>Let us look at some of the popular adventure sports in Himachal Pradesh that take the state by storm</p>
                </div>
                <div className='h-[33%] activity-card3b flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden'>
                    <div className='relative z-10 flex items-center gap-2'>
                        <p className='uppercase text-[20px] font-normal tracking-wider'>Hiking</p>
                        <img className='w-8 h-8' src='/Assets/Icons/activityleaf.svg' alt='' />
                    </div>
                    <p className='relative z-10 text-[12px] capitalize'>Let us look at some of the popular adventure sports in Himachal Pradesh that take the state by storm</p>
                </div>
                <div className='h-[33%] activity-card3c flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden'>
                    <div className='relative z-10 flex items-center gap-2'>
                        <p className='uppercase text-[20px] font-normal tracking-wider'>Hiking</p>
                        <img className='w-8 h-8' src='/Assets/Icons/activityleaf.svg' alt='' />
                    </div>
                    <p className='relative z-10 text-[12px] capitalize'>Let us look at some of the popular adventure sports in Himachal Pradesh that take the state by storm</p>
                </div>
            </div>
            <div className='activity-card2 h-[600px] flex font-[Merriweather_Sans] flex-col justify-end text-white rounded-md px-4 py-6 relative overflow-hidden'>
                <div className='relative z-10 flex items-center gap-2'>
                    <p className='uppercase text-[20px] font-normal tracking-wider'>Rock Climbing</p>
                    <img className='w-8 h-8' src='/Assets/Icons/activityleaf.svg' alt='' />
                </div>
                <p className='relative z-10 text-[12px] capitalize'>Let us look at some of the popular adventure sports in Himachal Pradesh that take the state by storm</p>
            </div>
        </div>
    </div>
  )
}

export default ActivitiesPackages