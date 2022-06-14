import React from "react";
import { Ubicacion } from "../Mapa";
import './Contacto.scss';

export const Contacto = () => {
  return (
    <>
    <div className="bannerC">
      <h1>Contacto</h1>
    </div>
    <div className="Mapa">
        <Ubicacion />
    </div>
    </>
  );
};
