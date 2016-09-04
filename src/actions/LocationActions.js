import axios from 'axios'


export function receiveLocation(){
  return {
    type:'GET_STATE'
  }
}

export function getLocation(lat, long){
  let obj = {}
  return dispatch => {
    axios.get(`/api/weathers/${lat}/${long}`)
    .then(res => {
      obj.weather = res.data
      return axios.get(`/api/yelps/${lat}/${long}`)
    })
    .then(res => {
      obj.restaurant = res.data;
      dispatch(searchResults(obj))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function searchResults(obj){
  return {
    type:'SEARCH_RESULTS',
    payload: {
      restaurant: obj.restaurant,
      weather: obj.weather
    }
  }
}
