import React from 'react'
import { InnerProjectContainer, ProjectAboutcontainer, ProjectButton, ProjectButtonContainer, ProjectCard, ProjectContainer, ProjectContainerTitle, ProjectDescription, ProjectLogin, ProjectTitle, ProjectVideo, SkillsUsed, SkillsUsedDescription, VideoContainer } from '../../styles/Projects.style'

function Projects() {
  return (
    <ProjectContainer>
      <InnerProjectContainer>
        <ProjectContainerTitle>Projects</ProjectContainerTitle>
          {/* STONETREE PROJECT CARD */}
          <ProjectCard>
            <VideoContainer>
              <ProjectVideo autoplay muted controls src='/stonetree.mov'/>
            </VideoContainer>
            <ProjectAboutcontainer>
              <ProjectTitle>stonetree.</ProjectTitle>
              <ProjectDescription>
                Created for a real life business, <br /> stonetree. is a website that showcases 
                stonetree.'s studios, services and engineers.
              </ProjectDescription>
              <SkillsUsed>Skills Used</SkillsUsed>
              <SkillsUsedDescription>
                React, framer-motion, react-intersection-observer, styled-components
              </SkillsUsedDescription>
              <ProjectButtonContainer>
                <a href='https://stonetreerecording.com' target='_blank' rel="noreferrer"><ProjectButton>Live Website</ProjectButton></a>
                <a href='https://github.com/Demsmo/stonetree' target='_blank' rel="noreferrer"><ProjectButton>Github Link</ProjectButton></a>
              </ProjectButtonContainer>
            </ProjectAboutcontainer>
          </ProjectCard>
           {/* TRIANGLE THE TREE THE FISH AND THE ELEPHANT PROJECT CARD */}
           <ProjectCard>
            <VideoContainer>
              <ProjectVideo autoplay muted controls src='/the concept.mov'/>
            </VideoContainer>
            <ProjectAboutcontainer>
              <ProjectTitle>the concept</ProjectTitle>
              <ProjectDescription>
                Fun mini project made for the symbols used by stonetree. <br />
                This website showcases React.js and framer-motion, built with styled-components.
              </ProjectDescription>
              <SkillsUsed>Skills Used</SkillsUsed>
              <SkillsUsedDescription>
                React, framer-motion, styled-components
              </SkillsUsedDescription>
              <ProjectButtonContainer>
                <a href='https://www.thetrianglethetreethefishandtheelephant.com/' target='_blank' rel="noreferrer"><ProjectButton>Live Website</ProjectButton></a>
                <a href='https://github.com/Demsmo/theconcept' target='_blank' rel="noreferrer"><ProjectButton>Github Link</ProjectButton></a>
              </ProjectButtonContainer>
            </ProjectAboutcontainer>
          </ProjectCard>
          {/* SYNAMATIC PROJECT CARD */}
          <ProjectCard>
            <VideoContainer>
              <ProjectVideo autoplay muted controls src='/synamatic screencapture (1).mov'/>
            </VideoContainer>
            <ProjectAboutcontainer>
              <ProjectTitle>Synamatic</ProjectTitle>
              <ProjectDescription>
                In this web application you will find many informative movie reviews, <br /> you can compare
                different reviews on current, <br />
                upcoming, recent, or vintage movies and even get a sneak-peek at the trailers. <br /> You can filter the movies by
                genre. <br /> This
                extension is built in a more user-friendly manner where they can save time <br /> by loading all the currently
                playing movies
                in a single click.
              </ProjectDescription>
              <SkillsUsed>Skills Used</SkillsUsed>
              <SkillsUsedDescription>
                FrontEnd: React-Redux | Backend:
                Django API.
              </SkillsUsedDescription>
              <ProjectLogin>
                Test Login Account: <br />
                Email : test@gmail.com <br />
                Password : 1234
              </ProjectLogin>
              <ProjectButtonContainer>
                <a href='https://frontend-movierevieww.herokuapp.com/' target='_blank' rel="noreferrer"><ProjectButton>Live Website</ProjectButton></a>
                <a href='https://github.com/moviereview051/moviereview.git' target='_blank' rel="noreferrer"><ProjectButton>Github Link</ProjectButton></a>
              </ProjectButtonContainer>
            </ProjectAboutcontainer>
          </ProjectCard>
          {/* REFRESH DRINKS PROJECT CARD */}
          <ProjectCard>
            <VideoContainer>
              <ProjectVideo autoplay muted controls src='/DemingSD.mp4'/>
            </VideoContainer>
            <ProjectAboutcontainer>
              <ProjectTitle>Refresh Drinks</ProjectTitle>
              <ProjectDescription>
              This is a mini e-commerce project designed to help promote sales of refreshments. <br />
               And a great way to stay refreshed this summer is by ordering refreshing drinks <br />
                with a single click! The project introduces a fresh and exciting way to sell various drinks! <br />
                Designed to save users from commute time and expenses by placing your orders <br />
                 from the comfort of their homes.
              </ProjectDescription>
              <SkillsUsed>Skills Used</SkillsUsed>
              <SkillsUsedDescription>
                FrontEnd: React-Redux | Backend:
                Django API.
              </SkillsUsedDescription>
              <ProjectLogin>
                Test Login Account: <br />
                Email : test@gmail.com <br />
                Password : 1234
              </ProjectLogin>
              <ProjectButtonContainer>
                <a href='https://refreshdrinksfrontend.herokuapp.com/' target='_blank' rel="noreferrer"><ProjectButton>Live Website</ProjectButton></a>
                <a href='https://github.com/Demsmo/refreshdrinks.git' target='_blank' rel="noreferrer"><ProjectButton>Github Link</ProjectButton></a>
              </ProjectButtonContainer>
            </ProjectAboutcontainer>
          </ProjectCard>
          {/* TWITTER CLONE PROJECT CARD */}
          <ProjectCard>
            <VideoContainer>
              <ProjectVideo autoplay muted controls src='/deming-twitter.mov'/>
            </VideoContainer>
            <ProjectAboutcontainer>
              <ProjectTitle>Twitter Clone</ProjectTitle>
              <ProjectDescription>
                With this project, we created a platform where you can express your thoughts <br />
                anonymously, showcase your pictures, and much more on a single <br />
                website. Post, edit, or delete posts at the convenience of just <br />
                a few touches. This project is based on Twitter and anonymity <br />
                adds to its special features. Without the necessity of an <br />
                account, you can share your thoughts and memories with the world <br />
                at any time. You can even learn CRUD(Create/Read/Update/Delete) <br />
                through this project.
              </ProjectDescription>
              <SkillsUsed>Skills Used</SkillsUsed>
              <SkillsUsedDescription>
                FrontEnd: React-Redux | Backend:
                Django API.
              </SkillsUsedDescription>
              <ProjectLogin>
                Test Login Account: <br />
                Email : test@gmail.com <br />
                Password : 1234
              </ProjectLogin>
              <ProjectButtonContainer>
                <a href='https://TwitterClone-new.demsmo.repl.co ' target='_blank' rel="noreferrer"><ProjectButton>Live Website</ProjectButton></a>
                <a href='https://github.com/Demsmo/TwitterClone.git' target='_blank' rel="noreferrer"><ProjectButton>Github Link</ProjectButton></a>
              </ProjectButtonContainer>
            </ProjectAboutcontainer>
          </ProjectCard>

      </InnerProjectContainer>
    </ProjectContainer>
  )
}

export default Projects
