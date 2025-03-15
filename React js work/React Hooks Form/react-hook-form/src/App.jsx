import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5 px-5">
      <h2 className="text-2xl font-semibold">React Hook Form</h2>
      <Form></Form>
    </div>
  );
}

export default App;
