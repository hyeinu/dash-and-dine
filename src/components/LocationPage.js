import React, { Component } from 'react';
import { connect } from 'react-redux'
import { receiveLocation } from '../actions/LocationActions'
import LocationList from './LocationList'


class  LocationPage extends Component {

constructor(){
  super();

  this.readMe = this.readMe.bind(this);

}
 readMe(e){
  console.log("Read Me please");

 }

  componentWillMount(){
    this.props.receiveLocation();
  }

  render() {
   var x =  this.props.location;
   var address = x.location.address;
   var city = x.location.city;
   var id ="id1"

   var addressObj = {"address":address,
                      "city":city,
                       "id":id
                   
                }
  console.log("AddressObject",addressObj)
    return (
      <div>
      <h1 className="text-center">Places to Dine</h1>
      <button  onClick={this.readMe}>Dine Me</button>
      <LocationList address={addressObj}/>
      </div>

    )
  }
}

export default connect(state =>({
  location: state.location
}),
dispatch => {
  return {
    receiveLocation() {
      dispatch(receiveLocation())
    }
  }
 }
)(LocationPage)


