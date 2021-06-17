
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

const CHECK_OUT_TIME = [
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

const ALL_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const SIMILAR_COUNT = 10;
const LATITUDE = {
  min: 35.65000,
  max: 35.70000,
};
const LONGITUDE = {
  min: 139.70000,
  max: 139.80000,
};

const createAd = () => ({
  author: {
    avatar: `img/avatars/user0${getRandomPositiveInteger(1, 8)}.png`,
  },
  location: {
    lat: randomLocation.lat,
    lng: randomLocation.lng,
  },
  offer: {
    title: 'Заголовок объявления',
    address: `${location.lat  }, ${  location.lng}`, //строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
    price: getRandomPositiveInteger(10000, 1000000),
    type: getRandomArrayElement(TYPES_OF_HOUSING),
    rooms: getRandomPositiveInteger(1, 100),
    guests: getRandomPositiveInteger(1, 100),
    checkin: getRandomArrayElement(CHECK_IN_TIME),
    checkout: getRandomArrayElement(CHECK_OUT_TIME),
    features: createArr(ALL_FEATURES, 5),
    description: 'Описание объявления',
    photos: createArr(ALL_PHOTOS, 3),
  },
});


const similarAd  = new Array(SIMILAR_COUNT).fill(null).map(createAd);

similarAd;

=======
const getRandomIntInclusive = function (min, max) {
  // Функция взята с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  if (min >= 0 && max >= 0 && min !== max && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return('Введите верные значения диапазона');
};

getRandomIntInclusive(0, 30);

const getRandomDecInclusive = function (min, max, length) {
  // Функция взята с https://learn.javascript.ru/task/random-min-max
  if (min >= 0 && max >= 0 && min !== max && min < max) {
    return (min + Math.random() * (max - min)).toFixed(length);
  }
  return('Введите верные значения диапазона');
};

getRandomDecInclusive(0, 30, 2);

