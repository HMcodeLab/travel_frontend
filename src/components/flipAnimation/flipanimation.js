import React, { useState, useEffect } from 'react';
import { ImSearch } from "react-icons/im";
import "./flipanimation.css";

const SearchScroll = ({ words, css }) => {
    const [value, setValue] = useState('');
    // const [displayText, setDisplayText] = useState(words[0]);
    // const [animationClass, setAnimationClass] = useState('fadeIn');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('slideDown');

    // useEffect(() => {
    //     let wordIndex = 0;
    //     const intervalId = setInterval(() => {
    //         setAnimationClass('fadeOut');
    //         setTimeout(() => {
    //             wordIndex = (wordIndex + 1) % words.length;
    //             setDisplayText(words[wordIndex]);
    //             setAnimationClass('fadeIn');
    //         }, 500);
    //     }, 2000);

    //     return () => clearInterval(intervalId)
    // }, []);

    useEffect(() => {
        const cycleWords = () => {
            setAnimationClass('slideUp');
            setTimeout(() => {
                // Move to the next word, loop back to the start if at the end
                setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
                setAnimationClass('slideDown');
            }, 500); // Duration of the slideUp animation
        };

        const intervalId = setInterval(cycleWords, 4000); // Change word every 2 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [words.length]);


    return (
        // <div className='search-outer'>
        //     <div className={`search-text ${value ? 'opacity-100' : 'opacity-100'}`}>
        //         {/* <span>Search for&nbsp;</span> */}
        //         <span className={`${css} ${animationClass}`}>{displayText}</span>
        //     </div>


        // </div>
        <div className='search-outer'>
            <div className={`search-text ${animationClass}`}>
                <span className={css}>{words[currentIndex]}</span>
            </div>
        </div>
    );
}

export default SearchScroll;
