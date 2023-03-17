import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
`;

export const MenuItem = styled.li`
    height: 100%;
`;

export const FooterCons = styled.div`
    width: 70px;
    height: 20px;
    top: 10px;  
    float: top;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
`;

export const FooterContainer = styled.section`
    width: 100%;
    padding: 40px 20px;
    position: absolute;
    background: #313e50;
`;