import React from "react";
import Image from "next/image";

const Product = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <input 
      type="file" placeholder="Product"></input>
    </div>
  );
};

export default Product;
