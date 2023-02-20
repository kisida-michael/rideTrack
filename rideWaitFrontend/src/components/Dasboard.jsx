import React, { useState } from 'react';
import DashboardParksContainer from './DashboardParksContainer';
import Rides from './Rides';
const Dasboard = () => {
  return (
    <div className='min-h-screen bg-white dark:bg-background '>
      <div className='flex flex-col '>
        <h1 className='text-primary dark:text-off-white  font-bold text-4xl mt-12 ml-8'>
          Ride Track
        </h1>
        <h1 className='text-content dark:text-primary  font-bold text-2xl mt-2 ml-8'>
          Favorite Rides
        </h1>
        <div className='ml-8 mt-12'>
          <DashboardParksContainer />
          {/* <Rides /> */}
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
