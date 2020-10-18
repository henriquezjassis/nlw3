import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import Leaftlet from 'leaflet';


import mapMarkerImg from '../images/map-marker.svg'


import '../styles/pages/orphanages-map.css'
import api from '../services/api';
import Orphanage from './Orphanage';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

const mapIcon = Leaftlet.icon({
    iconUrl: mapMarkerImg,
    iconSize:[58,68],
    iconAnchor: [29, 68],

    popupAnchor: [170, 2],
})


function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    console.log(orphanages);

    useEffect(()=>{
        api.get('orphanages').then(resp =>{
            setOrphanages(resp.data);
        })
    }, []); 

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas criancas estao esperando a sua visita :3</p>

                </header>
                <footer>
                    <strong>Americana</strong>
                    <span>Sao Paulo</span>
                </footer>
            </aside>

            <Map 
                center={[-22.7449021,-47.3265622]}
                zoom={14.5}
                style={{width:'100%', height:'100%'}}
             >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" ></TileLayer>
                {orphanages.map(orphanage =>{
                    return (
                        <Marker
                            position={[orphanage.latitude, orphanage.longitude]}
                            icon={mapIcon}
                            key={orphanage.id}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.name}
        
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#FFF"/>
                                </Link>
                            </Popup>
                        </Marker> 
                    )
                })}
            
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;