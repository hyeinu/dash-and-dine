'use strict';

const express = require('express');
const router = express.Router();

const Yelp = require('../models/yelp');


router.route('/:lat/:long')
  .get((req, res) => {
    Yelp.yelpSearch(req.params.lat, req.params.long, (err, data) => {
      if(err) res.status(400).send(err)
      res.send(data)
    })
  })

module.exports = router;
