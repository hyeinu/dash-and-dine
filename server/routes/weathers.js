'use strict';

const express = require('express');
const router = express.Router();

const Weather = require('../models/weather');


router.route('/')
Weather((req, res) => {
  .then(weather => res.send(weather))
  .catch(err => res.status(400).send(err))
})


module.exports = router;
