import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
import VideoBackground from './components/VideoBackground';

export default function App() {

  return (
    <div className="main">
      <VideoBackground />
      <NavBar />
      {/* NavBar previously included width={screenSize().width} height={screenSize().height} - unsure if necessary? */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
};