import React, { useState } from "react";
import { ContainerP, Container, Container1, Container2, ImgWave, ImgBalon, Boton} from "./Data.elements";
import Balon from "../../images/Balon-Dorado.png"
import Wave from "../../images/WaveBack.png"
import "./Animacion.css"
import Modal from '../Inicio Sesion/Modal';
import InicioSesion from '../../components/Inicio Sesion/IniciarSesion';

const Data = () => {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    return(
        <ContainerP>
            <Container>
                <h1>
                    MANTENTE INFORMADO Y PLANEA TUS PROPIAS ESTRATEGIAS!
                    <p>
                    Únete a esta comunidad de miles de personas, entérate de las ultimas noticias del mundo del futbol y  conoce nuevas estrategias y regates.
                    </p>
                </h1>
                <Boton onClick={() => cambiarEstadoModal1(true)}>Comenzar Ahora!</Boton>
                <Modal
                    estado={estadoModal1}
                    cambiarEstado={cambiarEstadoModal1}
                >
                    <InicioSesion>
                    </InicioSesion>
                </Modal>
            </Container>
            <Container1>
                <Container2> 
                    <ImgWave src={Wave} alt="WaveBack" />
                    <ImgBalon src={Balon} alt="Balon" className="Animacion" />        
                </Container2>
            </Container1>
        </ContainerP>
    )
}

export default Data;