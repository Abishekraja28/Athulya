import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import HerEyes from './components/HerEyes';
import HerSmile from './components/HerSmile';
import HerVoice from './components/HerVoice';
import HerAsWhole from './components/HerAsWhole';
import GiftPage from './components/GiftPage';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-gray-950 overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-red-600 to-rose-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <HomePage />
      <HerEyes />
      <HerSmile />
      <HerVoice />
      <HerAsWhole />
      <GiftPage />

      <footer className="bg-gradient-to-r from-red-600 to-rose-500 py-12 text-center">
        <p className="text-white font-serif italic text-lg">
          Made with love, for my love.
        </p>
      </footer>
    </div>
  );
}

export default App;
