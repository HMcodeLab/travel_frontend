import React from 'react'
import styles from './herosection.module.css'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div className={styles.hero_section}>
            <div className={styles.image_container}>
                <Image src={'/Assets/Images/hero_banner.jpg'} height={1000} width={1000} />
            </div>
            <div className={styles.overlay_content}>
                <h2>Empowering Your Travel Dreams</h2>
                <h1>Explore</h1>
                <p>Curating Unparalleled Travel Experiences, One Journey at a Time</p>
            </div>
        </div>
    )
}

export default HeroSection