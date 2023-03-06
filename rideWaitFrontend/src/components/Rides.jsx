import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import RideList from './RideList';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Rides = () => {
  const { state } = useLocation();
  const name = state?.name || '';
  const rides = state?.rides || [];

  const [isOn, setIsOn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const filteredRides = rides.filter((ride) =>
    ride.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='min-h-screen bg-white dark:bg-background dark:text-white pb-10'>
      <div className='w-[85%] flex flex-col ml-8'>
        <div className='mb-4'>
          <h1 className='text-primary dark:text-off-white  font-bold text-4xl mt-12 '>
            Wait Times
          </h1>
          <h2 className='text-content dark:text-primary  font-bold text-xl  '>
            {name}
          </h2>
          <div className='flex justify-between mt-4 mb-4 font-bold rounded-3xl px-4 py-2 text-lg bg-[#E9E9E9] dark:bg-content dark:border-content-border border-2 dark:border-2'>
            <p>Ride Notifications</p>
            <Toggle checked={isOn} onChange={handleToggle} />
          </div>

          <div className='relative'>
            <input
              className='w-full mb-6 ml pl-10 bg-[#E9E9E9] dark:bg-content dark:border-content-border border-2 dark:border-2 rounded-full pl-10 py-2'
              id='username'
              type='text'
              placeholder='Search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className='absolute inset-y-0  left-2 bottom-5 flex items-center pl-3 pointer-events-none'>
              <FontAwesomeIcon icon={faSearch} className='text-gray-400' />
            </div>
          </div>
        </div>
      </div>
      <div className='min-h-screen bg-white text-content dark:bg-background dark:text-white'>
        <RideList rides={filteredRides} />
      </div>
    </div>
  );
};

export default Rides;
