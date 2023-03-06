import React, { useState, useEffect, useRef } from 'react';

const placeholderImage =
  'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/250/127/75/dam/wdpro-assets/parks-and-tickets/attractions/magic-kingdom/space-mountain/space-mountain-00.jpg?1659063632129';
const RideCard = ({ ride }) => {
  const [shortName, setShortName] = useState('');
  const nameRef = useRef(null);

  useEffect(() => {
    const containerWidth = nameRef.current.offsetWidth;
    const fontSize = parseFloat(
      window.getComputedStyle(nameRef.current).fontSize
    );
    const maxChars = Math.floor((containerWidth / fontSize) * 8);
    const shortName =
      ride.name.length > maxChars
        ? ride.name.substring(0, maxChars) + '...'
        : ride.name;
    setShortName(shortName);
  }, [ride.name]);

  return (
    <div className='flex bg-[#E9E9E9] dark:bg-content rounded-2xl dark:border-content-border border-2 dark:border-2'>
      <img
        src={ride.url ? ride.url : placeholderImage}
        className='p-4 rounded-full w-24 h-24'
      />
      <div className='flex flex-col justify-center mr-2'>
        <div className='align-middle' ref={nameRef}>
          <h3 className='font-medium'>{shortName}</h3>
          {/* <p>{ride.description}</p> */}
          <p className='font-bold text-xl'>{ride.wait_time} min</p>
        </div>
      </div>
    </div>
  );
};

export default RideCard;
