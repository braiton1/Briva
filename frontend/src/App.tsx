import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'
import BusinessSystem from './components/BusinessSystem'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Benefits />
        <Services />
        <BusinessSystem />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer/>
    </>
  )
}

export default App
