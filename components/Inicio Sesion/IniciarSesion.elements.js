import styled from "styled-components";

export const ContainerLogoBoton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .Logo {
        width: 15%;
        margin-bottom: 10px;

    }

    button {
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

    h1 {
        font-family: 'Montserrat', sans-serif;
        font-weight: bolder;
        font-size: 40px;
        color: #EDC128;    
    }

    h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: bolder;
        font-size: 20px;
        color: #D7170F; 
    }
`;

export const ContainerInput = styled.div`   
    display: flex; 
    position: relative;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 20px;
`;

export const LabelInput = styled.label`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    line-height: 1,25;
    text-align: left;
    color:black;
    position: relative;
    margin-bottom: 6px;
`;

export const InputsField = styled.input`
    font-family: 'Montserrat', sans-serif;
    height: 36px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: white;
    border: 1px solid grey;
    padding-left: 10px;
`;

export const ContainerCheckbox = styled.div`
    display: flex;
    position: relative;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align.items:center
    justify-content: space-around;
`;

export const CheckboxInput = styled.input`
    appearance: none;
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    background-color: #D5D5D5;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;

    &:hover {
        background-color: #A5A5A5;
    }
    &:after {
        font-family: "Font Awesome 5 Free";
        font-weight: 225;
        content: "\f00c";
        font.size: 50px;
        color: white;
        display: none;
    }
    &:checked{
        background-color: #5BCD3E;
    }

`;

export const LabelCheckbox = styled.label`
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 150;
`;

export const ConGoogle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        margin-bottom: 5px;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: bolder;
        background-color: #eac12d;
        border: 0;
        border-radius: 40px;
        color: #fff;
        padding: 5px;
        width: 130px;
        cursor: pointer;
        box-shadow: 0px 3px 3px lightgray;
        transition: 0.5s all ease;

        &:hover {
        background-color: #ffc800;
        transform: translateY(-3px);
        color:#313E50;
        }
        margin-bottom: 10px;
        margin-top:5px;
    }

`;

export const Olvido = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
    font-family: 'Montserrat', sans-serif;
    font-size: 8px;
    font-weight: bolder;
    background-color: #eac12d;
    border: 0;
    border-radius: 40px;
    color: #fff;
    padding: 5px;
    width: 130px;
    cursor: pointer;
    box-shadow: 0px 3px 3px lightgray;
    transition: 0.5s all ease;

    &:hover {
    background-color: #ffc800;
    transform: translateY(-3px);
    color:#313E50;
    }
    margin-bottom: 10px;
    margin-top:5px;
`;