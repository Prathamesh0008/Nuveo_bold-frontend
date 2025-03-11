import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import RollingTextNavbar from "./components/RollingTextNavbar";

import DancingCharacter from "./components/DancingCharacter";
import FloatingGif from "./components/FloatingGif";
import { CartProvider } from "./context/CartContext";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
    <ScrollToTop/>
    <CartProvider>
    <RollingTextNavbar/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/product/:id" element={<ProductDetailsPage/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ship" element={<ShippingPolicy/>} />
        <Route path="/return" element={<ReturnPolicy/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <DancingCharacter/>
      {/* <FloatingGif/> */}
      <Footer />
      </CartProvider>
    </>
  );
}

export default App;
