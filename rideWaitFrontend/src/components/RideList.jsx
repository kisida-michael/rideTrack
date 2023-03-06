import React from 'react';
import RideCard from './RideCard';

const RideList = ({ rides }) => {
  return (
    <div className='flex flex-col gap-4 sm:flex-row flex-wrap w-[85%] mx-auto'>
      {rides.map((ride, index) => (
        <RideCard key={index} ride={ride} />
      ))}
    </div>
  );
};

export default RideList;
