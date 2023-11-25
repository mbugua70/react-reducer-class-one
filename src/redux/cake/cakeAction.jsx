import { BUY_CAKE } from "./cakeTypes"


export const buyCake = (addValue = 2) => {
    return{
        type: BUY_CAKE,
        payload: Number(addValue)
    }
}
