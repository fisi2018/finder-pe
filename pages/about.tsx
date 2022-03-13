import Layout from "../components/layout";
import {ReactElement} from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { BiAbacus } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
export default function About(){
    return(
        <section className="p-6 text-white bg-gradient-to-br from-purple-900 to-sky-300 min-h-screen items-center flex flex-col " >
            <h1 className=" text-3xl text-center" >¿Qué es <b className="font-bold text-purple-200" >Finder</b>?</h1>
            <p className="text-xl w-80 my-4 text-center" >Finder es una plataforma para almacenar y compartir cualquier tipo de dirección de una manera rápida, sencilla y gratuita.</p>
            <div className="w-full relative grid grid-cols-1 md:grid-cols-3 gap-6 grid-flow-row text-xl" >
                <article className="flex flex-col justify-center items-center" >
                    <span className="flex text-5xl rounded-full items-center justify-center bg-gray-800 text-white p-6" >
                        <AiFillThunderbolt/>
                    </span>
                    <p>Rápido</p>
                </article>
                <article className="flex flex-col justify-center items-center" >
                    <span className="flex text-5xl rounded-full items-center justify-center bg-gray-800 text-white p-6" >
                        <BiAbacus/>
                    </span>
                    <p>Sencillo</p>
                </article>
                <article className="flex flex-col justify-center items-center" >
                    <span className="flex text-5xl rounded-full items-center justify-center bg-gray-800 text-white p-6" >
                        <BsCoin/>
                    </span>
                    <p>Gratuito</p>
                </article>
            </div>
        </section>
    )
}
About.getLayout=function getLayout(page:ReactElement ){
    return(
        <Layout>
            {page}
        </Layout>
    )
}