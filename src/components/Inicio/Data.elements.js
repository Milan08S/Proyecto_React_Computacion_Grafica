import styled from "styled-components";

export const ContainerP = styled.section`
    display: flex;
    position: static;
`;
export const Container = styled.div`
    width: 50%; 
    height: 100vh;
    display: flex;
    justify-content: center;
    h1 {
        width: 45%;
        height: 50px;
        position: fixed;
        left: 100px;
        top: 150px;
        font-family: 'Montserrat', sans-serif;
        font-size: 2.5rem;
        font-weight: bolder;
        color: #313E50;
        margin-right: 20px;
        position: absolute;
    }
    
    p {
        width: 65%;
        height: 70px;
        position: fixed;
        top: 170px;
        position: absolute;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
        color: #5783b7;
        margin-right: 20px;
        text-align: justify;
    }
`;

export const Container1 = styled.div`
    width: 50%; 
    height: 100vh;
    display: flex;
    float: right;
`;

export const Container2 = styled.div`
    margin: auto;
    margin-top: 95px;
    width: 750px;
    height: 650px;
    display: flex;
`;

export const ImgWave = styled.img`
    position: absolute;
    background-position: 25% 75%;
    width: 67%; 
    top: 102px;
    right: 0px;
    height: 700px;
    float: center;
    z-index: 0;
    object-fit: cover;
`;

export const ImgBalon = styled.img`
    position: absolute;
    right: 40px;
    width: 700px;
    height: 700px;
    top: 100px;
    z-index: 1;
`;

export const Boton = styled.button`
    position: fixed;
    left: 220px;
    top: 480px;
    font-family: 'Montserrat', sans-serif;
    font-size: medium;
    font-weight: 600;
    background-color: #eac12d;
    border: 0;
    border-radius: 50px;
    color: #fff;
    padding: 20px;
    width: 300px;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0px 3px 3px lightgray;
    transition: 0.5s all ease;
    position: absolute;

    &:hover {
    background-color: #ffc800;
    transform: translateY(-3px);
    color:#313E50;
    }
`;