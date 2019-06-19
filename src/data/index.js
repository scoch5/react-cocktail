import { combineReducers } from 'redux'
import { cocktails } from './Cocktails'
import { cocktail } from './Cocktail'

const rootReducer = combineReducers({
  cocktails,
  cocktail,
})

export default rootReducer
