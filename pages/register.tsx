import Link from "next/link"
import { ReactElement } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { BiCurrentLocation } from "react-icons/bi"
import { MdEmail, MdPassword } from "react-icons/md"
import Layout from "../components/layout"

export default function Register(){
    return(
        <section className="min-h-screen p-6 flex  justify-center items-center bg-gradient-to-br from-purple-900 to-purple-500" >
                <form className="bg-gray-800 text-white flex rounded-lg shadow-2xl flex-col p-6  " >
                <h1 className="text-center text-xl my-4 2xl:text-2xl" >Registro de usuarios</h1>
                <article className="flex justify-center" >

                <span className="flex text-2xl 2xl:text-4xl justify-center items-center p-6 rounded-full bg-white text-gray-800" >
                    <BiCurrentLocation/>
                </span>
                </article>
                <article className="my-4 flex " >
                    <span className="flex 2xl:text-3xl  text-2xl mr-2 text-gray-400 items-end justify-center" >
                        <AiOutlineUser/>
                    </span>
                    <input className=" 2xl:text-xl bg-transparent border-b-2 focus:border-white transition-all duration-300  outline-0 border-gray-400 flex-1 " placeholder="Nombres" type="email" />
                </article>
                <article className="my-4 flex " >
                    <span className="flex 2xl:text-3xl  text-2xl mr-2 text-gray-400 items-end justify-center" >
                        <MdEmail/>
                    </span>
                    <input className=" 2xl:text-xl bg-transparent border-b-2 focus:border-white transition-all duration-300  outline-0 border-gray-400 flex-1 " placeholder="Correo" type="email" />
                </article>
                <article className="my-4 flex " >
                    <span className="flex 2xl:text-3xl justify-center items-end text-gray-400 text-2xl mr-2 " >
                        <MdPassword/>
                    </span>
                    <input  className=" 2xl:text-xl bg-transparent border-b-2 focus:border-white transition-all duration-300 outline-0 border-gray-400 flex-1" placeholder="Contraseña"  type="password" />
                </article>
                <button className="bg-purple-700 mt-2 transition-all duration-300 hover:bg-purple-600 2xl:text-xl text-white py-2" type="submit" >Registrarse</button>
                <Link href="/login">
                <a className="text-sm 2xl:text-lg mt-4 text-purple-300 " >
                    ¿Ya posees una cuenta? Inicia sesión aquí
                </a>
                </Link>
                
                </form>
        </section>
    )
}
Register.getLayout=function getLayout(page:ReactElement){
    return(
        <Layout>
            {page}
        </Layout>
    )
}