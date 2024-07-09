"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import styles from './page.module.css'
import demoImage from '../../../public/Assets/Images/section2cards/amritsar.png'

const Itinerary = ({ data }) => {
    const [dropdown, setdropdown] = useState([true, false, false, false, false, false, false, false, false])

    // console.log(data)

    if (data === undefined) {
        return (
            <>Loading...</>
        )
    }

    console.log(data[0]?.daywise_meta)
    const newdata = data ? data[0]?.daywise_meta : []



    const handleDropdownToggle = (index) => {
        setdropdown(prevState =>
            prevState?.map((item, ind) => (ind === index ? !item : false))
        );
    };
    return (
        <div className={styles.faq_section_inner}>
            {
                newdata?.map((val, ind) => {

                    return (
                        <div className={styles.faq_section}>
                            <div className=" py-[12px] bg-[var(--primary)] text-white px-[10px] rounded-xl cursor-pointer xsm:text-[14px]" onClick={() => handleDropdownToggle(ind)}>
                                Day {val.tour_day}  ({val?.tour_name})
                            </div>
                            <div style={{ display: !dropdown[ind] ? "none" : "" }}  >
                                <div dangerouslySetInnerHTML={{ __html: val?.tour_des }} className={styles.faq_contents} />
                               {
                                val?.hot_des?.map((it,index)=>{
                                    return(<>
                                      <div class="tour-container" key={index}>
                                    <div class="tour-image">
                                        <img src={it?.attractionimage} alt={it?.hot_des}  className='rounded-full'/>
                                    </div>
                                    <div class="tour-content">
                                        <div class="tour-title">{it?.hot_des}</div>
                                        <div class="tour-description">
                                            {it?.description}
                                        </div>
                                    </div>
                                </div>
                                    </>)
                                })
                               }
                              
                            </div>

                        </div>
                    )
                })
            }
        </div >
    )
}

export default Itinerary