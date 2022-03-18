import mapboxgl, { Map, MapMouseEvent, Marker } from "mapbox-gl";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN_MAPBOX } from "../../consts/config";
mapboxgl.accessToken=ACCESS_TOKEN_MAPBOX;

export const useMap=()=>{
    const [markers,setMarkers]=useState<any>(false);
    const [maps,setMaps]=useState<any>({});
    useEffect(()=>{
        const map:Map = new mapboxgl.Map({
        container: "map", 
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [-96, 37.8], 
        zoom: 3 
        });
        map.addControl(
            new mapboxgl.GeolocateControl({
                                positionOptions: {
                                    enableHighAccuracy: true
                                },
                                trackUserLocation: true,
                                showUserHeading: true
                                        })
        );
        setMaps(map);
        map.once("click",(e)=>handlerMarker(e,map));
        },[]);
        function handlerMarker(e:MapMouseEvent,map:Map){
            if(markers){
                markers.remove();
            }
            const marker = new mapboxgl.Marker({
                color: "#FFFFFF"
                
            }).setLngLat([e.lngLat.lng,e.lngLat.lat])
            .addTo(map);
            setMarkers(marker);
        }
    return{
        markers,
        maps,
        handlerMarker
    }
}