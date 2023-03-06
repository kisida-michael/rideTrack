import React, { useState } from 'react';

const ToggleSwitch = ({ id, label, onChange, checked }) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const toggleChecked = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return (
    <div className='relative inline-block w-10 align-middle select-none'>
      <input
        type='checkbox'
        id={id}
        name={id}
        className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
        checked={isChecked}
        onChange={toggleChecked}
      />
      <label
        htmlFor={id}
        className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
      ></label>
    </div>
  );
};

export default ToggleSwitch;
