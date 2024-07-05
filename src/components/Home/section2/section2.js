import React from 'react'
import styles from './section2.module.css'
import CommonHeading from '../commonHeading'
import Section2Cards from './section2cards'

const Section2 = () => {
    const tl = <h3>Top Trending <br /><span>Destinations </span>  For You
    </h3>
    return (
        <div className={styles.main_container}>
            <CommonHeading
                title={tl}
                description={
                    <>
                   <span>Ready to discover the most sought-after travel spots of the year? Our top trending destination tour packages offer unparalleled experiences, curated to perfection for the modern explorer. From the pristine beaches of Bali to the vibrant streets of Tokyo, each package is designed to immerse you in the unique culture, stunning landscapes, and unforgettable adventures these destinations have to offer.</span>   
                   
                    </>
                   
                }
                bottomDescription={
                    <>
                    <span>Whether you're craving a tropical getaway, a cultural escapade, or an urban adventure, our expertly crafted itineraries cater to every traveler's dream. Enjoy luxury accommodations, guided tours, and exclusive access to local attractions, ensuring a hassle-free and memorable journey. </span>
                    <span>Embark on a journey to the hottest destinations of the year and make memories that will last a lifetime. Book your dream tour package today and let us turn your travel aspirations into reality!</span>
                    </>
                }
            />

            <Section2Cards />
        </div>
    )
}

export default Section2