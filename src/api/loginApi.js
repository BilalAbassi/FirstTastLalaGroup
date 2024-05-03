
import axios from "axios"; 

const apiUrl = "https://api.tripplannerpk.com/"; 

 export const axiosClient = axios.create({
    baseURL: apiUrl,
});


const postUserData = async (data, endpoint) => {
    try {
        const response = await axiosClient.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        return null; 
    }
};




// const postUserData = async (data,endpoint) => {
//     let res =null
//  axiosClient.post(`${endpoint}`, data).then(response => {
      
//     return  res = response.data;
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     })


// };


















export default postUserData; 
