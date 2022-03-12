import Link from "next/link";
import { useState } from "react";
import {RiMenu5Fill} from "react-icons/ri";
import {AiOutlineArrowUp} from "react-icons/ai";
export default function Header(){
    const [show,setShow]=useState<boolean>(false);
    return(
        <header className="sticky flex items-center justify-between top-0 py-4 px-8 bg-gray-200 text-gray-800" >
            <h1 className="text-2xl font-bold tracking-widest " >Finder</h1>
            <nav>
                <button onClick={()=>show?setShow(false):setShow(true)} className="flex justify-center items-center text-3xl text-purple-500">
                    <RiMenu5Fill/>
                </button>
                <aside className={`fixed py-4 flex items-center flex-col left-0 top-0 right-0 z-30 bg-purple-500 transition-transform duration-500 ${show?"translate-y-0":"-translate-y-full"}`} >
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
                        <Link href="/" >
                        <a className=" transition-all duration-300 hover:tracking-widest" >Acerca de Finder</a>
                        </Link>
                    </li>
                    <li className="py-8">
                        <Link href="/" >
                        <a className=" transition-all duration-300 hover:tracking-widest" >Servicios</a>
                        </Link>
                    </li>
                    </ul>
                </aside>
                <ul className="hidden " >
                    <li>
                        <Link href="/" >
                        <a>Inicio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                        <a>Acerca de Finder</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" >
                        <a>Servicios</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}