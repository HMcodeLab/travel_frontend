'use client'
import React,{useContext, useEffect} from 'react'
import styles from './section6.module.css'
import Cards from '@/components/card/page'
import CommonHeading from '../commonHeading'
import { GlobalProvider } from '@/app/layout'

const Section6 = () => {
    const tl = <h3>Top Trending <br /> <span>Destination</span>  For You
    </h3>
    const {Fetchcards,CardsData}=useContext(GlobalProvider)
    // console.log(CardsData);
    
    return (
        <div> <CommonHeading title={tl} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, modi? Lorem, ipsum dolor."} />
            <div className={styles.all_cards_main}>
                {
                    CardsData?.map((val, ind) => {
                        return (
                            <Cards val={val}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Section6