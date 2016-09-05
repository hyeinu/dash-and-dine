import React, { Component } from 'react';
import { connect } from 'react-redux';
import AutoComplete from './AutoComplete';
import { getLocation, getMaps} from '../actions/LocationActions'

class Splash extends Component {
  render() {
    let { getLocation, getMaps } = this.props
    return (
        <div className="container">
          <div className="jumbotron">
            <h1 className="test text-center">Dine and Dash</h1>
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
