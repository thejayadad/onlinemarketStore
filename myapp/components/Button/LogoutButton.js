'use client'
import React from 'react';
import { signOut } from 'next-auth/react';
import { FiLogOut } from 'react-icons/fi';

const LogoutButton = () => {
  return (
    <button
      className="flex items-center hover:text-gray-900 gap-2 p-1"
      onClick={() => signOut()}
    >
      <span
      className='links'
      >Logout</span>
      <FiLogOut />
    </button>
  );
};

export default LogoutButton;
