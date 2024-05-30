import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import { nav_data } from '@/Data/nav_data'
import Link from 'next/link'

const Navmenu = () => {
    return (
        <div className={styles.nav_menu_main}>
            <div className={styles.places_images}>
                {
                    nav_data.map((item, ind) => {
                        return (
                            <Link key={ind} href='/destination'><span><Image src={item.img} width={1000} height={1000} alt='...'/> <p>{item.title}</p></span></Link>
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