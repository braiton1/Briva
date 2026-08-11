import About from './components/About'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Location from './components/Location'
import Process from './components/Process'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import { siteContent } from './data/siteContent'
import './App.css'

function App() {
  return (
    <>
      <Header brand={siteContent.brand} navigation={siteContent.navigation} whatsappUrl={siteContent.whatsappUrl} />
      <main id="inicio">
        <Hero content={siteContent.hero} whatsappUrl={siteContent.whatsappUrl} />
        <Services services={siteContent.services} />
        <About content={siteContent.about} />
        <Testimonials testimonials={siteContent.testimonials} />
        <Process steps={siteContent.processSteps} />
        <FAQ items={siteContent.faqs} />
        <Location content={siteContent.location} whatsappUrl={siteContent.whatsappUrl} />
        <FinalCTA whatsappUrl={siteContent.whatsappUrl} />
      </main>
      <Footer brand={siteContent.brand} navigation={siteContent.navigation} />
    </>
  )
}

export default App
