import {CREATE_DEMO, GET_ALL_DEMOS} from '../Contants'
import {createDemoAPI, getAllDemosAPI} from '../../API/DemoAPIS'

export const createDemo = (data) => async (dispatch) => {
    try {
        const {result} = await createDemoAPI(data)
        console.log(result)
        dispatch({
            type : CREATE_DEMO
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAllDemos = () => async (dispatch) => {
    try {
        const {data} = await getAllDemosAPI()
        dispatch({
            type : GET_ALL_DEMOS,
            data : data
        })
    } catch (error) {
        console.log(error)
    }
}