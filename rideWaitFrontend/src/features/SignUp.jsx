import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [selectedProvider, setSelectedProvider] = useState('');

  const handleChange = (event) => {
    setSelectedProvider(event.target.value);
  };

  return (
    <div>
      <div className='flex  flex-col h-screen'>
        <div className='h-[15%] bg-primary w-screen'></div>
        <div className='h-[85%] bg-white dark:bg-background w-screen rounded-t-3xl overflow-hidden'>
          <div className='flex flex-col mt-20 '>
            <div className='flex-1 mx-auto text-center mb-10 max-w-[60%] '>
              <h1 className='text-primary dark:text-off-white font-bold text-3xl'>
                Sign Up for Ride Track
              </h1>
            </div>
            <form>
              <div className='mx-auto text-center text-[#A7AEB0]'>
                <input
                  className='w-[20rem] mb-4 dark:bg-content border-content-border  focus:border-primary border-2 rounded-full pl-4 py-2'
                  id='username'
                  type='text'
                  placeholder='Username'
                ></input>
                <input
                  className='w-[20rem] mb-4 dark:bg-content border-content-border  focus:border-primary border-2 rounded-full pl-4 py-2'
                  id='password'
                  type='password'
                  placeholder='**************'
                ></input>
                <input
                  className='w-[20rem] mb-4 dark:bg-content border-content-border  focus:border-primary border-2 rounded-full pl-4 py-2'
                  id='firstName'
                  type='text'
                  placeholder='First Name'
                ></input>
                <input
                  className='w-[20rem] mb-4 dark:bg-content border-content-border  focus:border-primary border-2 rounded-full pl-4 py-2'
                  id='lastName'
                  type='text'
                  placeholder='Last Name'
                ></input>
                <div>
                  <input
                    className='w-[11rem] mb-4 mr-2 dark:bg-content border-content-border  focus:border-primary border-2 rounded-full pl-4 py-2'
                    id='firstName'
                    type='number'
                    pattern='[0-9]*'
                    placeholder='Phone Number'
                  ></input>

                  <select
                    className=' w-[8rem] h-[2.65rem] mb-4 dark:bg-content border-content-border  focus:border-primary border-2 rounded-full pl-4'
                    id='provider'
                    value={selectedProvider}
                    onChange={handleChange}
                  >
                    <option value=''>Provider</option>
                    <option value='AT&T'>AT&T</option>
                    <option value='Verizon'>Verizon</option>
                    <option value='T-Mobile'>T-Mobile</option>
                    <option value='Sprint'>Sprint</option>
                  </select>
                </div>
                <div className='flex flex-col mx-auto mt-20 text-center w-max '>
                  <button className='text-off-white min-w-full flex-1 font-bold rounded-full px-12 py-2 text-lg bg-primary hover:opacity-80 dark:border-gradient-br-blue-gradient-bg-content gradient-border-2 dark:hover:bg-gradient-to-r from-gradient-blue to-gradient-blue-light '>
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
