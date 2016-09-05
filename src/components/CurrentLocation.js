import React from 'react';
import {FlatButton} from 'material-ui';

const btnStyle = {
	'fontSize': '40px'
}


class  CurrentLocation extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CurrentLocation';
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
    	if ("geolocation" in navigator) {
  			navigator.geolocation.getCurrentPosition(position => {
  				console.log(position.coords)
  			let { latitude , longitude } = position.coords
  			let obj = position.coords

  		this.props.getMaps(obj);
			this.props.getLocation(latitude, longitude)
				});
			} else {
			  alert('Error your current location is not avaliable\n')
			}
    }
    render() {
        return <FlatButton onClick={this.onClick} style={btnStyle} type="button" label="Current Location" primary={true} />;
    }
}

export default CurrentLocation;
