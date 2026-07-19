import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { Quiz } from './components/Quiz';
import { Careers } from './components/Careers';
import './index.css';

function App() {
  useEffect(() => {
    document.title = "CIA Triad | Cybersecurity Portfolio";
  }, []);

  return (
    <main className="container" role="main">
      <Hero />
      <hr className="divider" />
      <Pillars />
      <hr className="divider" />
      <Careers />
      <hr className="divider" />
      <Quiz />
      
      <footer className="footer mt-8 text-center text-secondary">
        <p>Built as an interactive portfolio project.</p>
      </footer>
    </main>
  );
}

export default App;
