import React from 'react';
import './page3.css';
import img1 from '../images/IMG1.jpg'
import img2 from '../images/IMG2.jpg'
import img3 from '../images/IMG3.jpg'
import img4 from '../images/IMG4.jpg'
import img5 from '../images/IMG5.jpg'
import img6 from '../images/IMG6.jpg'

export default function page3() {
  return (
    <div>
      <h1 className='mytext'>YAYYYYY I LOVE YOUUUU!</h1>
      <div className='flexcontainer'>
        <img className='img' src={img1}/>
        <img className='img' src={img2}/>
        <img className='img' src={img3}/>
        <img className='img' src={img4}/>
        <img className='img' src={img5}/>
        <img className='img' src={img6}/>
      </div>
    </div>
  );
}


