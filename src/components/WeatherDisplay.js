import React, { Component } from 'react';
import { receiveLocation } from '../actions/LocationActions'

class  WeatherDisplay extends Component {
  render(){

    let { temp } = this.props.main
    let des = this.props.weather_desc.toLowerCase()

    return(
        <div className='wrap'>
          <img className="image" width="250" height="250" src={`https://s3.amazonaws.com/SenNewBucket/${des}.jpg`}/>
          <div className="text-image">{Math.floor(temp)}°</div>
        </div>
    )
  }
}


export default WeatherDisplay;
