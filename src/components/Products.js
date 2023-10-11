import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({products}) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
         
          Shop EveryDay
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
        Welcome to our extraordinary world of online shopping! Step into a realm where convenience meets style, and where your shopping desires come to life. Our ecommerce website is not just another virtual store – it's a captivating experience that will leave you in awe.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((item) => (
            <ProductsCard key={item.id} product = {item}/> 
          ) )}
      </div>
    </div>
        
  );
};

export default Products;
