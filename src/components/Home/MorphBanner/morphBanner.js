'use client'
import React, { useState } from 'react'
import styles from './morphBanner.module.css'
import Image from 'next/image'
import EnquiryForm from '@/components/EnquiryForm/EnquiryForm'

const MorphBanner = () => {
    const [enquiryModal, setEnquiryModal] = useState(false);
    return (
        <>
            {
                enquiryModal && (
                    <div className="modal-overlay">
                        <EnquiryForm setEnquiryModal={setEnquiryModal} />
                    </div>
                )
            }
            <div className={styles.banner} style={{ backgroundImage: `url(${`/Assets/Images/banner.jpg`})` }}>
                {/* <Image src={'/Assets/Images/banner.jpg'} height={1000} width={1000} alt="..." /> */}
                <div className={styles.morph}>
                    <div className={styles.innerMorph}>
                        <h3 >ENJOY BEST DEALS</h3>
                        <h2>UP TO 40% DISCOUNT!</h2>
                        <p>
                            <span>Enjoy incredible savings on flights, accommodations, and tour packages without compromising on quality. From last-minute escapes to early bird specials, our discounted deals cater to every budget and travel style. Imagine sipping cocktails on a pristine beach, exploring ancient cities, or traveling  through breathtaking landscapes – all at a fraction of the cost.</span>
                            <span>Don’t miss out on these limited-time offers! Check out our best discounted travel deals now and start planning your next adventure today. Your dream vacation is just a click away, and at a price you'll love!</span>
                        </p>
                        <button  onClick={()=>setEnquiryModal(true)}>DISCOVER MORE</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default MorphBanner