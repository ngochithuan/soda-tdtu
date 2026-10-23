import './App.css';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <aside className="App-sidebar">
        <Navbar/>
      </aside>
      <main className="App-content">
      </main>
    </div>
  );
}

export default App;
