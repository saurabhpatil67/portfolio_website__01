import React from 'react'
import "./app.scss"
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'

const App = () => {
  return (
    <div>
      <Cursor/>
      
      <section>
        <Navbar/>
        <Hero/>
      </section>

      <section>
        <Parallax type="services"/>
      </section>
      <section className='servicesSection'>
        <Services/>
      </section>
      <section>
        <Parallax type="portfolio"/>
      </section>

      <Portfolio/>
      
      <section>
        <Contact/>
      </section>

    </div>
  )
}

export default App
