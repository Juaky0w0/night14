import React from "react";
import ServicesFondo from "../FondoServices";
import './Servicio.scss';
import  { SliderServi }  from "../Sliderprod";


export const Servicio = () => {
  return (
    <>
    <div className="container-carrusel">
    <ServicesFondo />
    </div>
    <div className='caja'>
      <div className='titulos'>
      </div>
      <div className='sliderServicio'>
      <SliderServi /> 
      </div>
    </div>
  </>
  );
};
