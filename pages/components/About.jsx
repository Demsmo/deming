import React from 'react'
import { AboutContainer, AboutInnerContainer, AboutMe, AboutMeContainer, AboutTitle } from '../../styles/About.style'

function About() {
  return (
    <AboutContainer>
      <AboutInnerContainer>
        <AboutTitle>About Me</AboutTitle>
        <AboutMeContainer>
          <AboutMe>
          Entrepreneur, Father, Partner, and aspiring Web Developer - <br />
          I am a creative who has worked in the music industry running a recording studio for eight years, that has fallen in love with Web Development and coding. <br />
           <br />
           In my time spent at TECH I.S. I have discovered an intense passion for HTML/CSS/React.js and enjoy creating front end applications. <br />
           Since graduating from TECH I.S. I have worked on two new projects, one for my business (stonetree.) and this portfolio - <br />
           During this time I have picked up new skills and am constantly learning. Those new skills include - <br />
           Next.js / styled-components / react-icons / framer-motion / react-intersection-observer <br />
           <br />
           I look forward to the next step in my Web Development journey and cant wait to work on my next project. <br />
           <br />
           <br />
           This portfolio was made using Next.js React framework with styled-components.
          </AboutMe>
        </AboutMeContainer>
      </AboutInnerContainer>
    </AboutContainer>
  )
}

export default About
