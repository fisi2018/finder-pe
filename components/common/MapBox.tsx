import { MapMouseEvent } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect } from 'react';
import { useMap } from '../hooks/useMap';
export default function MapBox({setForm,form}):JSX.Element{
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