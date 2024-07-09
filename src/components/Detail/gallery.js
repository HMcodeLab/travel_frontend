'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useState } from 'react'
import "@splidejs/react-splide/css";
import Image from 'next/image';
import styles from './page.module.css'

const Gallery = (props) => {
    const [viewGallery, setViewGallery] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const viewGalleryPopup = (image) => {
        setCurrentImage(image);
        setViewGallery(true);
    }

    const closeGalleryPopup = () => {
        setViewGallery(false);
        setCurrentImage('');
    }

    let { gallery_images } = props;
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
        pauseOnHover: false,
        drag: true,
        // breakpoints: {
        //     900: {
        //         perPage: 1
        //     },
        //     700: {
        //         perPage: 2,
        //     },
        //     500: {
        //         perPage: 1,
        //     },
        // },
    };

    return (
        <div className={`${styles.gallery_main} ${styles.gallery_wrapper}`}>
            <h2>Gallery</h2>
            <Splide aria-label="My Favorite Images" options={options}>
                {gallery_images === undefined || gallery_images === null ? (
                    <p>no images found</p>
                ) : (
                    gallery_images?.map((item, ind) => (
                        <SplideSlide key={ind}>
                            <Image src={item} alt="..." height={500} width={1000} onClick={() => viewGalleryPopup(item)} 
                                srcset={`${item} 480w, 
                                ${item} 800w, 
                                ${item} 1200w`}
                                sizes="(max-width: 600px) 480px, 
                                (max-width: 1200px) 800px, 
                                1200px"/>
                        </SplideSlide>
                    ))
                )}
            </Splide>

            {viewGallery && (
                <div className={styles.view_popup_gallery}>
                    <div className={styles.popup_content}>
                        <div className={styles.close_btn_wrapper}><button className={styles.close_btn} onClick={closeGalleryPopup}>×</button></div>                        
                        <Image src={currentImage} alt="..." height={500} width={1000} 
                        srcset={`${currentImage} 480w, 
                        ${currentImage} 800w, 
                        ${currentImage} 1200w`}
                        sizes="(max-width: 600px) 480px, 
                        (max-width: 1200px) 800px, 
                        1200px"/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gallery;
