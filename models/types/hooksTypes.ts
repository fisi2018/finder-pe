import {HandlerChange,FormTypeCreateCard, RegisterFormType} from "./formTypes";
import {Dispatch,SetStateAction} from "react";
export type HookCreateCard={handleChange:HandlerChange,setForm:Dispatch<SetStateAction<FormTypeCreateCard>>,form:FormTypeCreateCard}
export type HookRegisterForm={handleChange:HandlerChange,setForm:Dispatch<SetStateAction<RegisterFormType>>,form:RegisterFormType}
