import { connect } from 'react-redux'
import DisplayMaps from './DisplayMaps';
import React, { Component } from 'react';
import { receiveLocation } from '../actions/LocationActions'
import { CardMedia, Card, CardText, Toggle, CardTitle, CardActions, FlatButton } from 'material-ui';


class  LocationPage extends Component {

  componentWillMount(){
    this.props.receiveLocation();
  }

  render() {
    console.log('this.props.res:', this.props.res)
    if(!this.props.res){
      return (<h1>Loading...</h1>)
    }
    let { name, display_phone, url, location } = this.props.res
    let { address, city, state_code, postal_code } = location
    let full_address = address + " " + city + ", " + state_code + " " + postal_code + "  ||   " + display_phone

    return (
      <div className="jumbotron hideJumb">
      <Card>
        <CardTitle title={name} subtitle={ full_address } />
        <CardText>
          <div className="col-xs-6">
            <h1>Weather</h1>
          </div>
          <div className="col-xs-6">
            <h1>Restaurant</h1>
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      <CardActions>
        <FlatButton label="Another!!" />
      </CardActions>
      </Card>
        <DisplayMaps />
      </div>
    )
  }
}

export default connect(state =>({
  res: state.restaurant.choice
}),
dispatch => {
  return {
    receiveLocation() {
      dispatch(receiveLocation())
    }
  }
 }
)(LocationPage)
