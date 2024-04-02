import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Separador from './components/Separador';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Separador />
      <Skills />
      <Separador />
      <About />
      <Separador />
      <Projects />
      <Separador />
      <Contact />
      <Separador />
      <Footer />

    </>
  );
}

export default App;
