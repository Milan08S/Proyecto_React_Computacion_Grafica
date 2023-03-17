import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, IniciarSesion, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper, TextoLogo} from "./Navbar.elements";
import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Modal from '../Inicio Sesion/Modal';
import InicioSesion from '../../components/Inicio Sesion/IniciarSesion';

const Navbar = () => {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    return(
        
        <Container>
            <Wrapper>
                <Link to = '/'  className="link_text_decoration">
                <LogoContainer class="LogoMenu">
                    <img className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt='LOGO'></img>
                    <TextoLogo>Futbolinho Team Club</TextoLogo>
                </LogoContainer>
                </Link>
                    <Menu>
                        <Link to = '/Estrategia' className="link_text_decoration">
                            <MenuItem>
                                <MenuItemLink>
                                    ESTRATEGIAS
                                </MenuItemLink>
                            </MenuItem>
                        </Link>
                        <Link to = '/Noticias'  className="link_text_decoration">
                            <MenuItem>
                                <MenuItemLink>
                                    NOTICIAS
                                </MenuItemLink>
                            </MenuItem>
                        </Link>
                            <MenuItem>
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
                    <input type="checkbox" id="check"></input>
                        <label for="check" class="checkbtn">
                            <i className="bi bi-list"></i>
                        </label>
            </Wrapper>
        </Container>
    )
}

export default Navbar