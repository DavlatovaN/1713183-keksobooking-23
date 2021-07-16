import {createAds} from './data.js';
import {createCard, renderCard} from './card.js';
import {checkValidity} from './form.js';
import {addAllOffers} from './map.js';


const COUNT = 10;
const array = createAds(COUNT);
const card = createCard(array[0]);
renderCard(card);
checkValidity();
addAllOffers(createAds());
