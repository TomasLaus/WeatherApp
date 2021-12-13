import React from 'react'
import { useParams } from 'react-router'
import "./City.css";
import {Link} from 'react-router-dom'

function City({onFilter}) {
    let params = useParams();
    let cityDetail = onFilter(params.cityId)
    
    
    return (
<div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
            <Link to="/" className="volver">Back</Link>
    <div className="row d-flex justify-content-center text-center">
        <div className="container">
            <div className="card1 col-lg-8 col-md-7"> <small style={{fontWeight: '600', fontStyle: 'italic'}}>Weather App</small>
                <div className="text-center" > <img className="iconoClima" src={"https://openweathermap.org/img/wn/"+cityDetail.img+"@2x.png"} alt="" /></div>
                <div className="d-flex flex-column text-center">        
                    <h3 className="fa fa-sun-o mt-4"><small style={{fontWeight: '600', fontStyle: 'italic'}}>{cityDetail.weather}</small></h3> 
                </div>
                <div className="row px-3 mt-3 mb-3">
                    <h1 className="large-font mr-3  text-center">{cityDetail.name}</h1>

                </div>
                <div className="d-flex flex-column mr-3  text-center">
                    <h2 className="mt-3 mb-0">{Math.ceil(cityDetail.temp)} ºC</h2>
                </div>
                <div className="mr-5">
                    <div className="line my-5"></div>
                    <p style={{fontWeight: '600', fontStyle: 'italic'}}>Weather Details</p>
                    <div className="details row px-3">
                        <p className="light-text">Viento: </p>
                        <p className="ml-auto">{cityDetail.wind}</p>
                    </div>
                    <div className="details row px-3">
                        <p className="light-text">Cantidad de nubes: </p>
                        <p className="ml-auto">{cityDetail.clouds}</p>
                    </div>
                    <div className="details row px-3">
                        <p className="light-text">Latitud: </p>
                        <p className="ml-auto">{cityDetail.latitud}º</p>
                    </div>
                    <div className="details row px-3">
                        <p className="light-text">Longitud: </p>
                        <p className="ml-auto">{cityDetail.longitud}º</p>
                    </div>
                    <div className="line mt-3"></div>
                </div>
            </div>

            </div>
        </div>
    </div>

    )
}

export default City
