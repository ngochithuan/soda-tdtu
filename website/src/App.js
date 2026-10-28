import { Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import About from './pages/About';
import Conduct from './pages/Conduct';
import Home from './pages/Home';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <aside className="App-sidebar">
        <Navbar/>
      </aside>
      <main className="App-content">
        <div className="App-container">
          <aside className="App-left"></aside>
          <section className="App-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/conduct" element={<Conduct />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </section>
          <aside className="App-right"></aside>
        </div>
      </main>
    </div>
  );
}

export default App;
