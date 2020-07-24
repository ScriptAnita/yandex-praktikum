import Popup from "./Popup.js";
import { POPUP_FORM } from "../utils/constants.js";
import { DISABLE_SUBMIT_BUTTON } from "../utils/constants.js";

export default class PopupWithForm extends Popup {
  constructor(selector, submit) {
    super(selector);

    this._submit = submit;
    this._form = this._popupElement.querySelector(POPUP_FORM);
  }

  _getInputValues(e) {
    e.preventDefault();
    this._inputList = Array.from(this._form.elements)
      .filter(i => i.type !== 'submit');

    const formValues = {};
    this._inputList.forEach(input => formValues[input.name] = input.value);

    return formValues;
  }

  _clearForm(e) {
    this._form.reset();
    e.submitter.classList.add(DISABLE_SUBMIT_BUTTON);
  }

  setDefaultValues(values) {
    Object.keys(values).forEach(key => this._form[key].value = values[key]);
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) => {
      this._submit(this._getInputValues(e))
      this._clearForm(e);
      super.close();
    });
  }
}
