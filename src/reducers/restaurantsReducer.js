
export default function restaurantReducer(state = {}, action){
let randomNum
let randomRes

  switch(action.type) {
    case 'SEARCH_RESULTS':
      return Object.assign({}, state, {
        all: action.payload.restaurants,
        choice: action.payload.restaurantChoice
      });
      break;
    case 'SWITCH_RESTAURANT':
      randomNum = Math.floor(Math.random() * 20)
      randomRes = state.all.businesses[randomNum]

      return Object.assign({}, state, {
        choice: randomRes
      })
      break;
    default:
      return state;
  }
}
