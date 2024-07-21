"use client";

import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';

const Product: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <CldUploadWidget
        uploadPreset="your_upload_preset" // зөв uploadPreset тохиргоо
        signatureEndpoint="/api/upload"
      >
        {({ open }) => {
          return (
            <button
              className="bg-indigo-500 rounded py-2 px-4 mb-4 text-white"
              onClick={() => open()}
            >
              Upload Image
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default Product;
