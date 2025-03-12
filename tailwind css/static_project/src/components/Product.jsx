import React from "react";
import photo from "../assets/photo.jpeg";

function Product() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-5">
      <img
        className="rounded-md max-w-sm border border-gray-100 mb-5 "
        src={photo}
        alt=""
      />
      <img
        className="rounded-md max-w-sm border border-gray-100 mb-5"
        src={photo}
        alt=""
      />
      <img
        className="rounded-md max-w-sm border border-gray-100 mb-5"
        src={photo}
        alt=""
      />
      <img
        className="rounded-md max-w-sm border border-gray-100 mb-5"
        src={photo}
        alt=""
      />
      <img
        className="rounded-md max-w-sm border border-gray-100 mb-5"
        src={photo}
        alt=""
      />
    </div>
  );
}

export default Product;
