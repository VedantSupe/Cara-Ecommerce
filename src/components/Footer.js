import React from "react";
import { Cara, pay } from "../assets";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto  grid grid-cols-3">
        <div className="flex flex-col gap-7">
          <img className="w-32" src={Cara} />
          <p className="text-white text-sm tracking-wide"> ReactBD.com </p>
          <img className="w-56" src={pay} />
          <div className="flex gap-5 text-lg text-gray-400">
            <AiOutlineGithub className="hover:text-white duration-300 cursor-pointer" />
            <AiFillYoutube className="hover:text-white duration-300 cursor-pointer" />
            <AiFillFacebook className="hover:text-white duration-300 cursor-pointer" />
            <AiOutlineInstagram className="hover:text-white duration-300 cursor-pointer" />
            <AiOutlineTwitter className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Website : www.cara.com</p>
            <p>Sinhgad Road , Pune</p>
            <p>Mobile : 9370072640 </p>
            <p>Email : Cara@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
            <input type="text" placeholder="Email" className="bg-transparent border px-4 py-2 text-sm"/>
            <button className="text-sem border text-shite border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
