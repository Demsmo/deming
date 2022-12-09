import Head from 'next/head'
import Navbar from './components/Navbar'
import Top from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Seperator, SiteContainer } from '../styles/Index.style'


export default function Home() {
  return (
    <div>
      <Head>
        <title>deming</title>
        <meta name="deming" content="Deming Morrison Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteContainer>
        <Navbar />

        <Seperator id='home' />
        <Top />

        <Seperator id='about' />
        <About />

        <Seperator id='projects' />
        <Projects />

        <Seperator id='contact' />
        <Contact />
      </SiteContainer>


    </div>
  )
}
