import React from 'react';
import '../ui/doc.css'


const Doc = () => {

  const StyledText = ({ children, style }) => {
    return <span style={{ fontWeight: 'bold', color: 'orange', fontSize: '30px',margin:'0' }}>{children}</span>;
  };


  return (
    
    <div className="doc-container">
      <div className="bg1"></div>
    <div className="firstdoc-container">
      <h1>What is Crypto Carrot & How to Play</h1>
      <p>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
        The original intention of designing this game is to simulate the society after 
        the arrival of AI, when AI will replace most people's jobs. How do people whose jobs are replaced rely on to make a
         living? The answer is to let AI make money for us. Crypto carrot car is set as a car with an AI self-driving system, which 
         can autonomously pick up passengers to earn transportation fees. Players can have a stable daily income by investing in
         a carrot car. By using the in-game carrot token to upgrade the carrot car, players can maximize the stable daily income.
         <br/>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}But a smarter approach is to invest a certain amount of money initially
          to buy a carrot car, and then use the money 
         accumulated from daily earnings to buy more carrot cars.<br/>
         {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'} We can do some calculations. If a player invests 200 USDT to buy an Epic carrot car, and does not upgrade, the daily income
          is 20 USDT. In just ten days, he can earn back 200 USDT. However, a smarter approach is to use the 200 USDT earned in these ten 
          days to buy another Epic carrot car. Again, without upgrading, he owns two Epic carrot cars, with a daily income of 40 USDT. In 
          another five days, he can earn back 200 USDT. If he continues to buy Epic carrot cars with the money he earns, his daily income 
          will reach 60 USDT. The income of three days can basically buy another Epic carrot car. At that time, his daily income will be 80 USDT.
           If this player continues in this way, then by the end of September, when he has participated in the game for nearly 30 days, he will own 
           10 Epic carrot cars, and his daily income will exceed 200 USDT. All his costs were just the initial investment of 200 USDT. In fact, 
         9 of the 10 Epic carrot cars he owns were bought with the money he earned from this game.
         <br/>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}However, we have not yet calculated the income
          of players upgrading NFT. When you have a fully upgraded Epic carrot car, your daily income will reach 38USDT. In 5 days, you can use the
           money earned from the game to buy another Epic carrot car. In this way, according to the previous method, a player will have more than 30 
           cars on the 25th day after investing 200USDT, and the daily income will exceed 1000USDT. His total investment is only
         the initial 200USDT and some carrot tokens spent on upgrading NFT.
          <br/>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}Oh, by the way, let me introduce the basic gameplay. After players 
         purchase NFT on the NFT page, refresh the page and they will see their NFT in the "My NFT" section. Players do not need to do anything, and 
         the NFT you own will automatically earn you income. On the right side of the "My NFT" section, players can see "Unclaimed Rewards" showing 
         their unclaimed income, and the "Claim" button for claiming income. Just below each player's NFT, there is an "Upgrade" button. Click the 
         button to upgrade the NFT, which can be upgraded to level 10. Of course, you need to have enough carrot tokens to pay for the cost of upgrading
          the NFT. There are two ways to get carrot tokens. One is to participate in the token IDO. The specific time of the IDO will be announced on 
          social media. The second is to buy it on PancakeSwap or Mexc, Gate, Kucoin. We will establish a token pool on PancakeSwap
          after the IDO ends. The token will be launched on the exchange before October 1.
          <br/>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}Finally, it is very important to remember to complete the giveaway task, giveaway link: https://giveaway.com/en/Umic00LX3Nn Basically, if you follow our social media account, 
          you will get a 1USDT reward, and if you invite a friend to play the game, you can get a 5USDT reward. There is no upper limit to the invitation reward.
           If you can invite 100 people, you can get a 500USDT reward. If more, it will be better.
         </p>
    </div>
    </div>
  );
};

export default Doc;