import {similarAd} from './data.js';
import {createCard, cardsList} from './card.js';


const SIMILAR_COUNT = 10;
similarAd(SIMILAR_COUNT);

const createAds = () => new Array(SIMILAR_COUNT).fill(null).map(() => createAd());

function createCards(arr, container) {
  arr.forEach((item) => container.append(createCard(item)));
}

createCards(createAds(), cardsList);

