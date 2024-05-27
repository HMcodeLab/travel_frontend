
import Image from 'next/image'
import React from 'react'
import Kerela from '../../../public/kerala.png'
import Cards from '../card/page'
import styles from './page.module.css'

const LastSection = () => {
    return (
        <div className='w-full flex justify-between' >
            <div className='flex flex-col w-[30%]  flex-wrap gap-3 '>
                <div className='uppercase border-l-4 border-[var(--primary)]  font-bold text-2xl  flex flex-wrap pl-1 w-[70%]'>Trending, Best Selling <span className='text-[var(--primary)]'>Tours</span> And Fun <span className='text-[var(--primary)]'>Destinations</span></div>
                <p className='text-[#494545]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, sunt?</p>
            </div>
            <div className={`flex h-fit  justify-between ${styles.card_main}`}>

                {
                    [1, 1, 1, 1].map((val, ind) => {
                        return (
                            <div>
                                <Cards />
                            </div>

                        )
                    })
                }



            </div>
        </div >
    )
}

export default LastSection