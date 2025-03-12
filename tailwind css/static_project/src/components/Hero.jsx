import React from "react";

function Hero() {
  return (
    <div className="flex flex-col items-center gap-3 px-3 ">
      <h2 className="text-2xl sm:text-3xl font-semibold">Lorem ipsum dolor</h2>
      <p className="max-w-4xl text-gray-700 text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, tempore
        quae, nam sunt nesciunt repellat itaque soluta cum at voluptatibus
        libero. Suscipit vel eum tempore, eligendi rem eveniet illum iusto.
      </p>
      <button className="bg-blue-700 hover:bg-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 text-white rounded-md cursor-pointer text-base sm:text-lg">
        Know More
      </button>
    </div>
  );
}

export default Hero;
