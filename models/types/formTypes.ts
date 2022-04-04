import { ChangeEvent, FormEvent } from "react"

export type FormTypeCreateCard={
    title:string,
    description:string,
    address:string,
    location:{
        lng:number,
        lat:number
    }
}
export type RegisterFormType={
    name:string,
    email:string,
    password:string,
    confirm:string
}
export type FormLogin={
    email:string,
    password:string
}
export type Form=RegisterFormType | FormLogin | FormTypeCreateCard
export type ErrorCreateCard={
    title:string,
    description:string,
    address:string,
    location:string
}
export type HandlerSubmit=(e:FormEvent<HTMLFormElement>)=>void
export type HandlerChange=(e:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLTextAreaElement>)=>void