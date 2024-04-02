import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Exp.jsx';
import About from './components/About.jsx';
import Separador from './components/Separador';

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
    </>
  );
}

export default App;
