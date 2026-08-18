import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import ApprovalFirst from './components/ApprovalFirst'
import Pricing from './components/Pricing'
import Purpose from './components/Purpose'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Portfolio />
        <Purpose />
        <Pricing />
        <Benefits />
        <ApprovalFirst />
        <Contact />
      </main>
      <Footer/>
    </>
  )
}

export default App
