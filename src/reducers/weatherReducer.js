export default function weatherReducer (state = {}, action){

  switch(action.type) {
    case 'SEARCH_RESULTS':
      return Object.assign({}, {state: action.payload.weather});

    default:
      return state;
  }
}
