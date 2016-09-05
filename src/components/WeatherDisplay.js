import React, { Component } from 'react';
import { receiveLocation } from '../actions/LocationActions'

class  WeatherDisplay extends Component {


  render(){
    // let { weather } = this.props;
    return(
      <div className='wrap'>
        <img className="image" width="250" height="250" src="https://s3.amazonaws.com/SenNewBucket/snow.jpg"/>
        <div className="text-image">75°</div>
      </div>
    )
  }
}


export default WeatherDisplay;
