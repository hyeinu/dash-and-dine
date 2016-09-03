'use strict';

const Yelp = require('yelp');
const axios = require('axios');

const yelp = new Yelp({
  consumer_key: 'VCHDpMVm7IedG_E_Wd6npQ',
  consumer_secret: 'VluMwUUfl-SnlrEeTmUwAXoSgNA',
  token: 'JGAQ_5RsWqx0F4NkrfB0LoNIbGUCLbjK',
  token_secret: '9eAAmqKOymq4st4pzslqGCuX5fI',
});

// yelp.search({ term: 'food', cll: 'latitude,longitude' })
exports.weather = (latitude, longitude) => {
yelp.search({ term: 'restaurants', location: 'Pleasanton' })
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});


module.exports = Yelp;
