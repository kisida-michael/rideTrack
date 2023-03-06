import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import groupParks from '../utils/groupParks';

const DashboardParks = () => {
  const [data, setData] = useState(groupParks);
  for (let parks of data) {
    console.log(parks);
  }
  return (
    <div>
      {data.map(({ name, parks }) => (
        <div className='' key={name}>
          <h2 className=' text-primary dark:text-off-white font-bold text-lg'>
            {name}
          </h2>
          {parks.map(({ name, rides }) => (
            <div className='mt-2' key={name}>
              <Link
                to={`/dashboard/${name}`}
                state={{ rides: rides, name: name }}
              >
                <button className='mb-2 text-white dark:text-off-white  flex-1 font-bold rounded-full px-4 py-2 text-md bg-primary hover:opacity-80 hover:dark:opacity-100 dark:border-gradient-br-blue-gradient-bg-content gradient-border-2 dark:hover:bg-gradient-to-r from-gradient-blue to-gradient-blue-light '>
                  {name}
                </button>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DashboardParks;
