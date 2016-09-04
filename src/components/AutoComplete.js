import React from 'react'
import { geocodeByAddress } from 'react-places-autocomplete'

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
  	// Create the autocomplete object, restricting the search to geographical
    // location types.
    new google.maps.places.Autocomplete(
     	(document.getElementById('autocomplete')),
        {types: ['geocode']});
  }

  onChange(e) {
  	this.setState({address: e.target.value})
  }
 	render() {
   	return (
     	<form onSubmit={this.handleFormSubmit}>
      	<input onChange={this.onChange} value={this.state.address} id="autocomplete" type="text" size="50"/>
      	<button type="submit" >Enter</button>
      </form>
    )
  }
}

export default AutoComplete



// import React from 'react';
// import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
// class AutoComplete extends React.Component {
//     constructor(props) {
//         super(props);
//         this.displayName = 'AutoComplete';

//         this.state = {
//         	address: ''
//         }
//         this.onChange = this.onChange.bind(this);
//         this.submit = this.submit.bind(this);
//     }

//     onChange(e) {
//     	this.setState({address:  e.target.value});
//     }

//     submit(e) {
//     	e.preventDefault();

//     }
//     render() {
//         return (
//         	<form onSubmit={this.submit}>
//         		<PlacesAutocomplete
//           		value={this.state.address}
//           		onChange={this.onChange}
//         		/>
//         		<button type="submit">Submit</button>
//       		</form>
//         );
//     }
// }

// export default AutoComplete;
