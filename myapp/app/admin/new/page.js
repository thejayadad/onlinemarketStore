'use client'
// NewPage.js (Client-Side Component)
import React, { useState } from 'react';
import { createProduct } from '@/lib/actions';
import CloudinaryUpload from '@/components/cloud'; // Adjust the path based on your project structure

const NewPage = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleUpload = (url) => {
    setImageUrl(url);
  };


  return (
    <div>
      <form className='flex flex-col'
      action={createProduct}
      >
        <input type='text' name='title' placeholder='Title...' />
        <CloudinaryUpload     
        onUpload={handleUpload} />
        <button type='submit' className='bg-orange-300'>Submit</button>
      </form>
    </div>
  );
};

export default NewPage;
