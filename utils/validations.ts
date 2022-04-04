import { ErrorCreateCard, FormTypeCreateCard } from "../models/types/formTypes";

export const validateFormCreatePlace:(form:FormTypeCreateCard)=>ErrorCreateCard=(form)=>{
   const errors:ErrorCreateCard={
       title:"",
       description:"",
       address:"",
       location:""
   }
   if(!form.title.trim()){
       errors.title="El título es necesario"
   }else if(!form.description.trim()){
        errors.description="La descripción es requerida"
   }else if(!form.address.trim()){
        errors.address="La dirección textual es requerida"
   }
   return errors
}