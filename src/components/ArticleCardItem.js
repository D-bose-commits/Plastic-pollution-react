import React from 'react';
import { Link } from 'react-router-dom';

function ArticleCardItem(props) {
  return (
    <>
      <li className='Articlecards__item'>
        <Link className='Articlecards__item__link' to={props.path}>
          <figure className='Articlecards__item__pic-wrap' data-category={props.label}>
            <img
              className='Articlecards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='Articlecards__item__info'>
            <h5 className='Articlecards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ArticleCardItem;