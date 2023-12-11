import React from 'react';
import Dashboard from './components/Dashboard';
import './styles.css';

function App() {
  return (
    <div className="app">
      <header>
        <NavBar />
      </header>
      <main>
        <Dashboard />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
