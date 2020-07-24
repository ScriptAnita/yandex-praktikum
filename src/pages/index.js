import './index.css';
import {
  POPUP_NEW_CARD,
  IMAGE_POPUP,
  INITIAL_CARDS,
  PLACES_LIST,
  PROFILE_DESCRIPTION,
  PROFILE_TITLE,
  CARD_TEMPLATE,
  OPEN_POPUP_NEW_CARD,
  POPUP_EDIT_PROFILE,
  OPEN_POPUP_EDIT_PROFILE,
  DEFAULT_FORM_CONFIG
} from '../utils/constants.js';
import Card from '../components/Card.js';
import UserInfo from "../components/UserInfo.js";
import FormValidator from '../components/FormValidator.js';
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

const userInfo = new UserInfo(PROFILE_TITLE, PROFILE_DESCRIPTION);

const createCard = (data) => {
  const card = new Card(data, CARD_TEMPLATE, (data) => popupWithImage.open(data));
  return card.getView();
};

/////// Попап с изображением

const popupWithImage = new PopupWithImage(IMAGE_POPUP);
popupWithImage.setEventListeners();

////// Попап для добавления новой карточки

const submitNewCard = (data) => {
  cardsList.addItem(createCard({
    name: data['place-name'], link: data.link
  }));
}
const popupAddNewCard = new PopupWithForm(POPUP_NEW_CARD, submitNewCard);
popupAddNewCard.setEventListeners();

OPEN_POPUP_NEW_CARD.addEventListener('click', () => popupAddNewCard.open());
const newCardFormValidator = new FormValidator(DEFAULT_FORM_CONFIG, POPUP_NEW_CARD);
newCardFormValidator.enableValidation();

////// Попап редактирования профиля

const submitProfileInfo = (data) => {
  userInfo.setUserInfo(data);
}

const popupEditProfile = new PopupWithForm(POPUP_EDIT_PROFILE, submitProfileInfo);
popupEditProfile.setEventListeners();

OPEN_POPUP_EDIT_PROFILE.addEventListener('click', () => {
  popupEditProfile.setDefaultValues(userInfo.getUserInfo());
  popupEditProfile.open();
});

const editProfileFormValidator = new FormValidator(DEFAULT_FORM_CONFIG, POPUP_EDIT_PROFILE);
editProfileFormValidator.enableValidation();

/////// Отображение карточек

const cardsList = new Section({
    items: INITIAL_CARDS,
    renderer: (item) => {
      cardsList.addItem(createCard(item));
    },
  },
  PLACES_LIST
);

cardsList.renderItems();

