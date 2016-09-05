import { combineReducers } from 'redux'

import restaurant from './restaurantsReducer'
import weather from './weatherReducer'
import maps from './mapsReducer';

export default combineReducers({ restaurant, maps, weather })
