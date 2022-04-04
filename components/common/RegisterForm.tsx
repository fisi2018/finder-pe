import Link from "next/link";
import {  Dispatch, SetStateAction, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import {BiCurrentLocation} from "react-icons/bi";
import { MdEmail, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { HandlerSubmit,RegisterFormType } from "../../models/types/formTypes";
import { HookRegisterForm } from "../../models/types/hooksTypes";
import { useForm } from "../hooks/useForm";
const formInit:RegisterFormType={
    name:"",
    email:"",
    password:"",
    confirm:""
}
type Props={
    setVerify:Dispatch<SetStateAction<boolean>>
}
export default function RegisterForm({setVerify}:Props){
    const [visible,setVisible]=useState<boolean>(false);
    const {handleChange,form}=useForm(formInit) as HookRegisterForm ;
    const togglePassword:()=>void=()=>visible?setVisible(false):setVisible(true);
    const handleSubmit:HandlerSubmit=(e)=>{
        e.preventDefault();
        setVerify(true);
    }
    return(
        <form onSubmit={handleSubmit} className="bg-gray-800 text-white flex rounded-lg shadow-2xl flex-col p-6  " >
                <h1 className="text-center text-xl my-4 2xl:text-2xl" >Registro de usuarios</h1>
                <article className="flex justify-center" >

                <span className="flex text-2xl 2xl:text-4xl justify-center items-center p-6 rounded-full bg-white text-gray-800" >
                    <BiCurrentLocation/>
                </span>
                </article>
                <article className="my-4 flex flex-row-reverse " >
                    <input value={form.name} onChange={handleChange} name="name" className="peer 2xl:text-xl bg-transparent border-b-2 focus:border-white transition-all duration-300  outline-0 border-gray-400 flex-1 " placeholder="Nombres" type="text" />
                    <span className="flex 2xl:text-3xl peer-focus:text-white transition-all duration-300 ease-out   text-2xl mr-2 text-gray-400 items-end justify-center" >
                        <AiOutlineUser/>
                    </span>
                </article>
                <article className="my-4 flex flex-row-reverse " >
                    <input value={form.email} onChange={handleChange} name="email" className="peer 2xl:text-xl bg-transparent border-b-2 focus:border-white transition-all duration-300  outline-0 border-gray-400 flex-1 " placeholder="Correo" type="email" />
                    <span className="flex 2xl:text-3xl peer-focus:text-white transition-all duration-300 ease-out   text-2xl mr-2 text-gray-400 items-end justify-center" >
                        <MdEmail/>
                    </span>
                </article>
                <article className="my-4 flex flex-row-reverse " >
                    <input value={form.password} onChange={handleChange} name="password"  className="peer 2xl:text-xl bg-transparent border-b-2 focus:border-white transition-all duration-300 outline-0 border-gray-400 flex-1" placeholder="Contraseña"  type={visible?"text":"password"} />
                    <span onClick={togglePassword} className="flex cursor-pointer peer-focus:text-white transition-all duration-300 ease-out  2xl:text-3xl justify-center items-end text-gray-400 text-2xl mr-2 " >
                        {!visible?
                        <MdVisibility/>
                        :
                        <MdVisibilityOff/>
                        }
                    </span>
                </article>
                <article className="my-4 flex flex-row-reverse " >
                    <input value={form.confirm} onChange={handleChange} name="confirm" className="peer 2xl:text-xl bg-transparent border-b-2 focus:border-white transition-all duration-300 outline-0 border-gray-400 flex-1" placeholder="Confirmar contraseña"  type={visible?"text":"password"} />
                    <span onClick={togglePassword} className="flex peer-focus:text-white transition-all duration-300 ease-out  cursor-pointer 2xl:text-3xl justify-center items-end text-gray-400 text-2xl mr-2 " >
                        {!visible?
                        <MdVisibility/>
                        :
                        <MdVisibilityOff/>
                        }
                    </span>
                </article>
                <button className="bg-purple-700 mt-2 transition-all duration-300 hover:bg-purple-600 2xl:text-xl text-white py-2" type="submit" >Registrarse</button>
                <Link href="/login">
                <a className="text-sm 2xl:text-lg mt-4 text-purple-300 " >
                    ¿Ya posees una cuenta? Inicia sesión aquí
                </a>
                </Link>
                
                </form>
    )
}