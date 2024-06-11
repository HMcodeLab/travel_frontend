'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Navmenu from '@/components/navbar/Navmenu';
import TopNav from '@/components/navbar/topNav';
import Footer from '@/components/footer/page';
import EnquiryForm from '@/components/EnquiryForm/EnquiryForm';
import { createContext, useEffect, useState } from 'react';
import ContactUsHomeBtn from '@/components/ContactUsHomeBtn/ContactUsHomeBtn';
import Planningtriphome from '@/components/PlanTrip/page';
import { BASE_URL } from '@/helpers/baseurl';

const inter = Inter({ subsets: ['latin'] });

export const GlobalProvider = createContext()
export default function RootLayout({ children }) {
  const [enquiryModal, setEnquiryModal] = useState(false);
  const [Planning, setPlanning] = useState(false)
  const [CardsData, setCardsData] = useState([])


  const Fetchcards = async () => {
    try {
      const data = await fetch(BASE_URL + '/index')
      const response = await data.json();
      setCardsData(response?.data)

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    Fetchcards()
  }, [])


  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
        <GlobalProvider.Provider value={{ Fetchcards, CardsData }}>
          <div className={`${enquiryModal ? 'blurred-background' : ''}`}>
            <TopNav />
            <Navbar setEnquiryModal={setEnquiryModal} setPlanning={setPlanning} />
            <Navmenu />
            {children}
            <Footer />
          </div>
          {enquiryModal && (
            <div className="modal-overlay">
              <EnquiryForm setEnquiryModal={setEnquiryModal} />
            </div>
          )}
          {
            Planning && <Planningtriphome setPlanning={setPlanning} />
          }
          <div className="fixed top-[76%] -right-[51px] -rotate-90 z-[999999]">
            <ContactUsHomeBtn />
          </div>
        </GlobalProvider.Provider>
      </body>
    </html>
  );
}
