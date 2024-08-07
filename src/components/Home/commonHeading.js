import React from 'react'
import styles from './commonHeading.module.css'

const CommonHeading = ({ title, description, bottomDescription }) => {

    // console.log(title, description)
    return (
        <>
            <div className="comn_heading_wrapper">
                <div className={styles.container} >
                    <div className={`${styles.section1} font-Merri-sans font-semibold`}>
                        {title}
                    </div>
                    <div className={`${styles.section2} `}>
                        <p>{description}
                        </p>
                    </div>
                </div>
                <div className={`${styles.section3} mobile_third_heading`}>
                    <p>{bottomDescription}
                    </p>
                </div>
            </div>
        </>


    )
}

export default CommonHeading