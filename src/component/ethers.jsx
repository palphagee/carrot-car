import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import gametokenABI from '../abi/gametoken.json';
import usdtABI from '../abi/usdt.json';
import nftABI from '../abi/nft.json';

const EthersComponent = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [signerAddress, setSignerAddress] = useState('');
  const [gametoken, setGametoken] = useState(null);
  const [usdt, setUsdt] = useState(null);
  const [gametokenBalance, setGametokenBalance] = useState(0);
  const [usdtBalance, setUsdtBalance] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [nftContract, setNFTContract] = useState(null);
  const [unclaimedRewards, setUnclaimedRewards] = useState(0);
  const [ownedNFTs, setOwnedNFTs] = useState([]);
  
  const [tokenIds, setTokenIds] = useState([]);
 

  const initializeProvider = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(provider);
      const signer = await provider.getSigner();
      setSigner(signer);
      setIsConnected(true);

      const address = await signer.getAddress();
      setSignerAddress(address);
    }
  };

  
  const initializeGameToken = async () => {
    const gametokenAddress = '0x9cbd29a4552894c430f2783a495e4b07efe00517';
    const gametoken = new ethers.Contract(gametokenAddress, gametokenABI, signer);
    setGametoken(gametoken);

    const gametokenBalance = await gametoken.balanceOf(await signer.getAddress());
    setGametokenBalance(ethers.formatEther(gametokenBalance));
  };

 
  const initializeUSDT = async () => {
    const usdtAddress = '0x55d398326f99059fF775485246999027B3197955';
    const usdt = new ethers.Contract(usdtAddress, usdtABI, signer);
    setUsdt(usdt);

    const usdtBalance = await usdt.balanceOf(await signer.getAddress());
    setUsdtBalance(ethers.formatEther(usdtBalance));
    
  };

  
  const initializeNFTContract = async () => {
    const nftAddress = '0x632735864427fc9a78a6a3568560900cf956f83f';
    const nftContract = new ethers.Contract(nftAddress, nftABI, signer);
    setNFTContract(nftContract);

    
  };

 
  useEffect(() => {
    initializeProvider();
  }, []);
  
 
  useEffect(() => {
    if (provider && signer) {
      initializeGameToken();
      initializeUSDT();
      initializeNFTContract();
    }
  }, [provider, signer]);
  

  
  const connectWallet =  () => {
     initializeProvider();
  };

  
  const disconnectWallet =  () => {
    window.ethereum.disconnect();
    setSigner(null);
    setIsConnected(false);
  };

  
  const handleWalletConnect = () => {
    if (isConnected) {
      disconnectWallet();
    } else {
      connectWallet();
    }
  };
  useEffect(() => {
    if (nftContract) {
      updateOwnedNFTs();
      
      fetchUnclaimedRewards();
    }
  }, [nftContract]);


  const updateOwnedNFTs = async () => {
    if (nftContract) {
      const ownedNFTs = await nftContract.getOwnedNFTs(signerAddress);
      setOwnedNFTs(ownedNFTs);
      const ids = ownedNFTs.map((tokenId, index) => tokenId);
      setTokenIds(ids);
    } else {
      console.error('nftContract is not initialized yet');
    }
  };

  

  const fetchUnclaimedRewards = async () => {
    const unclaimed = await nftContract.getUnclaimedRewards();
    const unclaimedEther = Number(ethers.formatEther(unclaimed)).toFixed(3);
    setUnclaimedRewards(unclaimedEther);
  };

  const claimReward = async () => {
   
    await nftContract.claimReward();
    const unclaimed = await nftContract.getUnclaimedRewards();
    setUnclaimedRewards(ethers.formatEther(unclaimed));
  };

  
  
  const mintBronzeNFT = async () => {
    try {
       
    const allowance = await usdt.allowance(signerAddress, '0x632735864427fc9a78a6a3568560900cf956f83f');
    const requiredAllowance = 50n * 10n ** 18n;
    if (allowance < requiredAllowance) {
      
      await usdt.approve('0x632735864427fc9a78a6a3568560900cf956f83f', requiredAllowance);
    }
      
      await Promise.all([
        nftContract.mintBronzeNFT(),
        updateOwnedNFTs(),
        
      ]);
    } catch (error) {
      console.error('mint bronzeNFT error:', error);
    }
  };
  
  const mintSilverNFT = async () => {
    try {
      
    const allowance = await usdt.allowance(signerAddress, '0x632735864427fc9a78a6a3568560900cf956f83f');
    const requiredAllowance = 100n * 10n ** 18n;
    if (allowance < requiredAllowance) {
      
      await usdt.approve('0x632735864427fc9a78a6a3568560900cf956f83f', requiredAllowance);
    }
      
      await Promise.all([
        nftContract.mintSilverNFT(),
        updateOwnedNFTs(),
        
      ]);
    } catch (error) {
      console.error('mint silverNFT error:', error);
    }
  };
  
  const mintGoldNFT = async () => {
    try {
      
    const allowance = await usdt.allowance(signerAddress, '0x632735864427fc9a78a6a3568560900cf956f83f');
    const requiredAllowance = 150n * 10n ** 18n;
    if (allowance < requiredAllowance) {
      
      await usdt.approve('0x632735864427fc9a78a6a3568560900cf956f83f', requiredAllowance);
    }
  
      
      await Promise.all([
        nftContract.mintGoldNFT(),
        updateOwnedNFTs(),
        
      ]);
    } catch (error) {
      console.error('mint gold NFT error:', error);
    }
  };
  
  const mintDiamondNFT = async () => {
    try {
      
    const allowance = await usdt.allowance(signerAddress, '0x632735864427fc9a78a6a3568560900cf956f83f');
    const requiredAllowance = 200n * 10n ** 18n;
    if (allowance < requiredAllowance) {
      
      await usdt.approve('0x632735864427fc9a78a6a3568560900cf956f83f', requiredAllowance);
    }
  
      
      await Promise.all([
        nftContract.mintDiamondNFT(),
        updateOwnedNFTs(),
        
      ]);
    } catch (error) {
      console.error('mintdiamondNFT error :', error);
    }
  };

  

  
  const upgradeNFT = async (tokenId) => {
    try {
      
      const allowance = await gametoken.allowance(signerAddress, '0x632735864427fc9a78a6a3568560900cf956f83f');
      const requiredAllowance = 2000n * 10n ** 18n;
      if (allowance < requiredAllowance) {
      await gametoken.approve('0x632735864427fc9a78a6a3568560900cf956f83f', 2000n * 10n ** 18n);
      }
      
      await Promise.all([
        nftContract.upgradeNFT(tokenId),
        updateOwnedNFTs(),
        
      ]);
    } catch (error) {
      console.error('upgrade nft error:', error);
    }
  };

  const transferUsdtAndGameToken = async (usdtAmount) => {
    try {
      
      const allowance = await usdt.allowance(signerAddress, '0x632735864427fc9a78a6a3568560900cf956f83f');
      const requiredAllowance = 200n * 10n ** 18n;
      if (allowance < requiredAllowance) {
      await usdt.approve('0x632735864427fc9a78a6a3568560900cf956f83f', 200n * 10n ** 18n);
      }
      
      await Promise.all([
        nftContract.transferUsdtAndGameToken(usdtAmount),
        
      ]);
    } catch (error) {
      console.error('Error when transferring USDT and GameToken:', error);
    }
  };
  


  return {
    provider,
    signer,
    gametoken,
    usdt,
    gametokenBalance,
    usdtBalance,
    isConnected,
    signerAddress,
    nftContract,
    handleWalletConnect,
    unclaimedRewards,
    claimReward,
    mintBronzeNFT,
    mintDiamondNFT,
    mintGoldNFT,
    mintSilverNFT,
    upgradeNFT,
    transferUsdtAndGameToken,
    ownedNFTs,
    tokenIds,connectWallet,disconnectWallet 
   
   
    
  };
};

export default EthersComponent;