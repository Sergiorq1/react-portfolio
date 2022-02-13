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
                        label="Blockchain"
                        path='/services'
                        />
                        <CardItem
                        src='https://api.lorem.space/image/car?'
                        text='Fun facts'
                        label="API"
                        path='/services'
                        />
                    </ul>
                    <ul className="cards-items">
                        <CardItem
                        src='https://api.lorem.space/image/fashion?'
                        text='Spotify playlist'
                        label="music"
                        path='/services'
                        />
                        <CardItem
                        src='https://api.lorem.space/image/shoes?'
                        text='Basketball Visualization'
                        label="music"
                        path='/services'
                        />
                        <CardItem
                        src='https://api.lorem.space/image/watch?'
                        text='Spotify playlist'
                        label="music"
                        path='/services'
                        /> 
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Cards;
