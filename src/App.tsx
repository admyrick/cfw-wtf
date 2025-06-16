import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Emulators from './pages/Emulators';
import EmulatorsByPlatform from './pages/EmulatorsByPlatform';
import Consoles from './pages/Consoles';
import ConsolesByManufacturer from './pages/ConsolesByManufacturer';
import ConsoleDetail from './pages/ConsoleDetail';
import CustomFirmware from './pages/CustomFirmware';
import GamingTools from './pages/GamingTools';
import Downloads from './pages/Downloads';
import News from './pages/News';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/emulators" element={<Emulators />} />
            <Route path="/emulators/:platform" element={<EmulatorsByPlatform />} />
            <Route path="/consoles" element={<Consoles />} />
            <Route path="/consoles/:manufacturer" element={<ConsolesByManufacturer />} />
            <Route path="/consoles/detail/:slug" element={<ConsoleDetail />} />
            <Route path="/firmware" element={<CustomFirmware />} />
            <Route path="/tools" element={<GamingTools />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/news" element={<News />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;