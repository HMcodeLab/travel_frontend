import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react'
import "@splidejs/react-splide/css";
import Image from 'next/image';
import styles from './page.module.css'


const Gallery = () => {
    let options = {
        type: "loop",
        perPage: 2,
        pagination: false,
        perMove: 1,
        gap: "1vw",
        arrows: false,
        autoplay: true,
        interval: 3000,
        speed: 2500,

        delay: 3,
        // pauseOnHover: true,
        drag: true,
        breakpoints: {
            900: {
                perPage: 1
            },
            700: {
                perPage: 2,
            },
            500: {
                perPage: 1,
            },
        },
    };
    return (
        <div className={styles.gallery_main}>
            <h2>Gallery</h2>
            <Splide aria-label="My Favorite Images" options={options}>
                <SplideSlide >
                    <Image src={'/Assets/Images/section2cards/amritsar.png'} alt="..." height={1000} width={1000} />
                </SplideSlide>

            </Splide >
        </div>
    )
}


export default Gallery