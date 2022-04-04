import axios from "axios"
import { API_URL } from "../consts/config"
import { FormTypeCreateCard, RegisterFormType } from "../models/types/formTypes";

export const fetchPlaces=async()=>{
    try{
        const response=await axios.get(`${API_URL}/place/places`);
        const data=await response.data;
        if(data.error) return {error:data.error,message:data.message}
        return data;
    }catch(err){
        return{
            error:true,
            message:"Ha ocurrido un error en el servidor"
        }
    }
}
export const createPlace=async(form : FormTypeCreateCard)=>{
    try{
        const response=await axios.post(`${API_URL}/place/createPlace`,form);
        const data=await response.data;
        if(data.error) return{error:data.error,message:data.message}
        return data;
    }catch(err){
        return{
            error:true,
            message:"Ha ocurrido un error al publicar esta ubicación"
        }
    }
}
export const registerUser=async(form:RegisterFormType)=>{
    try{
        const response=await axios.post(`${API_URL}`,form);
        const data=await response.data;
        if(data.error)return{error:data.error,message:data.message};
        return data;
    }catch(err){
        return{
            error:err,
            message:"Ha ocurrido un error al registrar un usuario"
        }
    }
}