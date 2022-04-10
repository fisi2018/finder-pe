import {useState,useEffect,ChangeEvent,FormEvent} from "react";
import { changeTildeFormat } from "../../utils";
import { Place } from "../../models/interfaces/place";
import toast from "react-hot-toast";
import { HandlerChange, HandlerSubmit } from "../../models/types/formTypes";
export const useSearch=(db:Place[])=>{
    const [searchValue,setSearchValue]=useState<string>("");
    const [items,setItems]=useState<{list:Place[],showAll:boolean}>({
        list:[],
        showAll:false
    });
    useEffect(()=>{
        if(searchValue!==""){
            let flag:number=0;
            let array:Place[]=[];
            for(let i:number=0;i<db.length;i++){
                if(flag===4){
                    break;
                }
                
                if(db[i].title.toLowerCase().includes(searchValue) || changeTildeFormat(db[i].title.toLowerCase()).includes(changeTildeFormat(searchValue)) || db[i].description.toLowerCase().includes(searchValue) || changeTildeFormat(db[i].description.toLowerCase()).includes(changeTildeFormat(searchValue))){
                    flag++;
                    array.push(db[i]);
                }
            }
            setItems({
                ...items,
                list:array
            });
        }
    },[searchValue]);
    const handleChange:HandlerChange=(e)=>{
        const {value}=e.target;
        (value.length===1 && items.showAll) && setItems({...items,showAll:false});
        setSearchValue(value.toLowerCase());
    }
    const handleSubmit:HandlerSubmit=(e)=>{
        e.preventDefault();
    if(searchValue!=="" && searchValue.length>=3 ){
            let array:Place[]=db.filter((el:Place)=>{
                if(el.title.toLowerCase().includes(searchValue) 
                || changeTildeFormat(el.title.toLowerCase()).includes(changeTildeFormat(searchValue))
                || el.description.toLowerCase().includes(searchValue)
                || changeTildeFormat(el.description.toLowerCase()).includes(changeTildeFormat(searchValue))){
                    return el;
                }
            })
            setItems({
                list:array,
                showAll:true
            });
            setSearchValue("");
        }else{
            toast.error("La búsqueda debe contener al menos 3 caracteres");
        }
    
    }
    return{
        handleChange,
        handleSubmit,
        items,
        searchValue
    }
}