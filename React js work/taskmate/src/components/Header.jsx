import React from "react";
import logo from "../assets/todo.png";

function Header({ taskList, setTasks, theem, setTheem }) {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full bg-white shadow-lg shadow-gray-400  rounded-md px-4 p-3">
        <div className=" flex justify-between items-center ">
          <div className="flex items-center ">
            <img className="w-16" src={logo} alt="" />
            <h2 className="text-2xl">Taskmate</h2>
          </div>
          <div className="flex gap-2">
            <div
              onClick={() => setTheem("bg-white")}
              className={`w-6 h-6 bg-white rounded-full shadow-2xl shadow-amber-100 border border-gray-400 transition-transform duration-300 hover:scale-125 ${
                theem === "bg-white" ? "scale-125" : ""
              }`}
            ></div>
            <div
              onClick={() => setTheem("bg-gray-200")}
              className={`w-6 h-6 bg-gray-200 rounded-full shadow-2xl shadow-amber-100 border border-gray-400 transition-transform duration-300 hover:scale-125 ${
                theem === "bg-gray-200" ? "scale-125" : ""
              }`}
            ></div>
            <div
              onClick={() => setTheem("bg-[#1683fe]")}
              className={`w-6 h-6 bg-[#1683fe] rounded-full shadow-2xl shadow-amber-100 border border-gray-400 transition-transform duration-300 hover:scale-125 ${
                theem === "bg-[#1683fe]" ? "scale-125" : ""
              }`}
            ></div>
            <div
              onClick={() => setTheem("bg-black")}
              className={`w-6 h-6 bg-black rounded-full shadow-2xl shadow-amber-100 border border-gray-400 transition-transform duration-300 hover:scale-125 ${
                theem === "bg-black" ? "scale-125" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
