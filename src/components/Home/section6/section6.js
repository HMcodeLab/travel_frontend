'use client'
import React, { useContext, useEffect } from 'react'
import styles from './section6.module.css'
import Cards from '@/components/card/page'
import CommonHeading from '../commonHeading'
import { GlobalProvider } from '@/app/layout'

const Section6 = () => {
    const tl = <h3>Explore Our <br /> Best <span>Holiday Packages</span>
    </h3>
    const { Fetchcards, CardsData } = useContext(GlobalProvider)
    
    let {data}=CardsData
    if(!data){
        return <h1>loading</h1>
    }
    
    let reversed=[...data].reverse()
    return (
        <div> <CommonHeading title={tl} description={
            <>
            <span>Looking for your next unforgettable getaway? Look no further! Our best-selling holiday packages offer everything you need for a perfect vacation. From the stunning beaches of the Maldives to the cultural wonders of Europe, our top-rated packages are crafted to deliver exceptional experiences and unparalleled value.</span>
           
            </>
        } 
        bottomDescription={
            <>
             <span>Indulge in luxury accommodations, savor exquisite cuisines, and enjoy expertly guided tours that bring each destination to life. Whether you're planning a romantic escape, a family adventure, or a solo exploration, our best-selling packages are designed to cater to your every need.</span>
             <span>Don't miss out on these popular picks! Check out our best-selling holiday packages now and book the vacation of your dreams. Your perfect holiday is just a click away!</span>
            </>
        }
        />
            <div className={styles.all_cards_main}>
                {
                    reversed?.map((val, ind) => {
                        return (
                            <Cards key={ind} val={val} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Section6