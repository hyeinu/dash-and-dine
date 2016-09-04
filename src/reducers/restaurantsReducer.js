
export default function restaurantReducer(state = {}, action){
  console.log('action:', action)
  switch(action.type) {
    case 'SEARCH_RESULTS':
      return Object.assign({}, {state: action.payload.restaurant});

    default:
      return state;
  }
}
