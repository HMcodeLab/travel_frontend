"use client"
import { section4Data } from '@/Data/section4data'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './section4.module.css'

const Section4Cards = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
async function fetchdata(){
    const data=await fetch(process.env.NEXT_PUBLIC_URL+'/apis/packages/category?page=1?limit=10');
    const response=await data.json();
    setdata(response?.data?.data)
    // console.log(response);
}
fetchdata()
    }, [])
    
    return (
        <div className={styles.all_cards}>
            <span>
                {
                    data?.map((val, ind) => {
                        return (
                            <div className={styles.card} key={ind}>
                                <Image src={val.banner_images_main} alt={"..."} height={100} width={100} />
                                <div className={styles.content}>
                                    <Image src={val.banner_images} alt={"..."} height={100} width={100} />
                                    <h3>{val.package_cat_name}</h3>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </span>
        </div>
    )
}

export default Section4Cards