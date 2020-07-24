import Popup from "./Popup.js";
import { POPUP_IMAGE, POPUP_CAPTION } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
  }

  open({ src, caption }) {
    this._popupElement.querySelector(POPUP_IMAGE).src = src;
    this._popupElement.querySelector(POPUP_CAPTION).textContent = caption;
    super.open();
  }
}
