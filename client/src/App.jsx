import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './views/About';
import AuthPage from './views/AuthPage';
import Cart from './views/Cart';
import Contact from './views/Contact';
import Shop from './views/Shop';
import Footer from './components/Footer';
import Home from './views/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<AuthPage />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
