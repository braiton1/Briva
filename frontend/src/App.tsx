import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Process from './components/Process'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Benefits />
        <Process />
      </main>
    </>
  )
}

export default App