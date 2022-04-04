import Layout from "../components/layout";
import { BiCurrentLocation } from "react-icons/bi"
import { ReactElement, useState} from "react";
import { MdDescription, MdLocationOn, MdTitle } from "react-icons/md";
import Link from "next/link";
import { FormTypeCreateCard, HandlerSubmit } from "../models/types/formTypes";
import { useForm } from "../components/hooks/useForm";
import { FaAddressBook } from "react-icons/fa";
import MapBox from "../components/common/MapBox";
import { createPlace } from "../utils/fetch";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../components/common/Loader";
import { validateFormCreatePlace } from "../utils/validations";
import { HookCreateCard } from "../models/types/hooksTypes";
const formInit:FormTypeCreateCard ={
    title:"",
    description:"",
    address:"",
    location:{
        lng:0,
        lat:0
    }
}
export default function PublicCard():JSX.Element{
    const {handleChange,setForm,form}=useForm(formInit) as HookCreateCard ;
    const [loading,setLoading]=useState<boolean>(false);
    const handleSubmit:HandlerSubmit=async(e)=>{
        e.preventDefault();
        const {title,description,address}=validateFormCreatePlace(form);
        if( title || description || address ){
            title && toast.error(title);
            description && toast.error(description);
            address && toast.error(address);
        }else{
            setLoading(true);
            const result=await createPlace(form);
            result.error?toast.error(result.message):toast.success(result.message);
            setForm(formInit);
            setLoading(false);
        }
    }
    return(
        <section className="min-h-screen p-6 flex  justify-center items-center bg-gradient-to-br from-purple-900 to-purple-500" >
                <Toaster/>
                <form onSubmit={handleSubmit} className="bg-gray-800 text-white flex rounded-lg shadow-2xl flex-col p-6  " >
                <h1 className="text-center text-xl my-4 2xl:text-2xl" >Agrega nuevos lugares</h1>
                <article className="flex justify-center" >

                <span className="flex text-2xl 2xl:text-4xl justify-center items-center p-6 rounded-full bg-white text-gray-800" >
                    <BiCurrentLocation/>
                </span>
                </article>
                <article className="my-4 flex flex-row-reverse " >
                    <input value={form.title} onChange={handleChange} name="title" className=" peer 2xl:text-xl bg-transparent border-b-2 focus:border-white transition-all duration-300  outline-0 border-gray-400 flex-1 " placeholder="Título" type="text" />
                    <span className="flex transition-all duration-300 peer-focus:text-white 2xl:text-3xl  text-2xl mr-2 text-gray-400 items-end justify-center" >
                        <MdTitle/>
                    </span>
                </article>
                <article className="my-4 flex items-start  flex-row-reverse " >
                    <textarea value={form.description} onChange={handleChange} name="description"  placeholder="Ingrese una descripción o detalles a considerar del lugar" className="peer resize-none 2xl:text-xl bg-transparent p-2 rounded-lg border-2 focus:border-white transition-all duration-300  outline-0 border-gray-400 flex-1 " cols={30} rows={5}></textarea>
                    <span className="transition-all duration-300 peer-focus:text-white flex 2xl:text-3xl  text-2xl mr-2 text-gray-400 items-end justify-center" >
                        <MdDescription/>
                    </span>
                </article>
                <article className="my-4 flex flex-row-reverse " >
                    <input value={form.address} onChange={handleChange} name="address" className="peer 2xl:text-xl bg-transparent border-b-2 focus:border-white transition-all duration-300 outline-0 border-gray-400 flex-1" placeholder="Dirección" type="text" />
                    <span className="flex transition-all duration-300 peer-focus:text-white 2xl:text-3xl justify-center items-end text-gray-400 text-2xl mr-2 " >
                        <FaAddressBook/>
                    </span>
                </article>
                <p className="text-gray-300" >Seleccione en el mapa la ubicación exacta </p>
                <article className="my-4 flex flex-row-reverse" >
                    <input readOnly={true} value={form.location.lng} onChange={handleChange} name="lng" className="peer 2xl:text-xl bg-transparent border-b-2 focus:border-white transition-all duration-300 outline-0 border-gray-400 flex-1" placeholder="Longitud" type="number" />
                    <input readOnly={true} value={form.location.lat} onChange={handleChange} name="lat" className="peer 2xl:text-xl bg-transparent border-b-2 focus:border-white transition-all duration-300 outline-0 border-gray-400 flex-1" placeholder="Latitud" type="number" />
                    <span className="flex transition-all duration-300 peer-focus:text-white 2xl:text-3xl justify-center items-end text-gray-400 text-2xl mr-2 " >
                        <MdLocationOn/>
                    </span>
                </article>
                
                <MapBox setForm={setForm} form={form} />
                { loading ?
                <div className="flex justify-center items-center" >

                    <Loader/>
                </div>
            :
            <button className="bg-purple-700 mt-6 transition-all duration-300 hover:bg-purple-600 2xl:text-xl text-white py-2" type="submit" >Publicar dirección</button>
            }
                <Link href="/login">
                <a className="text-sm 2xl:text-lg mt-4 text-purple-300 " >
                    ¿Quieres disfrutar de más funcionalidades? Inicia sesión aquí
                </a>
                </Link>
                
                </form>
        </section>
    )
}
PublicCard.getLayout=function getLayout(page:ReactElement){
   return(

   <Layout>
        {page}
    </Layout>
   ) 
}