import React from 'react';
import iconEditProfile from '../images/edit-profile.svg';
import api from '../utils/Api';
import { render } from '@testing-library/react';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getInitialCards()
      .then((cardsData) => {
        console.log(cardsData);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <main className='content'>
        <section className='profile'>
          <div className='profile__container'>
            <img
              className='profile__avatar'
              alt='Фотография'
              src={userAvatar}
            />
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
            <h1 className='profile__name'>{userName}</h1>
            <button
              type='button'
              aria-label='кнопка редактирования'
              className='profile__edit-button button'
              onClick={onEditProfile}
            ></button>

            <p className='profile__occupation'>{userDescription}</p>
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
