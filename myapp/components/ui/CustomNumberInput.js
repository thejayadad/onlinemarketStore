'use client'
import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const CustomNumberInput = ({ name, type, placeholder }) => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value ? parseFloat(e.target.value) : 0;
    setValue(newValue);
  };

  return (
    <div className="flex items-center w-full p-2">
      <button
        type="button"
        onClick={handleDecrement}
        className="cursor-pointer focus:outline-none adjustment"
      >
        <FiChevronDown />
      </button>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full text-center border border-gray-300 rounded-md focus:outline-none p-4 cursor-pointer"
      />
      <button
        type="button"
        onClick={handleIncrement}
        className="cursor-pointer focus:outline-none adjustment"
      >
        <FiChevronUp />
      </button>
    </div>
  );
};

export default CustomNumberInput;
