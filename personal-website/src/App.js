import './App.css';
import Header from './components/page_sections/Header';
import Billboard from './components/page_sections/Billboard';
import AboutMe from './components/page_sections/AboutMe';
import Skills from './components/Skills';
import Experience from './components/page_sections/Experience';
// import Contact from './components/Contact';
import Footer from './components/page_sections/Footer';
import { Analytics } from "@vercel/analytics/react"
import Projects from './components/page_sections/Projects';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App pt-14 bg-zinc-100 w-full max-w-full overflow-x-hidden">
        <Analytics/>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Billboard />
              <AboutMe />
              <Projects />
              <Skills />
              <Experience />
            </>
          } />
          {/* <Route path="/project/:slug" element={<ProjectPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
