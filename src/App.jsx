import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import AboutDetail from './components/AboutDetail/AboutDetail'
import Products from './components/Products/Products'
import StatsPromo from './components/StatsPromo/StatsPromo'
import Realisations from './components/Realisations/Realisations'
import Actualites from './components/Actualites/Actualites'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <AboutDetail />
      <Products />
      <StatsPromo />
      <Realisations />
      <Actualites />
      <Footer />
    </div>
  )
}

export default App
