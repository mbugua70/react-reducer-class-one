import { combineReducers } from 'redux'
import iceCreamReducer from './iceCream/iceCreamReducer';
import cakeRuducer from './cakeRudecer'
import UserReducers from './user/userreducer';
// import { createContext } from 'react'
//  we will have to combine our ruders functions

const rootReducers = combineReducers({
    cakes: cakeRuducer,
    icecream: iceCreamReducer,
    userReducer: UserReducers
})


// export const store = createStore(cakeRuducer)
export default rootReducers;