import mapboxgl, { Map } from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import {ReactElement, useEffect} from "react";
import { ACCESS_TOKEN_MAPBOX } from "../../consts/config";
mapboxgl.accessToken=ACCESS_TOKEN_MAPBOX;
type PropsComponent={
    lng:number,
    lat:number,
    id:string
}
export default function MapPlace({lng,lat,id}:PropsComponent):ReactElement{
    
    useEffect(()=>{
        const map:Map = new mapboxgl.Map({
        container: id , 
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [lng,lat], 
        zoom: 18 
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
        const marker = new mapboxgl.Marker({
                color: "#A855F7"
            }).setLngLat([lng,lat])
            .addTo(map);
        return ()=> map.remove();
    },[]);
    return(
        <div id={id} className="w-full h-60"  >

        </div>
    )
}