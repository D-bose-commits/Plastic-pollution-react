import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ArticleCardPH() {
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
              src='images/img-8.jpg'
              text='Scholarly Articles detailing more in depth information about the current situation on Pollution'
              label='PollutionScholarly'
              path='/Pollutionscholarly'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ArticleCardPH;