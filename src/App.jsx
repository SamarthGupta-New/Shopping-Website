import { Route, Routes } from "react-router-dom";
import About from "../src/Pages/About";
import Home from "../src/Pages/Home";
import Collection from "../src/Pages/Collection";
import Contact from "../src/Pages/Contact";
import Product from "../src/Pages/Product";
import Cart from "../src/Pages/Cart";
import Login from "../src/Pages/Login";
import PlaceOrder from "../src/Pages/PlaceOrder";
import Order from "../src/Pages/Orders";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place_order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
