import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Main from './Main.jsx';
import PopupWithForm from './PopupWithForm.jsx';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

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
  }

  return (
    <div className='body'>
      <div className='page'>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
        <PopupWithForm
          name='profile'
          title='Редактировать профиль'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
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
          <button type='submit' className='popup__save-btn popup__button'>
            Сохранить
          </button>
        </PopupWithForm>
        <PopupWithForm
          name='card'
          title='Новое место'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
          <button type='submit' className='popup__button popup__create-btn'>
            Создать
          </button>
        </PopupWithForm>
        <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
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
          <button type='submit' className='popup__button popup__save-btn'>
            Сохранить
          </button>
        </PopupWithForm>

        <div className='popup_type_confirm popup'>
          <div className='popup__container'>
            <button
              type='button'
              aria-label='закрыть'
              className='popup__close popup__close_type_confirm'
            ></button>
            <h2 className='popup__title popup__title_type_confirm'>
              Вы уверены?
            </h2>
            <form
              className='popup__form popup__form_type_confirm'
              method='get'
              name='confirm-card-delete'
              noValidate
            >
              <button
                type='submit'
                className='popup__confirm-btn popup__button'
              >
                Да
              </button>
            </form>
          </div>
        </div>

        <template id='element-template'>
          <article className='element'>
            <div className='element__image-container'>
              <img className='element__image' />
            </div>
            <button type='button' className='element__delete-btn'></button>
            <div className='element__wrapper'>
              <h2 className='element__place-name'></h2>
              <div className='element__like-container'>
                <button
                  type='button'
                  className='element__like-btn button'
                ></button>
                <p className='element__likes-number'></p>
              </div>
            </div>
          </article>
        </template>
      </div>
    </div>
  );
}

export default App;
