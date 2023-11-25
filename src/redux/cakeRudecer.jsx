
const initialCakeState = {
    numOfCake: 22,
}

const cakeRuducer = (state = initialCakeState, action) =>{
    switch(action.type){
        case 'BUY_CAKE':
            return{
                ...state,
                numOfCake: state.numOfCake + action.payload

            }
            default:
           return state;
    }
}

export default cakeRuducer;