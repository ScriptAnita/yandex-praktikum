import { POPUP, POPUP_CLOSE_BTN } from "../utils/constants.js";

export default class Popup {
  constructor(selector) {
    this._popupElement = document.querySelector(selector);
  }

  _handleEscClose(e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  _handleClick({ target }) {
    if (target.classList.contains(POPUP) || target.classList.contains(POPUP_CLOSE_BTN)) {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add('popup_is-opened');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  close() {
    this._popupElement.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._popupElement.addEventListener('click', this._handleClick.bind(this))
  }
}
