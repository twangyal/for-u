import './page2.css';
import React from 'react';
import scroll from '../images/scroll.jpeg'
import Cat from '../images/cat.jpeg'
import nextPage from './page3'
import { Link } from 'react-router-dom';
function page2() {
  return (
    <div className='flex-container'>
      <img alt="" width='100%' z-index='900' src={scroll} />
      <text className='my-text'>Will You Be My Valentine?</text>
      <img alt="" className='cat' src={Cat}/>
      <div className='flex-container2'>
          <Link to='/page3' className='yes-button'>
            <button className='yes-button'>YES</button>
          </Link>
          <NoButton/>
      </div>
    </div>
  );
}
function NoButton(){
  function handleClick(){
    alert("ERROR:WRONG ANSWER :(");
  }
  return(
    <button className='no-button'onClick={handleClick}>NO</button>
  );
}

export default page2;