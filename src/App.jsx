import React from 'react'
import "./app.scss"
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'

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
      <section>services</section>
      <section>
        <Parallax type="portfolio"/>
      </section>
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  )
}

export default App
