import React from 'react';
import './ContactUs.css';

const CUSideSection = () => {
  const trips = [
    {
      location: 'Kerala',
      subtitle: 'The Cultural Trip',
      tripsCount: '4 Trip',
      image: '/Assets/Images/CUSideSectionImg1.png',
    },
    {
      location: 'Spiti Valley',
      subtitle: 'The Cultural Trip',
      tripsCount: '4 Trip',
      image: '/Assets/Images/CUSideSectionImg2.png',
    },
    {
      location: 'Shimla',
      subtitle: 'The Cultural Trip',
      tripsCount: '4 Trip',
      image: '/Assets/Images/CUSideSectionImg3.png',
    },
    {
      location: 'Delhi',
      subtitle: 'The Cultural Trip',
      tripsCount: '4 Trip',
      image: '/Assets/Images/CUSideSectionImg4.png',
    },
    {
      location: 'Uttarakhand',
      subtitle: 'The Cultural Trip',
      tripsCount: '4 Trip',
      image: '/Assets/Images/CUSideSectionImg5.png',
    },
    {
      location: 'Rajasthan',
      subtitle: 'The Cultural Trip',
      tripsCount: '4 Trip',
      image: '/Assets/Images/CUSideSectionImg6.png',
    },
  ];

  return (
    <div className='bg-[#02013D] w-[43%] pl-[5.3%] pt-14 pb-12 relative flex flex-col gap-4 h-full'>
      <div className='absolute bottom-0 right-0 z-[1]'>
        <img className='w-[200px]' src='/Assets/Images/CUSideSectionSideImg.png' alt='' />
      </div>
      <div className='overflow-y-auto space-y-4 noScroll z-[20]'>
        {trips.map((trip, index) => (
          <div
            key={index}
            className='w-[70%] h-[350px] flex flex-col justify-between z-[20]'
            style={{ backgroundImage: `url(${trip.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className='bg-[#941A21B5] flex items-center px-4 py-1 w-max'>
              <p className='text-[24px] text-white font-[Merriweather-Sans]'>{trip.tripsCount}</p>
            </div>
            <div className='text-white pb-4 pl-6 flex flex-col gap-2 CU-Trip-bg-custom-gradient'>
              <p className='font-[Merriweather] text-[22px] font-semibold tracking-[0.05em]'>{trip.location}</p>
              <p className='font-[Merriweather-Sans] font-thin uppercase text-[16px] tracking-[0.05em]'>{trip.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CUSideSection;
