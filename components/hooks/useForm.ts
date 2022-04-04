import { useState } from "react"
import { Form, HandlerChange } from "../../models/types/formTypes";

export const useForm=(init: Form)=>{
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
        setForm,
        form
    }
}