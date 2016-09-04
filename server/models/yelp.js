'use strict';

const Yelp = require('yelp');
const axios = require('axios');

const yelp = new Yelp({
   consumer_key: process.env.consumer_key,
   consumer_secret: process.env.consumer_secret,
   token: process.env.token,
   token_secret: process.env.token_secret
});

exports.yelpSearch = function(lat, long, cb){
    yelp.search({ term: 'restaurants', ll: `${lat},${long}` })
      .then(data => {
        cb(null, data);
      })
      .catch(err => {
        cb(err);
      });
  }
