import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../ui/home.css';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';
import lg1 from '../assets/image/lv1carrot_icon.png'
import nft2 from '../assets/image/lv2carrot_icon.png'
import nft3 from '../assets/image/lv3carrot_icon.png'
import nft4 from '../assets/image/lv4carrot_icon.png'
import lg2 from '../assets/image/onebg.jpg'
import circle from '../assets/image/circle.png'
import first1 from '../assets/image/bord.png'
import banner1 from '../assets/image/33.png'
import banner2 from '../assets/image/22.png'
import banner3 from '../assets/image/11.png'
import banner4 from '../assets/image/44.png'
import upgrade1 from '../assets/image/LV1.png'
import upgrade2 from '../assets/image/LV2.png'
import upgrade3 from '../assets/image/LV3.png'
import upgrade4 from '../assets/image/LV4.png'
import awe from '../assets/image/awe.png'


const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/doc");
  };
  const handleGoToNFT = () => {
    console.log(navigate); 
    navigate('/nft-management'); 
  };
  const StyledText = ({ children, style }) => {
    return <span style={{ fontWeight: 'bold', color: 'orange', fontSize: '30px',margin:'0' }}>{children}</span>;
  };

  return (
    <div className="body-bg">
    <div className="home-container"  >
      <img src={lg2} alt=" " className="bg-1" />
      <div className="first-container">
      <img src={first1} alt=" " className="first1" />
        <h2>Welcome to Crypto Carrot Car </h2>
        <h3>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
          This is a play to earn game, where players earn generous and stable<br/> daily income through Crypto carrot car. 
          Crypto carrot car is an NFT {'\u00A0\u00A0'}in<br/> the game,which is divided into four types,
         from low to high in terms of <br/>daily income, namely{'\u00A0\u00A0\u00A0'} "Normal carrot car", {'\u00A0\u00A0\u00A0'}"Uncommon carrot car", 
         <br/> "Rare carrot car" {'\u00A0\u00A0\u00A0'}and"{'\u00A0\u00A0\u00A0'}Epic carrot car". For the specific daily income 
        <br/>values ​​of each NFT, please refer to the NFT basic income section below.
        <br/>Each NFT has 10 levels, and the higher the level, the higher the income.<br/> If you own a level 10 "Epic carrot car",
        you will be able to earn 38USDT <br/>in cash a day. The specific daily income of different types and levels of <br/>NFTs will be
        detailed in the "NFT Upgrade Income" section below.{'\u00A0\u00A0'}The <br/>tokens that players need to spend to buy NFTs, as well as the tokens of
        <br/>daily income, are all USDT. This is a game with USDT as the {'\u00A0'}settlement
        <br/>standard, and players will not be affected by the fluctuation of token <br/>prices. The stability of income will not be affected.</h3>
        <button onClick={handleExploreClick}>Learn more</button>
        <div className="social__links">
        <span><Link to='https://x.com/CryptoCarrotCar'>< i className="ri-twitter-x-fill"></i></Link></span>
          <span><Link to='https://t.me/cryptocarrotcargame'>< i className="ri-telegram-line"></i></Link></span>
        </div>
      </div>

      {/* second */}
      <div className="banner0">
      <img src={banner1} alt="banner1" />
      </div>
      <div className="content-container">
        <div className="circlepic">
          <h3>Initial Token Distribution</h3>
        <img src={circle} alt="Content" />
        </div>
        <div>
          <span><h2>Carrot Token</h2>
          <p>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}Carrot token is the token in the game. Players can upgrade their NFTs by spending carrot tokens.
          <br/>The upgraded NFTs will generate more daily income, and the daily income of the highest-level NFT  <br/>can be as high as 38USDT.
              The specific daily income of different types and levels of NFTs will be detailed  <br/>in the "NFT Upgrade Income" section below.
             Players with NFTs can purchase carrot tokens by participating <br/> in the token IDO, which will be launched in early September.
              After the token IDO ends, we will establish  <br/>a liquidity pool for carrot tokens on PancakeSwap. After that, the token will be simultaneously
              listed on  <br/>MEXC, Gate, and KuCoin exchanges.Before the IDO starts, players who participate in giveaway promotion<br/> tasks (follow our Twitter,
   join our Telegram, recommend our game website to your good friends, etc.)<br/> can get USDT cash rewards
             with certainty.Players can get 5USDT invitation rewards for each friend <br/>they invite to participate in the game.
            <br/>The giveaway link is:  https://giveaway.com/en/Umic00LX3Nn</p></span>
        </div>
      </div>

      {/* third */}
      <div className="banner2">
      <img src={banner2} alt="banner2" />
      </div>
      <div className="stage-container">
        <div className="stage-item">
          <img src={lg1} alt="Stage 1" />
          <span>The price of a <StyledText>Normal</StyledText> carrot car is 50USDT.<br/> After the player mints it, the initial NFT level is 1,<br/> and the daily income is 1.1USDT.</span>
          <button onClick={() => navigate('/nft-management')}>Go to NFT </button>
        </div>
        <div className="stage-item">
          <img src={nft2} alt="Stage 2" />
          <span>The price of <StyledText>Uncommon</StyledText> Carrot Car is 100USDT.<br/> After the player mints it, the initial NFT level is 1,<br/> and the daily income is 3USDT.</span>
          <button onClick={() => navigate('/nft-management')}>Go to NFT </button>
        </div>
        <div className="stage-item">
          <img src={nft3} alt="Stage 3" />
          <span>The price of <StyledText>Rare</StyledText> carrot car is 150USDT. <br/>After the player mints it, the initial NFT level is 1,<br/> and the daily income is 10USDT.</span>
          <button onClick={() => navigate('/nft-management')}>Go to NFT </button>
        </div>
        <div className="stage-item">
          <img src={nft4} alt="Stage 4" />
          <span>The price of <StyledText>Epic</StyledText> carrot car is 200USDT.<br/> After the player mints it, the initial NFT level is 1,<br/> and the daily income is 20USDT.</span>
          <button onClick={() => navigate('/nft-management')}>Go to NFT </button>
        </div>
      </div>

      {/* forth */}
      <div className="banner3">
      <img src={banner3} alt="banner3" />
      </div>
      <div className="stage-2-container">
  <div className="stage-item2">
    <img src={upgrade1} alt="Stage 5" />
    <div className="stage-item2-content">
      <span>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}There are 10 levels of Normal carrot car, and the daily income will gradually increase with the level. The corresponding 
        relationship between specific levels and daily income is shown in the figure. The highest level Normal carrot car has a daily income of 2USDT. The cost of each upgrade of Normal carrot car is a fixed 100 carrot tokens.</span>
      <button onClick={() => navigate('/nft-management')}>Go to NFT </button>
    </div>
  </div>
  <div className="stage-item2">
    <img src={upgrade2} alt="Stage 6" />
    <div className="stage-item2-content">
      <span> {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}There are 10 levels of Uncommon carrot car, and the daily income will gradually increase  with the level. The corresponding 
        relationship between specific levels and daily income is shown in the figure. The highest level of Uncommon carrot car has a daily income of 5.7USDT. The cost of each upgrade of Uncommon carrot car is a fixed 300 carrot tokens.</span>
      <button onClick={() => navigate('/nft-management')}>Go to NFT </button>
    </div>
  </div>
  <div className="stage-item2">
    <img src={upgrade3} alt="Stage 7" />
    <div className="stage-item2-content">
      <span>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}There are 10 levels of Rare carrot car, and the daily income will gradually increase  as the level increases. The corresponding 
        relationship between specific levels and daily income is shown in the figure. The highest level of Rare carrot car has a daily income of 19USDT. The cost of each upgrade of Rare carrot car is a fixed 1000 carrot tokens.</span>
      <button onClick={() => navigate('/nft-management')}>Go to NFT </button>
    </div>
  </div>
  <div className="stage-item2">
    <img src={upgrade4} alt="Stage 8" />
    <div className="stage-item2-content">
      <span>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}Epic carrot car has 10 levels in total, and the daily income will gradually increase as the level increases. The corresponding relationship between specific levels and daily income is shown in the figure. The highest level of Epic carrot car has a daily income of 38USDT. The cost of each upgrade of Epic carrot car is a fixed 2000 carrot tokens.</span>
      <button onClick={() => navigate('/nft-management')}>Go to NFT </button>
    </div>
  </div>
</div>

      {/* five */}
      <div className="banner4">
      <img src={banner4} alt="banner4" />
      </div>
      <div className="image-awe-container">
        <img src={awe} alt=" " />
        <p>Step 1:<br/> The website was launched on August 24  <br/>opening the NFT mint and claim rewards  <br/>functions Launch X and Telegram, start <br/> marketing and giveaway promotion activities</p>
        <span>Step 2:<br/>In early September, the token IDO was <br/> launched and NFT upgrades were opened</span>
        <h3>Step 3:<br/>Before September 10th, establish a liquidity<br/> pool for carrot token on pancakeswap</h3>
        <h4>Step 4:<br/>Used car trading will be <br/>launched at the end of September</h4>
        <h5>Step 5:<br/>In early October, we started to list game<br/>tokens on exchanges  The initial target<br/>was MEXC, GATE, and KUCoin We have<br/> reserved a share for listing on exchanges <br/> in the token allocation</h5>
      </div>
    </div>
  </div>
  );
};

export default Home;