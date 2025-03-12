import React from "react";
import speaker from "../assets/speaker.webp";

function Header() {
  return (
    <div className="h-24 sm:h-14 flex flex-col sm:flex-row justify-between items-center px-4 ">
      <div className="flex items-center gap-3 cursor-pointer mt-2">
        <img className="w-10 sm:w-12 " src={speaker} alt="" />
        <h2 className="text-xl sm:text-2xl font-semibold">SoundMate</h2>
      </div>
      <nav className="flex gap-4 text-lg sm:text-xl cursor-pointer">
        <span className="hover:bg-slate-300 hover:text-gray-600 p-1 px-2 rounded-md font-semibold">
          Home
        </span>
        <span className="hover:bg-slate-300 hover:text-gray-600 p-1 px-2 rounded-md font-semibold">
          Products
        </span>
        <span className="hover:bg-slate-300 hover:text-gray-600 p-1 px-2 rounded-md font-semibold">
          About Us
        </span>
      </nav>
    </div>
  );
}

export default Header;
