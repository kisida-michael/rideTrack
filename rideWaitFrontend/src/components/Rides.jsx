import React from 'react';
import { useLocation } from 'react-router-dom';

import DashboardParks from './DashboardParksContainer';

const Rides = () => {
  const location = useLocation();
  // const { name, rides } = location.state;

  // console.log(name); // should log the name of the park
  // console.log(rides); // should log the array of rides for the park
  return (
    <div className='min-h-screen bg-background text-white'>
      <h1>Rides at Park</h1>
    </div>
  );
};

export default Rides;
