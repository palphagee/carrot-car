import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/pages/Navbar';
import Home from '../src/pages/Home';
import NFTManagementPage from '../src/pages/NFTManagementPage';
import Tokenswap from '../src/pages/Tokenswap';
import Sellcar from '../src/pages/Sellcar';
import Doc from '../src/pages/Doc';


const App = () => {
  

  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nft-management" element={<NFTManagementPage />} />
        <Route path="/tokenswap" element={<Tokenswap />} />
        <Route path="/sellcar" element={<Sellcar />} />
        <Route path="/doc" element={<Doc />} />
      </Routes>
    </Router>
  );
};

export default App;