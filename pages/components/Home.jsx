import React from 'react'
import { IconImg, Icons, Name, ProfileImg, Skills, TopContainer, TopInnerContainer, Vocation } from '../../styles/Home.style'
import { AiFillGithub, AiFillLinkedin  } from 'react-icons/ai'
import { IconContext } from 'react-icons'

function Top() {
  return (
    <TopContainer>
      <TopInnerContainer>
        <ProfileImg src='/Profile photo.jpeg' />
        <Name>Deming Morrison</Name>
        <Vocation>Web Application Developer</Vocation>
        <Skills>HTML / CSS / JavaScript / React.js / Next.js / Redux / Python / Django</Skills>
        <Icons>
          <IconContext.Provider value={{ size: "50px" }}>
            <a href='https://github.com/Demsmo' target='_blank' rel="noreferrer" ><IconImg><AiFillGithub /></IconImg></a>
            <a href='https://www.linkedin.com/in/deming-morrison-827342233/' target='_blank' rel="noreferrer"><IconImg><AiFillLinkedin /></IconImg></a>
          </IconContext.Provider>
        </Icons>
      </TopInnerContainer>
    </TopContainer>
  )
}

export default Top
