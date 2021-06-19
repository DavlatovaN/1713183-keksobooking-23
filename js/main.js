/* eslint-disable no-undef */
const TYPES_OF_HOUSING = [
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

const ALL_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
];
const MIN_PRICE = 10000;
const MAX_PRICE = 100000;

const MIN_ROOM = 1;
const MAX_ROOM = 100;

const MIN_GUEST = 1;
const MAX_GUEST = 100;


const ALL_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const SIMILAR_COUNT = 10;

// функция получения случайных координат для объекта 'location' и 'offer.address"
const getRandomLocation = function () {
  return {
    lat: getRandomValueFloat(35.65000, 35.70000, 5),
    lng: getRandomValueFloat(139.70000, 139.80000, 5),
  };
};
const createAd= function () {
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
      type: getRandomArrayElement(TYPES_OF_HOUSING),
      rooms: getRandomPositiveInteger(MIN_ROOM, MAX_ROOM),
      guests: getRandomPositiveInteger(MIN_GUEST, MAX_GUEST),
      checkin: getRandomArrayElement(CHECK_IN_TIME),
      checkout: getRandomArrayElement(CHECK_IN_TIME),
      features: createArr(ALL_FEATURES, 5),
      description: 'Описание объявления',
      photos: createArr(ALL_PHOTOS, 3),
    },
  }};


const similarAd = function (similar_count) {
  return new Array(similar_count).fill(null).map(createAd);
}
similarAd
