import { combineReducers } from 'redux'
import home from './home'
import cars from './cars/reducer'
const reducer = combineReducers({
	home,
	cars
})

export default reducer