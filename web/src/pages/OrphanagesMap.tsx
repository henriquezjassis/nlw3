import React from 'react'
import { render } from '@testing-library/react'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet'

import mapMarkerImg from '../images/map-marker.svg'

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-map.css'

function OrphanagesMap(){
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
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;