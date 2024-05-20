import { useState } from 'react';
import "./variables.css"
import {motion} from 'framer-motion';
import './App.css'
import Preloader from './components/Preloader/Preloader.jsx'
import Cursor from './components/Cursor/Cursor.jsx'
import Hero from './components/Hero/Hero.jsx';
// import Navbar from './components/Navbar/Navbar.jsx';

function App() {

  // preloader state
  const [isLoading, setIsLoading] = useState(true);

  // function to toggle preloader
  const startLoading = (loadingState) => {
    setIsLoading(loadingState);
  };

  return isLoading ? (

    // preloader
    <>
      <Preloader startLoading={startLoading} />
      <Cursor />
    </>
  ) : (

    // main app
    <motion.div
      // className='main'
      initial={{y: 900}}
      animate={{
        y: 0,
      transitionDuration: "1s",
  }}>
      <Hero />
      <Cursor />
      {/* <Navbar /> */}
    </motion.div>
  )
}

export default App
