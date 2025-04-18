import { useDispatch, useSelector } from "react-redux";
import { increment } from "./features/counter/counterSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  function handleIncreement() {
    dispatch(increment());
  }
  return (
    <>
      <div>
        <button onClick={handleIncreement}>Increement</button>
        <p>Count: {count}</p>
      </div>
    </>
  );
}

export default App;
