import axios from 'axios'

const newRequest = axios.create({
    baseURL: "https://nakuipid.onrender.com/api/",
    withCredentials:true
    
})

export default newRequest