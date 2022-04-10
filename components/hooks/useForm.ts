import { useState } from "react"
import { Form, HandlerChange } from "../../models/types/formTypes";
import { HookUseForm } from "../../models/types/hooksTypes";

export const useForm:HookUseForm=(init)=>{
    const [form,setForm]=useState<Form>(init);
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