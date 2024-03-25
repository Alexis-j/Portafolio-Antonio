import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Exp.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
