import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'



const TopNav = () => {
    return (
        <div className={styles.top_nav_main}>
            <div>
                <span>
                    <Image alt='...' src={'Assets/Icons/email.svg'} width={1000} height={1000} />
                </span>
                <p>tourwithtge23@gmail.com</p>
            </div>
            <div>
                <span>
                    <Image alt='...' src={'/Assets/Icons/phone.svg'} width={1000} height={1000} />
                </span>
                <p>+91 67535 57043</p>
            </div>
        </div>
    )
}

export default TopNav