import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
  return (
    <div className='cards' id='projects'>
        <div className="cards-box" id='projects'>
            <h1>Projects</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem
                        src='https://api.lorem.space/image?'
                        text='NFT Puzzle Game'
                        label="Blockchain, React"
                        to='/services'
                        />
                        <CardItem
                        src='https://api.lorem.space/image/car?'
                        text='Fun facts'
                        label="API"
                        to='/services'
                        />
                    </ul>
                    <ul className="cards-items">
                        <CardItem
                        
                        src='https://api.lorem.space/image/watch?'
                        text='Spotify playlist'
                        label="music"
                        to='/services'
                        />
                        <CardItem
                        src='https://api.lorem.space/image/shoes?'
                        text='Basketball Visualization'
                        label="music"
                        to='/services'
                        />
                        <CardItem
                        src='space-galaxy-background.jpg'
                        text='Pygame Space Invaders'
                        label="Python"
                        to='//replit.com/@SergioRodrigu13/Spaceship-of-DOOOOM?v=1'
                        /> 
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Cards;
