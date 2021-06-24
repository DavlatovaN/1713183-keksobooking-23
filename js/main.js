import {createAd, similarAd}
  from './data.js';

const SIMILAR_COUNT = 10;
const similarAd = function (SIMILAR_COUNT) {
  return new Array(SIMILAR_COUNT).fill(null).map(createAd);
}
console.log(similarAd(SIMILAR_COUNT));
