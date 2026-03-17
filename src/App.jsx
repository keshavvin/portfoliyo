import Navbar from './components/Navbar'
import Header from './components/Header'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      <Navbar />
      <Header />
      <Services />
      <Projects />
      <Experience />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
