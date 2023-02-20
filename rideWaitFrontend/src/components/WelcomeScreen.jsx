import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Icon } from '../assets/img/RideTrack-logos_transparent.svg';
import MyStatusBar from '../features/MyStatusBar';

const WelcomeScreen = () => {
  // const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div className=' h-screen bg-white dark:bg-background '>
        <div className='flex flex-col justify-center'>
          <h1 className='text-primary dark:text-off-white text-center font-bold text-4xl mt-20'>
            Ride Track
          </h1>
          <div className=' mt-20 mx-auto  opacity-20'>
            <Icon className='w-60 h-60' />
          </div>
          <div className='text-off-white  flex flex-col mx-auto mt-40 text-center w-max '>
            <Link to='/signUp'>
              <button className='min-w-full mb-6 font-bold rounded-full px-4 py-2 text-lg bg-content border-2 border-content-border hover:bg-content-hover'>
                Create New Account
              </button>
            </Link>
            <Link to='/login'>
              <button className='min-w-full flex-1 font-bold rounded-full px-4 py-2 text-lg bg-primary hover:light:opacity-80 dark:border-gradient-br-blue-gradient-bg-content gradient-border-2 dark:hover:bg-gradient-to-r from-gradient-blue to-gradient-blue-light '>
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
