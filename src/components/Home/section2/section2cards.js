"use client"

import React, { useEffect, useState } from 'react'
import styles from './section2.module.css';
import Image from 'next/image';
import { animCardData1, animCardData2, animCardData3 } from '@/Data/cardImageData';

const Section2Cards = () => {
    const [movingCard, setMovingCard] = useState();
    
    const fetchData = async (req,res) => {
        try {
            const data = await fetch("https://staging.trackitinerary.com/apis/packages/package_category_with_city")
            const response = await data.json();
            setMovingCard(response?.data)
            console.log(response?.data?.data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    

    return (
        <div className={styles.card_section_main}>
            <div className={styles.vertical_cards}>
                <Image src={'/Assets/Images/section2cards/c1.png'} alt="image 1" width={1000} height={1000} />
                <Image src={'/Assets/Images/section2cards/c2.png'} alt="image 1" width={1000} height={1000} />
                <Image src={'/Assets/Images/section2cards/c3.png'} alt="image 1" width={1000} height={1000} />
            </div>
            <div className={styles.anim_cards}>
                <span>
                    <div className={styles.places_card}>
                        {
                            animCardData1?.map((data, ind) => {
                                return (
                                    <Image key={ind} src={data.imagedata} alt={"..."} height={1000} width={1000} />
                                )
                            })
                        }
                    </div>
                    <div className={styles.places_card}>
                        {
                            animCardData2?.map((data, ind) => {
                                return (
                                    <Image key={ind} src={data.imagedata} alt={"..."} height={1000} width={1000} />
                                )
                            })
                        }
                    </div>
                    <div className={styles.places_card}>
                        {
                            animCardData3?.map((data, ind) => {
                                return (
                                    <Image key={ind} src={data.imagedata} alt={"..."} height={1000} width={1000} />
                                )
                            })
                        }
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Section2Cards