import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
import VideoBackground from './components/VideoBackground';
import About from './pages/About.js';

export default function App() {

  return (
    <div>
      {/* <VideoBackground /> */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
};