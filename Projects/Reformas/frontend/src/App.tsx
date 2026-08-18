import Contact from'./components/Contact'
import Footer from'./components/Footer'
import Header from'./components/Header'
import Hero from'./components/Hero'
import Process from'./components/Process'
import Projects from'./components/Projects'
import Services from'./components/Services'
import {content}from'./data/siteContent'
import'./App.css'
import BackToBriva from'./components/BackToBriva'
function App(){return <><BackToBriva/><Header brand={content.brand}/><main><Hero image={content.hero}/><Services items={content.services}/><Projects beforeAfter={content.beforeAfter} bathroom={content.bathroom} hero={content.hero}/><Process items={content.process}/><Contact phone={content.phone} faqs={content.faqs}/></main><Footer brand={content.brand}/></>}
export default App
