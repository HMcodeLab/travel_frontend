"use client"
import { section4Data } from '@/Data/section4data'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './section4.module.css'
import Link from 'next/link'
import { emptyImage } from '@/Data/cardImageData'


const Section4Cards = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/packages/category?page=1&limit=9`);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const response = await res.json();
            setData(response?.data?.data || []);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }
    

    return (
        <div className={styles.all_cards}>
            <span>
                {
                    data?.map((val, ind) => {
                        const bannerImageMainSrc = val.banner_images_main || ''; // Default to empty string if null/undefined
                        const bannerImageSrc = val.banner_images || ''; // Default to empty string if null/undefined

                        return (
                            <Link href={`/trendingdestination/${val?.packageCateslug}`} key={ind} className={ind%2?'odd':'even'} >
                                <div className={styles.card}>
                                    {bannerImageMainSrc && (
                                        <Image src={bannerImageMainSrc} alt="Banner Image Main" height={100} width={100} />
                                    )}
                                    <div className={styles.content}>
                                        {bannerImageSrc && (
                                            <Image src={bannerImageSrc} alt="Banner Image" height={100} width={100} />
                                        )}
                                        <h3>{val.package_cat_name}</h3>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                }
            </span>
        </div>
    );
};

export default Section4Cards;
