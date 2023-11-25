import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./usertype"

export const fetchRequest = () =>{
    return{
        type: FETCH_USER_REQUEST
    }
}
export const fetchSuccess = () =>{
    return{
        type: FETCH_USER_SUCCESS
    }
}
export const fetchFailure = () =>{
    return{
        type: FETCH_USER_FAILURE
    }
}