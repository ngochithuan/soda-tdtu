import { Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Conduct from './pages/Conduct';

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
              <Route path="/conduct" element={<Conduct />} />
            </Routes>
          </section>
          <aside className="App-right"></aside>
        </div>
      </main>
    </div>
  );
}

export default App;
