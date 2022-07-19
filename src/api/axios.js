import axios from 'axios';

const request =  axios.create({
    baseURL: `https://retoolapi.dev/geeOvB/data`
})
const getData = request.get()


const getDataFilter = ( categorys, text) =>{
    return  request.get(`?${categorys}=${text}`)  
} 

const postDataAdd = (data) =>{
    return  request.post(null, {data})
} 

export { getData, getDataFilter, postDataAdd}