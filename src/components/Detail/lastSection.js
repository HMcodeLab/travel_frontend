import Image from 'next/image'
import React from 'react'
 
import Cards from '../card/page'
import styles from './page.module.css'

const LastSection = ({ data }) => {
    
    return (
        <div className='w-full flex justify-between xsm:flex-col xsm:overflow-hidden'>
            <div className='flex flex-col w-[30%]  flex-wrap gap-3 xsm:w-[80%]'>
                <div className='uppercase border-l-4 border-[var(--primary)]  font-bold text-2xl  flex flex-wrap pl-1 w-[80%] xsm:w-[90%] '>
                    <p className='lastsection_left_heading'>Trending, Best Selling <span className='text-[var(--primary)]'>Tours</span> And Fun <span className='text-[var(--primary)]'>Destinations</span></p>
                </div>
                <p className='text-[#494545] xsm:hidden lastsection_left_para'>
                    <span>Ready to explore the hottest spots of the year? Our trending and fun-filled destinations are waiting for you! Whether you crave the vibrant nightlife of Goa, the serene beauty of North East, or the cultural treasures of Himachal, we have the perfect destination to match your travel dreams.</span>
                    <span>Dive into thrilling activities, enjoy mouth-watering local cuisines, and immerse yourself in unique cultural experiences. Our curated travel packages ensure you experience the best each destination has to offer, from must-see attractions to hidden gems off the beaten path.</span>
                    <span>Don't miss out on the excitement! Check out our trending destinations and start planning your next fun-filled adventure today. Your perfect getaway is just a click away!</span>
                    </p>
            </div>
            <div className={`flex h-fit justify-between ${styles.card_main}`}>
                {
                    data?.data?.slice(0, 4).map((val, ind) => {
                        return (
                            <div className='w-[50%]' key={ind}>
                                <Cards val={val} />
                            </div>


                        )
                    })
                }
                </div>
        </div >
    )
}

export default LastSection



