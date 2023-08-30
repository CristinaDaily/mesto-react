import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Main from './Main.jsx';
import ImagePopup from './ImagePopup.jsx';
import EditProfilePopup from './EditProfilePopup.jsx';
import EditAvatarPopup from './EditAvatarPopup.jsx';
import AddPlacePopup from './AddPlacePopup.jsx';
import ConfirmCardDeletePopup from './ConfirmCardDelepePopup.jsx';
import api from '../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [selectedCardId, setSelectedCardId] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getAppInfo()
      .then(([cardsData, userData]) => {
        setCards(cardsData);
        setCurrentUser(userData);
      })
      .catch((err) => console.log(err));
  }, []);

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
    setIsConfirmPopupOpen(false);
  }

  function handleCardClick(cardData) {
    setSelectedCard(cardData);
  }

  function handleCardLike(id) {
    api
      .addLike(id)
      .then((newCardData) => {
        setCards((state) =>
          state.map((card) => (card._id === id ? newCardData : card))
        );
      })
      .catch((err) => {
        console.log(`Handle like error:${err}`);
      });
  }

  function handleCardDislike(id) {
    api
      .deleteLike(id)
      .then((newCardData) => {
        setCards((state) =>
          state.map((card) => (card._id === id ? newCardData : card))
        );
      })
      .catch((err) => {
        console.log(`Handle dislike error:${err}`);
      });
  }

  function handleConfirmPopupOpen(id) {
    setIsConfirmPopupOpen(!isConfirmPopupOpen);
    setSelectedCardId(id);
  }

  function handleCardDelete(id) {
    api
      .deleteCard(id)
      .then((res) => {
        if (res.ok) {
          setCards((state) => state.filter((card) => card._id !== id));
          closeAllPopups();
        } else {
          throw new Error(`Delete card error:: ${res.status}`);
        }
      })
      .catch((err) => {
        console.log(`Delete card error:${err}`);
      });
  }

  function handleUpdateUser({ name, about }) {
    api
      .editProfile({ name, about })
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Profila update err:${err}`);
      });
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .setAvatar(avatar)
      .then((newAvatarData) => {
        setCurrentUser(newAvatarData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Avatar update err:${err}`);
      });
  }

  function handleAddPlaceSubmit({ link, name }) {
    api.addNewCard({ link, name }).then((newCardData) => {
      setCards([newCardData, ...cards]);
      closeAllPopups();
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='body'>
        <div className='page'>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onLikeClick={handleCardLike}
            onDislikeClick={handleCardDislike}
            onCardDelete={handleConfirmPopupOpen}
            cards={cards}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          ></AddPlacePopup>

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <ConfirmCardDeletePopup
            isOpen={isConfirmPopupOpen}
            onClose={closeAllPopups}
            onDeleteCard={handleCardDelete}
            selectedCardId={selectedCardId}
          />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
