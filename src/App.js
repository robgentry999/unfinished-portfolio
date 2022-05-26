import './App.css';
import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import RecentProjects from './components/RecentProjects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Home />
        <About />
        <RecentProjects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
