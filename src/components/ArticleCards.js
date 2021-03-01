import React from 'react';
import './ArticleCards.css';
import ArticleCardItem from './ArticleCardItem';

function ArticleCards() {
  return (
    <div className='Articlecards'>
      <h1>Check out our Array of links to article detailing the harmful effects of plastic pollution and what is currently being done about it</h1>
      <div className='Articlecards__container'>
        <div className='Articlecards__wrapper'>
          <ul className='Articlecards__items'>
            <ArticleCardItem
              src='images/img-9.jpg'
              text='The worlds plastic pollution detailed'
              label='Video & Documentaries'
              path='/videosdocumentaries'
            />
            <ArticleCardItem
              src='images/img-2.jpg'
              text="Take one of our quizzes and see if you're doing enough for the environment"
              label='Questionnaires'
              path='/questionnaires'
            />    
            <ArticleCardItem
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

export default ArticleCards;
