import React from 'react';

function Card({ link, name, likes }) {
  return (
    <article className='element'>
      <div className='element__image-container'>
        <img className='element__image' src={link} alt={name} />
      </div>
      <button type='button' className='element__delete-btn'></button>
      <div className='element__wrapper'>
        <h2 className='element__place-name'>{name}</h2>
        <div className='element__like-container'>
          <button type='button' className='element__like-btn button'></button>
          <p className='element__likes-number'>{likes}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
