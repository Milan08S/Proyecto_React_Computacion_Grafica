import styled from "styled-components";

export const ContainerInput = styled.div` 
    display: flex; 
    position: relative;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
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

export const InputsFields = styled.input`
    font-family: 'Montserrat', sans-serif;
    height: 36px;
    width: 30%;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: white;
    border: 1px solid grey;
    padding-left: 10px;
`;