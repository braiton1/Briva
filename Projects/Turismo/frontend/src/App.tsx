import Amenities from './components/Amenities'
import Booking from './components/Booking'
import Cabins from './components/Cabins'
import Explore from './components/Explore'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import { content } from './data/siteContent'
import './App.css'
import BackToBriva from './components/BackToBriva'
function App(){return <><BackToBriva/><Header brand={content.brand}/><main><Hero image={content.exterior}/><Booking cabins={content.cabins} phone={content.phone}/><Cabins cabins={content.cabins}/><Amenities/><Gallery images={[content.interior,content.deck,content.exterior]}/><Explore activities={content.activities}/><FAQ items={content.faqs}/><section className="final"><p className="eyebrow">Tu próxima escapada</p><h2>La montaña puede esperar.<br/>Vos no tenés por qué.</h2><a href="#reservar" className="button button--light">Consultar fechas</a></section></main><Footer brand={content.brand}/></>}
export default App
