import React from 'react'
import CommonHeading from '../commonHeading'
import styles from './section7.module.css'
import Image from 'next/image'

const Section7 = () => {
    const tl = <h3 style={{ color: "white" }}>WORLD BEST  <span>TRAVEL AGENCY </span><br /> COMPANY SINCE 2015
    </h3>
    return (
        <div className={styles.main_container}>
            <CommonHeading title={tl} description={""} />
            <div className={styles.main_section}>
                <div className={styles.image_section}>
                    <Image src={'/Assets/Images/section7img2.png'} width={1000} height={1000} alt="..." />
                    <Image src={'/Assets/Images/section7img1.png'} width={1000} height={1000} alt="..." />
                </div>
                <div className={styles.content_section}>
                    <p>you're looking for a family holiday, a romantic escape, an adventure somewhere extraordinary, or a special event, we can arrange it.Whether you're looking for a family holiday, a romantic escape, an adventure somewhere extraordinary,</p>
                    <div className={styles.buttons}>
                        <button>
                            <Image src={"/Assets/Images/section7/svg1.svg"} alt={"..."} height={1000} width={1000} />
                            <p>worldwide tour coverage</p>
                        </button>
                        <button>
                            <Image src={"/Assets/Images/section7/svg2.svg"} alt={"..."} height={1000} width={1000} />
                            <p>Competitive Pricing</p>
                        </button>
                        <button>
                            <Image src={"/Assets/Images/section7/svg3.svg"} alt={"..."} height={1000} width={1000} />
                            <p>Local Guided Tours</p>
                        </button>
                        <button>
                            <Image src={"/Assets/Images/section7/svg4.svg"} alt={"..."} height={1000} width={1000} />
                            <p>Best Support 24/7</p>
                        </button>
                        <button>
                            <Image src={"/Assets/Images/section7/svg5.svg"} alt={"..."} height={1000} width={1000} />
                            <p>Fast Booking</p>
                        </button>
                        <button>
                            <Image src={"/Assets/Images/section7/svg5.svg"} alt={"..."} height={1000} width={1000} />
                            <p>Ultimate Tour Flexibility</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section7