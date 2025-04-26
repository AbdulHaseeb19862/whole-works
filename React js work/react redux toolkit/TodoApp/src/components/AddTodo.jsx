import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addToHandle = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      action=""
      onSubmit={addToHandle}
      className="flex justify-center gap-8"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-black px-8 py-3
        text-gray-500 placeholder:text-gray-500 text-lg rounded focus:outline-none focus:ring-2 focus:ring-indigo-400  "
        placeholder="Enter a Todo..."
      />
      <button
        type="submit"
        className="bg-indigo-500 px-5 text-white rounded-md cursor-pointer"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
