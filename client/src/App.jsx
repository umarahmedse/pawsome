import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./utils/Layout";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} index />
          <Route element={<Products />} path="/products" />
          <Route element={<AboutUs />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Login />} path="/login" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
