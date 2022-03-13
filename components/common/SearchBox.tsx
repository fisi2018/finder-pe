//import { useEffect, useRef, useState } from 'react';
import { exit } from 'process';
import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Address } from '../../consts/db';
//import { useSearchBox } from 'react-instantsearch-hooks';
export default function SearchBox({db}){
    console.log(db);
    const [searchValue,setSearchValue]=useState<string>("");
    const [items,setItems]=useState([]);
    useEffect(()=>{
        if(searchValue!==""){
            let flag:number=0;
            let array:Address[]=[];
            for(let i=0;i<db.length;i++){
                console.log("index ",i);
                if(flag===4){
                    break;
                }
                if(db[i].title.toLowerCase().includes(searchValue) || db[i].description.toLowerCase().includes(searchValue)){
                    flag++;
                    array.push(db[i]);
                }
            }
            console.log("arrays ",array);
            setItems(array);
        }
    },[searchValue]);
    const handleChange=(e)=>{
        const {value}=e.target;
        setSearchValue(value);
    }
    const handleSubmit=(e)=>{e.preventDefault();}
    return(
       <form  onSubmit={handleSubmit} className="my-4 w-full sm:w-96  2xl:w-[40rem] lg:w-[28rem] " >
                <article className="relative " >
                    <input value={searchValue} onChange={handleChange} className=" w-full 2xl:text-2xl rounded-3xl 2xl:rounded-full 2xl:p-8  p-4 z-0 text-gray-800"  type="search" placeholder="Ej: Vidrieria San Carlos" />
                    <span className="flex text-2xl 2xl:text-4xl top-4 right-4 2xl:top-7 2xl:right-6 bg-white text-gray-700 absolute justify-center items-center" >
                        <BsSearch />
                    </span>
                </article>
                <article className="flex justify-center py-6" >
                    <button className="bg-gray-800 hover:-translate-y-2 hover:opacity-95 hover:shadow-xl py-3 px-6 2xl:py-4 2xl:px-8 2xl:text-xl  text-sm font-semibold uppercase flex justify-center  rounded-2xl transition-all duration-500 tracking-widest hover:bg-white hover:text-purple-500" type="submit" >Buscar</button>
                </article>
                <div className='flex flex-col  ' >
                    {items.length!==0 && items.map((el,i)=>(
                        <div className='bg-white text-gray-800 flex flex-col my-2 rounded-lg p-4' key={i} >
                            {i===3?
                            <>
                            <p className='text-5xl text-center' >+3</p>
                            <p className='text-center' >Resultados</p>
                            </>
                            :
                            <>
                            <p className='font-bold' >{el.title}</p>
                            <p>{el.description}</p>
                            <p className='font-light text-purple-700' >{el.address}</p>
                            <a className='bg-purple-500 text-white flex justify-center items-center py-2 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:opacity-90' href={el.location} >Ver ubicación</a>
                            </>
                            }
                        </div>
                    ))}
                </div>
        </form>
    )
}