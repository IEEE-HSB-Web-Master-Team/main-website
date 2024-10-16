import { useEffect } from 'react'
import './App.css'
import WOW from 'wow.js';
import 'animate.css';

function App() {

  useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 100,
      mobile: true,
      live: true
    });
    wow.init();
  }, []);


  return (
    <>

    </>
  )
}

export default App
