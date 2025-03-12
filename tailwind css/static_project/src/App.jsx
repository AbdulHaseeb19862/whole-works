import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";

function App() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <Header></Header>
      <Hero></Hero>
      <Product></Product>
      <Footer></Footer>
    </div>
  );
}

export default App;
