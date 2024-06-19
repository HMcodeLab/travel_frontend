import ActivitiesPackages from '@/components/ActivitiesPackages/ActivitiesPackages'
import HeroSection from '@/components/Hero/herosection'
import MorphBanner from '@/components/Home/MorphBanner/morphBanner'
import Section7 from '@/components/Home/section7/section7'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroSection />
        <ActivitiesPackages/>
        <div className='px-[169px] py-14 xsm:px-[15px] xsm:py-6' >
            <MorphBanner />
        </div>
        <Section7 />
    </div>
  )
}

export default page