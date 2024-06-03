"use client"

import React, { useEffect, useState } from 'react'
import styles from '../page.module.css'
import Image from 'next/image'
import Overview from '@/components/Detail/overview'
import Itinerary from '@/components/Detail/itinerary'
import Included from '@/components/Detail/included'
import Policy from '@/components/Detail/policy'
import Gallery from '@/components/Detail/gallery'
import ContactForm from '@/components/Detail/contactForm'
import Discount from '@/components/discount/page'
import RequestCall from '@/components/requestcall/page'
import Trending from '@/components/trending/page'
import LastSection from '@/components/Detail/lastSection'

const Destinationcontent = () => {

    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className={styles.main_container}>
            <div className={styles.heroBanner}>
                <Image src={'/Assets/Images/ladakhBanner.png'} height={1000} width={1000} alt="..." />
            </div>
            <div style={{ paddingInline: "10vw", display: "flex", flexDirection: "column", gap: "5vh" }}>
                <CommonHead />
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className={styles.details_flex}>
                    <div>
                        {activeTab == 1 && <Overview />}
                        {activeTab == 2 && <Itinerary />}
                        {activeTab == 3 && <Included />}
                        {activeTab == 4 && <Policy />}
                    </div>
                    <div className={styles.right_side}>
                        <Gallery />
                        <ContactForm />
                    </div>
                </div>
                <Discount />
                <LastSection />
                <RequestCall />
            </div>
        </div>
    )
}

export default Destinationcontent;




export const CommonHead = () => {
    return (
        <div className={styles.commonHeadcontainer}>
            <div className={styles.section1}>
                <h3><span>Panormic  Ladakh </span> with umling <br />
                    <span>la pass</span> package
                </h3>
            </div>
            <div className={styles.section2}>
                <h4>
                    6 Nights / 7 Days
                </h4>
                <div className={styles.right}>
                    <Image src={'/Assets/Images/Star.svg'} width={1000} height={1000} alt="..." />
                    <h4>4.4 / 5</h4>
                    <p>(354 reviews)</p>
                </div>
            </div>
        </div>
    )
}


export const Tabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className={styles.tabs_container}>
            <div onClick={() => setActiveTab(1)}>
                <span className={`${activeTab == 1 ? styles.active : ""}`}>
                    <Image src={"/Assets/Icons/Detailspage/overview.svg"} alt="..." height={1000} width={1000} />
                    <h3>OVERVIEW</h3>
                </span>
            </div>
            <div onClick={() => setActiveTab(2)}>
                <span className={`${activeTab == 2 ? styles.active : ""}`}>
                    <Image src={"/Assets/Icons/Detailspage/overview.svg"} alt="..." height={1000} width={1000} />
                    <h3>ITINERARY</h3>
                </span>
            </div>
            <div onClick={() => setActiveTab(3)}>
                <span className={`${activeTab == 3 ? styles.active : ""}`}>
                    <Image src={"/Assets/Icons/Detailspage/overview.svg"} alt="..." height={1000} width={1000} />
                    <h3>INCLUDED</h3>
                </span>
            </div>
            <div onClick={() => setActiveTab(4)}>
                <span className={`${activeTab == 4 ? styles.active : ""}`}>
                    <Image src={"/Assets/Icons/Detailspage/overview.svg"} alt="..." height={1000} width={1000} />
                    <h3>POLICY</h3>
                </span>
            </div>
        </div >
    )
}