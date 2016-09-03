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
exports.yelpSearch = function(lat, long, cb){
    yelp.search({ term: 'restaurants', ll: `${lat},${long}` })
      .then(data => {
        cb(null, data);
      })
      .catch(err => {
        cb(err);
      });
  }

// module.exports = yelp;
