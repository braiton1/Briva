import Catalog from './components/Catalog'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import Visit from './components/Visit'
import { content } from './data/siteContent'
import './App.css'

function App() { return <><Header brand={content.brand} /><main><Hero image={content.heroImage} /><Catalog products={content.products} phone={content.phone} /><Story /><Visit phone={content.phone} /></main><Footer brand={content.brand} /></> }
export default App
