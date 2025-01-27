import "./App.css";

import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";

function App() {
  return (
    <div className="main">
      <Home />
      <Products />
    </div>
  );
}

export default App;
