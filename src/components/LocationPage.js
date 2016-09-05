import { connect } from 'react-redux'
// import DisplayMaps from './DisplayMaps';
import WeatherDisplay from './WeatherDisplay';
import React, { Component } from 'react';
import { receiveLocation, changeRes } from '../actions/LocationActions'
import { CardMedia, Card, CardText, Toggle, CardTitle, CardActions, FlatButton } from 'material-ui';
import Maps from './Maps';

const cardStyle = {
	'margin-top': '20px'
}
const cuisineHead = {
	'font-size': '30px',
  opacity: '0.25',
}

class  LocationPage extends Component {
  constructor(){
    super()

    this._changeRes = this._changeRes.bind(this)
  }

  componentWillMount(){
    this.props.receiveLocation();
  }
  _changeRes(){
    this.props.changeRes()
  }

  render() {
    let { changeRes } = this.props
    if(!this.props.res){
      return (<h1>Loading...</h1>)
    }
    let { name, display_phone, url, location, snippet_text, categories } = this.props.res
    let { address, city, state_code, postal_code } = location
    let full_address = address + " " + city + ", " + state_code + " " + postal_code + "  ||   " + display_phone
    let { main, weather } = this.props.weather.state
    let weather_desc = weather[0].main
    let cuisine = categories[0][0];
    let { coordinate } = this.props.loc
    let mapAddress = this.props.loc.address

    return (
      <div>
      <Card style={cardStyle}>
        <CardTitle className="text-center" title={name} subtitle={ full_address } />
        <CardText>
          <div className="col-xs-4">
            <h3 style={cuisineHead}>{cuisine}</h3>
            <WeatherDisplay main={main} weather_desc={weather_desc}/>
          </div>
          <div className="col-xs-8">
            <Maps mapAdd={mapAddress} coord={coordinate} />
          </div>
        </CardText>
      <CardActions>
        <FlatButton label="Next Restaurant" secondary={true} onClick={this._changeRes} />
      </CardActions>
      </Card>
      </div>
    )
  }
}

export default connect(state =>({
  res: state.restaurant.choice,
  weather: state.weather,
  loc: state.location.address
}),
dispatch => {
  return {
    receiveLocation() {
      dispatch(receiveLocation())
    },
    changeRes() {
      dispatch(changeRes())
    }
  }
 }
)(LocationPage)
