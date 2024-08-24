import React from 'react';
import '../ui/tokenswap.css'
import pic from '../assets/image/swapbg.png'
import EthersComponent from '../component/ethers'


const Tokenswap = () => {
  const { provider,
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
    nftMetadata,
    tokenIds, } = EthersComponent();
  return (
    <div className="home-ido-container">
      <img src={pic} alt=" " className="pic" />
      <p className="text-container">IDO will be launched in early September, and we will release an announcement on X and Telegram. Before IDO is launched, players can get USDT rewards by participating in giveaway promotion tasks. Players can get 5USDT cash rewards for each friend they invite to participate in the game. The giveaway link is: https://giveaway.com/en/Umic00LX3Nn
      How to participate in IDO: Players need to have at least one NFT and can choose any of the following four IDO quota buttons. The price of buying tokens in IDO is "0.01USDT", which will be one-third of the opening price of the liquidity pool for carrot tokens on PancakeSwap.</p>
      {/*  <div className="button-ido-container">
        <button className="button1" onClick={() => transferUsdtAndGameToken(50)}>50usdt</button>
        <button className="button2" onClick={() => transferUsdtAndGameToken(100)}>100usdt</button>
        <button className="button3" onClick={() => transferUsdtAndGameToken(150)}>150usdt</button>
        <button className="button4" onClick={() => transferUsdtAndGameToken(200)}>200usdt</button>
      </div>*/}
      
    </div>
  );
};

export default Tokenswap;