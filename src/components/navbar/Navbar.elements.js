import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #313E50;
    position: absolute;
    @media (max-width: 952px){
        .checkbtn{
            display: block;
        }
    }
    @media (max-width: 858px){
        .checkbtn{
            display: block;
        }
    }
`;

export const Wrapper = styled.nav`
    width: 100%;
    max-width: 1500px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    .checkbtn{
        font-size: 35px;
        color: white;
        line-height: 70px;
        cursor: pointer;
        display: none;
        margin-right: 40px;
        :hover{
            color: #EDC128;
            text-decoration: none;
            transition: 2s all ease;
        }
    }
    #check{
        display: none;
    }
    @media (max-width: 952px){
        .checkbtn{
            display: block;
        }
    }
    @media (max-width: 858px){
        .checkbtn{
            display: block;
        }
        #check{
            display: block;
        }
    }
`;

export const TextoLogo = styled.div`
    width: 45%;
    margin-left: 0.8rem;
`;


export const LogoContainer = styled.div`
    .Logo{
        width: 60px;
    }
    @media (max-width: 952px){
        .Logo{
            width: 50px;
        }
        padding: 7px 13px;
        font-size: 1rem;
    }
    @media (max-width: 858px){
        .Logo{
            width: 50px;
        }
        padding: 7px 13px;
        font-size: 1rem;
    }
    transition: 0.5s all ease;
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
    display: flex;
    justify-content: space-between;
    list-style: none;
    @media (max-width: 952px){
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: #313E50;
        top: 70px;
        left: -100%;
        text-align: center;
        transition: all 0.5s;
    }
    @media (max-width: 858px){
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: #313E50;
        top: 70px;
        left: -100%;
        text-align: center;
        transition: all 0.5s;
    }
`;

export const MenuItem = styled.li`
    height: 100%;
    @media (max-width: 952px){
        display: block;
        line-height: 30px;
    }
    @media (max-width: 858px){
        display: block;
        margin: 50px 0;
        line-height: 30px;
    }
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
    @media (max-width: 952px){
        font-size: 1rem;
    }
    @media (max-width: 858px){
        font-size: 1rem;
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
