import { combineReducers } from 'redux'

import restaurant from './restaurantsReducer'
import location from './locationReducer'
import weather from './weatherReducer'
import maps from './mapsReducer';

export default combineReducers({ location, restaurant, maps, weather })
