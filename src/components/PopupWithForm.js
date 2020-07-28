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
    
    /* Можно лучше:
    Здесь хочу обратить Ваше внимание на то, что свойство 'submitter' поддерживается не всеми версиями браузеров.
    Например в Chrome с версией ниже v.81 при отправке формы (нажатии на кнопку "Сохранить")
    свойство 'submitter' вернет undefined, в консоль выйдет ошибка и попап не закроется.
    Поэтому реализацию данного метода лучше заменить на более доступную.
    */
    
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

/* Нужно исправить:
При закрытии попапа форма должна сбрасываться: сейчас форма сбрасывется только при сабмите, а при закрытии данные инпутов и сообщения об ошибках - остаются.
Целесообразно будет в классе PopupWithForm перезаписать родительский метод close, как рекомендуется в задании.
*/

/* Можно лучше:
Импорт из файла '../utils/constants.js' можно сократить до одной строки:
import { POPUP_FORM, DISABLE_SUBMIT_BUTTON } from '../utils/constants.js'; - это позволит сделать код аккуратнее, и сэкономит время :)
*/
