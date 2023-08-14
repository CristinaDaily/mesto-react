import React from 'react';
import iconEditProfile from '../images/edit-profile.svg';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <>
      <main className='content'>
        <section className='profile'>
          <div className='profile__container'>
            <img className='profile__avatar' alt='Фотография' src='#' />
            <div className='profile__overlay'>
              <img
                className='profile__edit-icon'
                aria-label='Иконка редактирования аватара'
                src={iconEditProfile}
                onClick={onEditAvatar}
              />
            </div>
          </div>
          <div className='profile__info'>
            <h1 className='profile__name'>Жак-Ив</h1>
            <button
              type='button'
              aria-label='кнопка редактирования'
              className='profile__edit-button button'
              onClick={onEditProfile}
            ></button>

            <p className='profile__occupation'>Профессия</p>
          </div>
          <button
            type='button'
            aria-label='кнопка добавления карточки'
            className='profile__add-button button'
            onClick={onAddPlace}
          ></button>
        </section>
        <section className='elements'></section>
      </main>
    </>
  );
}

export default Main;
