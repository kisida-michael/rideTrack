import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div className='flex  flex-col h-screen'>
        <div className='h-[15%] bg-primary w-screen'></div>
        <div className='h-[85%]  bg-white dark:bg-background w-screen rounded-t-3xl overflow-hidden'>
          <div className='flex flex-col mt-20 '>
            <div className='flex-1 mx-auto text-center mb-10 max-w-[60%] '>
              <h1 className='text-primary dark:text-off-white font-bold text-3xl'>
                Login to Ride Track
              </h1>
            </div>
            <div className='text-off-white mx-auto text-center mt-10'>
              <input
                className='w-[20rem] mb-6 dark:bg-content border-content-border border-2 rounded-full pl-4 py-2'
                id='username'
                type='text'
                placeholder='Username'
              ></input>
              <input
                className='w-[20rem]  dark:bg-content border-content-border border-2 rounded-full pl-4 py-2'
                id='password'
                type='password'
                placeholder='**************'
              ></input>
              <div className='flex flex-col mx-auto mt-20 text-center w-max '>
                <Link to='/signUp'>
                  <button className='min-w-full mb-6 font-bold rounded-full px-4 py-2 text-lg bg-content border-2 border-content-border hover:bg-content-hover'>
                    Create New Account
                  </button>
                </Link>
                <Link to='/dashboard'>
                  <button className='min-w-full flex-1 font-bold rounded-full px-4 py-2 text-lg bg-primary hover:opacity-80 dark:border-gradient-br-blue-gradient-bg-content gradient-border-2 dark:hover:bg-gradient-to-r from-gradient-blue to-gradient-blue-light '>
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
