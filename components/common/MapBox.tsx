import { MapMouseEvent } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Dispatch, ReactElement, SetStateAction, useEffect } from 'react';
import { FormTypeCreateCard } from '../../models/types/formTypes';
import { useMap } from '../hooks/useMap';
type ComponentProps={
    setForm:Dispatch<SetStateAction<FormTypeCreateCard>>,
    form:FormTypeCreateCard
}
export default function MapBox({setForm,form}:ComponentProps):ReactElement{
    const {markers,maps,handlerMarker}=useMap();
       
       useEffect(()=>{
            if(markers){
                setForm({...form,location:{
                    lng:markers._lngLat.lng,
                    lat:markers._lngLat.lat
                }})
                maps.once("click",(e:MapMouseEvent)=>handlerMarker(e,maps));
            } 
        },[markers])
        
    return(
        <div className='w-full h-60' id="map" >
            
        </div>
    )
}