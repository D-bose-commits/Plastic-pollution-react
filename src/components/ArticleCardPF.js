import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ArticleCardPF() {
  return (
    <div className='cards'>
      <h1>Check out our Curated Resources For Plastic Pollution!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text="How to help the world recover from Plastic Pollution"
              label='Help the World'
              path='/Pollutionhelp'
            />    
            <CardItem
              src='images/img-8.jpg'
              text='Studies detailing more in depth information about the current situation on Pollution'
              label='Scholar Articles'
              path='/Pollutionscholarly'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ArticleCardPF;
