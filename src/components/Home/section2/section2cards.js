import React from 'react'
import styles from './section2.module.css';
import Image from 'next/image';
import { animCardData1, animCardData2, animCardData3 } from '@/Data/cardImageData';

const Section2Cards = () => {
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
                            animCardData1.map((data, ind) => {
                                return (
                                    <Image src={data.imagedata} alt={"..."} height={1000} width={1000} />
                                )
                            })
                        }
                    </div>
                    <div className={styles.places_card}>
                        {
                            animCardData2.map((data, ind) => {
                                return (
                                    <Image src={data.imagedata} alt={"..."} height={1000} width={1000} />
                                )
                            })
                        }
                    </div>
                    <div className={styles.places_card}>
                        {
                            animCardData3.map((data, ind) => {
                                return (
                                    <Image src={data.imagedata} alt={"..."} height={1000} width={1000} />
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