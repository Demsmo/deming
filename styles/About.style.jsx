import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    color: black;
    height: 700px;
`

export const AboutInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
`

export const AboutTitle = styled.h1`
    margin:  80px;
`

export const AboutMeContainer = styled.div`
    
`

export const AboutMe = styled.p`
    font-size: 25px;
    margin: 10px;
    font-weight: 300;

    @media (max-width: 955px) {
        font-size: 15px;
    }
`