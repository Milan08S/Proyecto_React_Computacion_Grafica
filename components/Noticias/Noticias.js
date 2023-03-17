import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "../navbar/Navbar";
import { Cuerpo1, Cabecera1, ImgPrincipal, VideoPrincipal, ImgSec } from "./Noticias.elements";


const Noticias	= () => {
    return<>
      <Cabecera1>
        <Navbar/>
      </Cabecera1>
      <Cuerpo1>
        <div className="container">
          <div className="row">
            <div id="col" className="col-md-7">
            <h1 className="titulo">NOTICIAS</h1>
            </div>
            <div id="col" className="col">
              <h1 className="titulo">VIDEOS</h1>
            </div>
          </div>
          <div className="row">
            <div id="col" className="col-md-7">
              <ImgPrincipal src={"https://phantom-marca.unidadeditorial.es/efe23dbc2ed130bb467ad252ade8a6fe/f/jpg/assets/multimedia/imagenes/2021/05/06/16203357460374.jpg"}/>
            </div>
            <div id="col" className="col">
              <VideoPrincipal src={"https://www.youtube.com/embed/06BSEMYkgKk"}/>
              <h6>Klopp se disculpa por la 'ruina' del Liverpool: "Fue una noche decepcionante"</h6>
            </div>
          </div>
          <div className="row">
            <div id="col" className="col">
              <h4 className="SubtituloPrincipal">Villareal vs Manchester United</h4>
            </div>
            <div id="col" className="col">
            </div>
          </div>
          <div className="row">
            <div id="col" className="col-md-3">
              <ImgSec src={"https://estaticos-cdn.sport.es/clip/dd25d54e-be4b-43df-862e-751ab46388a6_alta-libre-aspect-ratio_default_0.jpg"}/>
            </div>
            <div id="col" className="col-md-3">
              <ImgSec src={"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte25c707a04b143ad/63542d96e953da0381c347b2/GettyImages-1244148972.jpg"}/>
            </div>
            <div className="row">
            <div id="col" className="col">
              <h6 className="SubtituloPrincipal">¡Boca campeón con gol agonico de river al ultimo minuto!</h6>
            </div>
            <div id="col" className="col">
              <h6 className="SubtituloPrincipal">¡Varane se lesiona a puertas de la copa del mundo!</h6>
            </div>
            <div id="col" className="col">
            </div>
            <div id="col" className="col">
            </div>
        </div>
        </div>
      </div>

      </Cuerpo1>
    </>
}

export default Noticias