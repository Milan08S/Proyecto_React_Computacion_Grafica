import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, IniciarSesion, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper, TextoLogo, ContenedorMenu} from "./Navbar.elements";
import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from '../Inicio Sesion/Modal';
import InicioSesion from '../../components/Inicio Sesion/IniciarSesion';

const Navbar = () => {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    return(
        
        <Container className="navbar navbar-expand-lg">
            <Wrapper className="container-fluid">
                <Link to = '/'  className="link_text_decoration">
                <LogoContainer >
                    <img className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt='LOGO'></img>
                    <TextoLogo>Futbolinho Team Club</TextoLogo>
                </LogoContainer>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ContenedorMenu className="collapse navbar-collapse" id="menu">
                    <Menu className="navbar-nav me-auto">
                        <Link to = '/Estrategia' className="link_text_decoration">
                            <MenuItem class="nav-item">
                                <MenuItemLink href="#">
                                    ESTRATEGIAS
                                </MenuItemLink>
                            </MenuItem>
                        </Link>
                        <Link to = '/Noticias'  className="link_text_decoration">
                            <MenuItem class="nav-item">
                                <MenuItemLink href="#">
                                    NOTICIAS
                                </MenuItemLink>
                            </MenuItem>
                        </Link>
                            <MenuItem class="nav-item">
                            <IniciarSesion onClick={() => cambiarEstadoModal1(true)} className="link_text_decoration">INICIAR SESIÓN</IniciarSesion>
                                <Modal
                                    estado={estadoModal1}
                                    cambiarEstado={cambiarEstadoModal1}
                                    >
                                    <InicioSesion>
                                    </InicioSesion>
                                </Modal>
                                </MenuItem>
                    </Menu>
                </ContenedorMenu>
            </Wrapper>
        </Container>
    )
}

export default Navbar