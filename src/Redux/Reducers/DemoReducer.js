import { CREATE_DEMO, GET_ALL_DEMOS } from "../Contants";

const initialState = [
    {
        id : -1,
        name : "demo",
        age : -1
    }
]

export const demoReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_DEMO :
            return state
        case GET_ALL_DEMOS : 
            return action.data
        default :
            return state
    }
}