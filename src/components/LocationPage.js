import React, { Component } from 'react';
import { connect } from 'react-redux'
import {receiveLocation} from '../actions/LocationActions'



export default class  LocationPage extends Component {

constructor(){
  super();
  this.readMe = this.readMe.bind(this);

}
 readMe(e){
  console.log("Read Me please");

 }

/*  componentWillMount(){
    this.props.receiveLocation();
  }*/

  render() {
    console.log('location', this.state.location)
    return (
      <div>
      <h1 className="text-center">Places to Dine</h1>
      <button  onClick={this.readMe}>Dine Me</button>
      </div>

    )
  }
}

connect(state =>({
  location: state.location
}),
dispatch =>({
  return receiveLocation() {
    dispatch(receiveLocation())
  }
 })
)(LocationPage)


