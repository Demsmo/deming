import styled from "styled-components";

export const ProjectContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const InnerProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
`

export const ProjectContainerTitle = styled.h1`
    margin: 40px;
`

export const ProjectCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
`

export const VideoContainer= styled.div`
    
`

export const ProjectVideo = styled.video`
    height: 270px;
    width: 400px;
    @media (max-width: 955px) {
        width: 350px;
        height: 200px;
    }
`

export const ProjectAboutcontainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
`

export const ProjectTitle = styled.h2`
    margin: 10px;
`

export const ProjectDescription = styled.p`
    margin: 10px;
    font-weight: 300;
`

export const SkillsUsed = styled.h3`
    margin: 10px;
`

export const SkillsUsedDescription = styled.p`
    margin: 10px;
    font-weight: 300;
`

export const ProjectLogin = styled.p`
    color: gray;
    margin: 10px;
`

export const ProjectButtonContainer =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProjectButton = styled.button`
    border-radius: 50px;
    margin: 10px;
    font-size: 15px;
    padding: 10px;
`