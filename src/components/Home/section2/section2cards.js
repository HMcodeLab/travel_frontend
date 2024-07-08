// "use client"

// import React, { useEffect, useState } from 'react'
// import styles from './section2.module.css';
// import Image from 'next/image';
// import { animCardData1, animCardData2, animCardData3, emptyImage } from '@/Data/cardImageData';
// import Link from 'next/link';
 

// const Section2Cards = () => {
//     const [movingCard, setMovingCard] = useState();

//     const fetchData = async (req, res) => {
//         try {
//             const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/packages/package_category_with_city`)
//             const response = await data.json();
//             setMovingCard(response?.data?.data)
//             // console.log(response?.data?.data);
//         } catch (error) {
//             console.error("Failed to fetch data:", error);
//         }
//     }

//     useEffect(() => {
//         fetchData();
//     }, [])
//     // console.log(movingCard?.length)

//     return (
//         <>

//             <div className={styles.card_section_main}>
//                 <div className={styles.vertical_cards}>
//                     {
//                         movingCard?.slice(0, 3).map((val, ind) => {
//                             return (
//                                 <div>
//                                     <Link href={`/destination/${val.city_id}`}>
//                                         <Image src={val.main_image||emptyImage.src} height={1000} width={1000} />
//                                         <p>{val?.name}</p>
//                                     </Link>

//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//                 <div className={styles.anim_cards}>
//                     <span>
//                         <div className={`anim_card_row_first ${styles.places_card}`}>
//                             {
//                                 movingCard?.slice(3, 9)?.map((data, ind) => {
//                                     return (
//                                         <div>
//                                             <Link href={`/destination/${data?.city_id}`} key={ind}>
//                                                 <Image src={data.main_image||emptyImage.src} height={1000} width={1000} />
//                                                 <p>{data?.name}</p>
//                                             </Link>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                         <div className={`anim_card_row_second ${styles.places_card} ${styles.places2}`}>
//                             {
//                                 movingCard?.slice(3, 9)?.map((data, ind) => {
//                                     return (
//                                         <div>
//                                             <Link href={`/destination/${data?.city_id}`} key={ind}>
//                                                 <Image src={data.main_image||emptyImage.src} height={1000} width={1000} />
//                                                 <p>{data?.name}</p>
//                                             </Link>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                         <div className={`anim_card_row_third ${styles.places_card} ${styles.places3}`}>
//                             {
//                                 movingCard?.slice(3, 9)?.map((data, ind) => {
//                                     return (
//                                         <div>
//                                             <Link href={`/destination/${data?.city_id}`} key={ind}>
//                                                 <Image src={data.main_image||emptyImage.src} height={1000} width={1000} />
//                                                 <p>{data?.name}</p>
//                                             </Link>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     </span>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Section2Cards




"use client"

import React, { useEffect, useState } from 'react';
import styles from './section2.module.css';
import Image from 'next/image';
import { emptyImage } from '@/Data/cardImageData';
import Link from 'next/link';

const Section2Cards = () => {
    const [movingCard, setMovingCard] = useState([]);

    const fetchData = async () => {
        try {
            const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/packages/package_tranding_tge`);
            const response = await data.json();
            setMovingCard(response?.data?.data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const shuffledCardSet1 = shuffleArray(movingCard.slice(3, 9));
    const shuffledCardSet2 = shuffleArray(movingCard.slice(3, 9));
    const shuffledCardSet3 = shuffleArray(movingCard.slice(3, 9));

    return (
        <div className={styles.card_section_main}>
            <div className={styles.vertical_cards}>
                {movingCard?.slice(0, 3).map((val, ind) => (
                    <div key={ind}>
                        <Link href={`/destination/${val.city_id}`}>
                        <span></span>
                            <Image src={val.main_image || emptyImage.src} height={1000} width={1000} 
                            onError={(e) => e.target.src = emptyImage.src} />
                            <p>{val?.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className={styles.anim_cards}>
                <span>
                    <div className={`anim_card_row_first ${styles.places_card}`}>
                        {shuffledCardSet1.map((data, ind) => (
                            <div key={ind}>
                                <Link href={`/destination/${data?.city_id}`}>
                                <strong></strong>
                                    <Image src={data.main_image || emptyImage.src} height={1000} width={1000} 
                                     onError={(e) => e.target.src = emptyImage.src}/>
                                    <p>{data?.name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className={`anim_card_row_second ${styles.places_card} ${styles.places2}`}>
                        {shuffledCardSet2.map((data, ind) => (
                            <div key={ind}>
                                <Link href={`/destination/${data?.city_id}`}>
                                <strong></strong>
                                    <Image src={data.main_image || emptyImage.src} height={1000} width={1000} 
                                     onError={(e) => e.target.src = emptyImage.src}/>
                                    <p>{data?.name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className={`anim_card_row_third ${styles.places_card} ${styles.places3}`}>
                        {shuffledCardSet3.map((data, ind) => (
                            <div key={ind}>
                                <Link href={`/destination/${data?.city_id}`}>
                                <strong></strong>
                                    <Image src={data.main_image || emptyImage.src} height={1000} width={1000} 
                                     onError={(e) => e.target.src = emptyImage.src}/>
                                    <p>{data?.name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Section2Cards;
