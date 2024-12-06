import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import TradeSphere from './pages/TradeSphere';
import MoneyMiner from './pages/MoneyMiner';
import Markets from './pages/Markets';
import PaperTrading from './pages/PaperTrading';
import Signup from './pages/Signup';
import Features from './Menu/Features';
import Manage from './Menu/Manage';

const App = () => {
  const location = useLocation();
  const minimalPages = ['/signup', '/tradesphere', '/moneyminer', '/markets', '/paper-trading'];
  const isMinimalPage = minimalPages.includes(location.pathname);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tradesphere" element={<TradeSphere />} />
        <Route path="/moneyminer" element={<MoneyMiner />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/paper-trading" element={<PaperTrading />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {!isMinimalPage && (
        <>
          <Menu />
          <Features />
          <Manage />
          {/* <About /> */}
          <Footer />
        </>
      )}
      <ToastContainer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
