import React from 'react'
import styles from './commonHeading.module.css'

const CommonHeading = ({ title, description }) => {

    // console.log(title, description)
    return (
        <div className={styles.container}>
            <div className={styles.section1}>
                {title}
            </div>
            <div className={styles.section2}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, modi? Lorem, ipsum dolor.
                    Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
                </p>
            </div>
        </div>
    )
}

export default CommonHeading