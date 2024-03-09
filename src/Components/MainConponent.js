import React, { useState } from 'react'
import {getAllDemos, createDemo} from '../Redux/Actions/DemoActions'
import {useDispatch, useSelector} from 'react-redux'

export const MainConponent = () => {

    let dispatch = useDispatch()

    let demos = useSelector(state => state.demoReducer)

    const [data,setData] = useState({
        name : "",
        age : -1
    })

    let refresh = () => {
        dispatch(getAllDemos())
    }

    let create = () => {
        dispatch(createDemo(data))
    }

  return (
    <div>
        <div className='text-center' style={{border : "2px solid red", fontSize : "30px", margin : "10px"}}>
            Demo App
        </div>
        <div style={{margin : "10px"}}>
            <div style={{fontSize : "20px"}}><b>Actions</b></div>
            <div>
                <button className='btn btn-primary' onClick={refresh}>Refresh</button>
                <div>
                    <span style={{margin : "5px"}} className='text-danger'>Add Demo : </span>
                    <b style={{margin : "5px"}}>Name</b>
                    <input style={{margin : "5px"}} type='text' placeholder='name here' value={data.name} onChange={(e) => setData({...data, name : e.target.value})}/>
                    <b style={{margin : "5px"}}>Age</b>
                    <input style={{margin : "5px"}} type='number' placeholder='age' value={data.age} onChange={(e) => setData({...data, age: e.target.value})}/>
                    <button style={{margin : "5px"}} className='btn btn-primary' onClick={create}>Create</button>
                </div>
            </div>
        </div>
        <div style={{border : "2px solid black", margin : "10px"}}>
            <div className='text-center' style={{fontSize : "30px", color : "red"}}>All Demos</div>
            <div style={{margin : "5px"}}>
                {
                    demos.map(e => {
                        return <div style={{margin : "5px", border : "2px solid red"}}>
                            <div className='text-center'><b>User {e.id}</b></div>
                            <div>{e.name}</div>
                            <div>{e.age}</div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}
