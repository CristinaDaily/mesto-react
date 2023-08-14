import React from 'react';

function PopupWithForm({ title, name, children, isOpen }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <button
          type='button'
          aria-label='закрыть'
          className='popup__close'
        ></button>

        <h2 className='popup__title'>{title}</h2>
        <form
          className={`popup__form popup__form_type_${name}`}
          method='get'
          name='edit-profile'
          noValidate
        >
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
