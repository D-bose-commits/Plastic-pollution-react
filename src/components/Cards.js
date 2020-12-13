import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Resources for spreading Awareness!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='The worlds plastic pollution detailed'
              label='Video & Documentaries'
              path='/videosdocumentaries'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Take our questionaire and see if your doing enough for the enviroment'
              label='Questionaires'
              path='/questionaires'
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

export default Cards;
