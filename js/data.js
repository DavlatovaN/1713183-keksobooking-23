/* eslint-disable no-undef */
import {getRandomValueFloat, getRandomPositiveInteger, getRandomArrayElement, createRandomArray} from './utils.js';

//тип объекта
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECK_IN_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

//список возможных удобств
const ALL_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
];

//список фото объектов
const ALL_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const MIN_PRICE = 10000;
const MAX_PRICE = 100000;
const MIN_ROOM = 1;
const MAX_ROOM = 100;
const MIN_GUEST = 1;
const MAX_GUEST = 100;


// функция получения случайных координат для объекта
const getRandomLocation = function () {
  return {
    lat: getRandomValueFloat(35.65000, 35.70000, 5),
    lng: getRandomValueFloat(139.70000, 139.80000, 5),
  };
};

// функция генерации "объявления"
const createAd = function () {
  const randomLocation = getRandomLocation();
  return {

    author: {
      avatar: `img/avatars/user0${getRandomPositiveInteger(1, 8)}.png`,
    },

    location: {
      lat: randomLocation.lat,
      lng: randomLocation.lng,
    },

    offer: {
      title: 'Заголовок объявления',
      address: `${randomLocation.lat}, ${randomLocation.lng}`, //строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
      price: getRandomPositiveInteger(MIN_PRICE, MAX_PRICE),//число — стоимость. Случайное целое положительное число.
      type: getRandomArrayElement(TYPES),//строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.
      rooms: getRandomPositiveInteger(MIN_ROOM, MAX_ROOM), //число — количество комнат. Случайное целое положительное число.
      guests: getRandomPositiveInteger(MIN_GUEST, MAX_GUEST),  //число — количество гостей, которое можно разместить. Случайное целое положительное число.
      checkin: getRandomArrayElement(CHECK_IN_TIME),//строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
      checkout: getRandomArrayElement(CHECK_IN_TIME), // строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
      features: createRandomArray(ALL_FEATURES, 5), // массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
      description: 'Описание объявления',// строка — описание помещения. Придумайте самостоятельно.
      photos: createRandomArray(ALL_PHOTOS, 3),// массив случайной длины из значений
    },
  }
};

const createAds = function (similar_count) {
  return new Array(similar_count).fill(null).map(createAd);
}

export {createAd, createAds};
