import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
import VideoBackground from './components/VideoBackground';

export default function App() {

  return (
    <div>
      <VideoBackground />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
};