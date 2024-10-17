import axiosInstance from "./Axios";


export const register = async(registerId)=>{
 try {
    const data = await axiosInstance.post("/register",{registerId})
    return data
 } catch (error) {
    console.log(error.message);
    
 }
}
export const patientsData = async()=>{
 try {
    const data = await axiosInstance.get("/patientsList")
    return data
 } catch (error) {
    console.log(error.message);
    
 }
}

export const getPatientById = async(id)=>{
 try {
    const data = await axiosInstance.get(`/singleview/${id}`)
    return data
 } catch (error) {
    console.log(error.message);
    
 }
}


export const submitAuthorizationRequest = async({id,...formData})=>{
 try {
    const data = await axiosInstance.post(`/authorize/${id}`,{...formData})
    return data
 } catch (error) {
    console.log(error.message);
    
 }
}

export const authData = async(id)=>{
    try {
       const data = await axiosInstance.get(`/authData/${id}`)
       return data
    } catch (error) {
       console.log(error.message);
       
    }
   }