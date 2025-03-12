import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";

function ShowTask({ taskList, setTasks, task, setTask }) {
  const handleDelete = (id) => {
    const updatedList = taskList.filter((item) => item.id !== id);
    setTasks(updatedList);
  };

  const handleEdit = (id) => {
    const selectedTask = taskList.find((task) => task.id === id);
    setTask(selectedTask);
  };
  return (
    <div className="max-w-7xl h-autp w-full bg-white shadow-lg shadow-gray-400 rounded-md p-4 pb-10">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl">Todo</h2>
          <span className="w-6 h-6 rounded-full bg-gray-400 flex justify-center">
            {taskList.length}
          </span>
        </div>
        <button
          className="bg-blue-600 px-4 py-2 text-white rounded-md"
          onClick={() => setTasks([])}
        >
          Clear All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5  items-center mt-5">
        {taskList.map((todo) => {
          return (
            <div
              key={todo.id}
              className="h-24 p-4 py-6  bg-white shadow-md shadow-gray-400 border-l-4 border-blue-700 rounded-md flex justify-between items-center "
            >
              <div className="">
                <h2 className="text-xl font-semibold">{todo.name}</h2>
                <p className="text-gray-700 text-sm">{todo.time}</p>
              </div>
              <div className="flex gap-2">
                <BsPencilSquare
                  onClick={() => handleEdit(todo.id)}
                  className="text-xl text-blue-700 cursor-pointer"
                />
                <MdDeleteOutline
                  onClick={() => handleDelete(todo.id)}
                  className="text-xl text-red-500 cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowTask;
