"use client";

import React, { useEffect, useState, Suspense, useContext } from 'react';
import { useSearchParams } from 'next/navigation';
import Cards from '@/components/card/page';
import axios from 'axios';
import styles from '../../components/Home/section6/section6.module.css';
import { GlobalProvider } from '../layout';

const Search = () => {
    const [cardsData, setCardsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const formData=new FormData()
    const search = JSON.parse(searchParams.get('data'));
    const {searchQuery}=useContext(GlobalProvider)
    console.log(searchQuery)
    formData.append('city_id',searchQuery.city_id)
    formData.append('duration', searchQuery.duration)
    formData.append('minPrice', searchQuery.minPrice)
    formData.append('maxPrice', searchQuery.maxPrice)
    
    // console.log(formData)
    useEffect(() => {
        const handleSearch = async () => {
            try {
                const apiUrl =
                    "https://staging.trackitinerary.com/apis/packages/search_filter_packages";
                const res = await axios.post(apiUrl, formData);

                // console.log(res);

                if (res.data.status === 200) {
                    setCardsData(res.data.data);
                }
            } catch (error) {
                console.log(error);
                // Handle error gracefully
            } finally {
                setLoading(false);
            }
        };

        handleSearch();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='px-[10vw]'>
           {cardsData?.length>0 ? <div className={styles.all_cards_main}>
                {cardsData?.map((cardData, ind) => (
                    <Cards key={ind} val={cardData} />
                ))}
            </div> :<div className="w-full flex justify-center text-3xl font-bold h-[50vh] items-center" >No Packages Found!</div>}
        </div>
    );
};

const SearchPage = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Search />
    </Suspense>
);

export default SearchPage;
