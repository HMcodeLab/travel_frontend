"use client"

import React, { useEffect, useState } from 'react'
import styles from './section2.module.css';
import Image from 'next/image';
import { animCardData1, animCardData2, animCardData3 } from '@/Data/cardImageData';
import Link from 'next/link';

const Section2Cards = () => {
    const [movingCard, setMovingCard] = useState();

    const fetchData = async (req, res) => {
        try {
            const data = await fetch("https://staging.trackitinerary.com/apis/packages/package_category_with_city")
            const response = await data.json();
            setMovingCard(response?.data?.data)
            console.log(response?.data?.data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
         
        <div className={styles.card_section_main}>
            <div className={styles.vertical_cards}>
                {
                    movingCard?.slice(0, 3).map((val, ind) => {
                        return (
                            <div>
                                <Link href={`/destination/?city_name=${val.name}&cityid=${val.city_id}`}>
                                <Image src={val.image} height={1000} width={1000} />
                                <p>{val?.name}</p>
                                </Link>
                          
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.anim_cards}>
                <span>
                    <div className={styles.places_card}>
                        {
                            movingCard?.slice(3, 9)?.map((data, ind) => {
                                return (
                                    <div>
                                        <Link href={`/destination/?city_name=${data?.name}&cityid=${data?.city_id}`}>
                                        <Image src={data.image} height={1000} width={1000} />
                                        <p>{data?.name}</p>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={`${styles.places_card} ${styles.places2}`}>
                        {
                            movingCard?.slice(3, 9)?.map((data, ind) => {
                                return (
                                    <div>
                                           <Link href={`/destination/?city_name=${data?.name}&cityid=${data?.city_id}`}>
                                        <Image src={data.image} height={1000} width={1000} />
                                        <p>{data?.name}</p>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.places_card}>
                        {
                            movingCard?.slice(3, 9)?.map((data, ind) => {
                                return (
                                    <div>
                                           <Link href={`/destination/?city_name=${data?.name}&cityid=${data?.city_id}`}>
                                        <Image src={data.image} height={1000} width={1000} />
                                        <p>{data?.name}</p>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </span>
            </div>
        </div>
        
        </>
    )
}

export default Section2Cards