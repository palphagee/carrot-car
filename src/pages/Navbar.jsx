import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EthersComponent from '../component/ethers';
import '../ui/navbar.css';
import nftlogo from '../assets/image/carrotlogo1.png';

const Navbar = () => {
  const {  provider, signer, gametoken, usdt, gametokenBalance, usdtBalance, isConnected, signerAddress, handleWalletConnect, connectWallet, disconnectWallet  } = EthersComponent();
  
  

  return (
    <nav className="navbar">
      <div className="navbar-brand"><img src={nftlogo} alt="NFTlogo" /></div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/nft-management">NFT</Link>
        </li>
        <li className="nav-item">
          <Link to="/tokenswap">IDO</Link>
        </li>
        <li className="nav-item">
          <Link to="/sellcar">SellYourCar</Link>
        </li>
        <li className="nav-item">
          <Link to="/doc">Doc</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <div className="balance">GameToken: {parseFloat(gametokenBalance).toFixed(2)}  <br/><br/>USDT: {parseFloat(usdtBalance).toFixed(2)}</div>
        <button className="btn btn-primary" onClick={connectWallet}>
          {isConnected
            ? `${signerAddress.slice(0, 6)}...${signerAddress.slice(-4)}`
            : 'MetaMask'}
        </button>
        <p>Please select Binance Smart Chain</p>
      </div>
    </nav>
  );
};

export default Navbar;