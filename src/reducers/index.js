import logginReducer from './loginReducer'
import todoReducer from './todoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    logginReducer,
    todoReducer
})
export default rootReducer
