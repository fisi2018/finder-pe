import Link from "next/link";
import { useState } from "react";
import {RiMenu5Fill} from "react-icons/ri";
import {AiOutlineArrowUp} from "react-icons/ai";
import {BiCurrentLocation} from "react-icons/bi";
import { NextRouter, useRouter } from "next/router";
export default function Header(){
    const [show,setShow]=useState<boolean>(false);
    const {pathname}:NextRouter=useRouter();
    return(
        <header className="sticky z-20 flex items-center justify-between top-0 2xl:py-6 2xl:px-12 py-4 px-8 bg-gray-200 text-gray-800" >
            <article className="flex" >
            <span className="flex text-2xl 2xl:text-4xl text-purple-700 justify-center items-center" >
                <BiCurrentLocation />
            </span>
            <h1 className="text-2xl 2xl:text-4xl font-bold tracking-widest " >Finder</h1>
            </article>
            <nav className="flex" >
                <button onClick={()=>show?setShow(false):setShow(true)} className="flex xl:hidden justify-center 2xl:text-4xl items-center text-3xl text-purple-500">
                    <RiMenu5Fill/>
                </button>
                <aside className={`fixed py-4 flex items-center flex-col left-0 top-0 right-0 z-50 bg-purple-500 transition-transform duration-500 ${show?"translate-y-0":"-translate-y-full"}`} >
                    <article>
                        <button onClick={()=>show?setShow(false):setShow(true)} className="rounded-full transition-colors duration-500 text-white hover:bg-white hover:text-purple-500 p-4 text-2xl">
                            <AiOutlineArrowUp/>
                        </button>
                    </article>
                    <ul className="flex w-full flex-col items-center text-white" >
                        <li className="py-8" >
                        <Link href="/" >
                        <a className=" transition-all duration-300 hover:tracking-widest" >Inicio</a>
                        </Link>
                    </li>
                    <li className="py-8">
                        <Link href="/about" >
                        <a className=" transition-all duration-300 hover:tracking-widest" >Acerca de Finder</a>
                        </Link>
                    </li>
                    <li className="py-8">
                        <Link href="/" >
                        <a className=" transition-all duration-300 hover:tracking-widest" >Servicios</a>
                        </Link>
                    </li>
                    <li className="py-8" >
                        <Link href="/" >
                            <a className="border-2 font-bold rounded-lg transition-all duration-300 text-sm border-white py-3 px-6 hover:bg-white uppercase hover:text-purple-500" >
                                Iniciar sesión
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                            <a className=" bg-gray-700 rounded-lg font-bold text-white py-3 px-6 uppercase text-sm " >Registrarse</a>
                        </Link>
                    </li>
                    </ul>
                </aside>
                <ul className="hidden xl:flex 2xl:text-2xl" >
                    <li className="mx-4" >
                        <Link href="/" >
                        <a className={`hover:text-purple-500 relative duration-300 transition-all hover:font-bold ${pathname.split("/").pop()===""?"text-purple-500 font-bold after:flex after:text-purple-500 after:absolute after:top-full after:justify-center after:items-center after:text-2xl after:w-full after:h-4 after:content-['·'] ":"after:hidden"}`} >Inicio</a>
                        </Link>
                    </li>
                    <li className="mx-4" >
                        <Link href="/about" >
                        <a className={`hover:text-purple-500 relative duration-300 transition-all hover:font-bold ${pathname.split("/").pop()==="about"?"text-purple-500 font-bold after:flex after:text-purple-500 after:absolute after:top-full after:justify-center after:items-center after:text-2xl after:w-full after:h-4 after:content-['·'] ":"after:hidden"}`} >Acerca de Finder</a>
                        </Link>
                    </li>
                    <li className="mx-4" >
                        <Link href="/" >
                        <a className={`hover:text-purple-500 relative duration-300 transition-all hover:font-bold ${pathname.split("/").pop()==="services"?"text-purple-500 font-bold after:flex after:text-purple-500 after:absolute after:top-full after:justify-center after:items-center after:text-2xl after:w-full after:h-4 after:content-['·'] ":"after:hidden"}`} >Servicios</a>
                        </Link>
                    </li>
                </ul>
                <nav className="hidden xl:flex  " >
                    <article className="mx-4 ">
                        <Link href="/" >
                            <a className="border-2  font-bold rounded-lg transition-all duration-300 text-xs text-purple-500 2xl:text-lg border-purple-500 py-3 px-6 hover:bg-purple-500 uppercase hover:text-white" >
                                Iniciar sesión
                            </a>
                        </Link>
                    </article>
                    <article className="mx-4" >
                        <Link href="/" >
                            <a className=" bg-gray-700 rounded-lg font-bold text-white py-3 px-6 uppercase text-xs 2xl:text-lg " >Registrarse</a>
                        </Link>
                    </article>
                </nav>
            </nav>
        </header>
    )
}