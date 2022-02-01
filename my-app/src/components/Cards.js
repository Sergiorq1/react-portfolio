import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
  return (
    <div className='cards'>
        <h1>Projects</h1>
        <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards-items">
                    <CardItem
                    src='https://api.lorem.space/image?'
                    text='Explore The horizons'
                    label="adventure"
                    path='/services'
                    />
                    <CardItem
                    src='https://api.lorem.space/image/car?'
                    text='Explore The horizons'
                    label="adventure"
                    path='/services'
                    />
                    <CardItem
                    src='https://api.lorem.space/image/pizza?'
                    text='Explore The horizons'
                    label="adventure"
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;
