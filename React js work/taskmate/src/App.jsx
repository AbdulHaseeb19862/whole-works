import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [taskList, setTasks] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );
  const [task, setTask] = useState({});
  const [theem, setTheem] = useState(
    localStorage.getItem("theem") || "bg-black"
  );

  useEffect(() => {
    localStorage.setItem("theem", theem);
  }, [theem]);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);
  return (
    <>
      <div className={`${theem} px-4`}>
        <div className="w-full h-screen flex flex-col  items-center p-2 gap-14">
          <Header
            taskList={taskList}
            setTasks={setTasks}
            theem={theem}
            setTheem={setTheem}
          />
          <div className="w-full flex  flex-col items-center gap-8">
            <AddTask
              taskList={taskList}
              setTasks={setTasks}
              task={task}
              setTask={setTask}
            />
            <ShowTask
              taskList={taskList}
              setTasks={setTasks}
              task={task}
              setTask={setTask}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
