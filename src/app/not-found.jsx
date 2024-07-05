'use client'
import Link from 'next/link';
import styles from './NotFound.module.css';
import shimla from '../../public/Notfound/shimla.jpg';
import dharamshala from '../../public/Notfound/dharamshala.jpg';
import srinagar from '../../public/Notfound/srinagar.jpg';
import left_img from '../../public/Notfound/ladakh-people-left.png';
import right_img from '../../public/Notfound/ladakh-people-right.png';

import { useEffect, useState } from 'react';

const NotFound = () => {


  return (
    <div className={styles.notFoundContainer}>
      <main className={styles.main}>
        <div className={styles.bg_left}><img src={left_img.src} alt={left_img.src} /></div>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Oops! Page Not Found</h2>
          <p className={styles.description}>
            It seems the page you are looking for does not exist. You might want to explore our popular destinations or return to the homepage.
          </p>

          <div className={styles.cta}>
            <Link href="/" className={styles.ctaButton}>
              Return to Homepage
            </Link>
          </div>
          <div className={styles.p_section}>
            <div className={styles.images}>

              <div className={styles.destinations} >
                <Link href={`/destination/shimla`}>
                  <h2>Shimla</h2>
                  <img src={shimla.src} alt={shimla.src} className={styles.image} />
                </Link>
              </div>

              <div className={styles.destinations} >
                <Link href={`/destination/dharamshala`}>
                  <h2>Dharamshala</h2>
                  <img src={dharamshala.src} alt={dharamshala.src} className={styles.image} />
                </Link>
              </div>

              <div className={styles.destinations} >
                <Link href={`/destination/srinagar`}>
                  <h2>Srinagar</h2>
                  <img src={srinagar.src} alt={srinagar.src} className={styles.image} />
                </Link>
              </div>
            </div>
            <button>  <Link href={`/all_destination`} >view all packages </Link></button>
          </div>

          <footer className={styles.footer}>
            <div className={styles.footerContent}>
              <p className={styles.footerText}>
                We couldn't find the page you were looking for. If you believe this is an error, please contact support. Otherwise, you might want to return to our <Link href="/" className={styles.footerLink}>homepage</Link> and continue exploring our site.
              </p>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <img src={'Assets/Icons/email.svg'} alt="Email" className={styles.contactIcon} />
                  <a href="mailto:support@example.com" className={styles.contactLink}>support@example.com</a>
                </div>
                <div className={styles.contactItem}>
                  <img src={'/Assets/Icons/phone_nav.svg'} alt="Phone" className={styles.contactIcon} />
                  <a href="tel:+1234567890" className={styles.contactLink}>+1 (234) 567-890</a>
                </div>
              </div>
            </div>
          </footer>

        </div>
        <div className={styles.bg_right}><img src={right_img.src} alt={right_img.src} /></div>
      </main>
    </div>
  );
};

export default NotFound;

