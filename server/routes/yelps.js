'use strict';

const express = require('express');
const router = express.Router();

const Yelp = require('../models/yelp');


router.route('/')
.get((req, res) => {
  Yelp.yelp()
  .then(yelp => res.send(yelp))
  .catch(err => res.status(400).send(err))
})


module.exports = router;
