import axios from 'axios'

export const createDemoAPI = (data) => axios.post("http://localhost:8032/demo",data)

export const getAllDemosAPI = () => axios.get("http://localhost:8032/demo")