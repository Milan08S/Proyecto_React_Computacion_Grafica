import React from "react";
import Navbar from "../navbar/Navbar";
import { Container, ContainerL, ContainerR, Wrapper } from "./Estrategia.elements";
import Botones from "./Buttom";
import Formaciones from "./Formacion";

const Estrategia = () =>{
    return(
        <Container>
            <Navbar/>
            <ContainerL>
                <Wrapper>
                    <Botones/>
                </Wrapper>
            </ContainerL>
            <ContainerR>
                <Wrapper>
                    <Formaciones/>
                </Wrapper>
            </ContainerR>
        </Container>
    )
}

export default	Estrategia;