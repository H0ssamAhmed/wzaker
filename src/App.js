import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favorite from './pages/favorite/Favorite';
import NavBar from './components/NavBar';
import Quran from './pages/quran/quran';
import EveningAzkar from './pages/EveningAzkar/EveningAzkar';
import MorningAzkar from './pages/morningAzkar/MorningAzkar';
import Tsabeh from './pages/Tsabeh/Tsabeh';
import { Analytics } from "@vercel/analytics/react"
import Player from './components/Player';
import { PlayerContext } from './context/playerContext';
import { useState } from 'react';

function App() {
  const [surahSrc, setSrc] = useState('https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3')
  return (
    <div className=' bg-background text-white min-h-screen'>
      <div className='container'>
        <PlayerContext.Provider value={{ surahSrc, setSrc }}>

          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/quran" element={<Quran />} />
              <Route path="/eveningAzkar" element={<EveningAzkar />} />
              <Route path="/morningAzkar" element={<MorningAzkar />} />
              <Route path="/tsabeh" element={<Tsabeh />} />
            </Routes>
          </Router>
          <Player />
        </PlayerContext.Provider>
        <Analytics />
      </div>
    </div>
  );
}

export default App;
