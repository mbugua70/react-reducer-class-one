/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// import React from 'react'
// to consume our redux we will import provider that comes with our redux libraly

import { buyCake } from "../redux/actionHolders"
import {  connect } from "react-redux"
function LessonTwo(props) {
  return (
    <>
    <div>
      <h2>Number of cake {props.numOfCake}</h2>
      <button onClick={props.buyCake}>Submit</button>
    </div>

    </>
  )
}

// we will define mapStateToProp functionn
// the below code work as selectors

const mapStateToProp = state =>{
    return{
        numOfCake: state.cakes.numOfCake
    }
}

const mapDisptachToProp = dispatch =>{
    return{
      // arrow function that dispatch an action from redux
    buyCake: () => dispatch(buyCake())

    }
}

export default connect(
    mapStateToProp,
    mapDisptachToProp
)(LessonTwo)
