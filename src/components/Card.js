import {
  CARD,
  CARD_IMAGE,
  CARD_TITLE,
  DELETE_BUTTON,
  LIKE_BUTTON,
  LIKE_BUTTON_ACTIVE
} from "../utils/constants.js";

class Card {
  constructor(data, selector, handleCardClick) {
    this._text = data.name;
    this._link = data.link;

    this._handleCardClick = handleCardClick;
    this._element = document.querySelector(selector);
  }

  _getTemplate() {
    return this._element
      .content
      .querySelector(CARD)
      .cloneNode(true);
  }

  _setEventListeners() {
    this._element.querySelector(LIKE_BUTTON)
      .addEventListener('click', () => this._handleLikeIcon());

    this._element.querySelector(DELETE_BUTTON)
      .addEventListener('click', () => this._handleDeleteCard());

    this._element.querySelector(CARD_IMAGE)
      .addEventListener('click', () => this._handlePreviewPicture());
  }

  _handleLikeIcon() {
    this._element.querySelector(LIKE_BUTTON)
      .classList.toggle(LIKE_BUTTON_ACTIVE);
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handlePreviewPicture() {
    this._handleCardClick({
      src: this._link,
      caption: this._text,
    })
  }

  getView() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(CARD_IMAGE).style.backgroundImage = `url(${this._link})`;
    this._element.querySelector(CARD_TITLE).textContent = this._text;

    return this._element;
  }
}

export default Card;

/* Можно лучше:
Здесь есть возможность деструктурировать параметры передаваемые в конструктор класса.
Пример класса c использованием деструктуризации параметров:

class Card {
  constructor({ image, description }) {
      this._image = image;
      this._description = description;
  }
}
*/
