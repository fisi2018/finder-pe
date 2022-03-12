import { ReactElement } from "react";
import Layout from "../components/layout";
import {BsSearch} from "react-icons/bs";
import {IoIosArrowDown} from "react-icons/io";
import Link from "next/link";
export default function Home(){
    return(
        <section className="p-4 flex justify-center flex-col text-white items-center min-h-screen bg-gradient-to-br from-purple-900 to-purple-400  " >
            <p className="uppercase tracking-widest 2xl:text-xl " >Uso gratuito</p>
            <h1 className="text-3xl md:text-4xl 2xl:text-7xl 2xl:w-96 lg:text-5xl lg:w-60 w-48 font-semibold text-center" >
                Encuentra cualquier lugar en 1 minuto
            </h1>
            <form className="my-4 w-full sm:w-96 2xl:w-[40rem] lg:w-[28rem] " >
                <article className="relative " >
                    <input className=" w-full 2xl:text-2xl rounded-3xl 2xl:rounded-full 2xl:p-8  p-4 z-0 text-gray-800"  type="search" placeholder="Ej: Vidrieria San Carlos" />
                    <span className="flex text-2xl 2xl:text-4xl top-4 right-4 2xl:top-7 2xl:right-6 bg-white text-gray-700 absolute justify-center items-center" >
                        <BsSearch />
                    </span>
                </article>
                <article className="flex justify-center py-6" >
                    <button className="bg-gray-800 hover:-translate-y-2 hover:opacity-95 hover:shadow-xl py-3 px-6 2xl:py-4 2xl:px-8 2xl:text-xl  text-sm font-semibold uppercase flex justify-center  rounded-2xl transition-all duration-500 tracking-widest hover:bg-white hover:text-purple-500" type="submit" >Buscar</button>
                </article>
            </form>
            <article className="flex justify-center" >
                <span className="flex text-3xl animate-bounce justify-center items-center" >
                    <IoIosArrowDown/>
                </span>
            </article>
            <article className="flex flex-col items-center" >
                <p className="text-xl 2xl:text-2xl my-4 text-center" >¿Deseas agregar una nueva dirección?</p>
                <Link href="/" >
                    <a className="py-3 px-6 2xl:py-4 2xl:px-8 2xl:text-xl rounded-2xl uppercase tracking-widest border-2 border-white text-white font-bold hover:bg-white transition-all duration-300 hover:text-purple-500" >
                        Comenzar
                    </a>
                </Link>
            </article>
        </section>
    )
}
Home.getLayout=function getLayout(page:ReactElement){
    return(
        <Layout>
            {page}
        </Layout>
    )
}