import React, { Component } from 'react';
import Maps from './Maps';

class Display extends Component {
	constructor(props) {
		super(props)

		this.displayName = 'DisplayMaps';
	}
 	render() {
   	return (
			<div style={{ height: '75%'}}>
        <Maps />
   		</div>
    )
  }
}

export default Display
