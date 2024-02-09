import heart from './images/heart_logo.jpeg';
import letter from './images/love-letter.png';
import './App.css';

export default function App() {
  
  return (
    <div className='page1'>
        <h1 className='text'>You Got Mail!</h1>
        <img className='letter' alt="" src={letter}/>
        <OpenButton className="button"/>
      
    </div>
  );
}
function OpenButton(){
  function handleClick(){
    alert("Hello! I am an alert box!");
  }
  return(
    <button className='button' onClick={handleClick}>Click Here To Open Your Letter</button>
  );
}
function NoButton(){
  function handleClick(){
    alert("Hello! I am an alert box!");
  }
  return(
    <button onClick={handleClick}>No</button>
  );
}