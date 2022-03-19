import axios from "axios"
import { API_URL } from "../consts/config"
import { Place } from "../types/place";

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
export const createPlace=async(form:Place)=>{
    try{
        const response=await axios.post(`${API_URL}/place/createPlace`,form);
        const data=await response.data;
        return data;
    }catch(err){
        return{
            error:true,
            message:"Ha ocurrido un error al publicar esta ubicación"
        }
    }
}