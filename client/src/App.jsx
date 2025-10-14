import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import AuthPage from "./pages/AuthPage";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AuthPage" element={<AuthPage />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
