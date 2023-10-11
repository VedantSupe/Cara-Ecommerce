import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, Cara, Cart , WhiteLogo } from "../assets/index";
const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  return (
    <div className="w-full h-32 bg-white border-b-[2px] , font-titleFont sticky top-0 z-50 ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
      <Link to='/'>
      <div>
          <img className="w-48" src={Cara} alt="White Logo" />
        </div></Link>
        <div className="flex items-center gap-12">
          <ul className="flex items-center gap-8">
            <Link to='/'>
          <li className="text-base text-black font-bold hover:text-orange-900
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home </li></Link>
            <li className="text-base text-black font-bold hover:text-orange-900
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Pages</li>
            <li className="text-base text-black font-bold hover:text-orange-900
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shop</li>
            <li className="text-base text-black font-bold hover:text-orange-900
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Element</li>
            <li className="text-base text-black font-bold hover:text-orange-900
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Blog</li>
          </ul>
        <Link to='/cart'>
        <div className="relative">
            <img className="w-6" src={Cart}/>
            <span className="absolute w-6 top-0 left-4 text-sm flex items-center justify-center font-semibold">{productData.length}</span>
          </div></Link>
          <Link to='/login'>
          <img className="w-8 h-8 rounded-full" src={Avatar}/></Link>
          {/* <img className="w-8 h-8 rounded-full" src={Avatar}/> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
