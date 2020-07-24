export const INITIAL_CARDS = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const DEFAULT_FORM_CONFIG = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const POPUP_EDIT_PROFILE = '.popup_type_edit';
export const POPUP_NEW_CARD = '.popup_type_new-card';
export const CARD_TEMPLATE = '.card-template';
export const CARD = '.card';
export const CARD_IMAGE = '.card__image';
export const CARD_TITLE = '.card__title';
export const LIKE_BUTTON = '.card__like-button';
export const LIKE_BUTTON_ACTIVE = '.card__like-button_is-active';
export const DELETE_BUTTON = '.card__delete-button';
export const PLACES_LIST = '.places__list';

export const OPEN_POPUP_EDIT_PROFILE = document.querySelector('.profile__edit-button');
export const OPEN_POPUP_NEW_CARD = document.querySelector('.profile__add-button');

export const PROFILE_TITLE = '.profile__title';
export const PROFILE_DESCRIPTION = '.profile__description';

export const IMAGE_POPUP = '.popup_type_image';
export const POPUP_IMAGE = '.popup__image';
export const POPUP_CAPTION = '.popup__caption';

export const POPUP = 'popup';
export const POPUP_CLOSE_BTN = 'popup__close';
export const POPUP_FORM = '.popup__form';
export const DISABLE_SUBMIT_BUTTON = 'popup__button_disabled';
