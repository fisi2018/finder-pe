import Layout from "../components/layout";
import {ReactElement} from "react";
import { BsFillShareFill } from "react-icons/bs";
import {MdPlace} from "react-icons/md";
import {FaUserAlt, FaUsers} from "react-icons/fa";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
export default function Services():ReactElement{
    return(
        <section className="p-6 min-h-screen flex flex-col items-center text-white bg-gradient-to-br from-gray-800 to-purple-500 " >
            <h1 className="text-3xl font-semibold mb-6 2xl:text-5xl " >Servicios en Finder</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4  " >
            <article className="flex flex-col items-center bg-gray-800 rounded-lg p-4" >
                <span className="flex justify-center 2xl:text-6xl text-4xl items-center my-4" >
                    <BsFillShareFill/>
                </span>
                <p className="text-center 2xl:text-xl" > Comparte direcciones con tus amigos en 1 minuto</p>
            </article>
            <article className="flex flex-col items-center bg-gray-800 rounded-lg p-4" >
                <span className="flex justify-center 2xl:text-6xl text-4xl items-center my-4" >
                    <MdPlace/>
                </span>
                <p className="text-center 2xl:text-xl" > Encuentra lugares de interés cerca tuyo</p>
            </article>
            <article className="flex flex-col items-center bg-gray-800 rounded-lg p-4" >
                <span className="flex 2xl:text-6xl justify-center text-4xl items-center my-4" >
                    <FaUserAlt/>
                </span>
                <p className="text-center 2xl:text-xl " > Crea tu perfil y agrega direcciones que recomiendes al resto</p>
            </article>
            <article className="flex flex-col items-center bg-gray-800 rounded-lg p-4" >
                <span className="flex 2xl:text-6xl justify-center text-4xl items-center my-4" >
                    <FaUsers/>
                </span>
                <p className="text-center 2xl:text-xl" >Conoce personas que frecuentan esos lugares </p>
            </article>
            <article className="flex flex-col items-center bg-gray-800 rounded-lg p-4" >
                <span className="flex 2xl:text-6xl justify-center text-4xl items-center my-4" >
                    <RiGitRepositoryPrivateFill/>
                </span>
                <p className="text-center 2xl:text-xl" >Organiza reuniones privadas y compártelo con tus contactos cercanos </p>
            </article>
            
            </div>
        </section>
    )
}
Services.getLayout=function getLayout(page:ReactElement):ReactElement{
    return(
        <Layout>
            {page}
        </Layout>
    )
}