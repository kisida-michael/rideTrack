import React, { useState } from 'react';
import DashboardParks from './DashboardParksContainer';
import { Outlet } from 'react-router-dom';
import groupParks from '../utils/groupParks';

import Rides from './Rides';

const Dashboard = () => {
  const [parks, setParks] = useState(groupParks);

  return (
    <div className='min-h-screen w-screen bg-white dark:bg-background '>
      <div className='flex flex-col w-[85%] ml-8 '>
        <h1 className='text-primary dark:text-off-white  font-bold text-4xl mt-12 '>
          Ride Track
        </h1>
        <h2 className=' mt-8 text-content dark:text-primary  font-bold text-2xl  '>
          Favorite Rides
        </h2>
        <div className='mt-12'>
          <h2 className=' mt-8 text-content dark:text-primary  font-bold text-2xl  '>
            Parks
          </h2>
          <DashboardParks parks={parks} />
          {/* <Rides /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
