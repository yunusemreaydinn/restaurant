import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Loader.css'

const helloMessages = [
  "Hello",          // English
  "Hola",           // Spanish
  "Bonjour",        // French
  "Ciao",           // Italian
  "Hallo",          // German
  "Konnichiwa",     // Japanese
  "Namaste",        // Hindi
  "Merhaba",        // Turkish
  "Olá",            // Portuguese
  "Salam"           // Arabic
];


function AnimateIt() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % helloMessages.length);
    }, 300);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    // <div className='loader'>
    //   <CSSTransition
    //     in={true}
    //     appear={true}
    //     timeout={1000}
    //     classNames="fade"
    //     key={currentIndex}
    //   >
    //     <div>{helloMessages[currentIndex]}</div>
    //   </CSSTransition>
    // </div>
    <div className='loader-wrapper'>
          <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    );
}

export default AnimateIt;