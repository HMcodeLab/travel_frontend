'use client'
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import { nav_data } from '@/Data/nav_data'
import Link from 'next/link'
import { BASE_URL } from '@/helpers/baseurl'

const Navmenu = () => {
    const [allCategory, setallCategory] = useState([])
    useEffect(() => {
   async function Fetchdata(){
    try {
        const data=await fetch(BASE_URL+'/package_category_with_city')
    const response=await data.json()
    setallCategory(response?.data)
    } catch (error) {
        console.log(error);
    }
   }
   Fetchdata()
    }, [])
    
    return (
        <div className={styles.nav_menu_main}>
            <div className={styles.places_images}>
            <Link href='/'><span><Image src={'/Assets/Icons/places/explore.svg'} width={1000} height={1000} alt='...'/> <p>Explore</p></span></Link>

                {
                    allCategory?.map((item, ind) => {
                        return (
                            <Link key={ind} href={`/destination?cityid=${item.city_id}`}><span><Image src={item.image || '/Assets/Icons/places/shimla.svg'} width={1000} height={1000} alt='...'/> <p>{item.name}</p></span></Link>
                        )
                    })
                }
            </div>
            <div className={styles.menu_btn_section}>
                <span>
                    <Link href={'/'}>TOUR</Link>
                    <Link href={'/activities'}>ACTIVITIES</Link>
                </span>
            </div>

        </div>
    )
}

export default Navmenu