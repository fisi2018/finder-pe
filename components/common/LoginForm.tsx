import Link from "next/link";
import { ReactElement } from "react";
import {BiCurrentLocation} from "react-icons/bi";
import { MdEmail, MdPassword } from "react-icons/md";
export default function LoginForm():ReactElement{
    return(
        <form className="bg-gray-800 text-white flex rounded-lg shadow-2xl flex-col p-6  " >
                <h1 className="text-center text-xl my-4 2xl:text-2xl" >Inicio de sesión</h1>
                <article className="flex justify-center" >

                <span className="flex text-2xl 2xl:text-4xl justify-center items-center p-6 rounded-full bg-white text-gray-800" >
                    <BiCurrentLocation/>
                </span>
                </article>
                <article className="my-4 flex flex-row-reverse" >
                    <input className=" 2xl:text-xl peer bg-transparent border-b-2 focus:border-white transition-all duration-300  outline-0 border-gray-400 flex-1 " placeholder="Correo" type="email" />
                    <span className="flex 2xl:text-3xl peer-focus:text-white transition-all duration-300 ease-out  text-2xl mr-2 text-gray-400 items-end justify-center" >
                        <MdEmail/>
                    </span>
                </article>
                <article className="my-4 flex flex-row-reverse" >
                    <input className=" 2xl:text-xl peer bg-transparent border-b-2 focus:border-white transition-all duration-300 outline-0 border-gray-400 flex-1" placeholder="Contraseña" type="password" />
                    <span className="flex 2xl:text-3xl justify-center peer-focus:text-white transition-all duration-300 ease-out items-end text-gray-400 text-2xl mr-2 " >
                        <MdPassword/>
                    </span>
                </article>
                <button className="bg-purple-700 transition-all duration-300 hover:bg-purple-600 mt-2 2xl:text-xl text-white py-2" type="submit" >Iniciar sesión</button>
                <Link href="/register">
                <a className="text-sm 2xl:text-lg mt-4 text-purple-300 " >
                    ¿Aún no posees una cuenta? Regístrate aquí
                </a>
                </Link>
                
                </form>
    )
}