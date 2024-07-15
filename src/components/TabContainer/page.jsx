import React, { useState } from 'react';
import HeroSection from '../Hero/herosection'; // Adjust the import path as needed
import Navmenu from '../navbar/Navmenu'; // Adjust the import path as needed

const page = () => {
  const [activeFacility, setactiveFacility] = useState('Tour');

  return (
    <div>
      <Navmenu activeFacility={activeFacility} setactiveFacility={setactiveFacility} />
      <HeroSection activeFacility={activeFacility} setactiveFacility={setactiveFacility} />
    </div>
  );
};

export default page;
