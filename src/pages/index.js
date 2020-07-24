import {
  CARD_FORM_MODAL_WINDOW,
  CARD_LINK_INPUT,
  CARD_NAME_INPUT,
  DESCRIPTION_INPUT,
  EDIT_FORM_MODAL_WINDOW, IMAGE_MODAL_WINDOW,
  INITIAL_CARDS,
  OPEN_CARD_FORM_BUTTON,
  OPEN_EDIT_FORM_BUTTON,
  PLACES_LIST,
  PROFILE_DESCRIPTION,
  PROFILE_TITLE,
  TITLE_INPUT,
  CARD
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';

const ESC_KEYCODE = 27;

const defaultFormConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const isEscEvent = (evt, action) => {
  const activePopup = document.querySelector('.popup_is-opened');
  if (evt.which === ESC_KEYCODE) {
    action(activePopup);
  }
};

const openModalWindow = (modalWindow) => {
  modalWindow.classList.add('popup_is-opened');
  document.addEventListener('keyup', handleEscUp);
};

const closeModalWindow = (modalWindow) => {
  modalWindow.classList.remove('popup_is-opened');
  document.removeEventListener('keyup', handleEscUp);
};

const renderCard = (data, wrap) => {
  const card = new Card(data, CARD);
  wrap.prepend(card.getView());
};

const handleEscUp = (evt) => {
  evt.preventDefault();
  isEscEvent(evt, closeModalWindow);
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  PROFILE_TITLE.textContent = TITLE_INPUT.value;
  PROFILE_DESCRIPTION.textContent = DESCRIPTION_INPUT.value;
  closeModalWindow(EDIT_FORM_MODAL_WINDOW);
};

const cardFormSubmitHandler = (evt) => {
  evt.preventDefault();
  renderCard({
    name: CARD_NAME_INPUT.value,
    link: CARD_LINK_INPUT.value
  }, PLACES_LIST);
  closeModalWindow(CARD_FORM_MODAL_WINDOW);
};

// EventListeners
EDIT_FORM_MODAL_WINDOW.addEventListener('submit', formSubmitHandler);
CARD_FORM_MODAL_WINDOW.addEventListener('submit', cardFormSubmitHandler);

OPEN_EDIT_FORM_BUTTON.addEventListener('click', () => {
  TITLE_INPUT.value = PROFILE_TITLE.textContent;
  DESCRIPTION_INPUT.value = PROFILE_DESCRIPTION.textContent;
  openModalWindow(EDIT_FORM_MODAL_WINDOW);
});

OPEN_CARD_FORM_BUTTON.addEventListener('click', () => {
  openModalWindow(CARD_FORM_MODAL_WINDOW);
});

EDIT_FORM_MODAL_WINDOW.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    closeModalWindow(EDIT_FORM_MODAL_WINDOW);
  }
});
CARD_FORM_MODAL_WINDOW.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    closeModalWindow(CARD_FORM_MODAL_WINDOW);
  }
});
IMAGE_MODAL_WINDOW.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    closeModalWindow(IMAGE_MODAL_WINDOW);
  }
});

// Инициализация
INITIAL_CARDS.forEach((data) => {
  renderCard(data, PLACES_LIST)
});

const editFormValidator = new FormValidator(defaultFormConfig, EDIT_FORM_MODAL_WINDOW);
const cardFormValidator = new FormValidator(defaultFormConfig, CARD_FORM_MODAL_WINDOW);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
