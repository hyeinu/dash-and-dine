export default function mapsReducer(state = {}, action){

  switch(action.type) {
    case 'RECEIVE_MAPS':
      return Object.assign({}, {state: {
        lat: action.payload.lat,
        long: action.payload.lng,
        address: action.payload.address
        }
      })
      break;
    default:
      return state;
  }
}
