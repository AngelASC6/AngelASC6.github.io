import './App.css';
import Header from './components/Header';
import Billboard from './components/Billboard';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App pt-14 bg-zinc-100 w-full max-w-full overflow-x-hidden">
      <Analytics/>
      <Header />
      <Billboard />
      <AboutMe />
      <Skills />
      <Experience />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
