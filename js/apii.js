import {showAlert, showErrorCard, showSuccessCard} from './utils.js';
import {adForm, setAddress, resetForm} from './form.js';
import {setChangeCallback, getFilteredAds} from './filter.js';
import {debounce} from './utils/debounce.js';

const RERENDER_DELAY = 500;
const SERVER_GET_URL = 'https://23.javascript.pages.academy/keksobooking/data';

const getData = (callback) => {
  fetch(SERVER_GET_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Данные не загружены', 'red', 0);
      }
    })
    .then((ads) => callback(ads))
    .catch(() => {
      showAlert('Данные не загружены', 'red', 0);
    });
};


const sendData = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    fetch(
      'https://23.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    ).then((response) => {
      if (response.ok) {
        resetForm();
        showSuccessCard();
      } else {
        showErrorCard();
      }
    }).catch(() => {
      showErrorCard();
    });
  });
};

export {getData, sendData};
