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

// Врапперы
export const PLACES_LIST = document.querySelector('.places__list');
export const EDIT_FORM_MODAL_WINDOW = document.querySelector('.popup_type_edit');
export const CARD_FORM_MODAL_WINDOW = document.querySelector('.popup_type_new-card');
export const IMAGE_MODAL_WINDOW = document.querySelector('.popup_type_image');
export const CARD = '.card-template';

// Кнопки и прочие дом узлы
export const OPEN_EDIT_FORM_BUTTON = document.querySelector('.profile__edit-button');
export const OPEN_CARD_FORM_BUTTON = document.querySelector('.profile__add-button');

// DOM узлы профиля
export const PROFILE_TITLE = document.querySelector('.profile__title');
export const PROFILE_DESCRIPTION = document.querySelector('.profile__description');

// Данные форм и элементы форм
export const TITLE_INPUT = EDIT_FORM_MODAL_WINDOW.querySelector('.popup__input_type_name');
export const DESCRIPTION_INPUT = EDIT_FORM_MODAL_WINDOW.querySelector('.popup__input_type_description');
export const CARD_NAME_INPUT = CARD_FORM_MODAL_WINDOW.querySelector('.popup__input_type_card-name');
export const CARD_LINK_INPUT = CARD_FORM_MODAL_WINDOW.querySelector('.popup__input_type_url');
