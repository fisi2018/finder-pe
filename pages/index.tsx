import { ReactElement } from "react";
import Layout from "../components/layout";
import {BsSearch} from "react-icons/bs";
export default function Home(){
    return(
        <section className="p-4 flex justify-center flex-col text-white items-center min-h-screen bg-gradient-to-br from-purple-800 to-purple-500 " >
            <p className="uppercase tracking-widest" >Uso gratuito</p>
            <h1 className="text-3xl w-48 font-semibold text-center" >
                Encuentra cualquier lugar en 1 minuto
            </h1>
            <form className="my-4" >
                <article className="relative" >
                    <input className=" w-80 rounded-3xl p-4 text-gray-800"  type="search" placeholder="Ej: Vidrieria San Carlos" />
                    <span className="flex text-2xl top-4 right-4 bg-white text-gray-700 absolute justify-center items-center" >
                        <BsSearch />
                    </span>
                </article>
                <article className="flex justify-center py-4" >
                    <button className="bg-gray-800 py-2 px-4 w-28 text-sm font-semibold uppercase flex justify-center  rounded-xl transition-all duration-500 tracking-widest hover:bg-white hover:text-purple-500" type="submit" >Buscar</button>
                </article>
            </form>
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