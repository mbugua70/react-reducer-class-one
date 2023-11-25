// REACT REDUX CODE DEVOLUTION.
// Redux is a predictable state container for javascript app.
// Redux is not tied to any framework
// it can be used with react, angular, vue or vanilla javascript.


// Redux is a state container
// used to store react state.
// its used in the management of state.
// State of an application is simply the state of indivual appliction component.


// Redux is predictable.
// in redux all state transitions are explicit and it is possible to keep track of them.

// React-Redux is the official Redux UI binding libraly for React.
// use Redux to the application that have different number of routes and have state that they need to share.

// middleware
// first you install the redux logger
// then import where you have stored you store code for the reducer.
// you will also import applyMiddleWare from our redux
// the middleware usually logs the information related to the redux

// redux devtool extensions

// ACTION PAYLOAD
// Adding a payload to our action creator.
// payload  allows to add additioNal information to the reducer.

// mapStateToProp can have two arguement
// the second arguement is usually the the prop of the own component.

// actions async and sync
// synchronous actions
// as soon as an action was dispatched, the state was immediately updated
// for example the BUY_CAKE action, the numOfCake was right away increased same as BUY_ICECREAM

// ASYNCHRONOUS ACTION
// wait for a task to complete before disptching your action.
// this could be an api call