import axios from "axios"

//created axio client to create endpoint
const axioClient=axios.create({
    baseURL:'https://bankbackend-2mef.onrender.com'
});



export default  axioClient