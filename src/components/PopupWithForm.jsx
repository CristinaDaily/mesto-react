import React from 'react';

function PopupWithForm({ title, name, buttonText, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <button
          type='button'
          aria-label='закрыть'
          className='popup__close'
          onClick={onClose}
        ></button>

        <h2 className='popup__title'>{title}</h2>
        <form
          className={`popup__form popup__form_type_${name}`}
          method='get'
          name='edit-profile'
          noValidate
        >
          {children}
          <button type='submit' className='popup__button popup__create-btn'>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
