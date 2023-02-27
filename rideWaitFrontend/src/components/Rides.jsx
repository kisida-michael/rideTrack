import React from 'react';
import { useLocation } from 'react-router-dom';

import DashboardParks from './DashboardParksContainer';

const Rides = () => {
  const { state } = useLocation();
  const name = state?.name || '';
  const rides = state?.rides || [];
  console.log(name);
  console.log(rides);
  return (
    <div className='min-h-screen bg-background text-white'>
      <h1>Rides at Park</h1>
    </div>
  );
};

export default Rides;
