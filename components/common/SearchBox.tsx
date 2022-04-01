import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Place } from '../../types/place';
import { useSearch } from '../hooks/useSearch';
import MapPlace from './MapPlace';
export default function SearchBox({db}:{db:Place[]}){
    const {handleChange,handleSubmit,items,searchValue}=useSearch(db);
    const [show,setShow]=useState<{}>({});
    const handleMap=(id:string)=>{
        show[id]?setShow({...show,[id]:false}):setShow({...show,[id]:true});
    }
    return(
       <form  onSubmit={handleSubmit} className="my-4 w-full  flex flex-col items-center   " >
                <article className="relative sm:w-80 w-full lg:w-96 xl:w-[28rem] 2xl:w-[60rem] " >
                    <input value={searchValue} onChange={handleChange} className=" w-full 2xl:text-2xl rounded-3xl 2xl:rounded-full 2xl:p-8  p-4 z-0 text-gray-800"  type="search" placeholder="Ej: Vidrieria San Carlos" />
                    <span className="flex text-2xl 2xl:text-4xl top-4 right-4 2xl:top-7 2xl:right-6 bg-white text-gray-700 absolute justify-center items-center" >
                        <BsSearch />
                    </span>
                </article>
                <article className="flex justify-center py-6" >
                    <button className="bg-gray-800 hover:-translate-y-2 hover:opacity-95 hover:shadow-xl py-3 px-6 2xl:py-4 2xl:px-8 2xl:text-xl  text-sm font-semibold uppercase flex justify-center  rounded-2xl transition-all duration-500 tracking-widest hover:bg-white hover:text-purple-500" type="submit" >Buscar</button>
                </article>
                <div className='flex flex-col place-items-start md:grid md:grid-cols-3 md:grid-flow-row md:gap-4 2xl:gap-6  ' >
                    {items.list.length!==0 && items.list.map((el,i)=>(
                        <div className='bg-white text-gray-800 w-full flex flex-col justify-between my-2 rounded-lg p-4 2xl:p-6' key={el._id} >
                            {(i===3 && !items.showAll) ?
                            <>
                            <p className='text-5xl 2xl:text-6xl text-center' >+3</p>
                            <p className='text-center 2xl:text-3xl' >Resultados</p>
                            </>
                            :
                            <>
                            <p className='font-bold 2xl:text-2xl' >{el.title}</p>
                            <p className='2xl:my-2 my-1 2xl:text-xl' >{el.description}</p>
                            <p className='my-1 font-light text-purple-700 2xl:my-2 2xl:text-xl' >{el.address}</p>
                            <button onClick={()=>handleMap(el._id)} className={` flex justify-center items-center rounded-lg py-2 ${show[el._id]?" bg-white text-purple-500 border-purple-500 border-2 mb-3 ":" bg-purple-500 text-white"} cursor-pointer transition-all duration-300 hover:shadow-lg ease-out hover:opacity-90 `} >{show[el._id]?"Ocultar mapa":"Ver ubicación"}</button>
                            {show[el._id] &&
                                <MapPlace id={el._id} lng={el.location.lng} lat={el.location.lat} />
                            
                            }
                            </>
                            }
                        </div>
                    ))}
                </div>
        </form>
    )
}