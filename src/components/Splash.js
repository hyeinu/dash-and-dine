import React, { Component } from 'react';
import { connect } from 'react-redux';
import AutoComplete from './AutoComplete';
import { getLocation } from '../actions/LocationActions'

class Splash extends Component {
  render() {
    console.log('this.props.result:', this.props.result.restaurant)
    let { getLocation } = this.props
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center">Dine and Dash</h1>
          <p><a className="btn btn-primary btn-lg" role="button">Learn more</a></p>
          <AutoComplete getLocation={getLocation} />
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
  }
})
)(Splash)
