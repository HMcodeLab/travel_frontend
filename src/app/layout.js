'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Navmenu from '@/components/navbar/Navmenu';
import TopNav from '@/components/navbar/topNav';
import Footer from '@/components/footer/page';
import EnquiryForm from '@/components/EnquiryForm/EnquiryForm';
import { useState } from 'react';
import ContactUsHomeBtn from '@/components/ContactUsHomeBtn/ContactUsHomeBtn';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [enquiryModal, setEnquiryModal] = useState(false);

  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
        <div className={`${enquiryModal ? 'blurred-background' : ''}`}>
          <TopNav />
          <Navbar setEnquiryModal={setEnquiryModal} />
          <Navmenu />
          {children}
          <Footer />
        </div>
        {enquiryModal && (
          <div className="modal-overlay">
            <EnquiryForm setEnquiryModal={setEnquiryModal} />
          </div>
        )}
        <div className="fixed top-[76%] -right-[58px] -rotate-90 z-[999999]">
          <ContactUsHomeBtn />
        </div>
      </body>
    </html>
  );
}
