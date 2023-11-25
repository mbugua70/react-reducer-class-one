// import { useReducer } from "react"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./usertype"

const initialState = {
    loading: true,
    user: [],
    error: ''
}

const UserReducers = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
        return{
          ...state,
          loading: true
        }

        case FETCH_USER_SUCCESS:
            return{
                loading: false,
                user: action.payload,
                error: ""
            }

            case FETCH_USER_FAILURE:
                return{
                    loading: false,
                    user: [],
                    error: action.payload
                }

                default:
                    return state
    }
}

export default UserReducers