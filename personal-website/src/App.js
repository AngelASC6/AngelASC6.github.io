import './App.css';
import Header from './components/Header';
import Billboard from './components/Billboard';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App pt-14 bg-zinc-100">
      <Header />
      <Billboard />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
