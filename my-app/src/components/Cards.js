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
                        to={{ pathname:'https://github.com/Sergiorq1/twitter-stat-bot'}}
                        target="_blank"
                        />
                        <CardItem
                        src='https://api.lorem.space/image/watch?'
                        text='Blog Website'
                        label="Node, React, AWS"
                        to={{ pathname:'https://github.com/Sergiorq1/blog-mae'}}
                        target="_blank"
                        />
                    </ul>
                    <ul className="cards-items">
                        <CardItem
                        src='https://api.lorem.space/image?'
                        text='NFT Puzzle Game'
                        label="Blockchain, React"
                        to={{ pathname:'https://github.com/Sergiorq1/blockchain-game-arcade'}}
                        target="_blank"
                        />
                        <CardItem
                        src='https://api.lorem.space/image/car?'
                        text='Fun facts'
                        label="API"
                        to={{ pathname:'https://github.com/Sergiorq1/blockchain-game-arcade'}}
                        target="_blank"
                        />
                        <CardItem
                        src={img}
                        text='Pygame Space Invaders'
                        label="Python"
                        to={{ pathname:'https://replit.com/@SergioRodrigu13/Spaceship-of-DOOOOM?v=1'}}
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
