/* eslint new-cap: "off"*/

const express = require('express');
const router = express.Router();
const axios = require('axios')

const API_KEY = 'AIzaSyBFeZYv6AYKrlls0gQHaKigF5tmYRM-tVY'

const gUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
router.route('/address')
	.post((req, res) => {
		let address = req.body.address.replace(/ /g, '+');
		let city = req.body.city.replace(/ /g, '+');
		axios.get(`${gUrl}${address},+${city},+${req.body.state}&key=${API_KEY}`)
			.then(res => res.data)
			.then(result => {
				
				res.send(result.results[0].geometry.location);
			})
			.catch(errr => {
				res.status(400).send(err);
			})
	});
module.exports = router;
