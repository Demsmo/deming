import React, { useState } from 'react'
import { Header, LeftContainer, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarLinkExtended, OpenLinksButton, RightContainer } from '../../styles/Navbar.style'


function Navbar() {

  const [extendNavbar, setExtendNavbar] = useState(false)

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Header src='/signature transparent.png' />
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to='home' spy={true} smooth={true} offset={50} duration={500} >Home</NavbarLink>
            <NavbarLink to='about' spy={true} smooth={true} offset={50} duration={500} >About</NavbarLink>
            <NavbarLink to='projects' spy={true} smooth={true} offset={50} duration={500} >Projects</NavbarLink>
            <NavbarLink to='contact' spy={true} smooth={true} offset={50} duration={500} >Contact</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <> &#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended onClick={() => {setExtendNavbar((curr) => !curr);}} to='home' spy={true} smooth={true} offset={50} duration={500} >Home</NavbarLinkExtended>
                    <NavbarLinkExtended onClick={() => {setExtendNavbar((curr) => !curr);}} to='about' spy={true} smooth={true} offset={50} duration={500} >About</NavbarLinkExtended>
                    <NavbarLinkExtended onClick={() => {setExtendNavbar((curr) => !curr);}} to='projects' spy={true} smooth={true} offset={50} duration={500} >Projects</NavbarLinkExtended>
                    <NavbarLinkExtended onClick={() => {setExtendNavbar((curr) => !curr);}} to='contact' spy={true} smooth={true} offset={50} duration={500} >Contact</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
    </NavbarContainer>
  )
}

export default Navbar
