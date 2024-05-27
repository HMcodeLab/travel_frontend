import React from 'react'
import styles from './page.module.css'

const ContactForm = () => {
    return (
        <div className={styles.contact_main}>
            <div className={styles.contact_inner}>
                <h2>Get Free Quotes</h2>
                <div className={styles.contact}>
                    <form action="" className={styles.form}>
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Email id</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Number</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Number of Guest</label>
                            <input type="text" />
                        </div>
                        <button>SUBMIT</button>
                        <ul>
                            <li>We assure the privacy of your contact data.</li>
                            <li>This data will only be used by our team to contact you and no other purposes.</li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm