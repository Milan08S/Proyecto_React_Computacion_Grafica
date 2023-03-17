import React from "react";
import Navbar from "../navbar/Navbar";
import { Container1, Titulo } from "./404.elements"

const Pagina404	= () => {
    return(
        <div>
            <Navbar/>
            <Container1>
                <Titulo>404!</Titulo>
            </Container1>
        </div>
    )
}

export default Pagina404