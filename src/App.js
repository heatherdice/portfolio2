import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
import VideoBackground from './components/VideoBackground';
import useResponsive from './hooks/useResponsive.js';

// @TODO: style navbar, get on top of background video

export default function App() {
    const { windowWidth, screenType } = useResponsive;
    const screenSize = () => {
      // numbers taken from tutorial video, may need to change; seems to be for specifically setting height & width of component, & therefore should be part of said component & not in App.js
      if (screenType === "DESKTOP") {
        return {
          width: 1200,
          height: 500
        };
      } else if (screenType === "TABLET") {
          return {
            width: windowWidth * 0.8,
            height: 400
          };
      } else if (screenType === "MOBILE") {
          return {
            width: windowWidth * 0.8,
            height: 300
          };
      } else {
          return {
            width: 0,
            height: 0
          }
      };
    };

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