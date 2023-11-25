/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import {  connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux/actionHolders";



const SecondNewContainer = (props) => {

    return(
        <>
        <h1>item - {props.items}</h1>
        <button onClick = {props.dispatch}>add</button>
        </>
    )
}


const mapToStateProps = (state, ownProps) => {
  const item = ownProps.cakes ? state.cakes.numOfCake : state.icecream.numOfIceCream;
  return{
    items: item
  }
}

const mapToDispatchProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cakes ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());
    return{
        dispatch: dispatchFunction
    }
}

export default  connect(mapToStateProps, mapToDispatchProps)(SecondNewContainer);