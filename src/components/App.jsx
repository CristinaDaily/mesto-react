import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Main from './Main.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(cardData) {
    console.log(cardData);
    setSelectedCard(cardData);
  }

  return (
    <div className='body'>
      <div className='page'>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name='profile'
          title='Редактировать профиль'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText='Сохранить'
        >
          <input
            type='text'
            name='name'
            defaultValue='Жак-Ив Кусто'
            placeholder='Имя'
            className='popup__input popup__input_type_name'
            id='name-input'
            required
            minLength='2'
            maxLength='40'
          />
          <span className='name-input-error popup__error'></span>
          <input
            type='text'
            name='about'
            defaultValue='Исследователь океана'
            placeholder='o себе'
            className='popup__input popup__input_type_about'
            id='about-input'
            required
            minLength='2'
            maxLength='200'
          />
          <span className='about-input-error popup__error'></span>
        </PopupWithForm>
        <PopupWithForm
          name='card'
          title='Новое место'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText='Создать'
        >
          <input
            type='text'
            name='name'
            placeholder='Название'
            className='popup__input popup__input_type_place'
            id='place-input'
            required
            minLength='2'
            maxLength='30'
          />
          <span className='place-input-error popup__error'></span>
          <input
            type='url'
            name='link'
            placeholder='Ссылка на картинку'
            className='popup__input popup__input_type_link'
            id='link-input'
            required
          />
          <span className='link-input-error popup__error'></span>
        </PopupWithForm>
        <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText='Сохранить'
        >
          <input
            type='url'
            name='link'
            placeholder='Ссылка на аватар'
            className='popup__input popup__input_type_link'
            id='avatar-input'
            required
          />
          <span className='avatar-input-error popup__error'></span>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
