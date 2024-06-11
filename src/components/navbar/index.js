"use client";

import styles from "./navbar.module.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import { useEffect, useState } from "react";
import PlanTrip from '../../../public/Assets/Icons/planATrip.svg'
import ArrowDown from '../../../public/Assets/Images/downarrow.gif'
import Image from "next/image";




const Navbar = ({ setEnquiryModal, setPlanning }) => {


  const path = usePathname();

  const router = useRouter();


  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <Link href="/">
            <Image src={"/Assets/Images/logo.png"} alt="..." width={1000} height={1000} />
          </Link>
        </div>
        <div className={styles.navmenu}>
          <span>  <h5> NEW LAUNCHES: &nbsp; </h5>
            <p> JODHPUR, RISHIKESH, JAIPUR, MCLEODGANJ & AMRITSAR </p>
          </span>
        </div>
        <div className={styles.btn_section}>
          <button onClick={() => setPlanning(true)} > <Image src={PlanTrip} alt="..." /><p> PLAN A TRIP </p> </button>
          <button onClick={() => setEnquiryModal(true)}> <p>Enquiry </p> <Image src={ArrowDown} alt="..." /> </button>
        </div>
      </div>




    </>
  );
};

export default Navbar;
