import React from 'react'
import styles from './section4.module.css'
import Section4Cards from './section4cards'
import CommonHeading from '../commonHeading'
import Link from 'next/link'

const Section4 = () => {
    const tl = <h3>Trending, Best Selling <br /> <span>Tours</span>  And Fun <span>Destinations</span>
    </h3>
    return (<>
        <div>
            <CommonHeading
                title={tl}
                description={
                    <>
                        <span>Unleash your wanderlust with our top-rated, best-selling tours! Dive into the heart of adventure with trips designed to thrill, inspire, and delight. From the sun-kissed beaches to the bustling High Serene mountain views, our tours promise unforgettable experiences at every turn.</span>
                    </>
                }
                bottomDescription={
                    <>
                        <span>Perfect for families, couples, and solo adventurers, our carefully curated packages include exhilarating activities, guided explorations, and ample free time to soak in the local charm. Picture yourself exploring ancient ruins, savoring exotic cuisines, and lounging in luxurious accommodations – all part of the unbeatable experiences we offer.</span>
                        <span>Join the ranks of our satisfied travelers and see why these destinations are favorites worldwide. Book your adventure today and create memories that will last a lifetime!</span>
                    </>
                }
            />
            <Section4Cards />
        </div>

    </>)
}

export default Section4