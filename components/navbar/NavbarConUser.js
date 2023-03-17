import React from "react";
import { Link } from "react-router-dom";
import { IniciarSesion, Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper, TextoLogo, ContenedorMenu} from "./Navbar.elements";
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
                            <IniciarSesion onClick={handleLogout} className="link_text_decoration">CERRAR SESIÓN</IniciarSesion>
                        </MenuItem>
                    </Menu>
                </ContenedorMenu>
            </Wrapper>
        </Container>
    )
}

export default Navbar