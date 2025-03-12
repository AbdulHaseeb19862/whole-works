import React from "react";

function AddTask({ taskList, setTasks, task, setTask }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      const date = new Date();
      const updatedTasks = taskList.map((todo) =>
        todo.id === task.id
          ? {
              ...todo,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTasks(updatedTasks);
      setTask({ id: "", name: "" });
    } else {
      const date = new Date();
      const taskName = e.target.task.value.trim();
      if (!taskName) {
        alert("Please enter a task");
        return;
      }
      const task = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      setTasks([...taskList, task]);

      setTask({ id: "", name: "" });
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="max-w-lg w-full h-18  bg-white shadow-lg shadow-gray-400  rounded-md p-4 flex justify-center gap-2"
    >
      <input
        className="w-96 h-10 rounded-md outline-none"
        type="text"
        name="task"
        value={task.name || ""}
        placeholder="Add task"
        onChange={(e) => setTask({ ...task, name: e.target.value })}
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
        {task.id ? "Update" : "Submit"}
      </button>
    </form>
  );
}

export default AddTask;
