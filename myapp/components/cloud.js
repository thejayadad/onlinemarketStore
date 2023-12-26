'use client'
import React, { useState } from 'react';

const CloudinaryUpload = ({ onUpload}) => {
  const [photo, setPhoto] = useState(null);
  const UPLOAD_PRESET='atnwpdaw'
  const CLOUD_NAME='socialsite'
  const uploadImage = async () => {
    if (!photo) return;

    const formData = new FormData();
    formData.append("file", photo);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      const imageUrl = data['secure_url'];

      onUpload(imageUrl); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="file" name='images' onChange={(e) => setPhoto(e.target.files[0])} />
      <button onClick={uploadImage}>Upload</button>
    </div>
  );
};

export default CloudinaryUpload;
