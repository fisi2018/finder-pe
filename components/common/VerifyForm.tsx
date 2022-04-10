import { useRouter } from "next/router";
import { ReactElement } from "react";
import { BiCurrentLocation, BiKey } from "react-icons/bi";
import { HandlerSubmit } from "../../models/types/formTypes";

export default function VerifyForm():ReactElement{
    const {push}=useRouter();
    const handleSubmit:HandlerSubmit=(e)=>{
        e.preventDefault();
        push("/login");
    }
    return(
        <form onSubmit={handleSubmit} className="bg-gray-800 text-white flex rounded-lg shadow-2xl flex-col p-6  " >
                <h1 className="text-center text-xl my-4 2xl:text-2xl" >Verificación de correo</h1>
                <article className="flex justify-center" >

                <span className="flex text-2xl 2xl:text-4xl justify-center items-center p-6 rounded-full bg-white text-gray-800" >
                    <BiCurrentLocation/>
                </span>
                </article>
                <article className="my-4 flex  flex-row-reverse" >
                    <input className="peer  2xl:text-xl bg-transparent border-b-2 focus:border-white transition-all duration-300  outline-0 border-gray-400 flex-1 " placeholder="Código de verificación" type="number" />
                    <span className="flex peer-focus:text-white transition-all duration-300 ease-out  2xl:text-3xl  text-2xl mr-2 text-gray-400 items-end justify-center" >
                        <BiKey/>
                    </span>
                </article>
               
                <button className="bg-purple-700 transition-all duration-300 hover:bg-purple-600 mt-2 2xl:text-xl text-white py-2" type="submit" >Verificar</button>
                
                
                </form>
    )
}