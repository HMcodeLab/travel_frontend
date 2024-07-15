"use client";

import styles from "./navbar.module.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import { useEffect, useState } from "react";
import PlanTrip from '../../../public/Assets/Icons/planATrip.svg'
import ArrowDown from '../../../public/Assets/Images/downarrow.gif'
import Image from "next/image";
import Logo from '../../../public/Assets/Images/logo.png'
import { emptyImage } from "@/Data/cardImageData";
import { useTab } from "@/app/contexts/TabContext";




const Navbar = ({ setEnquiryModal, setPlanning }) => {

  const [activeCat, setActiveCat] = useState('tour');
  const path = usePathname();

  const router = useRouter();

  const { activeTab, setActiveTab } = useTab();

  // Update active tab based on URL or localStorage
  useEffect(() => {
      const savedTab = localStorage.getItem('activeTab');
      if (savedTab) {
          setActiveTab(savedTab);
      } else {
          const currentPath = router.asPath;
          const tab = Object.keys(tabUrls).find(tab => tabUrls[tab] === currentPath);
          setActiveTab(tab || 'Tour');
      }
  }, [router.asPath]);

  // URLs associated with each tab
  const tabUrls = {
      'Tour': '/',
  };

  // Handle tab clicks
  const handleTabClick = (tab) => {
      setActiveTab(tab);
      localStorage.setItem('activeTab', tab); // Save active tab to localStorage
      router.push(tabUrls[tab]); // Navigate to tab URL
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <Link 
           href={'/'}
           onClick={() => handleTabClick('Tour')}
          >
            <Image src={Logo || emptyImage.src} alt="..." 
             onError={(e) => e.target.src = emptyImage.src}
             srcset={`${Logo || emptyImage.src} 480w, 
             ${Logo || emptyImage.src} 800w, 
             ${Logo || emptyImage.src} 1200w`}
             sizes="(max-width: 600px) 480px, 
             (max-width: 1200px) 800px, 
             1200px"/>
          </Link>
        </div>
        <div className={styles.navmenu}>
          <span>  <h5> NEW LAUNCHES: &nbsp; </h5>
            <p> JODHPUR, RISHIKESH, JAIPUR, MCLEODGANJ & AMRITSAR </p>
          </span>
        </div>
        <div className={`${styles.btn_section} trip_enquiry_wrapper`}>
          <button onClick={() => setPlanning(true)}  > <Image src={PlanTrip} alt="..." /><p> PLAN A TRIP </p> </button>
          <button onClick={() => setEnquiryModal(true)} className="xsm:hidden"> <p>Enquiry </p> <Image src={ArrowDown} alt="..." /> </button>


        </div>
        <div className={styles.menu_btn_section_sm}>
          <span>
            <Link href={'/'} onClick={() => setActiveCat('tour')} className={activeCat == "tour" ? `${styles.active}` : `${styles.inactive}`}>TOUR</Link>
            <Link href={'/activities'} onClick={() => setActiveCat('activity')} className={activeCat == "activity" ? `${styles.active}` : `${styles.inactive}`}>ACTIVITIES</Link>
          </span>
        </div>
      </div>




    </>
  );
};

export default Navbar;
