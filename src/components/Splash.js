import React, { Component } from 'react';
import { connect } from 'react-redux';
import AutoComplete from './AutoComplete';
import { getLocation, getMaps} from '../actions/LocationActions'

import Maps from './Maps';
class Splash extends Component {
  render() {
    let { getLocation, getMaps } = this.props
    return (
        <div className="container">
          <div className="jumbotron">
            <h1 className="text-center">Dine and Dash</h1>
            <p><a className="btn btn-primary btn-lg" role="button">Learn more</a></p>
            <AutoComplete getMaps={getMaps} getLocation={getLocation} />
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
