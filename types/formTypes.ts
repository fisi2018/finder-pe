import { ChangeEvent, FormEvent } from "react"

export type FormTypeCreateCard={
    _id:string,
    title:string,
    description:string,
    address:string,
    location:{
        lng:number,
        lat:number
    }
}
export type HandlerSubmit=(e:FormEvent<HTMLFormElement>)=>void
export type HandlerChange=(e:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLTextAreaElement>)=>void