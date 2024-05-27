import React from 'react'
import styles from './section6.module.css'
import Cards from '@/components/card/page'
import CommonHeading from '../commonHeading'

const Section6 = () => {
    const tl = <h3>Top Trending <br /> <span>Destination</span>  For You
    </h3>
    return (
        <div> <CommonHeading title={tl} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, modi? Lorem, ipsum dolor."} />
            <div className={styles.all_cards_main}>
                {
                    [1, 1, 1, 1, 1, 1].map((val, ind) => {
                        return (
                            <Cards />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Section6