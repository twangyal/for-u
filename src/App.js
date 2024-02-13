import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Page2 from './components/page2.js'
import Page3 from './components/page3.js'

import heart from './images/heart_logo.jpeg';
import letter from './images/love-letter.png';


export default function App() {
  const [linkClicked, setLinkClicked] = useState(false);

  const handleLinkClick = () => {
    setLinkClicked(true);
  };
    return (
      <Router>
        {!linkClicked && (
          <div className='page1'>
              <h1 className='text'>You Got Mail!</h1>
              <img className='letter' alt="" src={letter}/>
              <Link to='/page2' className='button'>
                <button  className='button' onClick={handleLinkClick}>Click Here To Open Your Letter</button>
              </Link>      
          </div>
        )}
        <Routes>
          <Route path="/page2" Component={Page2}/>
          <Route path="/page3" Component={Page3}/>
        </Routes>
      </Router>
    );
  }