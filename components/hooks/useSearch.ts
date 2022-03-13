import {Address} from "../../consts/db";
import {useState,useEffect,ChangeEvent,FormEvent} from "react";
import { changeTildeFormat } from "../../utils";
export const useSearch=(db:Address[])=>{
    const [searchValue,setSearchValue]=useState<string>("");
    const [items,setItems]=useState<{list:Address[],showAll:boolean}>({
        list:[],
        showAll:false
    });
    useEffect(()=>{
        if(searchValue!==""){
            let flag:number=0;
            let array:Address[]=[];
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
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {value}=e.target;
        (value.length===1 && items.showAll) && setItems({...items,showAll:false});
        setSearchValue(value.toLowerCase());
    }
    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    if(searchValue!=="" && searchValue.length>=3 ){
            let array:Address[]=db.filter((el:Address)=>{
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
            console.log("Debe haber al menos 3 caracteres");
        }
    
    }
    return{
        handleChange,
        handleSubmit,
        items,
        searchValue
    }
}