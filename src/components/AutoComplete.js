import React from 'react'
import { geocodeByAddress } from 'react-places-autocomplete'
import { TextField, FlatButton } from 'material-ui'

var placeSearch, autocomplete;
var componentForm = {
	street_number: 'short_name',
	route: 'long_name',
	locality: 'long_name',
	administrative_area_level_1: 'short_name',
	country: 'long_name',
	postal_code: 'short_name'
};

class AutoComplete extends React.Component {
	constructor(props) {
		super(props)
		this.state = { address: '' }
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.onChange = this.onChange.bind(this);
	}

	handleFormSubmit(event) {
		event.preventDefault()
		const { address } = this.state

		geocodeByAddress(address,  (err, { lat, lng }) => {
			if (err) {
				console.log('Oh no!', err)
			}
			console.log(`Yay! got latitude and longitude for ${address}`, { lat, lng })
		})
	}

	componentDidMount() {
    new google.maps.places.Autocomplete(
     	(document.getElementById('autocomplete')),
        {types: ['geocode']});
  }

  onChange(e) {
  	this.setState({ address: e.target.value })
  }
 	render() {
   	return (
			<div className="text-center">
				<form onSubmit={this.handleFormSubmit}>
					<TextField
						onChange={this.onChange}
						floatingLabelText="Enter a location"
						floatingLabelFixed={false}
						placeholder=''
						value={this.state.address}
						id="autocomplete"
						type="text"
						size="50" />
					<FlatButton type="submit" label="Enter" primary={true} />
				</form>
   		</div>
    )
  }
}

export default AutoComplete
