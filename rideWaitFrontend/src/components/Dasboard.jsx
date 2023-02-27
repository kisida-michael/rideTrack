import React, { useState } from 'react';
import DashboardParks from './DashboardParksContainer';
import { Outlet } from 'react-router-dom';
import groupParks from '../utils/groupParks';

import Rides from './Rides';

const Dashboard = () => {
  const [parks, setParks] = useState(groupParks);

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
          <DashboardParks parks={parks} />
          {/* <Rides /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
