import React from 'react'
import "./app.scss"
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <div>
      <section>
        <Navbar/>
        <Hero/>
      </section>

      <section>
        <Parallax type="services"/>
      </section>
      <section>
        <Services/>
      </section>
      <section>
        <Parallax type="portfolio"/>
      </section>
      
      <Portfolio/>
      
      <section>Contact</section>
    </div>
  )
}

export default App
