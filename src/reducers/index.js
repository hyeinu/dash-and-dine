import { combineReducers } from 'redux'

import location from './locationReducer'
import restaurant from './restaurantsReducer'

export default combineReducers({ location, restaurant })
