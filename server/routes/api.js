/* eslint new-cap: "off"*/

const express = require('express');
const router = express.Router();

router.use('/yelps', require('./yelps'));
router.use('/weathers', require('./weathers'));


module.exports = router;
