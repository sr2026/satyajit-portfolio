import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <main className="bg-gray-900 min-h-screen font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </main>
  )
}

export default App