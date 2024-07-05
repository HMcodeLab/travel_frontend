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
        <div> <CommonHeading title={tl} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, modi? Lorem, ipsum dolor."} />
            <div className={styles.all_cards_main}>
                {
                    reversed?.slice(0,9).map((val, ind) => {
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