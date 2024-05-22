import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import { nav_data } from '@/Data/nav_data'

const Navmenu = () => {
    return (
        <div className={styles.nav_menu_main}>
            <div className={styles.places_images}>
                {
                    nav_data.map((item, ind) => {
                        return (
                            <span><Image src={item.img} width={1000} height={1000} /> <p>{item.title}</p></span>
                        )
                    })
                }
            </div>
            <div className={styles.menu_btn_section}>
                <span>
                    <button>TOUR</button>
                    <button>ACTIVITIES</button>
                </span>
            </div>

        </div>
    )
}

export default Navmenu