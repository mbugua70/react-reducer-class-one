/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// import React from 'react'
// to consume our redux we will import provider that comes with our redux libraly


import {  connect } from "react-redux"
import { buyIceCream } from "../redux/actionHolders"

function LessonThree (props) {
  return (
    <>
    <div>
      <h2>Number of icecream {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Submit</button>
    </div>

    </>
  )
}

// we will define mapStateToProp function
// the state from our component store is mapped to  our component
const mapStateToProp = state =>{
    return{
        numOfIceCream: state.icecream.numOfIceCream
    }
}

// mapping dispatch from our action creator to our component.

const mapDisptachToProp = dispatch =>{
    return{
    buyIceCream: () => dispatch(buyIceCream())

    }
}

export default connect(
    mapStateToProp,
    mapDisptachToProp
)(LessonThree)
