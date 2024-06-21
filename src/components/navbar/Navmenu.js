import React, { useEffect, useState, useRef } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { BASE_URL } from '@/helpers/baseurl';

const Navmenu = () => {
    const [allCategory, setAllCategory] = useState([]);
    const [activeCat, setActiveCat] = useState('tour');
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(BASE_URL + '/package_category_with_city_tge');
                const response = await data.json();
                setAllCategory(response?.data || []);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            handleNext();
        }, 2500);

        return () => clearInterval(intervalRef.current);
    }, [currentIndex, allCategory]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? allCategory.length - 12 : Math.max(prevIndex - 1, 0)
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === allCategory.length - 12 ? 0 : Math.min(prevIndex + 1, allCategory.length - 12)
        );
    };

    return (
        <div className={styles.nav_menu_main}>
            <div className={`${styles.places_images} desti_images-wrapper destination_nav_button`}>
                
                    <button onClick={handlePrev} className="prev-button">
                        <ChevronLeftIcon className="h-5 w-5" />
                    </button>
                    
                
                <div className="slider-container">
                    {allCategory.length > 0 && (
                        <div className="slider">
                            <div className="slider-content">
                                {allCategory.slice(currentIndex, currentIndex + 12).map((item, ind) => (
                                    <Link key={ind} href={`/destination?city_name=${item?.name}&cityid=${item?.city_id}`}>
                                        <div className="desti-contect-wrapper">
                                            <Image src="/Assets/Icons/places/explore.svg" width={100} height={100} alt={item?.name} />
                                            <p>{item?.name}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <button onClick={handleNext} className="next-button">
                        <ChevronRightIcon className="h-5 w-5" />
                    </button>
            </div>
            <div className={`${styles.menu_btn_section} act_tour_buttons`}>
                <Link href={'/'} onClick={() => setActiveCat('tour')} className={activeCat === 'tour' ? `${styles.active}` : `${styles.inactive}`}>
                    TOUR
                </Link>
                <Link
                    href={'/activities'}
                    onClick={() => setActiveCat('activity')}
                    className={activeCat === 'activity' ? `${styles.active}` : `${styles.inactive}`}
                >
                    ACTIVITIES
                </Link>
            </div>
        </div>
    );
};

export default Navmenu;
