import { combineReducers } from 'redux'
import { charactersReducer } from './characters/characters'

export default combineReducers({
    characters: charactersReducer,
})