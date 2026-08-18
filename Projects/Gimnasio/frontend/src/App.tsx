import './App.css'
import Benefits from './components/Benefits'
import Classes from './components/Classes'
import ContactCTA from './components/ContactCTA'
import Facilities from './components/Facilities'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Location from './components/Location'
import Plans from './components/Plans'
import Schedule from './components/Schedule'
import BackToBriva from './components/BackToBriva'

function App() {
  return (
    <>
      <BackToBriva />
      <Header />

      <main>
        <Hero />
        <Benefits />
        <Classes />
        <Plans />
        <Schedule />
        <Facilities />
        <Location />
        <FAQ />
        <ContactCTA />
      </main>

      <Footer />
    </>
  )
}

export default App
