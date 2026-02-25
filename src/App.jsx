import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import LightRays from './components/LightRays';
import { Terminal, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Rules from './pages/Rules';

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSponsors = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for home page to render, then scroll
      setTimeout(() => {
        document.getElementById('sponsors')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.getElementById('sponsors')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/rules', label: 'Rules' },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 top-0 left-0 px-5 md:px-10 pt-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="triada-logo">
            <span className="text-red-500">T</span>riada
          </span>
        </Link>

        {/* Center nav — desktop only */}
        <div className="hidden md:flex items-center gap-0.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2">
          {navLinks.map(({ to, label }) => (
            <Link key={label} to={to}
              className={`px-3.5 py-1 rounded-full text-xs tracking-[0.12em] uppercase font-sans font-medium transition-all duration-200 
                ${location.pathname === to ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white'}`}>
              {label}
            </Link>
          ))}
          <button onClick={handleSponsors}
            className="px-3.5 py-1 rounded-full text-xs tracking-[0.12em] uppercase font-sans font-medium text-white/50 hover:text-white transition-all duration-200 cursor-pointer">
            Sponsors
          </button>
        </div>

        <div className="flex items-center gap-3">
          {/* Hamburger — mobile only */}
          <button onClick={() => setMobileOpen(o => !o)}
            className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-white/70 hover:text-white transition-colors">
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-6 md:hidden">
          {navLinks.map(({ to, label }) => (
            <Link key={label} to={to} onClick={() => setMobileOpen(false)}
              className={`text-3xl transition-colors ${location.pathname === to ? 'text-white' : 'text-white/60 hover:text-white'}`}
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
              {label}
            </Link>
          ))}
          <button onClick={handleSponsors}
            className="text-3xl text-white/60 hover:text-white transition-colors"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
            Sponsors
          </button>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-8 px-5 md:px-10 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2.5">
          <Terminal className="text-red-600 w-4 h-4 opacity-60" />
          <span className="text-white/40 text-xs tracking-widest uppercase">TRIADA CTF '26</span>
        </div>
        <p className="text-white/30 text-xs tracking-wider">Hack. Break. Learn. Compete.</p>
        <div className="flex gap-5 text-xs text-white/30">
          <a href="https://ctf.triada.in" className="hover:text-white/60 transition-colors">Past Edition ('25)</a>
          <a href="#" className="hover:text-white/60 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen text-white overflow-hidden relative flex flex-col">
        <div className="fixed inset-0 z-[-1]">
          <LightRays
            raysOrigin="top-center"
            raysColor="#e01b24"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays opacity-70"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>

        <Navigation />

        <main className="flex-grow pt-20 md:pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
