import React, {Component} from 'react';

export default class LocationList extends Component {



render(){
  let {address} = this.props;
  let {city,_id} = address;

  let addressRender = (
    <p>{city}</p>
    )

  return (
   <div>
     {addressRender}
   </div>
  )
}
}
