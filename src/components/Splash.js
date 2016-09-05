import React, { Component } from 'react';
import { connect } from 'react-redux';
import AutoComplete from './AutoComplete';
import { getLocation, getMaps} from '../actions/LocationActions'
import CurrentLocation from './CurrentLocation';


class Splash extends Component {
  render() {
    let { getLocation, getMaps } = this.props
    return (
        <div className="container">
          <div className="jumbotron text-center">
            <h1 className="test text-center">Dash and Dine</h1>
            <AutoComplete getMaps={getMaps} getLocation={getLocation} />

            <CurrentLocation className="center-block" getMaps={getMaps} getLocation={getLocation} />
          </div>
        </div>
    );
  }
}


export default connect(state => ({
  result: state
}),
dispatch => ({
  getLocation(lat, long){
    dispatch(getLocation(lat, long))
  },
  getMaps(obj) {
    dispatch(getMaps(obj))
  }
})
)(Splash)
