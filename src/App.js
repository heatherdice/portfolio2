import './App.css';
import { Route, Routes } from 'react-router-dom';
import useResponsive from './hooks/useResponsive.js';
import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
// import VideoBackground from './components/VideoBackground';
import About from './pages/About.js';

export default function App() {
  // call useResponsive Hook
  const screenType = useResponsive();

    // navbar links & titles as objects, put in array to map over for cleaner return code
    const navLinksArray = [
      {
          link: '/about',
          title: 'About'
      },
      {
          link: '/projects',
          title: 'Projects'
      },
      {
          link: '/experience',
          title: 'Experience'
      },
      {
          link: '/contact',
          title: 'Contact'
      }
  ];

  return (
    <>
      {/* <VideoBackground /> */}
      <NavBar navLinksArray={navLinksArray} desktopScreen={screenType.desktopScreen} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
};