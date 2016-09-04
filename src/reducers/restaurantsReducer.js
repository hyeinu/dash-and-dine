
export default function restaurantReducer(state = {}, action){
let randomNum

  switch(action.type) {
    case 'SEARCH_RESULTS':
      return Object.assign({}, state, {
        all: action.payload.restaurants,
        choice: action.payload.restaurantChoice
      });
    case 'SWITCH_RESTAURANT':
      randomNum = Math.floor(Math.random() * 20)
      return Object.assign({}, state, {
        choice: state.all[randomNum]
      })

    default:
      return state;
  }
}
