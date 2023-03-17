import styled from "styled-components";

export const ContainerModal = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;    
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100%;
    position: absolute;  
    z-index: 999;  
    top: 0;
    left: 0;
`;

export const ContainerIS = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 20px
`;

export const Encabezado = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3{
        font-family: 'Montserrat', sans-serif;
        font-weight: bolder;
        font-size: 16px;
        color: #EDC128;
    }
`;

export const BotonCerrar = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    transition; .3s ease all;
    border-radius: 5px;
    color: #EDC128;

    &:hover {
        background: #A3820F;
    }

    svg {
        width: 100%;
        height: 100%;
    }
`;

export const ContainerBoton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BotonInicioSesion = styled.button`
    margin-bottom: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: bolder;
    background-color: #eac12d;
    border: 0;
    border-radius: 50px;
    color: #fff;
    padding: 20px;
    width: 200px;
    cursor: pointer;
    box-shadow: 0px 3px 3px lightgray;
    transition: 0.5s all ease;

    &:hover {
        background-color: #ffc800;
        transform: translateY(-3px);
        color:#313E50;
        }
        margin-bottom: 10px;
        margin-top:10px;
    }
`;