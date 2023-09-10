import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
import VideoBackground from './components/VideoBackground';

// @TODO: style navbar, get on top of background video

function App() {
  return (
    <div className="main">
      <VideoBackground />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
