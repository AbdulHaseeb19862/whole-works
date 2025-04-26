import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex flex-col gap-6">
      <AddTodo></AddTodo>
      <Todos></Todos>
    </div>
  );
}

export default App;
