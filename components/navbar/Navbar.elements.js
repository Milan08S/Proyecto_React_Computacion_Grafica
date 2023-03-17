import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #313E50;
    position: absolute;
`;

export const ContenedorMenu = styled.div`
    height: 70px;
    width: 100%;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1500px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;

export const TextoLogo = styled.div`
    width: 45%;
    margin-left: 0.8rem;
`;


export const LogoContainer = styled.div`
    .Logo{
        width: 60px;
    }
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: white;
    cursor: pointer;
    &:hover{
    transition: 1s all ease;
    -webkit-transform:scale(1.3);transform:scale(0.9);
    overflow:hidden;
    }
`;

export const Menu = styled.ul`
    height: 100%;
    margin-left: 50rem;
    display: flex;
    justify-content: space-between;
    list-style: none;
`;

export const MenuItem = styled.li`
    height: 100%;
`;

export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 1.2rem;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.8rem;
    cursor: pointer;
    transition: 0.5s all ease;
    text-decoration: none;

    &:hover{
    color: #EDC128;
    text-decoration: none;
    background-color: #86848E;
    transition: 1.2s all ease;
    border-radius: 1000px;
    background-origin: padding-box;
    }
`;

export const IniciarSesion = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 1.2rem;
    color: #EDC128;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: 800;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
    color: #fff;
    background-color: #EDC128;
    transition: 1.2s all ease;
    border-radius: 1000px;
    background-origin: padding-box;
    }
`;

export const CerrarSesion = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 1.2rem;
    color: #EDC128;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: 800;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
    color: #fff;
    background-color: #EDC128;
    transition: 1.2s all ease;
    border-radius: 1000px;
    background-origin: padding-box;
    }
`;
