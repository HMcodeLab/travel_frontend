import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'



const TopNav = () => {
    return (
        <div className={styles.top_nav_main}>
            <div>
                <span>
                    <Image alt='...' src={'/Assets/Icons/email.svg'} width={70} height={70}
                    srcset={`/Assets/Icons/email.svg 480w, 
                    /Assets/Icons/email.svg 800w, 
                    /Assets/Icons/email.svg 1200w`} 
            sizes="(max-width: 600px) 480px, 
                   (max-width: 1200px) 800px, 
                   1200px"  />
                </span>
                <a href='mailto:tourwithtge23@gmail.com'>tourwithtge23@gmail.com</a>
            </div>
            <div>
                <span>
                    <Image alt='...' src={'/Assets/Icons/phone_nav.svg'} width={1000} height={1000} />
                </span>
                <a href='tel:+91 67535 57043'>+91 67535 57043</a>
            </div>
        </div>
    )
}

export default TopNav