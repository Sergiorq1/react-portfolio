import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img from '../space-galaxy-background.jpg'
function Cards() {
  return (
    <div className='cards' id='projects'>
        <div className="cards-box" id='projects'>
            <h1>Projects</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem
                        src='https://api.lorem.space/image/shoes?'
                        text='Basketball Twitter Bot'
                        label="Scraper, Sql"
                        to='/'
                        value="https://github.com/Sergiorq1/twitter-stat-bot"
                        target="_blank"
                        />
                        <CardItem
                        src='https://api.lorem.space/image/watch?'
                        text='Blog Website'
                        label="Node, React, AWS"
                        to='/'
                        value="https://github.com/Sergiorq1/blog-mae"
                        target="_blank"
                        />
                    </ul>
                    <ul className="cards-items">
                        <CardItem
                        src='https://api.lorem.space/image?'
                        text='NFT Puzzle Game'
                        label="Blockchain, React"
                        to='/'
                        value="https://github.com/Sergiorq1/blockchain-game-arcade"
                        target="_blank"
                        />
                        <CardItem
                        src='https://api.lorem.space/image/car?'
                        text='Super Mario p5.js'
                        label="Javascript"
                        to='/'
                        value="​https://productive-airy-bowler.glitch.me"
                        target="_blank"
                        />
                        <CardItem
                        src={img}
                        text='Weather Analyzer'
                        label="Python, Flask"
                        to='/'
                        value="https://github.com/Sergiorq1/WEB-1.1-Weather-API"
                        target="_blank"
                        /> 
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Cards;
