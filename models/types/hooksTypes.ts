import {HandlerChange,FormTypeCreateCard, RegisterFormType, Form} from "./formTypes";
import {Dispatch,SetStateAction} from "react";
export type HookUseForm=(init:Form)=>{handleChange:HandlerChange,form:Form,setForm:Dispatch<SetStateAction<Form>>}
export type HookCreateCard={handleChange:HandlerChange,setForm:Dispatch<SetStateAction<FormTypeCreateCard>>,form:FormTypeCreateCard}
export type HookRegisterForm={handleChange:HandlerChange,setForm:Dispatch<SetStateAction<RegisterFormType>>,form:RegisterFormType}
