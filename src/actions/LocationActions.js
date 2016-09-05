import axios from 'axios'
import RouterActions from './RouterActions'

let randomNum
export function receiveLocation(){
  return {
    type:'GET_STATE'
  }
}
export function changeRes(){
  return {
    type:'SWITCH_RESTAURANT'
  }
}

export function getLocation(lat, long){
  randomNum = Math.floor(Math.random() * 20)

  let obj = {}
  return dispatch => {
    axios.get(`/api/weathers/${lat}/${long}`)
    .then(res => {
      obj.weather = res.data
      return axios.get(`/api/yelps/${lat}/${long}`)
    })
    .then(res => {
      obj.restaurants = res.data;
      obj.restaurantChoice = res.data.businesses[randomNum];

      dispatch(searchResults(obj))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function searchResults(obj){
  RouterActions.route(`/location`)
  return {
    type:'SEARCH_RESULTS',
    payload: {
      restaurants: obj.restaurants,
      restaurantChoice: obj.restaurantChoice,
      mapCoords: obj.restaurantChoice.location,
      weather: obj.weather
    }
  }
}

export function getMaps(obj) {
  let { lat, lng, address } = obj;
  return {
    type: 'RECEIVE_MAPS',
    payload: {
      lat,
      lng,
      address
    }
  }
}
