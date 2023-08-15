import React from 'react';

function ImagePopup() {
  return (
    <div className='popup_type_image popup'>
      <div className='popup__box'>
        <button
          type='button'
          aria-label='закрыть'
          className='popup__close popup__close_type_image'
        ></button>
        <img className='popup__image' alt='Изображение карточки' src='#' />

        <h2 className='popup__img-title'></h2>
      </div>
    </div>
  );
}

export default ImagePopup;
