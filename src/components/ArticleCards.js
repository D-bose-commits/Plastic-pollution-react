import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ArticleCard() {
  return (
    <div className='cards'>
      <h1>Check out our Curated Resources For Plastic Pollution!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Plastic Pollution Facts and Information Articles'
              label='Plastic Pollution Facts & Information'
              path='/Pollutionfacts'
            />
            <CardItem
              src='images/img-2.jpg'
              text="How to help the world recover"
              label='Pollution'
              path='/Pollutionhelp'
            />    
            <CardItem
              src='images/img-3.jpg'
              text='Take a look at articles from across the world detailing plastic pollution and it harm'
              label='Articles'
              path='/articles'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;