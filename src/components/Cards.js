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
              text="Take one of our quizzes and see if you're doing enough for the environment"
              label='Quizzes'
              path='/quizzes'
            />    
            <CardItem
              src='images/img-3.jpg'
              text='Take a look at articles from across the world detailing plastic pollution and it harm'
              label='Articles'
              path='/Articles'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
