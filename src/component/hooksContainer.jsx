// useSelector its a hook comes with react-redux its takes callback function which should return ie numOfCakes
import { useDispatch } from "react-redux"
// works close like mapToStateProp function.
// accept a function as its paramter/ its also receives redux state as its arguement
import { useSelector  } from "react-redux/es/hooks/useSelector"
import { buyCake } from "../redux/actionHolders"
const HookContainer = () =>{
    const numOfCake = useSelector(state => state.cakes.numOfCake)
    const dispatch = useDispatch()
    return(
        <>
        <div className="container">
            <h2>Number of cakes  {numOfCake}</h2>
            <button onClick={() => dispatch(buyCake())}>AddCakes</button>
        </div>
        </>
    )
}

export default HookContainer;