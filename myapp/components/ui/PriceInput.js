import React from 'react';

const PriceInput = ({ name }) => {
  return (
    <div className="relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
        $
      </div>
      <input
        type="number"
        step="0.01"
        min="0"
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-2 border-gray-300 rounded-md"
        placeholder="0.00"
        aria-describedby="price-currency"
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
        <span className="hidden sm:inline-block">Calculator Icon</span>
      </div>
    </div>
  );
};

export default PriceInput;
