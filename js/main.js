import {createAds} from './data.js';
import {checkValidity} from './form.js';
import {addAllOffers} from './map.js';


const COUNT = 10;
const array = createAds(COUNT);
checkValidity();
addAllOffers(createAds());
addAllOffers(array);
