/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// import React from 'react'
// to consume our redux we will import provider that comes with our redux libraly
import React from "react"
import { buyCake } from "../redux/actionHolders"
import {  connect } from "react-redux"
function NewCakeContainer(props) {
    const [addValue, setAddValue] = React.useState(1)

    // handleChange function

    const handleChange = (event) =>{
      event.preventDefault();
      setAddValue(event.target.value)
    }

    //  handleSubmit function
    const handleSubmit = (addValue) => {
      props.buyCake(addValue)
      setAddValue("")
    }


  return (
    <>
    <div>
      <h2>Number of cake {props.numOfCake}</h2>
      <input type="number" name="addCake" id="addCake"  value={addValue} onChange={ (event) => handleChange(event)}/>
      <button onClick={() => handleSubmit(addValue) }>Submit</button>
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
    buyCake: addValue => dispatch(buyCake(addValue))
    }
}

export default connect(
    mapStateToProp,
    mapDisptachToProp
)(NewCakeContainer)
