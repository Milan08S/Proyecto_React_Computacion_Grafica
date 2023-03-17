import React from "react";
import { Link } from "react-router-dom";
import { IniciarSesion, Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper, TextoLogo} from "./Navbar.elements";
import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuth } from "../../context/authContext";

const Navbar = () => {
    const { logout, loading } = useAuth()

    const handleLogout = async () => {
        await logout();
    };

    if (loading) return <h1>Cargando...</h1>

    return(
        
        <Container>
            <Wrapper>
                <Link to = '/'  className="link_text_decoration">
                <LogoContainer >
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
                            <IniciarSesion onClick={handleLogout} className="link_text_decoration">CERRAR SESIÓN</IniciarSesion>
                        </MenuItem>
                    </Menu>
            </Wrapper>
        </Container>
    )
}

export default Navbar