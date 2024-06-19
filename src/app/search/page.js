"use client"

import React, { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Cards from '@/components/card/page';
import axios from 'axios';
import styles from '../../components/Home/section6/section6.module.css'

const Search = () => {
    const [cardsData, setCardsData] = useState();
    const searchParams = useSearchParams();
    const search = JSON.parse(searchParams.get('data'));

    useEffect(() => {
        handleSearch()
    }, [])

    const handleSearch = async () => {
        try {
            const apiUrl =
                "https://staging.trackitinerary.com/apis/packages/search_filter_packages";
            const res = await axios.post(apiUrl, search, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log(res);

            if (res.data.status === 200) {
                setCardsData(res.data.data);
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed To send Query");
        }
    }

    // console.log(cardsData)
    return (
        <Suspense fallback={<div>Loading...</div>} >
            <div className='px-[10vw]'>
                <div className={styles.all_cards_main}>
                    {
                        cardsData?.map((cardData, ind) => {
                            return (
                                <>
                                    <Cards key={ind} val={cardData} />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </Suspense >
    )
}

export default Search