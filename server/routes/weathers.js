'use strict';

const express = require('express');
const router = express.Router();

const Weather = require('../models/weather');

router.route('/:lat/:long')
  .get((req, res) => {
    Weather.weather(req.params.lat, req.params.long, (err, weather) => {
      if (err) res.status(400).send(err)
      res.send(weather)
    });
  });

module.exports = router;
