'use strict';

const axios = require('axios');

exports.weather = (lat, lon, cb) => {
// `let url = http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon={lon}&units=imperial&APPID=101dfbeab8089ca5b548128192819d7d`
let url = 'http://api.openweathermap.org/data/2.5/weather?q=Pleasanton&units=imperial&APPID=101dfbeab8089ca5b548128192819d7d';
axios.get(url)
  .then(res => {
  res.data
  })
  .then(data =>{
    cb(data)
  })
  .catch(function (error) {
    console.log(error);
  });
}

// `http://api.openweathermap.org/data/2.5/weather?q=${loc}&units=imperial&APPID=101dfbeab8089ca5b548128192819d7d`),
