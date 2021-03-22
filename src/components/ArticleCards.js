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
              src='images/img-1.jpg'
              text="How to help the world recover from Plastic Pollution"
              label='What you can do to Help'
              path='/Pollutionhelp'
            />    
            <CardItem
              src='images/img-8.jpg'
<<<<<<< HEAD
              text='Studies Detailing more in depth information about the current situation on Pollution'
              label='Scholar Articles'
=======
              text='Scholarly Articles detailing more in depth information about the current situation on Pollution'
              label='PollutionScholarly'
>>>>>>> 8ddfd4e6522ffdd2620cc2249dcb54bbaa2b46db
              path='/Pollutionscholarly'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;