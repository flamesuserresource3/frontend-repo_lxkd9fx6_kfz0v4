import React from 'react';
import Hero from './components/Hero';
import Departments from './components/Departments';
import NewsCarousel from './components/NewsCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#060b18] text-white">
      <Hero />
      <Departments />
      <NewsCarousel />
      <Footer />
    </div>
  );
}

export default App;
