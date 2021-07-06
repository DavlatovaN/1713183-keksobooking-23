import {createAds} from './data.js';
import {createCard, renderCard} from './card.js';


const COUNT = 10;
const array = createAds(COUNT);
const card = createCard(array[0]);
renderCard(card);
