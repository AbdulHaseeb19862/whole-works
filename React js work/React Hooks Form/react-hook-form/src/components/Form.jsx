import React from "react";

function Form() {
  return (
    <div className="w-full max-w-7xl p-4 shadow-xl shadow-gray-400">
      <form action="" className="flex flex-col gap-10 p-5">
        <div>
          <input
            className="w-full py-4 focus:outline-2 focus:outline-blue-500 rounded-md p-2 placeholder:text-xl font-semibold"
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            className="w-full py-4 focus:outline-2 focus:outline-blue-500 rounded-md p-2 placeholder:text-xl font-semibold"
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <input
            className="w-full py-4 focus:outline-2 focus:outline-blue-500 rounded-md p-2 placeholder:text-xl font-semibold "
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <input
            className="w-full py-3 rounded-md bg-purple-600 text-white text-2xl cursor-pointer"
            type="Submit"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
