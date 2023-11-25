import {createStore, applyMiddleware} from 'redux'
// this is where we will import our redux-logger
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import rootReducers from './store'


const storeRoot = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(logger)
))

export default storeRoot