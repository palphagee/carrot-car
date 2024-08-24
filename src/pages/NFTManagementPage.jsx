import React, { useState, useEffect ,useReducer} from 'react';
import * as ethers from 'ethers';
import '../ui/NFTmanagementPage.css';
import bg2 from '../assets/image/nftbg.png'; 
import bg3 from '../assets/image/nftbgicon.png'; 
import nft1 from '../assets/image/lv1carrot_icon.png';
import nft2 from '../assets/image/lv2carrot_icon.png';
import nft3 from '../assets/image/lv3carrot_icon.png';
import nft4 from '../assets/image/lv4carrot_icon.png';
import mynfts from '../assets/image/mynft.png';
import market from '../assets/image/market.png';
import EthersComponent from '../component/ethers'
import { Link } from 'react-router-dom';
import goldbag from '../assets/image/4.png'

const NFTManagementPage = () => {
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
    tokenIds } = EthersComponent();
    
  const [updatedNFTMetadata, setUpdatedNFTMetadata] = useState({});
 
  useEffect(() => {
    const updateNFTMetadata = async () => {
      const nftMetadataUpdated = {};
      for (let i = 0; i < tokenIds.length; i++) {
        const tokenId = tokenIds[i];
        const tokenURI = await nftContract.tokenURI(tokenId);
        nftMetadataUpdated[tokenId] = tokenURI;
      }
      setUpdatedNFTMetadata(nftMetadataUpdated);
      
    };

    updateNFTMetadata();
  }, [ownedNFTs, tokenIds, nftContract ]);

 

  return (
    <div className="nft-management-page" style={{ backgroundColor:'rgb(60,71,103)' }}>
      {/* NFT market */}
      <div className="nft-market" style={{ backgroundImage: `url(${bg2})` }}>
      <div className="my-market" ><img src={market} alt="market" /></div>
        <div className="nft-item">
          <h3>Normal Carrot Car</h3>
          <img src={nft1} alt="Copper NFT" style={{marginLeft: '-50px'}} />
          <h4>50USDT</h4>
          <button onClick= {mintBronzeNFT}>Mint</button>
        </div>
        <div className="nft-item">
          <h3>Uncommon Carrot Car</h3>
          <img src={nft2} alt="Silver NFT" style={{marginLeft: '-50px'}}/>
          <h4>100USDT</h4>
          <button onClick={mintSilverNFT} >Mint</button>
        </div>
        <div className="nft-item">
          <h3>Rare Carrot Car</h3>
          <img src={nft3} alt="Gold NFT" />
          <h4>150USDT</h4>
          <button onClick={mintGoldNFT}>Mint</button>
        </div>
        <div className="nft-item">
          <h3>Epic Carrot Car</h3>
          <img src={nft4} alt="Diamond NFT" />
          <h4>200USDT</h4>
          <button onClick={mintDiamondNFT}>Mint</button>
        </div>
      </div>

      {/* --- */}
      <div className="divider"></div>

     {/* my NFT */} 
     <div className="my-nfts" >
        <div className="my-nfts-title"><img src={mynfts} alt="mynfts" /></div>
        <div className="goldbag-container">
        <img src={goldbag} alt="goldbag" className="goldbag" /></div>
        <div className="nft-grid">{ownedNFTs.map((tokenId, index) => (
            <div className="nft-item1" key={index}>
              <img src={updatedNFTMetadata[tokenId]} alt={`NFT ${tokenId}`} />
              <div className="nft-info">
                <button onClick={() =>upgradeNFT(tokenId)}>Upgrade</button>
              </div>
            </div>
          ))}</div>
          
        <div className="reward-button">
          <div className="unclaimed-rewards">Unclaimed rewards usdt: {unclaimedRewards}</div>
          <button onClick={claimReward}>Claim</button>
        </div>
      </div>
    </div>
  ); 
};
export default NFTManagementPage;