// 'use client'
// import React, { useState } from 'react';
// import { FiTrash2 } from 'react-icons/fi';
// import uploadToCloudinary from '@/lib/cloudinary';


// const ImageInput = ({ type, name, onImageUpload }) => {
//     const [imagePreviews, setImagePreviews] = useState([]);
  
//     const handleImageChange = async (event) => {
//       const files = event.target.files;
  
//       try {
//         const imageUrls = await Promise.all(
//           Array.from(files).map(async (file) => {
//             const imageUrl = await uploadToCloudinary(file);
//             return imageUrl;
//           })
//         );
  
//         setImagePreviews((prevPreviews) => [...prevPreviews, ...imageUrls]);
//         onImageUpload(imageUrls); 
//       } catch (error) {
//         console.error('Error uploading images:', error);
//       }
//     };
  
//     const handleRemoveImage = (index) => {
//       const updatedPreviews = [...imagePreviews];
//       updatedPreviews.splice(index, 1);
//       setImagePreviews(updatedPreviews);
//     };
  
//     return (
//       <div>
//         <input
//           type={type}
//           name={name}
//           accept="image/*"
//           onChange={handleImageChange}
//           multiple
//         />
//         <div className="mt-4 flex flex-wrap gap-4">
//           {imagePreviews.map((preview, index) => (
//             <div key={index} className="relative">
//               <img src={preview} alt={`Preview ${index}`} className="w-32 h-32 object-cover rounded" />
//               <button
//                 type="button"
//                 onClick={() => handleRemoveImage(index)}
//                 className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none"
//               >
//                 <FiTrash2 />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default ImageInput;
