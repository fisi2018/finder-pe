import { useState } from "react"
import { FormTypeCreateCard, HandlerChange } from "../../types/formTypes";

export const useForm=(init:FormTypeCreateCard)=>{
    const [form,setForm]=useState(init);
    const handleChange:HandlerChange=(e)=>{
        const {name,value}=e.target;
        setForm({
            ...form,
            [name]:value
        })
    }
    return{
        handleChange,
        form
    }
}