"use client";
import React, { useState, useEffect } from 'react';
import FormFields from './Form';
import "./EnquiryForm.css";
import image1 from '../../../public/Assets/Images/activityimg1.png';
import image2 from '../../../public/Assets/Images/activityimg2.png';
import image3 from '../../../public/Assets/Images/activityimg3a.png';
import Link from 'next/link';
import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const images = [
    image1.src,
    image2.src,
    image3.src
];

function FormWrapper({ setEnquiryModal }) {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrevImage = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    const handleNextImage = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextImage();
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="enquiry_form_sections">
            <div
                onClick={() => setEnquiryModal(false)}
                className="close_button"
            >
                <img
                    src={"/Assets/Icons/cross.svg"}
                    alt="Close"
                    className="close_icon"
                />
            </div>
            <div className="enquiry_sections_hero">
                <div className="enquiry_form_sections_inner">
                    <div className="enquiry_left_section">
                        <h2 className="left_heading">Discover Amazing Travel Deals</h2>
                        <div className="enquiry_slider-container">
                            <Image
                                src={images[currentImage]}
                                alt={`Slide ${currentImage}`}
                                className="slider-image"
                                width={100}
                                height={100}
                                srcset={`${images[currentImage]} 480w, 
                                ${images[currentImage]} 800w, 
                                ${images[currentImage]} 1200w`}
                                sizes="(max-width: 600px) 480px, 
                                (max-width: 1200px) 800px, 1200px"
                            />
                            <h3 className="dmc_heading">Explore the World with Trip Go Easy</h3>
                            <Link href={`/all_destination`}>
                                Explore Now
                            </Link>
                            <button className="arrow arrow-left" onClick={handlePrevImage}>
                                {"<"}
                            </button>
                            <button className="arrow arrow-right" onClick={handleNextImage}>
                                {">"}
                            </button>
                        </div>
                        <div className="left_content">
                            <div className="features_content_wrapper">
                                <div className="features">
                                    <div className="col-md-4 text-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">
                                            <path d="M12 2C8.145 2 5 5.145 5 9c0 2.41 1.23 4.55 3.094 5.813C4.527 16.343 2 19.883 2 24h2c0-4.43 3.57-8 8-8c1.375 0 2.656.36 3.781.969A8.007 8.007 0 0 0 14 22c0 4.406 3.594 8 8 8c4.406 0 8-3.594 8-8c0-4.406-3.594-8-8-8a7.964 7.964 0 0 0-4.688 1.531a10.134 10.134 0 0 0-1.406-.719A7.024 7.024 0 0 0 19 9c0-3.855-3.145-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5zm10 12c3.324 0 6 2.676 6 6s-2.676 6-6 6s-6-2.676-6-6s2.676-6 6-6zm3.281 3.281L22 22.563l-2.281-2.282l-1.438 1.438l3 3l.719.687l.719-.687l4-4z" fill="#CA1C26"></path>
                                        </svg>
                                        <p className="mb-0"><b>5000+</b> <br />Exciting Destinations</p>
                                    </div>
                                    <div className="col-md-4 text-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 15 15">
                                            <g fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4 0h7v1h3v12.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5V1h3V0zm1 1h5v1.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V1zm2.024 10.232l3.852-4.403l-.752-.658l-3.148 3.598l-1.622-1.623l-.708.708l2.378 2.378z" fill="#CA1C26"></path>
                                            </g>
                                        </svg>
                                        <p className="mb-0"><b>Top Rated</b> <br />4.8* Rating with 10K+ Reviews</p>
                                    </div>
                                    <div className="col-md-4 text-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
                                            <path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1a1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z" fill="#CA1C26"></path>
                                        </svg>
                                        <p className="mb-0"><b>Exclusive Offers</b> <br />Special Deals and Discounts</p>
                                    </div>
                                    <div className="col-md-6 text-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 15 15">
                                            <g fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4 0h7v1h3v12.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5V1h3V0zm1 1h5v1.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V1zm2.024 10.232l3.852-4.403l-.752-.658l-3.148 3.598l-1.622-1.623l-.708.708l2.378 2.378z" fill="#CA1C26"></path>
                                            </g>
                                        </svg>
                                        <p className="m-0"><b>24/7 Support</b> <br />Assistance Anytime, Anywhere</p>
                                    </div>
                                    <div className="col-md-6 text-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
                                            <path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1a1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z" fill="#CA1C26"></path>
                                        </svg>
                                        <p className="m-0"><b>Secure Booking</b> <br />Safe and Reliable Transactions</p>
                                    </div>
                                </div>

                            </div>
                            <h2 className="left_heading_bottom text-center">Discover Amazing Travel Deals</h2>
                        </div>

                    </div>
                    <div className="enquiry_right_section">
                        <h2 className="form_heading">Hurry! Fill Form & Get Best Travel Deals</h2>
                        <FormFields />
                    </div>
                </div>
                <div className="form_footer">
                    <div className="left_footer_content">
                        <div className="col-md-12 text-center call_dat12">
                            <p><b>Contact With Us: For Latest Travel Deals and Offers</b></p>
                            <p><a href="tel:+916753557043" className='c_n'>+91 67535 57043 </a></p>
                            {/* <p>
                                <span><FaWhatsapp /> <a href="tel:+910000000000">+91 0000-000-000 </a></span>
                                <span><FaPhone />  <a href="tel:+910000000000">0000-000-000 </a></span>
                            </p> */}

                            <p> <FaEnvelope /> <a href={`mailto:tourwithtge23@gmail.com`}>tourwithtge23@gmail.com </a> </p>
                        </div>
                    </div>
                    <div className="right_footer_content">
                        <div className="col-md-12 mb-2">
                            <div className="typewriter">
                                <h3 className="nh_color text-center m-0">Get Instant Response From Expert's !!</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormWrapper;
