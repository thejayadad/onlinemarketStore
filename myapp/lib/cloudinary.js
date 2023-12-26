import cloudinary from 'cloudinary';
import { promises as fs } from 'fs';

cloudinary.config({
  cloud_name: 'socialsite',
  api_key: '526411654395583',
  api_secret: 'nBmLSN_Psg0pGZq0wx_LYhuVirg',
});

const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.v2.uploader.upload(file, {
      upload_preset: 'atnwpdaw',
    });

    return result.secure_url; 
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw new Error('Failed to upload image to Cloudinary');
  }
};

export default uploadToCloudinary;
